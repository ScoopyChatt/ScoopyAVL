
export const getCanonicalUrl = (path) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `https://scoopyavl.com${cleanPath === '/' ? '' : cleanPath}`;
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://scoopyavl.com/#business",
    "name": "Scoopy Doo LLC",
    "alternateName": "Scoopy Chatt",
    "url": "https://scoopyavl.com",
    "telephone": "+18288448060",
    "email": "info@scoopyavl.com",
    "priceRange": "$",
    "image": "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/7f889d94bae15b826df9c1daf461a7b9.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Asheville",
      "addressRegion": "NC",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "City", "name": "Asheville", "addressRegion": "NC" },
      { "@type": "City", "name": "Mills River", "addressRegion": "NC" },
      { "@type": "City", "name": "Black Mountain", "addressRegion": "NC" },
      { "@type": "City", "name": "Hendersonville", "addressRegion": "NC" },
      { "@type": "City", "name": "Weaverville", "addressRegion": "NC" },
      { "@type": "City", "name": "Woodfin", "addressRegion": "NC" },
      { "@type": "City", "name": "Leicester", "addressRegion": "NC" },
      { "@type": "City", "name": "Mars Hill", "addressRegion": "NC" }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61578292444117",
      "https://www.instagram.com/scoopyavl/"
    ]
  };
};

export const generateArticleSchema = (headline, description, author, datePublished, image, url) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author || "Scoopy Doo Team"
    },
    "datePublished": datePublished,
    "image": image || "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg",
    "url": url
  };
};
