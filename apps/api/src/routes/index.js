import { Router } from 'express';
import logger from '../utils/logger.js';
import healthCheck from './health-check.js';
import quoteWebhookRouter from './quote-webhook.js';
import integratedAiRouter from './integrated-ai.js';
import qbOAuthRouter from './qb-oauth-callback.js';
import googleReviewsRouter from './google-reviews.js';
import chatbotTranscriptRouter from './chatbot-transcript.js';
import leadEmailRouter from './lead-email.js';
import chatSummaryRouter from './chat-summary.js';

const router = Router();

export default () => {
    logger.info('=== ROUTE REGISTRATION START ===', {
        timestamp: new Date().toISOString(),
    });

    router.get('/health', healthCheck);
    router.use('/quote-webhook', quoteWebhookRouter);
    router.use('/integrated-ai', integratedAiRouter);
    router.use('/qb-oauth-callback', qbOAuthRouter);
    router.use('/google-reviews', googleReviewsRouter);
    router.use('/chatbot-transcript', chatbotTranscriptRouter);
    router.use('/lead-email', leadEmailRouter);
    router.use('/chat-summary', chatSummaryRouter);
    return router;
};