import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './routes/index.js';
import { errorMiddleware } from './middleware/error.js';
import { globalRateLimit } from './middleware/global-rate-limit.js';
import logger from './utils/logger.js';
import { BodyLimit } from './constants/common.js';
import { initializeCronJobs, stopCronJobs } from './utils/cron-jobs.js';

const app = express();

app.set('trust proxy', true);

let cronJobs = null;

process.on('uncaughtException', (error) => {
	logger.error('Uncaught exception:', error);
});
  
process.on('unhandledRejection', (reason, promise) => {
	logger.error('Unhandled rejection at:', promise, 'reason:', reason);
});

process.on('SIGINT', async () => {
	logger.info('Interrupted');
	if (cronJobs) {
		stopCronJobs(cronJobs);
	}
	process.exit(0);
});

process.on('SIGTERM', async () => {
	logger.info('SIGTERM signal received');

	if (cronJobs) {
		stopCronJobs(cronJobs);
	}

	await new Promise(resolve => setTimeout(resolve, 3000));

	logger.info('Exiting');
	process.exit();
});

logger.info('=== SERVER INITIALIZATION START ===', {
	timestamp: new Date().toISOString(),
	nodeEnv: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3001,
});

logger.info('Loading middleware...');

app.use(helmet());
logger.info('✓ Helmet middleware loaded');

app.use(cors({
	origin: process.env.CORS_ORIGIN,
	credentials: true,
}));
logger.info('✓ CORS middleware loaded', { origin: process.env.CORS_ORIGIN });

app.use(morgan('combined'));
logger.info('✓ Morgan logging middleware loaded');

app.use(globalRateLimit);
logger.info('✓ Global rate limit middleware loaded');

app.use(express.json({
	limit: BodyLimit,
}));
logger.info('✓ JSON body parser loaded', { limit: `${BodyLimit / 1024 / 1024}MB` });

app.use(express.urlencoded({ 
	extended: true,
	limit: BodyLimit,
}));
logger.info('✓ URL-encoded body parser loaded');

logger.info('Registering routes...');
app.use('/', routes());
logger.info('✓ Routes registered successfully');

logger.info('Loading error middleware...');
app.use(errorMiddleware);
logger.info('✓ Error middleware loaded');

app.use((req, res) => {
	res.status(404).json({ error: 'Route not found' });
});
logger.info('✓ 404 handler registered');

const port = process.env.PORT || 3001;

logger.info('=== ENVIRONMENT VARIABLES CHECK ===', {
	PORT: port,
	CORS_ORIGIN: process.env.CORS_ORIGIN,
	GOOGLE_PLACES_API_KEY_LOADED: !!process.env.GOOGLE_PLACES_API_KEY,
	GOOGLE_BUSINESS_PROFILE_ID_LOADED: !!process.env.GOOGLE_BUSINESS_PROFILE_ID,
	GOOGLE_API_KEY_LOADED: !!process.env.GOOGLE_API_KEY,
	timestamp: new Date().toISOString(),
});

if (process.env.GOOGLE_PLACES_API_KEY) {
	const maskedKey = process.env.GOOGLE_PLACES_API_KEY.substring(0, 20) + '...' + process.env.GOOGLE_PLACES_API_KEY.substring(process.env.GOOGLE_PLACES_API_KEY.length - 10);
	logger.info('GOOGLE_PLACES_API_KEY_MASKED:', {
		masked: maskedKey,
		totalLength: process.env.GOOGLE_PLACES_API_KEY.length,
	});
} else {
	logger.warn('⚠ GOOGLE_PLACES_API_KEY is NOT loaded from .env');
}

if (process.env.GOOGLE_API_KEY) {
	const maskedKey = process.env.GOOGLE_API_KEY.substring(0, 20) + '...' + process.env.GOOGLE_API_KEY.substring(process.env.GOOGLE_API_KEY.length - 10);
	logger.info('GOOGLE_API_KEY_MASKED:', {
		masked: maskedKey,
		totalLength: process.env.GOOGLE_API_KEY.length,
	});
} else {
	logger.warn('⚠ GOOGLE_API_KEY is NOT loaded from .env');
}

if (process.env.GOOGLE_BUSINESS_PROFILE_ID) {
	logger.info('GOOGLE_BUSINESS_PROFILE_ID_LOADED:', {
		id: process.env.GOOGLE_BUSINESS_PROFILE_ID,
	});
} else {
	logger.warn('⚠ GOOGLE_BUSINESS_PROFILE_ID is NOT loaded from .env');
}

logger.info('=== STARTING SERVER ===', {
	port,
	timestamp: new Date().toISOString(),
});

app.listen(port, () => {
	logger.info('=== SERVER STARTUP COMPLETE ===');
	logger.info('✓ Server listening on PORT ' + port, {
		port,
		timestamp: new Date().toISOString(),
		url: `http://localhost:${port}`,
	});
	logger.info('✓ All middleware loaded successfully');
	logger.info('✓ Routes registered and ready');
	logger.info('✓ Error handling middleware active');
	logger.info('✓ Signal handlers configured for graceful shutdown');
	console.log(`\n✓ Server running on port ${port}\n`);
	
	// Initialize cron jobs after server starts
	try {
		cronJobs = initializeCronJobs();
		logger.info('✓ Cron jobs initialized successfully');
	} catch (cronError) {
		logger.error('✗ Failed to initialize cron jobs', {
			error: cronError.message,
			stack: cronError.stack,
		});
	}
});

export default app;