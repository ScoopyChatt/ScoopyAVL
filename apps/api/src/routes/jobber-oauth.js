import express from 'express';
import logger from '../utils/logger.js';
import {
	buildAuthorizeUrl,
	completeAuthorization,
	createState,
	verifyState,
	timingSafeEqual,
	getConnectionStatus,
} from '../utils/jobberClient.js';

const router = express.Router();

function escapeHtml(value) {
	return String(value ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function page(title, heading, body) {
	return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>${escapeHtml(title)}</title>
<style>
body{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:#f6f7f9;margin:0;
display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px}
.card{background:#fff;border-radius:14px;padding:40px;max-width:460px;width:100%;
box-shadow:0 2px 16px rgba(0,0,0,.08);text-align:center}
h1{margin:0 0 12px;font-size:22px;color:#1a1a1a}
p{margin:0 0 8px;color:#555;line-height:1.5;font-size:15px}
</style></head>
<body><div class="card"><h1>${escapeHtml(heading)}</h1>${body}</div></body></html>`;
}

/**
 * Only Brandon should be able to kick off an authorization. Without this
 * gate, any logged-in Jobber user who found the URL could connect their
 * own account and overwrite the stored tokens.
 */
function requireSetupKey(req, res) {
	const expected = process.env.JOBBER_INTERNAL_SECRET;
	if (!expected) {
		res.status(500).send(page('Not configured', 'Not configured',
			'<p>JOBBER_INTERNAL_SECRET is not set on this service.</p>'));
		return false;
	}
	const provided = typeof req.query.key === 'string' ? req.query.key : '';
	if (!timingSafeEqual(provided, expected)) {
		res.status(403).send(page('Forbidden', 'Forbidden',
			'<p>A valid setup key is required to start this flow.</p>'));
		return false;
	}
	return true;
}

/**
 * GET /jobber-oauth/start?key=<JOBBER_INTERNAL_SECRET>
 * Redirects to Jobber's consent screen.
 */
router.get('/start', (req, res) => {
	if (!requireSetupKey(req, res)) return;

	const state = createState();
	const url = buildAuthorizeUrl(state);
	logger.info('Starting Jobber OAuth authorization');
	res.redirect(url);
});

/**
 * GET /jobber-oauth/callback
 * Jobber redirects here with ?code & ?state after the user allows access.
 */
router.get('/callback', async (req, res) => {
	const { code, state, error, error_description: errorDescription } = req.query;

	if (error) {
		logger.warn('Jobber returned an OAuth error', { error });
		return res.status(400).send(page('Authorization failed', 'Authorization failed',
			`<p>${escapeHtml(errorDescription || error)}</p>`));
	}

	if (!verifyState(state)) {
		logger.warn('Jobber OAuth callback had a missing, invalid, or expired state');
		return res.status(400).send(page('Authorization failed', 'Authorization failed',
			'<p>The authorization link was invalid or expired. Please start the flow again.</p>'));
	}

	if (typeof code !== 'string' || !code) {
		return res.status(400).send(page('Authorization failed', 'Authorization failed',
			'<p>Jobber did not return an authorization code.</p>'));
	}

	try {
		const { accountName } = await completeAuthorization(code);
		return res.send(page('Connected to Jobber', 'Connected to Jobber ✅',
			`<p>Scoopy Doo AVL Mission Control is now connected to <strong>${escapeHtml(accountName || 'your Jobber account')}</strong>.</p>
			 <p>You can close this tab.</p>`));
	} catch (err) {
		logger.error('Jobber OAuth callback failed', { error: err.message });
		return res.status(500).send(page('Authorization failed', 'Authorization failed',
			'<p>Something went wrong while saving the connection. Check the server logs for details.</p>'));
	}
});

/**
 * GET /jobber-oauth/status?key=<JOBBER_INTERNAL_SECRET>
 * Reports whether a connection is stored. Never returns tokens.
 */
router.get('/status', async (req, res) => {
	const expected = process.env.JOBBER_INTERNAL_SECRET;
	const provided = typeof req.query.key === 'string' ? req.query.key : '';
	if (!expected || !timingSafeEqual(provided, expected)) {
		return res.status(403).json({ error: 'Forbidden' });
	}
	try {
		return res.json(await getConnectionStatus());
	} catch (err) {
		logger.error('Failed to read Jobber connection status', { error: err.message });
		return res.status(500).json({ error: 'Could not read connection status' });
	}
});

export default router;
