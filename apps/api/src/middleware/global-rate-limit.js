import rateLimit from 'express-rate-limit';
export const globalRateLimit = rateLimit({ windowMs: 5 * 60 * 1000, max: 100, standardHeaders: true, legacyHeaders: false, message: { error: 'Too many requests' }, validate: { trustProxy: false },
	// The Jobber proxy is secret-protected and runs bulk batches (e.g. rescheduling
	// a whole week of visits), so it uses its own higher limit instead.
	skip: (req) => req.path.startsWith('/jobber-api'),
});