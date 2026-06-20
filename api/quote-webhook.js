// Vercel serverless function: emails quote/contact form submissions to the business inbox via Resend.
// Required env var: RESEND_API_KEY
// Optional env vars: BUSINESS_EMAIL (default info@scoopyavl.com), RESEND_FROM (default noreply@scoopychatt.com)
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'info@scoopyavl.com';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM || 'Scoopy Doo Asheville <noreply@scoopychatt.com>';

function esc(v) {
  return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const { name, email, phone, serviceZipCode, serviceType, numberOfDogs, additionalNotes } = body;

  const required = ['name', 'email', 'phone', 'serviceZipCode', 'serviceType', 'numberOfDogs'];
  const missing = required.filter((f) => body[f] === undefined || body[f] === null || body[f] === '');
  if (missing.length > 0) {
    return res.status(400).json({ error: 'Missing required fields', missingFields: missing });
  }

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Email is not configured' });
  }

  const html = [
    '<h2>New Quote Request &mdash; Scoopy Doo Asheville</h2>',
    '<p><strong>Name:</strong> ' + esc(name) + '</p>',
    '<p><strong>Email:</strong> <a href="mailto:' + esc(email) + '">' + esc(email) + '</a></p>',
    '<p><strong>Phone:</strong> ' + esc(phone) + '</p>',
    '<p><strong>Zip Code:</strong> ' + esc(serviceZipCode) + '</p>',
    '<p><strong>Service Type:</strong> ' + esc(serviceType) + '</p>',
    '<p><strong>Number of Dogs:</strong> ' + esc(numberOfDogs) + '</p>',
    '<p><strong>Notes:</strong> ' + esc(additionalNotes || 'None') + '</p>'
  ].join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + RESEND_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [BUSINESS_EMAIL],
        reply_to: email,
        subject: 'New Quote Request from ' + name,
        html: html
      })
    });
    const data = await r.json();
    if (!r.ok) {
      console.error('Resend error', data);
      return res.status(502).json({ error: 'Failed to send email' });
    }
    return res.status(201).json({ success: true, message: 'Quote request received' });
  } catch (err) {
    console.error('quote-webhook error', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
