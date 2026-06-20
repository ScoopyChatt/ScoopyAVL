import express from 'express';
import logger from '../utils/logger.js';
import { sendEmail } from '../utils/resend.js';
const router = express.Router();
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'info@scoopychatt.com';

router.post('/', async (req, res) => {
  const { name, email, phone, address } = req.body;
  if (!name || !email || !phone || !address) return res.status(400).json({ error: 'name, email, phone, address are required' });
  await sendEmail(BUSINESS_EMAIL, 'New Lead: ' + name,
    '<p><strong>Name:</strong> ' + name + '</p><p><strong>Email:</strong> ' + email + '</p><p><strong>Phone:</strong> ' + phone + '</p><p><strong>Address:</strong> ' + address + '</p>');
  logger.info('Lead email sent', { name, email });
  res.status(200).json({ success: true });
});
export default router;