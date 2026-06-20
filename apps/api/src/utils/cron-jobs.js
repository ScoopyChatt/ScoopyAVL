import cron from 'node-cron';
import logger from './logger.js';

export function initializeCronJobs() {
  const jobs = [];
  logger.info('Cron jobs initialized');
  return jobs;
}

export function stopCronJobs(jobs) {
  jobs.forEach(job => job.stop());
  logger.info('Cron jobs stopped');
}