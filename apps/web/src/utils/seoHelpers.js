import { businessSchema, BUSINESS } from '@/data/business.js';


export const getCanonicalUrl = (path) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `https://www.scoopyavl.com${cleanPath === '/' ? '' : cleanPath}`;
};

// Same entity as schemaGenerators.js and the build-time JSON-LD; see data/business.js.
export const generateLocalBusinessSchema = () => businessSchema();

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
    "image": image || BUSINESS.image,
    "url": url
  };
};
