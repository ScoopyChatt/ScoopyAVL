#!/usr/bin/env node
// Post-build step 3 of 3: render every route in the manifest with React and write the
// result into dist/<route>/index.html, inside <div id="root" data-prerendered>.
//
// Why: the site is a client-rendered SPA, so crawlers that do not run JavaScript
// (GPTBot, ClaudeBot, PerplexityBot, Google's first pass) would otherwise see only the
// hand-written fallback bodies from inject-seo.cjs / create-static-pages.cjs. With this
// step they read the same page a visitor sees. main.jsx hydrates prerendered pages.
//
// Needs the server bundle from `npm run build` (vite.ssr.config.js -> apps/web/.ssr).
// Never fails the build: a route that cannot render keeps its fallback body.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const { PAGES, SERVICE_AREAS, BLOG_POSTS } = require('./route-manifest.cjs');
const { setRoot, setJsonLd } = require('./html-helpers.cjs');

const webDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(webDir, '..', '..', 'dist', 'apps', 'web');
const entry = path.join(webDir, '.ssr', 'entry-server.js');

// Server rendering warns about effects that only run in the browser. Expected; mute it.
const origError = console.error;
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('useLayoutEffect does nothing on the server')) return;
  origError(...args);
};

async function main() {
  if (!fs.existsSync(entry)) {
    console.log('[prerender] no server bundle at ' + entry + ', skipping');
    return;
  }
  const { render } = await import(pathToFileURL(entry).href);

  const routes = [
    ...PAGES,
    ...SERVICE_AREAS.map((s) => '/service/' + s),
    ...BLOG_POSTS.map((s) => '/blog/' + s),
  ];

  let ok = 0;
  const failed = [];
  for (const route of routes) {
    const file = path.join(distDir, route, 'index.html');
    if (!fs.existsSync(file)) {
      failed.push(route + ' (no html from inject-seo)');
      continue;
    }
    try {
      const { html: body, helmet } = await render(route);
      if (!body || body.length < 500) throw new Error('rendered body too short');
      let html = fs.readFileSync(file, 'utf8');
      html = setRoot(html, body, ' data-prerendered');
      // Page-level JSON-LD from the React page's <Helmet> (FAQPage, Service,
      // BlogPosting, BreadcrumbList). The LocalBusiness block is already in <head>.
      const scripts = helmet && helmet.script ? helmet.script.toString() : '';
      const blocks = [...scripts.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
      blocks.forEach((m, i) => {
        try {
          html = setJsonLd(html, 'page-' + i, JSON.parse(m[1]));
        } catch (e) {
          // Malformed JSON-LD on a page is skipped rather than shipped.
        }
      });
      fs.writeFileSync(file, html);
      ok++;
    } catch (e) {
      failed.push(route + ' (' + e.message + ')');
    }
  }
  console.log('[prerender] rendered ' + ok + ' of ' + routes.length + ' routes');
  failed.forEach((f) => console.log('[prerender] kept fallback body: ' + f));
}

main()
  .catch((e) => console.log('[prerender] warning: ' + e.message))
  .finally(() => process.exit(0));
