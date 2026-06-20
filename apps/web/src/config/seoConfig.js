
// ===========================================================================
// SCOOPY DOO — ASHEVILLE, NC  |  SINGLE SOURCE OF TRUTH FOR BUSINESS INFO
// ---------------------------------------------------------------------------
// >>> ITEMS MARKED "TODO: confirm" ARE STILL PLACEHOLDERS:
// >>>   - legalName  (the separate Asheville LLC name)
// >>>   - CANONICAL_BASE_URL (confirm the live domain is scoopyavl.com)
// >>>   - socialProfiles (Asheville FB/IG)
// ===========================================================================

// Domain inferred from email (info@scoopyavl.com). TODO: confirm.
export const CANONICAL_BASE_URL = 'https://www.scoopyavl.com';

export const seoConfig = {
  businessName: 'Scoopy Doo',
  legalName: 'Scoopy Doo Asheville LLC', // TODO: confirm exact registered LLC name
  phone: '828-844-8060',
  email: 'info@scoopyavl.com',
  address: {
    streetAddress: 'Asheville',
    addressLocality: 'Asheville',
    addressRegion: 'NC',
    postalCode: '28801',
    addressCountry: 'US'
  },
  geo: {
    latitude: '35.5951',
    longitude: '-82.5515'
  },
  businessHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    }
  ],
  socialProfiles: [
    'https://facebook.com/scoopyavl',   // TODO: confirm
    'https://instagram.com/scoopyavl'   // TODO: confirm
  ],
  defaultImage: '/logo-scoopy-asheville.png',
  defaultDescription: 'Professional pet waste removal and dog poop scooping services in Asheville, NC. Reliable, eco-friendly, and fully insured.',
  pages: {
    home: {
      title: 'Pet Waste Removal Asheville NC | Scoopy Doo',
      description: 'Professional pet waste removal and dog poop scooping services in Asheville, NC. Weekly, bi-weekly, and one-time cleanups available. Get a free quote!',
      canonical: `${CANONICAL_BASE_URL}/`,
      ogType: 'website'
    },
    pricing: {
      title: 'Pricing | Pet Waste Removal Service Plans | Scoopy Doo',
      description: 'Get a free quote for dog poop removal services in Asheville, NC. Transparent service plans for weekly, bi-weekly, and one-time cleanups. No hidden fees.',
      canonical: `${CANONICAL_BASE_URL}/pricing`,
      ogType: 'website'
    },
    faq: {
      title: 'FAQ | Pet Waste Removal Answers | Scoopy Doo Asheville',
      description: 'Answers to frequently asked questions about our dog poop removal services, pricing, scheduling, and service areas in the Asheville metro area.',
      canonical: `${CANONICAL_BASE_URL}/faq`,
      ogType: 'website'
    },
    'asheville-location': {
      title: 'Dog Poop Removal Asheville NC | Professional Pet Waste Service',
      description: 'Top-rated dog poop removal in Asheville, NC. We keep your yard clean, safe, and pet-waste free. Reliable, eco-friendly pooper scooper service.',
      canonical: `${CANONICAL_BASE_URL}/dog-poop-removal-asheville`,
      ogType: 'website'
    },
    services: {
      title: 'Pet Waste Removal Services | Dog Poop Cleanup | Scoopy Doo',
      description: 'Explore our dog poop removal service plans. From weekly maintenance to one-time deep cleans, we keep your Asheville yard spotless.',
      canonical: `${CANONICAL_BASE_URL}/services`,
      ogType: 'website'
    },
    about: {
      title: 'About Us | Scoopy Doo Pet Waste Removal Asheville',
      description: "Learn about Scoopy Doo, Asheville's trusted local pet waste removal company. Dedicated to giving you back your yard and your time.",
      canonical: `${CANONICAL_BASE_URL}/about`,
      ogType: 'website'
    },
    reviews: {
      title: 'Customer Reviews | Scoopy Doo Pet Waste Removal',
      description: 'Scoopy Doo is bringing 5-star pet waste removal to Asheville, NC. See why dog owners trust Scoopy Doo for weekly yard cleanups.',
      canonical: `${CANONICAL_BASE_URL}/reviews`,
      ogType: 'website'
    },
    'service-areas': {
      title: 'Service Areas | Dog Poop Removal Coverage | Scoopy Doo',
      description: 'We provide professional dog poop removal services across the Asheville metro area, including Arden, Fletcher, Hendersonville, Black Mountain, and Weaverville.',
      canonical: `${CANONICAL_BASE_URL}/service-areas`,
      ogType: 'website'
    },
    blog: {
      title: 'Pet Care & Yard Health Blog | Scoopy Doo Asheville',
      description: 'Read the latest tips on dog care, lawn maintenance, and the benefits of professional pet waste removal from the experts at Scoopy Doo.',
      canonical: `${CANONICAL_BASE_URL}/blog`,
      ogType: 'website'
    },
    'location-arden': {
      title: 'Dog Poop Removal Arden NC | Pet Waste Service | Scoopy Doo',
      description: 'Reliable dog poop scooping and pet waste removal services for homeowners in Arden, NC. Affordable weekly plans and no long-term contracts.',
      canonical: `${CANONICAL_BASE_URL}/service/arden`,
      ogType: 'website'
    },
    'location-fletcher': {
      title: 'Dog Poop Removal Fletcher NC | Scoopy Doo',
      description: 'Keep your Fletcher yard free of dog waste. Scoopy Doo provides expert pooper scooper services in Fletcher, NC. Get your free quote today.',
      canonical: `${CANONICAL_BASE_URL}/service/fletcher`,
      ogType: 'website'
    },
    'location-hendersonville': {
      title: 'Dog Poop Removal Hendersonville NC | Expert Pet Waste Cleanup',
      description: 'Professional pooper scooper services in Hendersonville, NC. We pick up where your dog left off, leaving you with a clean, safe lawn.',
      canonical: `${CANONICAL_BASE_URL}/service/hendersonville`,
      ogType: 'website'
    },
    'location-black-mountain': {
      title: 'Dog Poop Removal Black Mountain NC | Scoopy Doo',
      description: 'Trusted dog waste removal services in Black Mountain, NC. Weekly yard cleanups to protect your family and pets from harmful bacteria.',
      canonical: `${CANONICAL_BASE_URL}/service/black-mountain`,
      ogType: 'website'
    },
    'service-weekly': {
      title: 'Weekly Dog Poop Removal Service | Scoopy Doo Asheville',
      description: 'Our most popular service! Keep your yard consistently clean with our affordable weekly dog poop removal plans in Asheville.',
      canonical: `${CANONICAL_BASE_URL}/services#weekly`,
      ogType: 'website'
    },
    'service-one-time': {
      title: 'One-Time Yard Cleanup | Dog Poop Removal | Scoopy Doo',
      description: 'Need a deep clean before a party or spring reset? Our one-time pet waste removal service gets your yard back in top shape fast.',
      canonical: `${CANONICAL_BASE_URL}/one-time-cleanup`,
      ogType: 'website'
    }
  }
};
