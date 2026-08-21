#!/usr/bin/env node
// Cross-checks the route manifest against src/App.jsx, middleware.js and public/.
//
// Four separate lists have to agree for a page to work: React Router has to have a
// route (or the page renders the NotFound element), the manifest has to list it (or
// Google never sees it in the sitemap), the 404 middleware has to allow it (or the
// edge answers 404), and any static file has to be in the middleware's STATIC_FILES.
// They drift silently — the failure always looks fine locally and only breaks for
// crawlers — so the build reports any mismatch.
//
// Warn-only by design: a stale list should never block a deploy that is otherwise fine.

const fs = require('fs');
const path = require('path');
const { PAGES, SERVICE_AREAS, BLOG_POSTS } = require('./route-manifest.cjs');

const webDir = path.join(__dirname, '..');
const repoRoot = path.join(webDir, '..', '..');

const sitemapRoutes = new Set([
  ...PAGES,
  ...SERVICE_AREAS.map((s) => '/service/' + s),
  ...BLOG_POSTS.map((s) => '/blog/' + s),
]);

const appSource = fs.readFileSync(path.join(webDir, 'src', 'App.jsx'), 'utf8');
const appRoutes = new Set(
  [...appSource.matchAll(/path="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((p) => p !== '*' && !p.includes(':') && p !== '/sitemap.xml')
);
// /service/:slug renders from src/data/locations.js, so its slugs count as routed.
if (/path="\/service\/:slug"/.test(appSource)) {
  SERVICE_AREAS.forEach((s) => appRoutes.add('/service/' + s));
}

const middlewareSource = fs.readFileSync(path.join(repoRoot, 'middleware.js'), 'utf8');
const allowed = new Set([
  ...[...middlewareSource.matchAll(/'(\/[^']*)'/g)].map((m) => m[1]),
  ...[...middlewareSource.matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]),
]);
function middlewareAllows(route) {
  if (allowed.has(route)) return true;
  const slug = route.replace(/^\/(blog|service)\//, '');
  return slug !== route && allowed.has(slug);
}

const problems = [];
for (const route of sitemapRoutes) {
  if (!appRoutes.has(route)) problems.push('in sitemap but has no route in App.jsx: ' + route);
  if (!middlewareAllows(route)) problems.push('in sitemap but middleware would 404 it: ' + route);
}
for (const route of appRoutes) {
  if (!middlewareAllows(route)) problems.push('routed in App.jsx but middleware would 404 it: ' + route);
}

// The middleware also gates static files by exact path. If a file lands in public/ and
// nobody adds it to STATIC_FILES the edge answers 404 for a real asset, and if a file is
// deleted but left in the list its URL answers 200 with the app shell again. Diff both ways.
const NON_PUBLIC_STATIC = new Set(['/sitemap.xml']); // regenerated into dist at build time
const NOT_SERVED = new Set(['/.htaccess', '/_redirects']); // Apache/Netlify leftovers, unused on Vercel

const staticBlock = middlewareSource.match(/const STATIC_FILES = new Set\(\[([\s\S]*?)\]\);/);
if (!staticBlock) {
  problems.push('middleware.js has no STATIC_FILES list - static URLs are unguarded');
} else {
  const listed = new Set([...staticBlock[1].matchAll(/'(\/[^']*)'/g)].map((m) => m[1]));

  const onDisk = new Set();
  (function walk(dir, prefix) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const rel = prefix + '/' + entry.name;
      if (entry.isDirectory()) walk(path.join(dir, entry.name), rel);
      else onDisk.add(rel);
    }
  })(path.join(webDir, 'public'), '');

  for (const file of onDisk) {
    if (!listed.has(file) && !NOT_SERVED.has(file)) {
      problems.push('in public/ but middleware would 404 it: ' + file);
    }
  }
  for (const file of listed) {
    if (!onDisk.has(file) && !NON_PUBLIC_STATIC.has(file)) {
      problems.push('listed in middleware STATIC_FILES but no such file in public/: ' + file);
    }
  }
}

if (problems.length) {
  console.warn('Route check: ' + problems.length + ' problem(s)');
  problems.forEach((p) => console.warn('  - ' + p));
} else {
  console.log(
    'Route check: ' + sitemapRoutes.size + ' sitemap URLs, ' + appRoutes.size +
    ' app routes, static files consistent'
  );
}
