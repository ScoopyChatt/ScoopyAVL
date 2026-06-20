import express from 'express';
import logger from '../utils/logger.js';
import { sendEmail } from '../utils/resend.js';
const router = express.Router();
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'info@scoopychatt.com';

router.post('/', async (req, res) => {
  const { messages, customerInfo, conversationStartTime } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'messages array required' });
  if (!customerInfo || !customerInfo.name || !customerInfo.email) return res.status(400).json({ error: 'customerInfo.name and email required' });
  const { name, email } = customerInfo;
  const transcript = messages.map((m, i) => '<p><strong>' + (m.role === 'user' ? name : 'Scoopy AI') + ':</strong> ' + (m.content || '') + '</p>').join('');
  await sendEmail(BUSINESS_EMAIL, 'New Chatbot Inquiry - ' + name,
    '<p>Customer: ' + name + ' (' + email + ')</p><hr/>' + transcript);
  logger.info('Chatbot transcript sent', { name, email });
  res.status(200).json({ success: true });
});
export default router;