// Vercel serverless function: returns 410 Gone for all /dp/* spam URLs
// 410 tells Google the content is permanently removed — better than 301 to homepage
export default function handler(req, res) {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.status(410).send('Gone');
}
