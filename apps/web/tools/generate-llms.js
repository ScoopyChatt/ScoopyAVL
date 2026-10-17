#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { BUSINESS, SERVICE_AREA_TEXT, PRICE_TEXT, VISIT_STEPS, PROMISES } from "../src/data/business.js";
import { locations } from "../src/data/locations.js";
import { geoPosts } from "../src/data/geoPosts.js";

// Writes public/llms.txt, the plain-text summary AI assistants read. Business facts,
// service-area pages, and the GEO posts come from src/data so they match the site;
// the other pages are listed below by hand. Excluded: OAuth callbacks, /thank-you.

const SUMMARY =
  "Scoopy Doo AVL is a locally owned dog poop removal and pooper scooper service in Asheville, NC. " +
  "It serves " + SERVICE_AREA_TEXT + ", with weekly, twice-weekly, every-other-week, and one-time " +
  "pet waste removal for homes, plus common-area and pet waste station service for HOAs and apartment communities. " +
  "Quotes and payment are 100% online at scoopyavl.com/quote, every visit includes an on-the-way text and a gate photo, " +
  "and there are no contracts.";

// [url, title, description]
const PAGES = [
  ["/", "Dog Poop Removal & Pooper Scooper Service | Asheville NC", "Professional dog poop removal and pooper scooper service in Asheville, NC. Reliable weekly pet waste cleanup with online quotes, on-the-way texts, and gate photo confirmation."],
  ["/services", "Pet Waste Removal Services in Asheville, NC | Scoopy Doo", "Weekly, bi-weekly, one-time, commercial, and HOA pet waste removal in Asheville, NC. Professional dog poop scooping with online quotes and gate photo confirmation."],
  ["/service-areas", "Service Areas | Pet Waste Removal Around Asheville, NC", "Every town Scoopy Doo AVL serves, with a page for each: Asheville, West Asheville, Downtown Asheville, Arden, Fletcher, Hendersonville, Black Mountain, Weaverville, Fairview, Candler, Swannanoa, Woodfin, Mills River, Biltmore Forest, and Brevard, NC."],
  ["/about", "About Scoopy Doo | Asheville Pet Waste Removal", "Scoopy Doo AVL, the locally owned pet waste removal company in Asheville, NC, and the service standards behind every visit."],
  ["/faq", "Pet Waste Removal FAQs | Scoopy Doo Asheville", "Answers to common questions about dog poop removal in Asheville: pricing, scheduling, service area, what to expect on each visit, and more."],
  ["/quote", "Get a Free Pet Waste Removal Quote | Asheville, NC", "Get a fast, free quote for dog poop removal in Asheville, NC. No contracts required."],
  ["/one-time-cleanup", "One-Time Dog Poop Cleanup in Asheville, NC | Scoopy Doo", "Get a one-time dog poop cleanup in Asheville, NC. Perfect for spring cleaning, first-time service, or move-out yard prep."],
  ["/how-it-works", "How It Works | Scoopy Doo Pet Waste Removal Asheville", "Easy online quotes, secure online payment, on-the-way texts, and gate photo proof after every visit. Working with Scoopy Doo is simple."],
  ["/near-me", "Pooper Scooper Service Near Me in Asheville, NC", "Looking for a pooper scooper service near you in Asheville? Scoopy Doo offers reliable local dog waste removal."],
  ["/blog", "Pet Waste and Dog Care Blog | Scoopy Doo Asheville", "Tips on pet waste removal, yard health, and dog care for Asheville homeowners."],
  ["/dog-poop-removal-asheville", "Dog Poop Removal in Asheville, NC | Scoopy Doo LLC", "Professional dog poop removal in Asheville, NC. Dependable weekly service, fully insured."],
  ["/pet-waste-removal-asheville", "Pet Waste Removal in Asheville, NC | Scoopy Doo", "Expert pet waste removal in Asheville, NC for homes, HOAs and businesses. Request a free quote."],
  ["/dog-poop-scooping-asheville", "Dog Poop Scooping Service in Asheville, NC | Scoopy Doo", "Reliable dog poop scooping in Asheville, NC. Weekly and bi-weekly pooper scooper service."],
  ["/yard-cleanup-asheville", "Yard Cleanup for Pet Owners in Asheville, NC | Scoopy Doo", "Complete yard cleanup for pet owners in Asheville, NC. Book a one-time or recurring cleanup."],
  ["/privacy-policy", "Privacy Policy | Scoopy Doo LLC", "Privacy policy for Scoopy Doo LLC, the pet waste removal company serving Asheville, NC."],
  ["/terms-of-service", "Terms of Service | Scoopy Doo LLC", "Terms of service for Scoopy Doo LLC pet waste removal in Asheville, NC."],
  ["/blog/professional-waste-removal-benefits", "Benefits of Professional Pet Waste Removal | Scoopy Doo Asheville", "Why professional dog waste removal is safer and more thorough than DIY. Scoopy Doo serves Asheville and surrounding areas weekly."],
  ["/blog/seasonal-pet-care-tips", "Seasonal Pet Care Tips for Asheville Dog Owners | Scoopy Doo", "Keep your yard clean and safe year-round with seasonal pet waste tips from Scoopy Doo LLC in Asheville, NC."],
  ["/blog/health-benefits-yard-cleanup", "Health Benefits of Regular Yard Cleanup for Pet Owners | Scoopy Doo", "Regular dog waste removal protects your family from bacteria and parasites. Learn why weekly cleanup matters for Asheville homeowners."],
  ["/blog/customer-success-stories", "Customer Success Stories | Scoopy Doo Pet Waste Removal Asheville", "Real stories from Asheville homeowners and HOAs who rely on Scoopy Doo for weekly pet waste removal."],
  ["/blog/diy-vs-professional", "DIY vs Professional Dog Waste Removal | Scoopy Doo Asheville", "Compare DIY pet waste cleanup to professional pooper scooper service in Asheville, NC. See which option saves time and money."],
  ["/blog/lawn-health-and-pet-waste", "How Pet Waste Affects Your Lawn Health | Scoopy Doo Asheville", "Dog waste kills grass and harms soil. Learn how regular professional cleanup protects your Asheville lawn from long-term damage."],
  ["/blog/health-risks-of-pet-waste", "Health Risks of Unmanaged Pet Waste | Scoopy Doo Asheville", "Dog waste carries bacteria, hookworms, roundworms, and giardia. Learn the health risks and how Scoopy Doo protects Asheville families."],
  ["/blog/pet-waste-management-guide", "The Complete Pet Waste Management Guide for Dog Owners | Scoopy Doo", "Everything Asheville dog owners need about pet waste management -- frequency, disposal, health risks, and professional service options."],
  ["/blog/how-often-scoop-dog-poop-asheville", "How Often Should You Scoop Dog Poop in Asheville? | Scoopy Doo", "Weekly scooping is the gold standard. Learn why cleanup frequency matters for lawn health and family safety in Asheville, NC."],
  ["/blog/spring-pet-care-checklist", "Spring Pet Care Checklist for Asheville Dog Owners | Scoopy Doo", "Spring in Asheville means wet yards hiding months of pet waste. Use this checklist to get your yard cleaned up and ready."],
  ["/blog/is-dog-waste-bad-for-lawn", "Is Dog Waste Bad for Your Lawn? | Scoopy Doo Asheville", "Yes -- dog waste kills grass and damages soil. Learn what it does to your Asheville yard and how professional cleanup helps."],
  ["/blog/best-pooper-scooper-services-asheville", "Best Pooper Scooper Services in Asheville, NC | Scoopy Doo", "Looking for the best dog poop removal in Asheville? Online quotes, on-the-way texts, gate photo confirmation. No contracts."],
  ["/blog/is-dog-poop-hurting-your-asheville-yard", "Is Dog Poop Hurting Your Asheville Yard? | Scoopy Doo", "Dog waste damages grass and soil over time. Find out if your Asheville yard is being harmed and how Scoopy Doo can help."],
  ["/blog/asheville-pet-waste-removal-homeowners", "Pet Waste Removal Guide for Asheville Homeowners | Scoopy Doo", "A complete guide for Asheville homeowners on pet waste management -- health risks, lawn damage, waterway protection, and professional service."],
  ["/blog/commercial-pet-waste-removal-asheville", "Commercial Pet Waste Removal in Asheville, NC | Scoopy Doo", "Professional pet waste removal for apartments, HOAs, and businesses in Asheville. Flexible scheduling, no contracts."],
  ["/blog/how-often-clean-yard", "How Often Should You Clean Your Yard of Dog Waste? | Scoopy Doo", "Weekly is the gold standard. Learn the right cleanup frequency based on your dog count, yard size, and Asheville season."],
  ["/blog/black-mountain", "Pet Waste Removal Tips for Black Mountain, NC | Scoopy Doo Blog", "Scoopy Doo serves Black Mountain with thorough yard cleanup. We handle larger lots and wooded terrain every week."],
  ["/blog/weaverville", "Pet Waste Removal in Weaverville, NC | Scoopy Doo Blog", "Weekly and one-time dog poop removal for Weaverville homeowners north of Asheville."],
  ["/pricing", "Dog Poop Removal Pricing in Asheville, NC | Scoopy Doo", "Published prices: weekly $20 per visit, twice weekly $18, every other week $33, one-time cleanup from $85. No contracts."],
  ["/comparison", "Pet Waste Removal Services in Asheville, NC: 2026 Comparison", "Side-by-side comparison of Asheville dog poop removal companies (Scoopy Doo AVL, DoodyCalls, Doo Doo Blues) by price, service area, and features."],
  ["/hoa-pet-waste-removal-asheville", "HOA Pet Waste Removal in Asheville, NC | Scoopy Doo", "Common-area pet waste removal and station service for Asheville HOAs and condo associations, quoted per property."],
  ["/apartment-dog-park-cleaning-asheville", "Apartment Dog Park Cleaning in Asheville, NC | Scoopy Doo", "Dog run, pet relief area, and courtyard cleaning for Asheville apartment communities."],
  ["/pet-waste-station-installation-asheville", "Pet Waste Station Installation in Asheville, NC | Scoopy Doo", "Pet waste station installation, restocking, and emptying for Asheville HOAs and apartments."],
  ["/blog/pooper-scooper-cost-asheville", "How Much Does Pooper Scooper Service Cost in Asheville?", "2026 pricing for weekly, twice-weekly, every-other-week, and one-time dog poop removal in Asheville, NC."],
  ["/blog/best-dog-parks-asheville-nc", "Best Dog Parks in Asheville, NC (2026 Guide)", "Off-leash dog parks in Asheville with locations, amenities, and tips."],
  ["/blog/dog-poop-cleanup-asheville-summer-heat", "Dog Poop Cleanup in Asheville During Hot, Humid Weather", "Why Asheville yards need regular dog waste cleanup in summer."],
];

for (const l of locations) {
  PAGES.push(["/service/" + l.slug, l.seoTitle, l.seoDescription]);
}
for (const p of geoPosts) {
  PAGES.push(["/blog/" + p.slug, p.title, p.description]);
}

function main() {
  const lines = [
    "# Scoopy Doo AVL - Dog Poop Removal in Asheville, NC",
    "",
    "> " + SUMMARY,
    "",
    "## Key facts",
    "- Business: " + BUSINESS.name + ", locally owned, Asheville, NC",
    "- Phone/text: " + BUSINESS.phone + " | Email: " + BUSINESS.email,
    "- Website and online quote: https://www.scoopyavl.com/quote",
    "- Prices: " + PRICE_TEXT,
    "- Service area: " + SERVICE_AREA_TEXT,
    "- Every visit: " + VISIT_STEPS.join("; ") + ".",
    "- Policies: " + PROMISES.join("; ") + ".",
    "",
    "## Pages",
  ];
  const seen = new Set();
  for (const [url, title, desc] of PAGES) {
    if (seen.has(url)) continue;
    seen.add(url);
    lines.push("- [" + title + "](https://www.scoopyavl.com" + url + "): " + desc);
  }

  const outputPath = path.join(process.cwd(), "public", "llms.txt");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, lines.join("\n") + "\n", "utf8");
  console.log("llms.txt written: " + seen.size + " pages");
}

const isMain = import.meta.url === ("file://" + process.argv[1]);
if (isMain) {
  main();
}
