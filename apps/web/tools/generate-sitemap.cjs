#!/usr/bin/env node
// Generates a static sitemap.xml into dist/apps/web/ at build time.
// Vercel serves static files before applying rewrites, so this takes
// precedence over the React SPA rewrite and gives Google real XML.
//
// The URL list comes from route-manifest.cjs so the sitemap cannot drift from the
// routes. It previously kept its own copy and advertised 11 URLs that had no route
// at all — including /blog/pet-waste-removal-north-georgia, a Chattanooga leftover —
// plus duplicate entries for black-mountain, biltmore-forest and mills-river.

const fs = require('fs');
const path = require('path');

try {
  const { PAGES, SERVICE_AREAS, BLOG_POSTS } = require('./route-manifest.cjs');

  const BASE = 'https://www.scoopyavl.com';
  const today = new Date().toISOString().split('T')[0];

  // Anything not listed here falls back to DEFAULT_PRIORITY.
  const PRIORITY = {
    '/': '1.0',
    '/services': '0.9',
    '/quote': '0.9',
    '/dog-poop-removal-asheville': '0.9',
    '/pet-waste-removal-asheville': '0.9',
    '/faq': '0.8',
    '/service-areas': '0.8',
    '/near-me': '0.8',
    '/one-time-cleanup': '0.8',
    '/dog-poop-scooping-asheville': '0.8',
    '/yard-cleanup-asheville': '0.8',
    '/blog': '0.8',
    '/about': '0.7',
    '/how-it-works': '0.7',
    '/privacy-policy': '0.3',
    '/terms-of-service': '0.3',
  };
  const CHANGEFREQ = { '/': 'weekly', '/blog': 'weekly', '/privacy-policy': 'yearly', '/terms-of-service': 'yearly' };
  const DEFAULT_PRIORITY = '0.6';

  const urls = [
    ...PAGES.map((p) => ({
      loc: BASE + (p === '/' ? '/' : p),
      priority: PRIORITY[p] || DEFAULT_PRIORITY,
      changefreq: CHANGEFREQ[p] || 'monthly',
    })),
    ...SERVICE_AREAS.map((s) => ({ loc: BASE + '/service/' + s, priority: '0.8', changefreq: 'monthly' })),
    ...BLOG_POSTS.map((s) => ({ loc: BASE + '/blog/' + s, priority: '0.7', changefreq: 'monthly' })),
  ];

  const seen = new Set();
  const unique = urls.filter((u) => (seen.has(u.loc) ? false : seen.add(u.loc)));

  function escapeXml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const url of unique) {
    xml += '  <url>\n';
    xml += '    <loc>' + escapeXml(url.loc) + '</loc>\n';
    xml += '    <lastmod>' + today + '</lastmod>\n';
    xml += '    <changefreq>' + url.changefreq + '</changefreq>\n';
    xml += '    <priority>' + url.priority + '</priority>\n';
    xml += '  </url>\n';
  }
  xml += '</urlset>';

  const distDir = path.join(process.cwd(), 'dist', 'apps', 'web');
  if (!fs.existsSync(distDir)) {
    console.log('Sitemap generate: dist not found, skipping');
    process.exit(0);
  }

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
  console.log('Static sitemap generated: ' + unique.length + ' URLs -> dist/apps/web/sitemap.xml');
} catch (e) {
  console.error('Sitemap generate failed: ' + e.message);
}
