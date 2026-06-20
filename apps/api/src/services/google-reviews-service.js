import logger from '../utils/logger.js';
import pb from '../utils/pocketbaseClient.js';
import axios from 'axios';

const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour
let lastFetchTime = null;
let cachedReviewData = null;

/**
 * Get Google reviews with caching
 */
export async function getCachedReviews() {
  const now = Date.now();
  if (cachedReviewData && lastFetchTime && (now - lastFetchTime) < CACHE_DURATION_MS) {
    return cachedReviewData;
  }
  try {
    const data = await fetchReviewsFromGoogle();
    cachedReviewData = data;
    lastFetchTime = now;
    return data;
  } catch (err) {
    logger.error('Failed to fetch Google reviews', { error: err.message });
    return cachedReviewData || { overallRating: 5, totalReviews: 0, reviews: [] };
  }
}

async function fetchReviewsFromGoogle() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJLeQhfMa6RYgRZ2ShRwjmRwQ';
  if (!apiKey) throw new Error('GOOGLE_PLACES_API_KEY not configured');
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`;
  const response = await axios.get(url);
  const result = response.data.result;
  return {
    overallRating: result.rating || 5,
    totalReviews: result.user_ratings_total || 0,
    reviews: (result.reviews || []).map(review => ({
      author: review.author_name,
      rating: review.rating,
      text: review.text,
      time: review.time,
      relativeTime: review.relative_time_description,
      photoUrl: review.profile_photo_url,
    })),
  };
}