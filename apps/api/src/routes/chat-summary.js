import express from 'express';
import logger from '../utils/logger.js';
import { sendEmail } from '../utils/resend.js';
import pb from '../utils/pocketbaseClient.js';
const router = express.Router();
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'info@scoopychatt.com';

router.post('/send-summary', async (req, res) => {
  const { userId, conversationMessages, userEmail, userName, businessOwnerEmail } = req.body;
  if (!conversationMessages || !userEmail) return res.status(400).json({ error: 'conversationMessages and userEmail required' });
  const to = businessOwnerEmail || BUSINESS_EMAIL;
  const html = '<p><strong>Customer:</strong> ' + (userName || 'Unknown') + ' (' + userEmail + ')</p><p><strong>Messages:</strong> ' + conversationMessages.length + '</p>';
  await sendEmail(to, 'Chat Summary - ' + (userName || userEmail), html);
  res.status(200).json({ success: true });
});

router.post('/', async (req, res) => {
  const { userEmail, userName, messages, conversationStartTime } = req.body;
  if (!userEmail || !messages || !Array.isArray(messages)) return res.status(400).json({ error: 'userEmail and messages required' });
  const transcript = messages.map(m => '<p><strong>' + (m.role === 'user' ? (userName || 'Customer') : 'AI') + ':</strong> ' + (m.content || '') + '</p>').join('');
  await sendEmail(BUSINESS_EMAIL, 'Chat Summary - ' + (userName || userEmail), '<p>From: ' + userEmail + '</p><hr/>' + transcript);
  res.status(200).json({ success: true });
});
export default router;