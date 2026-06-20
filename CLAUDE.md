> ASHEVILLE LOCATION — this codebase was cloned from the Chattanooga ScoopyChatt site
> and localized for Asheville, NC. The Chattanooga site/repo is separate and untouched.
> PLACEHOLDERS to confirm: legal LLC name, owner name + About story, social profiles,
> and the real logo/photo image files. Domain assumed: www.scoopyavl.com.

# CLAUDE.md — Scoopy Doo LLC Website Project

> Last updated: 2026-05-31. Read this at the start of every session.

---

## Business

**Company:** Scoopy Doo LLC — pet waste removal, Asheville NC  
**Owner:** Brandon Carter (info@scoopyavl.com)  
**Phone:** 828-844-8060  
**Live site:** https://www.scoopyavl.com  
**GitHub repo:** https://github.com/ScoopyChatt/ScoopyAVL  (NEW REPO — create this)  
**GitHub token:** stored in your session — do not commit to repo  
**Competitor reference:** pootagic.com (ranks above us for local terms)

---

## Architecture

### Frontend — Vite React SPA
- **Host:** Vercel (project: `scoopy-chatt`, account: `scoopychatts-projects`)
- **Root:** `apps/web/`
- **Node version:** 24.x (Vercel dashboard setting — do NOT add nodeVersion to vercel.json, it is an invalid property that breaks builds)
- **Build command in vercel.json:** `npm install --prefix apps/web && npm run build --prefix apps/web && node apps/web/tools/inject-seo.cjs`
- **Output dir:** `dist/apps/web`
- **Path alias:** `@` = `apps/web/src/`

### Backend API — Express.js
- **Host:** Railway (service: `dynamic-ambition`)
- **Root:** `apps/api/`, port 8080, entry: `node src/main.js`
- **Teardown enabled** on Railway — prevents duplicate active deployments
- **AI:** Google Gemini 2.5 Flash via REST API (v1 endpoint, not SDK)
- **Email:** Resend REST API (key in Railway env vars, NOT committed to repo)
- **SSE format for chatbot:** `{type:'content', data:{content:'...'}}`

### Database — PocketBase  
- **Host:** Railway (service: `precious-surprise`)
- **Root:** `apps/pocketbase/`
- **Volume:** `scoopychatt-volume` at `/app/pb_data` — CRITICAL, without this data wipes on restart
- **Admin credentials:** in Brandon's password manager

### Monorepo
```
ScoopyChatt/
├── apps/web/          # Vite React SPA
├── apps/api/          # Express.js API  
├── apps/pocketbase/   # PocketBase binary
├── vercel.json        # Vercel config — routing, redirects, build command
└── package.json       # npm workspaces root
```

---

## CRITICAL: JSX String Rules

Never use straight apostrophes inside single-quoted JS strings. This caused a multi-hour build failure.

```js
// WRONG — syntax error, string ends at "don'"
desc: 'You don't need to be home.'

// CORRECT — use double quotes when string contains apostrophes
desc: "You don't need to be home."
```

Always use double-quoted strings for any string that contains contractions or apostrophes.

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
1. Build-time: inject-seo.cjs post-build script creates /route/index.html per route with correct title + meta tags
2. Runtime: react-helmet-async updates tags for navigation within the app

inject-seo.cjs must be updated every time a new page is added, or that page gets the homepage title tag.

GA cities (must NOT say TN): ringgold, rossville, flintstone, fort-oglethorpe

---

## Known Issues & Status

### Build
- Root cause of all build failures: HowItWorksPage.jsx had apostrophes inside single-quoted JS strings — FIXED at commit 64888dc
- nodeVersion is NOT a valid vercel.json property — causes immediate schema validation failure. Set Node version in Vercel dashboard (currently 24.x).
- Build takes 17-20 seconds when healthy. If build fails in under 12 seconds, it is a syntax error or config issue, not a code logic problem.

### SEO (Active problems)
- 109,106 Soft 404 pages in Search Console — old Hostinger URLs crawled as HTTP 200. SPA returns 200 for everything. Need wildcard redirects for old URL patterns.
- /dp/ spam URLs — 301 redirect added in vercel.json. Search Console removals submitted manually by Brandon.
- Ringgold TN bug — fixed in inject-seo.cjs (GA state set correctly for Georgia cities)

### Chatbot
- Uses gemini-2.5-flash (1.5 and 2.0 unavailable for this API key)
- Lead capture simplified: no PocketBase, just sets isLeadCaptured=true
- SSE format: {type:'content', data:{content:'...'}}

### Email
- SMTP blocked by Railway — uses Resend HTTP API instead
- Sending from info@scoopychatt.com (verify domain in Resend dashboard if failing)

---

## Service Area Pages

Dynamic route: /service/:slug via LocationTemplate.jsx → src/data/locations.js

Active slugs: chattanooga, hixson, red-bank, signal-mountain, ooltewah, east-brainerd, soddy-daisy, cleveland, apison, collegedale, highland-park, downtown, east-ridge, lookout-mountain, ringgold (GA), rossville (GA), flintstone (GA), fort-oglethorpe (GA)

---

## How It Works Page

Located at /how-it-works. Key differentiators to always emphasize:
- 100% online: quote and pay online, no phone calls
- On-the-way text before every visit
- Gate photo sent when done (gate secured + photo to phone)
- No contracts, cancel anytime

---

## SEO TODO (Priority Order)

1. Fix 109K soft 404s — add wildcard redirects for old Hostinger URL patterns to homepage
2. Build commercial pages: HOA pet waste, apartment dog park, pet waste station
3. More local-intent blog posts
4. Verify Resend domain at resend.com/domains
5. Update Google Business Profile URL to www.scoopychatt.com
6. After every deploy: Search Console URL Inspection → Request Indexing for key pages
