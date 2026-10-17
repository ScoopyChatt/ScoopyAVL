// Business facts that search engines and AI assistants read. One copy, used by the
// React schema helpers AND by the build tools (inject-seo.cjs, create-static-pages.cjs,
// generate-llms.js), so the crawler-facing HTML, the JSON-LD and llms.txt cannot drift.
//
// Plain data only: no JSX and no '@/' imports, so Node can import it directly.
// Prices must match the `base` values in components/QuoteForm.jsx.

export const SITE_URL = 'https://www.scoopyavl.com';

export const BUSINESS = {
  name: 'Scoopy Doo AVL',
  phone: '828-844-8060',
  phoneE164: '+18288448060',
  email: 'info@scoopyavl.com',
  logo: SITE_URL + '/logo-scoopy-asheville.png',
  image: SITE_URL + '/hero-asheville-1.jpeg',
  quoteUrl: SITE_URL + '/quote',
  geo: { latitude: 35.5951, longitude: -82.5515 },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61578292444117',
    'https://www.instagram.com/scoopyavl/',
    'https://share.google/qZ8AFwG3qiRu6lvwi',
  ],
};

// Towns with a /service/<slug> page. Order is how they read in prose.
export const SERVICE_TOWNS = [
  'Asheville', 'West Asheville', 'Arden', 'Fletcher', 'Hendersonville', 'Black Mountain',
  'Weaverville', 'Fairview', 'Candler', 'Swannanoa', 'Woodfin', 'Mills River',
  'Biltmore Forest', 'Brevard',
];

export const SERVICE_AREA_TEXT =
  'Asheville (including West Asheville and Downtown), Arden, Fletcher, Hendersonville, ' +
  'Black Mountain, Weaverville, Fairview, Candler, Swannanoa, Woodfin, Mills River, ' +
  'Biltmore Forest, and Brevard, NC';

export const PRICES = {
  weekly: 20,
  twiceWeekly: 18,
  biweekly: 33,
  oneTime: 85,
  extraDogWeekly: 2,
};

export const PRICE_TEXT =
  'Weekly service is $20 per visit for one dog, twice-weekly is $18 per visit, ' +
  'every-other-week is $33 per visit, and one-time cleanups start at $85. ' +
  'Extra dogs add a small per-visit fee, and every price is shown instantly online at scoopyavl.com/quote.';

// What happens on every visit. These are the differentiators; keep them true.
export const VISIT_STEPS = [
  'An on-the-way text before the technician arrives',
  'The whole yard walked in a grid pattern so nothing is missed',
  'All waste bagged and hauled off the property, never left in your trash can',
  'The gate closed and a photo of the secured gate texted to you when done',
];

export const PROMISES = [
  'Quote and pay 100% online, no phone tag required',
  'No contracts and no cancellation fees, pause or cancel any time',
  'You do not need to be home',
];

const offer = (name, price, description) => ({
  '@type': 'Offer',
  priceCurrency: 'USD',
  price: String(price),
  priceSpecification: {
    '@type': 'UnitPriceSpecification',
    price: String(price),
    priceCurrency: 'USD',
    unitText: name === 'One-time yard cleanup' ? 'starting price' : 'per visit, one dog',
  },
  itemOffered: { '@type': 'Service', name, description },
});

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': SITE_URL + '/#business',
    name: BUSINESS.name,
    alternateName: ['Scoopy Doo', 'Scoopy Doo Asheville', 'Scoopy AVL'],
    description:
      'Locally owned dog poop removal and pooper scooper service in Asheville, NC. Weekly, ' +
      'twice-weekly, every-other-week, and one-time pet waste cleanup for homes, HOAs, and ' +
      'apartment communities across Buncombe, Henderson, and Transylvania counties. ' +
      'On-the-way text and gate photo every visit, quote and pay online, no contracts.',
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    priceRange: '$',
    currenciesAccepted: 'USD',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asheville',
      addressRegion: 'NC',
      postalCode: '28801',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
    areaServed: SERVICE_TOWNS.filter((t) => t !== 'West Asheville').map((name) => ({
      '@type': 'City',
      name,
      containedInPlace: { '@type': 'State', name: 'North Carolina' },
    })),
    knowsAbout: ['Dog poop removal', 'Pet waste removal', 'Pooper scooper service', 'Pet waste stations', 'HOA common area cleanup'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pet waste removal services',
      itemListElement: [
        offer('Weekly pooper scooper service', PRICES.weekly, 'Weekly dog poop removal for residential yards.'),
        offer('Twice-weekly pooper scooper service', PRICES.twiceWeekly, 'Two visits per week for multi-dog homes and small yards.'),
        offer('Every-other-week pooper scooper service', PRICES.biweekly, 'Dog poop removal every two weeks.'),
        offer('One-time yard cleanup', PRICES.oneTime, 'A single full-yard cleanup, often before starting recurring service.'),
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HOA, apartment, and pet waste station service',
            description: 'Common-area cleanup and pet waste station installation and restocking, quoted per property.',
          },
        },
      ],
    },
    sameAs: BUSINESS.sameAs,
  };
}
