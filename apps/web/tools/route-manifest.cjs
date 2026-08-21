// Single source of truth for every URL this site serves.
//
// generate-sitemap.cjs and verify-routes.cjs both read this file, and middleware.js
// mirrors it. Adding a page here is what makes it appear in the sitemap; adding it to
// middleware.js is what stops the edge from answering 404 for it.
//
// PAGES is the indexable set — the URLs that belong in the sitemap. Routes that exist
// but must never be indexed (the OAuth callbacks, /thank-you) are deliberately absent
// here and are allowed in middleware.js only.

const PAGES = [
  '/',
  '/1st-scoop-free',
  '/about',
  '/blog',
  '/comparison',
  '/dog-park-guide',
  '/dog-poop-removal-asheville',
  '/dog-poop-scooping-asheville',
  '/faq',
  '/how-it-works',
  '/near-me',
  '/one-time-cleanup',
  '/pet-safe-checklist',
  '/pet-waste-removal-asheville',
  '/privacy-policy',
  '/quote',
  '/service-areas',
  '/services',
  '/spring-special',
  '/terms-of-service',
  '/yard-cleanup-asheville',
];

// Rendered by LocationTemplate.jsx from src/data/locations.js. All Western North
// Carolina — this market has no Georgia or Tennessee towns.
const SERVICE_AREAS = [
  'arden',
  'asheville',
  'biltmore-forest',
  'black-mountain',
  'brevard',
  'candler',
  'downtown',
  'fairview',
  'fletcher',
  'hendersonville',
  'mills-river',
  'swannanoa',
  'weaverville',
  'west-asheville',
  'woodfin',
];

const BLOG_POSTS = [
  'asheville-pet-waste-removal-homeowners',
  'best-dog-parks-asheville-nc',
  'best-pooper-scooper-services-asheville',
  'black-mountain',
  'commercial-pet-waste-removal-asheville',
  'customer-success-stories',
  'diy-vs-professional',
  'dog-poop-cleanup-asheville-summer-heat',
  'health-benefits-yard-cleanup',
  'health-risks-of-pet-waste',
  'how-often-clean-yard',
  'how-often-scoop-dog-poop-asheville',
  'is-dog-poop-hurting-your-asheville-yard',
  'is-dog-waste-bad-for-lawn',
  'lawn-health-and-pet-waste',
  'pet-waste-management-guide',
  'pooper-scooper-cost-asheville',
  'professional-waste-removal-benefits',
  'seasonal-pet-care-tips',
  'spring-pet-care-checklist',
  'weaverville',
];

module.exports = { PAGES, SERVICE_AREAS, BLOG_POSTS };
