#!/usr/bin/env node
import fs from "fs";
import path from "path";

// Static manifest approach: no JSX parsing, no encoding issues.
// Update this list when new pages are added to inject-seo.cjs.
// Excluded: OAuth callback routes and utility routes.

const SUMMARY =
  "Scoopy Doo LLC is a locally owned pet waste removal company serving Asheville, NC " +
  "and surrounding areas including Arden, Fletcher, Black Mountain, Hendersonville, Fairview, " +
  "Weaverville, Brevard, Woodfin, Town Mountain (NC), and Mills River, Leicester, " +
  "Biltmore Forest, and Mars Hill (NC). Services include weekly, bi-weekly, one-time, " +
  "commercial, and HOA dog poop removal and yard cleanup. Every visit includes on-the-way " +
  "text notifications and a gate photo confirmation. No contracts required -- get a free " +
  "online quote at scoopyavl.com/quote.";

// [url, title, description]
const PAGES = [
  ["/", "Dog Poop Removal & Pooper Scooper Service | Asheville NC", "Professional dog poop removal and pooper scooper service in Asheville, NC. Reliable weekly pet waste cleanup with online quotes, on-the-way texts, and gate photo confirmation."],
  ["/services", "Pet Waste Removal Services in Asheville, NC | Scoopy Doo", "Weekly, bi-weekly, one-time, commercial, and HOA pet waste removal in Asheville, NC. Professional dog poop scooping with online quotes and gate photo confirmation."],
  ["/service-areas", "Service Areas | Pet Waste Removal Around Asheville, NC", "Scoopy Doo serves Asheville, Arden, Fletcher, Black Mountain, Hendersonville, Fairview, Weaverville, Brevard, Woodfin, Town Mountain (NC), and Mills River, Leicester, Biltmore Forest, Mars Hill (NC)."],
  ["/about", "About Scoopy Doo | Asheville Pet Waste Removal", "Meet Scoopy Doo LLC, Asheville's locally owned pet waste removal company. Learn about our mission, service standards, and why hundreds of families trust us weekly."],
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
  ["/blog/weaverville", "Pet Waste Removal in Weaverville, NC | Scoopy Doo Blog", "Scoopy Doo serves Weaverville and Beaver Lake area homeowners. Waterfront cleanup protects the lake and your family."],
];

// Location/service-area pages
const GA_LOCS = new Set(["mills-river", "biltmore-forest", "biltmore-forest", "mills-river"]);
const LOC_SLUGS = [
  "asheville", "arden", "fletcher", "black-mountain", "hendersonville", "fairview",
  "weaverville", "brevard", "candler", "swannanoa", "west-asheville", "downtown",
  "woodfin", "black-mountain",
  "mills-river", "biltmore-forest", "biltmore-forest", "mills-river"
];

for (const slug of LOC_SLUGS) {
  const city = slug.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
  const state = GA_LOCS.has(slug) ? "NC" : "NC";
  PAGES.push([
    "/service/" + slug,
    "Dog Poop Removal in " + city + ", " + state + " | Scoopy Doo",
    "Professional pet waste removal in " + city + ", " + state + ". Weekly and bi-weekly pooper scooper service from Scoopy Doo. Get your free online quote today."
  ]);
}

function main() {
  const lines = [
    "# Scoopy Doo LLC - Pet Waste Removal in Asheville, NC and Western North Carolina",
    "",
    SUMMARY,
    "",
    "## Pages"
  ];

  for (const [url, title, desc] of PAGES) {
    lines.push("- [" + title + "](" + url + "): " + desc);
  }

  const outputPath = path.join(process.cwd(), "public", "llms.txt");
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(outputPath, lines.join("\n") + "\n", "utf8");
  console.log("llms.txt written: " + PAGES.length + " pages");
}

const isMain = import.meta.url === ("file://" + process.argv[1]);
if (isMain) {
  main();
}
