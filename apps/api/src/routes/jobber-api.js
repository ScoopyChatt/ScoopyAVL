import express from 'express';
import rateLimit from 'express-rate-limit';
import logger from '../utils/logger.js';
import { jobberGraphQL, timingSafeEqual } from '../utils/jobberClient.js';

const router = express.Router();

// This route is excluded from the global limiter (see global-rate-limit.js)
// because bulk work — rescheduling a full week of visits is ~75 calls — would
// blow through it. Still capped, just high enough for real batches.
const proxyRateLimit = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 600,
	standardHeaders: true,
	legacyHeaders: false,
	message: { error: 'Too many requests' },
	validate: { trustProxy: false },
});

/**
 * Every request must carry the shared secret. Callers never see the Jobber
 * access token — it stays on the server.
 */
function requireInternalSecret(req, res, next) {
	const expected = process.env.JOBBER_INTERNAL_SECRET;
	if (!expected) {
		logger.error('JOBBER_INTERNAL_SECRET is not configured; refusing all proxy requests');
		return res.status(500).json({ error: 'Server is not configured for Jobber API access' });
	}
	const provided = req.get('X-Internal-Secret') || '';
	if (!timingSafeEqual(provided, expected)) {
		logger.warn('Rejected a Jobber proxy request with a bad internal secret', { ip: req.ip });
		return res.status(403).json({ error: 'Forbidden' });
	}
	return next();
}

/**
 * POST /jobber-api/graphql
 * Body: { query: string, variables?: object }
 * Header: X-Internal-Secret: <JOBBER_INTERNAL_SECRET>
 */
router.post('/graphql', proxyRateLimit, requireInternalSecret, async (req, res) => {
	const { query, variables } = req.body || {};

	if (typeof query !== 'string' || !query.trim()) {
		return res.status(400).json({ error: 'A "query" string is required' });
	}
	if (variables !== undefined && (typeof variables !== 'object' || variables === null || Array.isArray(variables))) {
		return res.status(400).json({ error: '"variables" must be an object' });
	}

	try {
		const result = await jobberGraphQL(query, variables);
		if (Array.isArray(result?.errors) && result.errors.length) {
			logger.warn('Jobber GraphQL returned errors', {
				messages: result.errors.map(e => e.message),
			});
		}
		return res.json(result);
	} catch (err) {
		logger.error('Jobber GraphQL proxy request failed', {
			error: err.message,
			status: err.status,
		});
		return res.status(err.status && err.status >= 400 && err.status < 600 ? err.status : 502).json({
			error: err.message,
			details: err.body,
		});
	}
});

export default router;
