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
**Phone:** 828-844-8060
**Live site:** https://www.scoopyavl.com
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

Do ALL of these or the page will be missing SEO/nav/sitemap:

1. Create `apps/web/src/pages/YourPage.jsx`
2. Add lazy import + Route to `apps/web/src/App.jsx`
3. Add nav link to `apps/web/src/components/Header.jsx` if needed
4. Add entry to `apps/web/src/config/seoMetadata.js`
5. Add to routes object in `apps/web/tools/inject-seo.cjs`
6. Add URL to `apps/web/public/sitemap.xml`

---

## SEO Architecture

React SPA with no SSR. Per-page SEO via two layers:
1. Build-time: `inject-seo.cjs` post-build script creates `/route/index.html` per route with the correct title + meta tags.
2. Runtime: react-helmet-async updates tags for in-app navigation.

`inject-seo.cjs` must be updated every time a new page is added, or that page inherits the homepage title tag.

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

1. Build/verify commercial pages: HOA pet waste, apartment dog park, pet waste station
2. More Asheville local-intent blog posts
3. Verify scoopyavl.com domain at resend.com/domains so lead emails send
4. Set up + connect Google Business Profile for Asheville, link www.scoopyavl.com
5. After every deploy: Search Console URL Inspection → Request Indexing for key pages
6. Confirm and correct the unverified About-page claims (reviews, vehicles, communities, testimonials)
