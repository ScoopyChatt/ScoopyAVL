// Schema.org structured data generators for Scoopy Doo AVL
import { businessSchema, BUSINESS } from '@/data/business.js';

export function generateLocalBusinessSchema() {
  return businessSchema();
}

export function generateServiceSchema(serviceName, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": serviceName + " | Scoopy Doo AVL",
    "description": description,
    "url": url,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.scoopyavl.com/#business",
      "name": "Scoopy Doo AVL"
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

export function generatePriceRangeSchema(serviceName, lowPrice, highPrice, currency) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": serviceName + " | Scoopy Doo AVL",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.scoopyavl.com/#business",
      "name": "Scoopy Doo AVL"
    },
    "areaServed": { "@type": "State", "name": "North Carolina" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": currency || "USD",
      "lowPrice": lowPrice,
      "highPrice": highPrice,
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
      "@id": "https://www.scoopyavl.com/#business",
      "name": "Scoopy Doo AVL",
      "logo": {
        "@type": "ImageObject",
        "url": BUSINESS.logo
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "image": image || BUSINESS.image,
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
      "@id": "https://www.scoopyavl.com/#business",
      "name": "Scoopy Doo AVL"
    },
    "areaServed": {
      "@type": "City",
      "name": locationData.name
    },
    "url": "https://www.scoopyavl.com/service/" + locationData.slug
  };
}
