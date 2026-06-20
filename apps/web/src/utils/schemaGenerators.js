// Schema.org structured data generators for Scoopy Doo LLC

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://scoopyavl.com/#business",
    "name": "Scoopy Doo LLC",
    "alternateName": "Scoopy Chatt",
    "description": "Professional dog poop removal and pet waste cleanup service in Asheville, NC and surrounding areas. Weekly, bi-weekly, and one-time service for residential and commercial properties.",
    "url": "https://scoopyavl.com",
    "telephone": "+18288448060",
    "email": "info@scoopyavl.com",
    "image": "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/7f889d94bae15b826df9c1daf461a7b9.png",
    "logo": "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/7f889d94bae15b826df9c1daf461a7b9.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Asheville",
      "addressRegion": "NC",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.5951,
      "longitude": -82.5515
    },
    "areaServed": [
      { "@type": "City", "name": "Asheville", "addressRegion": "NC" },
      { "@type": "City", "name": "Arden", "addressRegion": "NC" },
      { "@type": "City", "name": "Hendersonville", "addressRegion": "NC" },
      { "@type": "City", "name": "Fairview", "addressRegion": "NC" },
      { "@type": "City", "name": "Fletcher", "addressRegion": "NC" },
      { "@type": "City", "name": "Woodfin", "addressRegion": "NC" },
      { "@type": "City", "name": "Black Mountain", "addressRegion": "NC" },
      { "@type": "City", "name": "Swannanoa", "addressRegion": "NC" },
      { "@type": "City", "name": "Weaverville", "addressRegion": "NC" },
      { "@type": "City", "name": "Mills River", "addressRegion": "NC" },
      { "@type": "City", "name": "Mars Hill", "addressRegion": "NC" },
      { "@type": "City", "name": "Leicester", "addressRegion": "NC" }
    ],
    "serviceType": "Pet Waste Removal",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pet Waste Removal Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Weekly Pet Waste Removal" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bi-Weekly Pet Waste Removal" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "One-Time Dog Waste Cleanup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Pet Waste Removal" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HOA Pet Waste Station Service" } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "85",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61578292444117",
      "https://www.instagram.com/scoopyavl/"
    ],
    "priceRange": "$$"
  };
}

export function generateServiceSchema(serviceName, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": serviceName + " | Scoopy Doo LLC",
    "description": description,
    "url": url,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://scoopyavl.com/#business",
      "name": "Scoopy Doo LLC"
    },
    "areaServed": {
      "@type": "State",
      "name": "North Carolina"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };
}

export function generateFAQPageSchema(faqData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question || item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer || item.a
      }
    }))
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateArticleSchema(title, description, author, datePublished, dateModified, content, image, url) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author || "Scoopy Doo Team"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://scoopyavl.com/#business",
      "name": "Scoopy Doo LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/7f889d94bae15b826df9c1daf461a7b9.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "image": image || "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg",
    "url": url,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url }
  };
}

export function generateLocationSchema(locationData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dog Poop Removal in " + locationData.name,
    "description": locationData.seoDescription,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://scoopyavl.com/#business",
      "name": "Scoopy Doo LLC"
    },
    "areaServed": {
      "@type": "City",
      "name": locationData.name
    },
    "url": "https://scoopyavl.com/service/" + locationData.slug
  };
}
