import crypto from 'node:crypto';
import logger from './logger.js';
import pb from './pocketbaseClient.js';

const JOBBER_AUTHORIZE_URL = 'https://api.getjobber.com/api/oauth/authorize';
const JOBBER_TOKEN_URL = 'https://api.getjobber.com/api/oauth/token';
const JOBBER_GRAPHQL_URL = 'https://api.getjobber.com/api/graphql';
const COLLECTION = 'jobber_connections';

// Refresh this many ms before the token actually expires, so an in-flight
// request never races the expiry.
const REFRESH_SKEW_MS = 5 * 60 * 1000;

// How long an OAuth `state` value stays valid.
const STATE_TTL_MS = 10 * 60 * 1000;

function requireEnv(name) {
	const value = process.env[name];
	if (!value) throw new Error(`${name} is not configured`);
	return value;
}

/* ------------------------------------------------------------------ *
 * OAuth state (stateless, HMAC-signed)
 *
 * The previous design kept pending state values in an in-memory Map,
 * which breaks whenever Railway restarts or runs more than one instance.
 * Signing the state instead means the callback can verify it with no
 * server-side storage at all.
 * ------------------------------------------------------------------ */

function stateSecret() {
	return requireEnv('JOBBER_CLIENT_SECRET');
}

function sign(payload) {
	return crypto.createHmac('sha256', stateSecret()).update(payload).digest('base64url');
}

export function createState() {
	const nonce = crypto.randomBytes(16).toString('base64url');
	const expiresAt = Date.now() + STATE_TTL_MS;
	const payload = `${nonce}.${expiresAt}`;
	return `${payload}.${sign(payload)}`;
}

export function verifyState(state) {
	if (typeof state !== 'string') return false;
	const parts = state.split('.');
	if (parts.length !== 3) return false;
	const [nonce, expiresAt, signature] = parts;
	const expected = sign(`${nonce}.${expiresAt}`);
	if (!timingSafeEqual(signature, expected)) return false;
	const expiry = Number(expiresAt);
	if (!Number.isFinite(expiry) || Date.now() > expiry) return false;
	return true;
}

export function timingSafeEqual(a, b) {
	if (typeof a !== 'string' || typeof b !== 'string') return false;
	const bufA = Buffer.from(a);
	const bufB = Buffer.from(b);
	if (bufA.length !== bufB.length) return false;
	return crypto.timingSafeEqual(bufA, bufB);
}

export function buildAuthorizeUrl(state) {
	const params = new URLSearchParams({
		response_type: 'code',
		client_id: requireEnv('JOBBER_CLIENT_ID'),
		redirect_uri: requireEnv('JOBBER_REDIRECT_URI'),
		state,
	});
	return `${JOBBER_AUTHORIZE_URL}?${params.toString()}`;
}

/* ------------------------------------------------------------------ *
 * Token exchange + storage
 * ------------------------------------------------------------------ */

async function postToken(body) {
	const response = await fetch(JOBBER_TOKEN_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(body).toString(),
	});

	const text = await response.text();
	if (!response.ok) {
		logger.error('Jobber token endpoint returned an error', {
			status: response.status,
			grantType: body.grant_type,
		});
		throw new Error(`Jobber token request failed (${response.status})`);
	}

	let data;
	try {
		data = JSON.parse(text);
	} catch {
		throw new Error('Jobber token response was not valid JSON');
	}

	if (!data.access_token || !data.refresh_token) {
		throw new Error('Jobber token response was missing access_token or refresh_token');
	}
	return data;
}

export async function exchangeCodeForTokens(code) {
	return postToken({
		grant_type: 'authorization_code',
		code,
		client_id: requireEnv('JOBBER_CLIENT_ID'),
		client_secret: requireEnv('JOBBER_CLIENT_SECRET'),
		redirect_uri: requireEnv('JOBBER_REDIRECT_URI'),
	});
}

// PocketBase stores dates as "YYYY-MM-DD HH:MM:SS.sssZ".
function expiryFrom(tokenData) {
	const seconds = Number(tokenData.expires_in) || 3600;
	return new Date(Date.now() + seconds * 1000).toISOString().replace('T', ' ');
}

async function findConnection() {
	try {
		return await pb.collection(COLLECTION).getFirstListItem('isActive = true', { sort: '-updated' });
	} catch (err) {
		if (err?.status === 404) return null;
		throw err;
	}
}

async function findConnectionByAccount(accountId) {
	try {
		const filter = pb.filter('accountId = {:accountId}', { accountId });
		return await pb.collection(COLLECTION).getFirstListItem(filter);
	} catch (err) {
		if (err?.status === 404) return null;
		throw err;
	}
}

/**
 * Ask Jobber which account a freshly minted access token belongs to.
 */
async function fetchAccount(accessToken) {
	const result = await rawGraphQL(accessToken, '{ account { id name } }');
	const account = result?.data?.account;
	if (!account?.id) {
		throw new Error('Could not read the Jobber account for this token');
	}
	return account;
}

/**
 * Full authorization-code flow: swap the code for tokens, work out which
 * Jobber account just connected, and persist the connection.
 */
export async function completeAuthorization(code) {
	const tokenData = await exchangeCodeForTokens(code);
	const account = await fetchAccount(tokenData.access_token);

	const record = {
		accountId: account.id,
		accountName: account.name || '',
		accessToken: tokenData.access_token,
		refreshToken: tokenData.refresh_token,
		accessTokenExpiresAt: expiryFrom(tokenData),
		isActive: true,
	};

	const existing = await findConnectionByAccount(account.id);
	const saved = existing
		? await pb.collection(COLLECTION).update(existing.id, record)
		: await pb.collection(COLLECTION).create(record);

	logger.info('Jobber connection saved', {
		accountId: account.id,
		accountName: account.name,
		recordId: saved.id,
	});

	return { accountId: account.id, accountName: account.name };
}

/* ------------------------------------------------------------------ *
 * Access token lifecycle
 * ------------------------------------------------------------------ */

// Refresh Token Rotation is ON for this app: every refresh invalidates the
// old refresh token. Two concurrent refreshes would therefore race and one
// would permanently break the connection. Single-flight prevents that.
let refreshInFlight = null;

async function refreshConnection(connection) {
	if (refreshInFlight) return refreshInFlight;

	refreshInFlight = (async () => {
		logger.info('Refreshing Jobber access token', { accountId: connection.accountId });
		const tokenData = await postToken({
			grant_type: 'refresh_token',
			refresh_token: connection.refreshToken,
			client_id: requireEnv('JOBBER_CLIENT_ID'),
			client_secret: requireEnv('JOBBER_CLIENT_SECRET'),
		});

		const updated = await pb.collection(COLLECTION).update(connection.id, {
			accessToken: tokenData.access_token,
			// Rotation is on, so the new refresh token MUST overwrite the old one.
			refreshToken: tokenData.refresh_token,
			accessTokenExpiresAt: expiryFrom(tokenData),
			isActive: true,
		});

		return updated.accessToken;
	})().finally(() => {
		refreshInFlight = null;
	});

	return refreshInFlight;
}

function isExpired(connection) {
	if (!connection.accessTokenExpiresAt) return true;
	const expiresAt = new Date(connection.accessTokenExpiresAt).getTime();
	if (!Number.isFinite(expiresAt)) return true;
	return Date.now() >= expiresAt - REFRESH_SKEW_MS;
}

/**
 * Return an access token that is valid right now, refreshing first if needed.
 */
export async function getValidAccessToken({ force = false } = {}) {
	const connection = await findConnection();
	if (!connection) {
		throw new Error('No Jobber account is connected yet — run the OAuth flow first');
	}
	if (force || isExpired(connection)) {
		return refreshConnection(connection);
	}
	return connection.accessToken;
}

/* ------------------------------------------------------------------ *
 * GraphQL
 * ------------------------------------------------------------------ */

async function rawGraphQL(accessToken, query, variables) {
	const response = await fetch(JOBBER_GRAPHQL_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
			'X-JOBBER-GRAPHQL-VERSION': process.env.JOBBER_API_VERSION || '2025-04-16',
		},
		body: JSON.stringify(variables ? { query, variables } : { query }),
	});

	const text = await response.text();
	let body;
	try {
		body = JSON.parse(text);
	} catch {
		const error = new Error(`Jobber GraphQL returned non-JSON (${response.status})`);
		error.status = response.status;
		throw error;
	}

	if (!response.ok) {
		const error = new Error(`Jobber GraphQL request failed (${response.status})`);
		error.status = response.status;
		error.body = body;
		throw error;
	}

	return body;
}

/**
 * Run a GraphQL query/mutation against Jobber using the stored connection.
 * Retries once with a forced refresh if Jobber rejects the token.
 */
export async function jobberGraphQL(query, variables) {
	if (typeof query !== 'string' || !query.trim()) {
		throw new Error('A GraphQL query string is required');
	}

	const token = await getValidAccessToken();
	try {
		return await rawGraphQL(token, query, variables);
	} catch (err) {
		if (err.status !== 401) throw err;
		logger.warn('Jobber rejected the access token, forcing a refresh and retrying once');
		const freshToken = await getValidAccessToken({ force: true });
		return rawGraphQL(freshToken, query, variables);
	}
}

/**
 * Summary of the stored connection, with no secrets in it.
 */
export async function getConnectionStatus() {
	const connection = await findConnection();
	if (!connection) return { connected: false };
	return {
		connected: true,
		accountId: connection.accountId,
		accountName: connection.accountName,
		accessTokenExpiresAt: connection.accessTokenExpiresAt,
		connectedSince: connection.created,
	};
}
