// Vercel Edge Middleware: return a real HTTP 404 for URLs this site does not have.
//
// The SPA rewrite in vercel.json ("/(.*)" -> "/index.html") means every URL on the
// domain answers 200 OK with the app shell. Google files those as soft 404s and keeps
// re-crawling them. On the Chattanooga site the same rewrite accumulated ~105k soft
// 404s before this middleware was added; this runs before the rewrite so unknown paths
// answer 404 and get dropped instead of piling up.
//
// Anything not matched here falls through untouched, so prerendered pages, static
// assets, API functions, and the vercel.json redirects behave exactly as before.
// If this file ever throws, the request continues — it fails open, never closed.
//
// Keep the lists below in sync with apps/web/tools/route-manifest.cjs. The middleware
// runs at the edge and cannot require() a CJS module, hence the duplication;
// verify-routes.cjs diffs the two at build time and names any drift.

const PAGES = [
  '/',
  '/1st-scoop-free',
  '/about',
  '/apartment-dog-park-cleaning-asheville',
  '/blog',
  '/comparison',
  '/dog-park-guide',
  '/dog-poop-removal-asheville',
  '/dog-poop-scooping-asheville',
  '/faq',
  '/hoa-pet-waste-removal-asheville',
  '/how-it-works',
  '/near-me',
  '/one-time-cleanup',
  '/pet-safe-checklist',
  '/pet-waste-removal-asheville',
  '/pet-waste-station-installation-asheville',
  '/pricing',
  '/privacy-policy',
  '/qb-oauth-callback',
  '/quote',
  '/reddit-oauth-callback',
  '/service-areas',
  '/services',
  '/spring-special',
  '/terms-of-service',
  '/thank-you',
  '/yard-cleanup-asheville',
];

const BLOG_POSTS = [
  'asheville-pet-waste-removal-homeowners',
  'benefits',
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

const SERVICE_AREAS = [
  'arden', 'asheville', 'biltmore-forest', 'black-mountain', 'brevard', 'candler',
  'downtown', 'fairview', 'fletcher', 'hendersonville', 'mills-river', 'swannanoa',
  'weaverville', 'west-asheville', 'woodfin',
];

// Sources of the vercel.json redirects. These must reach their handler rather than
// being answered with a 404 here.
const LEGACY = [
  '/about-us', '/our-services', '/contact', '/contact-us', '/service-area', '/quoterequest',
];

const known = new Set([
  ...PAGES,
  ...BLOG_POSTS.map((s) => `/blog/${s}`),
  ...SERVICE_AREAS.map((s) => `/service/${s}`),
  ...LEGACY,
]);

// The real static files this site serves, as exact paths. Any OTHER path carrying a
// file extension is a legacy or spam URL and gets a 404.
//
// This is an allowlist of files, not of extensions: a *missing* .jpg/.png/.pdf/.xml
// would otherwise fall through to the SPA rewrite and answer 200 with the app shell,
// which is exactly the soft 404 this middleware exists to stop.
//
// Keep in sync with apps/web/public/; verify-routes.cjs diffs the two and warns.
const STATIC_FILES = new Set([
  '/happy-customers.jpg',
  '/hero-asheville-1.jpeg',
  '/hero-asheville-2.jpeg',
  '/llms.txt',
  '/logo-scoopy-asheville.png',
  '/robots.txt',
  '/service-action-yard.jpg',
  '/service-bags-removed.jpg',
  '/service-luxury-home.jpg',
  '/sitemap.xml',
  '/team-chattanooga-mural.jpg',
  '/team-lake-photo.jpg',
  '/team-uniforms.jpg',
  '/truck-scoopydoo.jpg',
]);

const NOT_FOUND_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Page Not Found | Scoopy Doo AVL</title>
<style>
  body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center;
         font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; background:#fff; color:#1a1a1a; }
  .wrap { text-align:center; padding:2rem; max-width:34rem; }
  h1 { font-size:1.75rem; margin:0 0 .75rem; }
  p { color:#555; line-height:1.6; margin:0 0 1.5rem; }
  a { display:inline-block; margin:0 .35rem; padding:.7rem 1.4rem; border-radius:9999px;
      background:#16a34a; color:#fff; text-decoration:none; font-weight:600; }
  a.secondary { background:#fff; color:#16a34a; border:2px solid #16a34a; }
</style>
</head>
<body>
  <div class="wrap">
    <h1>Page not found</h1>
    <p>That page does not exist. Scoopy Doo AVL provides pet waste removal across
       Asheville and Western North Carolina &mdash; start from the home page or grab a free quote.</p>
    <a href="/">Go to home page</a>
    <a class="secondary" href="/quote">Get a free quote</a>
  </div>
</body>
</html>`;

function notFound() {
  return new Response(NOT_FOUND_HTML, {
    status: 404,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'x-robots-tag': 'noindex, nofollow',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
}

export default function middleware(request) {
  try {
    const { pathname } = new URL(request.url);

    // Build output, API routes and Vercel internals are never our business. Asset
    // filenames are content-hashed, so this prefix cannot be enumerated up front.
    // /dp/* has its own handler in vercel.json that answers 410 Gone, which is a
    // stronger signal than the 404 here, so let it reach that rewrite.
    if (
      pathname.startsWith('/api/') ||
      pathname.startsWith('/assets/') ||
      pathname.startsWith('/_vercel/') ||
      pathname.startsWith('/dp/')
    ) {
      return;
    }

    // Trailing slashes and legacy prefixed paths resolve to the same page.
    const normalized =
      pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

    // A path carrying an extension is served only if it is a file we actually publish.
    const dot = normalized.lastIndexOf('.');
    if (dot > normalized.lastIndexOf('/') + 1) {
      if (STATIC_FILES.has(normalized)) return;

      // "/about/index.html" is the prerendered file behind "/about", and bare
      // "/index.html" is the SPA shell behind "/". Both serve a real page whose
      // canonical points at the clean URL, so Google consolidates rather than
      // treating them as 404s.
      if (normalized.endsWith('/index.html')) {
        const parent = normalized.slice(0, -'/index.html'.length) || '/';
        if (known.has(parent)) return;
      }

      return notFound();
    }

    if (known.has(normalized)) return;

    return notFound();
  } catch {
    // Never let a middleware error take the site down.
    return;
  }
}

export const config = {
  matcher: '/((?!api/|assets/|_vercel/).*)',
};
