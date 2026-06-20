import express from 'express';
import logger from '../utils/logger.js';
import pb from '../utils/pocketbaseClient.js';
import { sendEmail } from '../utils/resend.js';

const router = express.Router();
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'info@scoopychatt.com';
const REQUIRED_FIELDS = ['name', 'email', 'phone', 'serviceZipCode', 'serviceType', 'numberOfDogs'];

router.post('/', async (req, res) => {
  const { name, email, phone, serviceZipCode, serviceType, numberOfDogs, additionalNotes } = req.body;

  const missingFields = REQUIRED_FIELDS.filter(field => !req.body[field]);
  if (missingFields.length > 0) {
    return res.status(400).json({ error: 'Missing required fields', missingFields });
  }

  // Send email notification via Resend
  try {
    await sendEmail(
      BUSINESS_EMAIL,
      `New Quote Request from ${name}`,
      `<h2>New Quote Request</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
       <p><strong>Phone:</strong> ${phone}</p>
       <p><strong>Zip Code:</strong> ${serviceZipCode}</p>
       <p><strong>Service Type:</strong> ${serviceType}</p>
       <p><strong>Number of Dogs:</strong> ${numberOfDogs}</p>
       <p><strong>Notes:</strong> ${additionalNotes || 'None'}</p>`
    );
    logger.info('Quote request email sent', { email, serviceType });
  } catch (emailErr) {
    logger.error('Failed to send quote email (continuing)', { error: emailErr.message });
  }

  // Save to PocketBase
  try {
    const record = await pb.collection('quote_requests').create({
      name, email, phone, serviceZipCode, serviceType,
      numberOfDogs: parseInt(numberOfDogs, 10),
      additionalNotes: additionalNotes || '',
    });
    logger.info('Quote request saved', { recordId: record.id, email });
    return res.status(201).json({ success: true, message: 'Quote request received', record });
  } catch (pbErr) {
    logger.error('PocketBase save failed (still success)', { error: pbErr.message });
    return res.status(201).json({ success: true, message: 'Quote request received' });
  }
});

export default router;
