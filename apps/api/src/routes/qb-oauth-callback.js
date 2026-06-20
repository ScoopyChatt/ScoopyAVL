import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { code, realmId } = req.body;
  if (!code) return res.status(400).json({ error: 'code is required' });
  if (!realmId) return res.status(400).json({ error: 'realmId is required' });
  const tokenResponse = await fetch('https://oauth.platform.intuit.com/oauth2/tokens/bearer', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'authorization_code', code, client_id: 'ABGujf9kDh001hHxuyp9nWPPKv7IVr6geqaEBVlJDho5FYGCp0', client_secret: 'cx3ZfZ0FMCyHtfhfcefs15nnOTH5wJyB0xm0swkO' }).toString() });
  if (!tokenResponse.ok) throw new Error('QB token error: ' + tokenResponse.status);
  const tokenData = await tokenResponse.json();
  res.json(tokenData);
});

export default router;