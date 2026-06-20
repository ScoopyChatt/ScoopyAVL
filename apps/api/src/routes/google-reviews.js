import express from 'express';
import { getCachedReviews } from '../services/google-reviews-service.js';
const router = express.Router();
router.get('/', async (req, res) => {
  const reviewData = await getCachedReviews();
  res.json(reviewData);
});
export default router;