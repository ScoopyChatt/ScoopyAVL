> ASHEVILLE LOCATION — this codebase was cloned from the Chattanooga ScoopyChatt site
> and localized for Asheville, NC. The Chattanooga site/repo is separate and untouched.
> UNVERIFIED CLAIMS on the site (confirm before trusting): About-page stats (review
> count, number of service vehicles, number of communities served), testimonials, and
> the legal LLC name + owner names. Do not publish these as fact until Brandon confirms.

# CLAUDE.md — Scoopy Doo AVL Website Project

> Last updated: 2026-07-13. Read this at the start of every session.

---

## Business

**Brand:** Scoopy Doo AVL — pet waste removal, Asheville NC
**Email:** info@scoopyavl.com
**Phone:** 828-830-0779
**Live site:** https://www.scoopyavl.com
**Pricing source of truth:** `apps/web/src/components/QuoteForm.jsx` (`base` values) —
weekly $20/visit, twice-weekly $18, every-other-week $33, one-time from $125. Marketing
copy currently advertises one-time from $85; the form and the copy disagree and Brandon
needs to reconcile them. Prices are duplicated into `inject-seo.cjs` and
`create-static-pages.cjs`, which had all drifted to Chattanooga rates — grep before editing.
**GitHub repo:** https://github.com/ScoopyChatt/ScoopyAVL  (exists — separate from the Chattanooga repo)
**GitHub token:** provided per session — never commit to the repo
**Owner name + About story:** UNVERIFIED placeholder — confirm with Brandon

---

## Architecture

### Frontend — Vite React SPA
- **Host:** Vercel (auto-deploys on push to main)
- **Root:** `apps/web/`
- **Node version:** set in Vercel dashboard (do NOT add nodeVersion to vercel.json — invalid property, breaks builds)
- **Build command in vercel.json:** `npm install --prefix apps/web && npm run build --prefix apps/web && node apps/web/tools/inject-seo.cjs`
- **Output dir:** `dist/apps/web`
- **Path alias:** `@` = `apps/web/src/`

### Backend API — Express.js
- **Host:** Railway, root `apps/api/`, port 8080, entry `node src/main.js`
- **AI:** Google Gemini 2.5 Flash via REST API (v1 endpoint)
- **Email:** Resend REST API — key in Railway env vars, NOT committed. Verify scoopyavl.com domain in Resend.
- **Lead recipient:** `BUSINESS_EMAIL` env var, defaults to info@scoopyavl.com
- **SSE format for chatbot:** `{type:'content', data:{content:'...'}}`

### Database — PocketBase
- **Host:** Railway, root `apps/pocketbase/`
- **Volume:** must be mounted at `/app/pb_data` or data wipes on restart

> NOTE: Vercel/Railway project + service names and the PocketBase volume name were
> inherited from the Chattanooga clone. Confirm the actual AVL infra names before relying on them.

### Monorepo
```
ScoopyAVL/
├── apps/web/          # Vite React SPA
├── apps/api/          # Express.js API
├── apps/pocketbase/   # PocketBase binary
├── vercel.json        # Vercel config — routing, redirects, build command
└── package.json       # npm workspaces root
```

---

## CRITICAL: JSX String Rules

Never use straight apostrophes inside single-quoted JS strings — it ends the string early and breaks the build.

```js
// WRONG — syntax error
desc: 'You don't need to be home.'
// CORRECT — double-quote strings that contain apostrophes
desc: "You don't need to be home."
```

---

## Adding a New Page — Checklist

A page has to be registered in several places. Miss one and the failure is usually
silent: the page works when you click it locally and is broken for crawlers.

**Always:**

1. Create the component — `apps/web/src/pages/YourPage.jsx`, or
   `apps/web/src/pages/blog/YourPost.jsx` for a blog post.
2. `apps/web/src/App.jsx` — lazy import **and** `<Route>`. Two separate edits.
3. `apps/web/tools/route-manifest.cjs` — add the slug to `PAGES`, `SERVICE_AREAS`, or
   `BLOG_POSTS`. This is the source of truth: `generate-sitemap.cjs`, `inject-seo.cjs`
   and `verify-routes.cjs` all read it, so the sitemap follows automatically.
4. `middleware.js` (repo root) — same list, same slug. **The one that gets missed.**
   The middleware 404s anything outside its allowlist, so without this the React route
   works in a browser while the edge serves Googlebot a 404. Invisible locally.
5. `apps/web/tools/inject-seo.cjs` — `routes` object, `['<title>', '<meta description>']`.
   Skip it and the page inherits the homepage title tag.
6. `apps/web/tools/create-static-pages.cjs` — the crawlable prerendered body, for pages
   that need one. This is a React SPA with no SSR, so a crawler otherwise sees an empty
   shell. Entries are single-line objects: delete a whole entry including its comma, or
   you leave an array hole that crashes the build.

**When it applies:**

- `apps/web/src/components/Header.jsx` — nav link, for top-level pages.
- `apps/web/src/pages/BlogListPage.jsx` — for blog posts, or the post exists but
  nothing links to it.
- `apps/web/src/config/seoMetadata.js` — only for pages using `<SEOHead path="..." />`.
- `middleware.js` `STATIC_FILES` — when you add a file to `apps/web/public/`. Static
  URLs are gated by exact path, so an unlisted file answers 404 at the edge.

**Then verify — do not skip this:**

```
npm install --prefix apps/web && npm run build --prefix apps/web \
  && node apps/web/tools/inject-seo.cjs \
  && node apps/web/tools/generate-sitemap.cjs \
  && node apps/web/tools/create-static-pages.cjs \
  && node apps/web/tools/verify-routes.cjs
```

`verify-routes.cjs` cross-checks the manifest against App.jsx, middleware.js and
`public/`, and names the offending URL. It is warn-only, so read its output.

There is no `apps/web/public/sitemap.xml`. The sitemap is generated into `dist` by
`generate-sitemap.cjs` from the route manifest; editing a static file would do nothing.

---

## SEO Architecture

React SPA with no SSR. Per-page SEO via two layers:
1. Build-time: `inject-seo.cjs` post-build script creates `/route/index.html` per route with the correct title + meta tags.
2. Runtime: react-helmet-async updates tags for in-app navigation.

`inject-seo.cjs` must be updated every time a new page is added, or that page inherits the homepage title tag.

3. Edge: `middleware.js` answers a real 404 for any URL not in its allowlist. The SPA
   rewrite in `vercel.json` (`/(.*)` -> `/index.html`) otherwise makes *every* URL on the
   domain return 200 with the app shell, which Google files as a soft 404 and re-crawls
   indefinitely. The Chattanooga site accumulated ~105k of those before it was added.
   The allowlist covers static files by exact path too, so a missing image 404s instead
   of returning the app shell.

---

## Service Area Pages

Dynamic route: `/service/:slug` via `LocationTemplate.jsx` → `src/data/locations.js`

Active Asheville-area slugs: asheville, west-asheville, arden, fletcher, hendersonville, black-mountain, weaverville, fairview, candler, swannanoa, woodfin, mills-river, biltmore-forest, brevard, downtown

All towns are in Western North Carolina (NC). There are no Georgia/Tennessee cities in this market — do not carry over Chattanooga's GA/TN state logic.

---

## How It Works Page

Located at `/how-it-works`. Differentiators to emphasize:
- 100% online: quote and pay online, no phone calls required
- On-the-way text before every visit
- Gate photo sent when done (gate secured + photo to phone)
- No contracts, cancel anytime

---

## SEO TODO (Priority Order)

1. ~~Build commercial pages: HOA pet waste, apartment dog park, pet waste station~~ — done.
   Live at `/hoa-pet-waste-removal-asheville`, `/apartment-dog-park-cleaning-asheville`,
   `/pet-waste-station-installation-asheville`. All three quote per property rather than
   naming a commercial rate; if you set fixed community pricing, update all three plus
   their `create-static-pages.cjs` bodies.
2. More Asheville local-intent blog posts
3. Verify scoopyavl.com domain at resend.com/domains so lead emails send
4. Set up + connect Google Business Profile for Asheville, link www.scoopyavl.com
5. After every deploy: Search Console URL Inspection → Request Indexing for key pages
6. Confirm and correct the unverified About-page claims (reviews, vehicles, communities, testimonials)
