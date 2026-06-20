import express from 'express';
import logger from '../utils/logger.js';
const router = express.Router();
router.get('/', async (req, res) => {
  res.json({ message: 'Google Places API test endpoint' });
});
export default router;