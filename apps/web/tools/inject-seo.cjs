#!/usr/bin/env node
// Post-build step 1 of 3: writes dist/<route>/index.html for every route with its own
// <title>, meta description, canonical and og tags, the LocalBusiness JSON-LD, and a
// plain-HTML body inside <div id="root"> for crawlers that do not run JavaScript.
//
// That body is the FALLBACK. tools/prerender.mjs runs last and replaces it with the
// real rendered page; this text is only what ships if prerendering a route fails.
// Facts (towns, prices, visit steps) come from src/data/business.js so they match the site.
const fs = require('fs');
const path = require('path');
const { setRoot, setHead, setJsonLd, importSrc } = require('./html-helpers.cjs');

async function main() {
const BASE = 'https://www.scoopyavl.com';
const distDir = path.join(process.cwd(), 'dist', 'apps', 'web');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.log('SEO inject: dist/apps/web/index.html not found, skipping (build cache active)');
  return;
}

const template = fs.readFileSync(templatePath, 'utf-8');
const { businessSchema, SERVICE_AREA_TEXT, PRICE_TEXT, VISIT_STEPS, PROMISES } = await importSrc('data/business.js');
const { locations } = await importSrc('data/locations.js');
const { geoPosts } = await importSrc('data/geoPosts.js');

const esc = (s) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
const li = (items) => '<ul>' + items.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul>';
const visitHtml = '<h2>What happens on every visit</h2>' + li(VISIT_STEPS);
const quoteLine = '<p>See your exact price and book online at <a href="/quote">scoopyavl.com/quote</a>, or text 828-844-8060.</p>';

// Fallback bodies for pages that create-static-pages.cjs does not cover.
const SC = {
  '/services': '<h1>Pet Waste Removal Services in Asheville, NC</h1>' +
    '<p>Scoopy Doo AVL is a locally owned dog poop removal service for homes, HOAs, and apartment communities in ' + SERVICE_AREA_TEXT + '. ' + PRICE_TEXT + '</p>' +
    '<h2>Weekly dog poop removal</h2><p>The most popular plan: one visit a week, $20 per visit for one dog.</p>' +
    '<h2>Twice-weekly service</h2><p>$18 per visit, for multi-dog homes and small yards that fill up fast.</p>' +
    '<h2>Every-other-week service</h2><p>$33 per visit, for one dog and a smaller yard.</p>' +
    '<h2>One-time yard cleanup</h2><p>From $85, for a yard that has gone weeks or months without cleanup, before a party, or before listing a home.</p>' +
    '<h2>HOA, apartment, and pet waste station service</h2><p>Common-area cleanup, dog park cleaning, and pet waste station installation and restocking, quoted per property.</p>' +
    visitHtml + li(PROMISES) + quoteLine,
  '/service-areas': '<h1>Pet Waste Removal Service Areas Around Asheville, NC</h1>' +
    '<p>Scoopy Doo AVL serves ' + SERVICE_AREA_TEXT + ', across Buncombe, Henderson, and Transylvania counties.</p><ul>' +
    locations.map((l) => '<li><a href="/service/' + l.slug + '">Dog poop removal in ' + esc(l.name) + '</a></li>').join('') + '</ul>' + quoteLine,
  '/how-it-works': '<h1>How Scoopy Doo AVL Pet Waste Removal Works</h1>' +
    '<p>Scoopy Doo AVL is 100% online: you get a quote and pay online, with no phone calls required, and there is no contract.</p>' +
    '<h2>1. Get your price online</h2><p>Enter your address, number of dogs, and how often you want service at scoopyavl.com/quote. ' + PRICE_TEXT + '</p>' +
    '<h2>2. On-the-way text</h2><p>You get a text before every visit. You do not need to be home; just make sure the gate can be opened.</p>' +
    '<h2>3. Full-yard cleanup</h2><p>The technician walks the whole yard in a grid pattern, bags every pile, and hauls it off your property.</p>' +
    '<h2>4. Gate photo</h2><p>When the visit is done the gate is latched and a photo of it is texted to you.</p>' + quoteLine,
  '/about': '<h1>About Scoopy Doo AVL</h1>' +
    '<p>Scoopy Doo AVL is a locally owned pet waste removal company in Asheville, NC, serving ' + SERVICE_AREA_TEXT + '.</p>' +
    visitHtml + li(PROMISES) + quoteLine,
  '/near-me': '<h1>Pooper Scooper Service Near Me in Asheville, NC</h1>' +
    '<p>Scoopy Doo AVL is the locally owned pooper scooper service for ' + SERVICE_AREA_TEXT + '. ' + PRICE_TEXT + '</p>' +
    visitHtml + quoteLine,
  '/one-time-cleanup': '<h1>One-Time Dog Poop Cleanup in Asheville, NC</h1>' +
    '<p>A one-time cleanup from Scoopy Doo AVL starts at $85 and clears a yard that has gone weeks or months without cleanup. It is popular in early spring, before a party, before listing a home, and as the first visit before weekly service.</p>' +
    visitHtml + quoteLine,
  '/pricing': '<h1>Dog Poop Removal Pricing in Asheville, NC</h1><p>' + PRICE_TEXT + '</p>' +
    '<table><thead><tr><th>Plan</th><th>Price (1 dog)</th></tr></thead><tbody>' +
    '<tr><td>Weekly</td><td>$20 per visit</td></tr><tr><td>Twice weekly</td><td>$18 per visit</td></tr>' +
    '<tr><td>Every other week</td><td>$33 per visit</td></tr><tr><td>One-time cleanup</td><td>From $85</td></tr></tbody></table>' +
    li(PROMISES) + quoteLine,
};

function locationBody(l) {
  let h = '<h1>Dog Poop Removal in ' + esc(l.name) + '</h1>';
  h += '<p>' + esc(l.serviceDescription) + '</p>';
  if (l.localContext) h += '<p>' + esc(l.localContext) + '</p>';
  if (l.neighborhoods && l.neighborhoods.length) h += '<h2>Neighborhoods we serve in ' + esc(l.name) + '</h2>' + li(l.neighborhoods);
  if (l.benefits && l.benefits.length) h += '<h2>What you get</h2>' + li(l.benefits);
  h += '<h2>Pricing</h2><p>' + PRICE_TEXT + '</p>';
  if (l.faqItems && l.faqItems.length) {
    h += '<h2>Frequently asked questions</h2>';
    l.faqItems.forEach((f) => { h += '<h3>' + esc(f.question) + '</h3><p>' + esc(f.answer) + '</p>'; });
  }
  return h + quoteLine;
}

function postBody(p) {
  let h = '<article><h1>' + esc(p.title) + '</h1>' + p.intro.map((t) => '<p>' + esc(t) + '</p>').join('');
  p.sections.forEach((s) => {
    h += '<h2>' + esc(s.h2) + '</h2>' + s.paras.map((t) => '<p>' + esc(t) + '</p>').join('');
    if (s.list) h += li(s.list);
  });
  h += '<h2>Frequently asked questions</h2>';
  p.faqs.forEach((f) => { h += '<h3>' + esc(f.q) + '</h3><p>' + esc(f.a) + '</p>'; });
  return h + quoteLine + '</article>';
}

const routes = {
  '/': ['Dog Poop Removal & Pooper Scooper Service | Asheville NC', 'Professional dog poop removal & pooper scooper service in Asheville, NC. Reliable weekly pet waste cleanup. Get your free quote from Scoopy Doo today.'],
  '/services': ['Pet Waste Removal Services in Asheville, NC | Scoopy Doo', 'Weekly, bi-weekly & one-time dog poop removal in Asheville. See what Scoopy Doo offers and book today.'],
  '/near-me': ['Pooper Scooper Service Near Me in Asheville, NC', 'Looking for a pooper scooper service near you in Asheville? Scoopy Doo offers reliable local dog waste removal.'],
  '/one-time-cleanup': ['One-Time Dog Poop Cleanup in Asheville, NC | Scoopy Doo', 'Get a one-time dog poop cleanup in Asheville, NC. Perfect for spring cleaning or first-time service.'],
  '/how-it-works': ['How It Works | Scoopy Doo Pet Waste Removal Asheville', 'Easy online quotes, secure online payment, on-the-way texts, and gate photo proof after every visit. Working with Scoopy Doo is simple.'],
  '/dog-poop-removal-asheville': ['Dog Poop Removal in Asheville, NC | Scoopy Doo LLC', 'Professional dog poop removal in Asheville, NC. Dependable weekly service, fully insured.'],
  '/pet-waste-removal-asheville': ['Pet Waste Removal in Asheville, NC | Scoopy Doo', 'Expert pet waste removal in Asheville, NC for homes, HOAs & businesses. Request a free quote.'],
  '/dog-poop-scooping-asheville': ['Dog Poop Scooping Service in Asheville, NC | Scoopy Doo', 'Reliable dog poop scooping in Asheville, NC. Weekly and bi-weekly pooper scooper service.'],
  '/yard-cleanup-asheville': ['Yard Cleanup for Pet Owners in Asheville, NC | Scoopy Doo', 'Complete yard cleanup for pet owners in Asheville, NC. Book a one-time or recurring cleanup.'],
  '/service-areas': ['Service Areas | Pet Waste Removal Around Asheville, NC', 'Scoopy Doo serves Asheville, Arden, Fletcher, Hendersonville, Black Mountain, Weaverville, Fairview, Candler, Swannanoa, Woodfin, Mills River, Biltmore Forest, and Brevard, NC.'],
  '/about': ['About Scoopy Doo | Asheville Pet Waste Removal', "Meet Scoopy Doo LLC, Asheville's locally owned pet waste removal company."],
  '/faq': ['Pet Waste Removal FAQs | Scoopy Doo Asheville', 'Answers to common questions about dog poop removal in Asheville: pricing, scheduling, and more.'],
  '/quote': ['Get a Free Pet Waste Removal Quote | Asheville, NC', 'Get a fast, free quote for dog poop removal in Asheville, NC.'],
  '/spring-special': ['Spring Special: Buy 2 Months, Get 1 Free | Scoopy Doo', 'Limited-time Asheville spring special from Scoopy Doo.'],
  '/pet-safe-checklist': ['Pet-Safe Yard Checklist | Scoopy Doo Asheville', 'A free pet-safe yard checklist for Asheville dog owners.'],
  '/dog-park-guide': ['Asheville Dog Park Guide for Dog Owners | Scoopy Doo', "Discover Asheville's best dog parks. A local guide from Scoopy Doo."],
  '/blog': ['Pet Waste & Dog Care Blog | Scoopy Doo Asheville', 'Tips on pet waste removal, yard health, and dog care for Asheville homeowners.'],
  '/privacy-policy': ['Privacy Policy | Scoopy Doo LLC', 'Privacy policy for Scoopy Doo LLC.'],
  '/terms-of-service': ['Terms of Service | Scoopy Doo LLC', 'Terms of service for Scoopy Doo LLC pet waste removal.'],
  '/blog/professional-waste-removal-benefits': ['Benefits of Professional Pet Waste Removal | Scoopy Doo Asheville', 'Why professional dog waste removal is safer and more thorough than DIY. Scoopy Doo serves Asheville and surrounding areas weekly.'],
  '/blog/seasonal-pet-care-tips': ['Seasonal Pet Care Tips for Asheville Dog Owners | Scoopy Doo', 'Keep your yard clean and safe year-round with seasonal pet waste tips from Scoopy Doo LLC in Asheville, NC.'],
  '/blog/health-benefits-yard-cleanup': ['Health Benefits of Regular Yard Cleanup for Pet Owners | Scoopy Doo', 'Regular dog waste removal protects your family from bacteria and parasites. Learn why weekly cleanup matters for Asheville homeowners.'],
  '/blog/customer-success-stories': ['Customer Success Stories | Scoopy Doo Pet Waste Removal Asheville', 'Real stories from Asheville homeowners and HOAs who rely on Scoopy Doo for weekly pet waste removal.'],
  '/blog/diy-vs-professional': ['DIY vs Professional Dog Waste Removal | Scoopy Doo Asheville', 'Compare DIY pet waste cleanup to professional pooper scooper service in Asheville, NC. See which option saves time and money.'],
  '/blog/lawn-health-and-pet-waste': ['How Pet Waste Affects Your Lawn Health | Scoopy Doo Asheville', 'Dog waste kills grass and harms soil. Learn how regular professional cleanup protects your Asheville lawn from long-term damage.'],
  '/blog/health-risks-of-pet-waste': ['Health Risks of Unmanaged Pet Waste | Scoopy Doo Asheville', 'Dog waste carries bacteria, hookworms, roundworms, and giardia. Learn the health risks and how Scoopy Doo protects Asheville families.'],
  '/blog/pet-waste-management-guide': ['The Complete Pet Waste Management Guide for Dog Owners | Scoopy Doo', 'Everything Asheville dog owners need about pet waste management - frequency, disposal, health risks, and professional service options.'],
  '/blog/how-often-scoop-dog-poop-asheville': ['How Often Should You Scoop Dog Poop in Asheville? | Scoopy Doo', 'Weekly scooping is the gold standard. Learn why cleanup frequency matters for lawn health and family safety in Asheville, NC.'],
  '/blog/spring-pet-care-checklist': ['Spring Pet Care Checklist for Asheville Dog Owners | Scoopy Doo', 'Spring in Asheville means wet yards hiding months of pet waste. Use this checklist to get your yard cleaned up and ready.'],
  '/blog/is-dog-waste-bad-for-lawn': ['Is Dog Waste Bad for Your Lawn? | Scoopy Doo Asheville', 'Yes - dog waste kills grass and damages soil. Learn what it does to your Asheville yard and how professional cleanup helps.'],
  '/blog/benefits': ['Benefits of Professional Pet Waste Removal | Scoopy Doo', 'The health, time, and lawn-care benefits of hiring a professional pet waste removal service in Asheville, NC, and what a weekly visit actually covers.'],
  '/blog/best-pooper-scooper-services-asheville': ['Best Pooper Scooper Services in Asheville, NC | Scoopy Doo', 'Looking for the best dog poop removal in Asheville? Online quotes, on-the-way texts, gate photo confirmation. No contracts.'],
  '/blog/is-dog-poop-hurting-your-asheville-yard': ['Is Dog Poop Hurting Your Asheville Yard? | Scoopy Doo', 'Dog waste damages grass and soil over time. Find out if your Asheville yard is being harmed and how Scoopy Doo can help.'],
  '/blog/asheville-pet-waste-removal-homeowners': ['Pet Waste Removal Guide for Asheville Homeowners | Scoopy Doo', 'A complete guide for Asheville homeowners on pet waste management - health risks, lawn damage, waterway protection, and professional service.'],
  '/blog/commercial-pet-waste-removal-asheville': ['Commercial Pet Waste Removal in Asheville, NC | Scoopy Doo', 'Professional pet waste removal for apartments, HOAs, and businesses in Asheville. Flexible scheduling, no contracts.'],
  '/blog/how-often-clean-yard': ['How Often Should You Clean Your Yard of Dog Waste? | Scoopy Doo', 'Weekly is the gold standard. Learn the right cleanup frequency based on your dog count, yard size, and Asheville season.'],
  '/blog/black-mountain': ['Pet Waste Removal Tips for Black Mountain, NC | Scoopy Doo Blog', 'Scoopy Doo serves Black Mountain with thorough yard cleanup. We handle larger lots and wooded terrain every week.'],
  '/blog/dog-poop-cleanup-asheville-summer-heat': ['Dog Poop Cleanup in Asheville During Hot, Humid Weather | Scoopy Doo', 'Summer heat and humidity make dog waste more dangerous. Learn why Asheville yards need regular cleanup during the hot months and how Scoopy Doo can help.'],
  '/pricing': ['Dog Poop Removal Pricing in Asheville, NC | Scoopy Doo', 'Simple, transparent pricing for weekly, twice-weekly, bi-weekly, and one-time dog poop removal in Asheville, NC. Weekly from $20 per visit. No contracts, no hidden fees.'],
  '/hoa-pet-waste-removal-asheville': ['HOA Pet Waste Removal in Asheville, NC | Scoopy Doo', 'Common-area pet waste removal for Asheville HOAs and condo associations. Stations installed and restocked, photo proof every visit, insured, no contract.'],
  '/apartment-dog-park-cleaning-asheville': ['Apartment Dog Park Cleaning in Asheville, NC | Scoopy Doo', 'Dog run, pet relief area, and courtyard cleaning for Asheville apartment communities. Twice-weekly through daily schedules, stations serviced, no contract.'],
  '/pet-waste-station-installation-asheville': ['Pet Waste Station Installation in Asheville, NC | Scoopy Doo', 'Pet waste station installation and restocking for Asheville HOAs and apartments. Bags kept stocked, bins emptied, waste hauled off property.'],
  '/1st-scoop-free': ['Your 1st Scoop is FREE | Dog Poop Removal in Asheville, NC', 'Sign up for your first month of dog poop removal in Asheville and your first scoop is free. Weekly, bi-weekly, and one-time service. No contracts, cancel anytime.'],
  '/blog/best-dog-parks-asheville-nc': ['7 Best Dog Parks in Asheville, NC (2026 Guide) | Scoopy Doo', 'Discover the 7 best dog parks in Asheville, NC for 2026 - off-leash areas, addresses, hours, amenities, and tips for keeping your home yard just as clean.'],
  '/blog/pooper-scooper-cost-asheville': ['How Much Does Pooper Scooper Service Cost in Asheville? | Scoopy Doo', 'Scoopy Doo weekly service starts at $20 per visit for one dog. See 2026 pricing for weekly, bi-weekly, and one-time pet waste removal in Asheville NC.'],
  '/blog/weaverville': ['Pet Waste Removal in Weaverville, NC | Scoopy Doo Blog', 'Scoopy Doo serves Weaverville and Beaver Lake area homeowners. Waterfront cleanup protects the lake and your family.'],
};

const bodies = Object.assign({}, SC);

locations.forEach(function(l) {
  routes['/service/' + l.slug] = [l.seoTitle, l.seoDescription];
  bodies['/service/' + l.slug] = locationBody(l);
});

geoPosts.forEach(function(p) {
  routes['/blog/' + p.slug] = [p.metaTitle, p.description];
  bodies['/blog/' + p.slug] = postBody(p);
});

const business = businessSchema();
let count = 0;
for (const route in routes) {
  const [title, desc] = routes[route];
  const canonical = BASE + route;
  let html = setHead(template, { title, desc, canonical });
  html = setJsonLd(html, 'business', business);
  if (bodies[route]) html = setRoot(html, bodies[route]);
  const dirPath = path.join(distDir, route);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'index.html'), html);
  count++;
}
console.log('SEO inject complete: ' + count + ' pages.');
}

main().catch(function(e) {
  console.error('SEO inject warning:', e.message);
  process.exit(0);
});
