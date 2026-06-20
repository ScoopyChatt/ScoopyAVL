const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM || 'Scoopy Doo <onboarding@resend.dev>';

export async function sendEmail(to, subject, html) {
  if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY not set');
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + RESEND_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: RESEND_FROM, to: [to], subject, html })
  });
  const d = await r.json();
  if (!r.ok) throw new Error('Resend error: ' + JSON.stringify(d));
  return d;
}