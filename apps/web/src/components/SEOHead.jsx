
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoMetadata, getBlogPostMetadata } from '@/config/seoMetadata.js';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';
import { generateLocalBusinessSchema, generateArticleSchema, generateFAQPageSchema } from '@/utils/schemaGenerators.js';

const SEOHead = ({ 
  path,
  title, 
  description, 
  canonicalUrl, 
  schema, 
  image, 
  type, 
  noindex,
  // Blog specific props
  articleMetadata,
  // FAQ specific
  faqData
}) => {
  let baseMeta = {};
  
  if (articleMetadata) {
    baseMeta = getBlogPostMetadata(articleMetadata);
  } else if (path && seoMetadata[path]) {
    baseMeta = seoMetadata[path];
  }

  const finalTitle = title || baseMeta.title || "Dog Poop Removal & Pooper Scooper Service | Asheville NC";
  const finalDescription = description || baseMeta.description || "Professional pet waste removal and dog poop scooping services in Asheville, NC.";
  const finalCanonical = canonicalUrl || baseMeta.canonical || `${CANONICAL_BASE_URL}${path || ''}`;
  const finalImage = image || baseMeta.image || "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg";
  const finalType = type || baseMeta.ogType || "website";
  const shouldNoindex = noindex || baseMeta.noindex || false;

  const inputSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const schemasToRender = [...inputSchemas];

  // Auto-inject schemas based on props/path
  const hasLocalBiz = schemasToRender.some(s => s['@type'] === 'LocalBusiness');
  if (!hasLocalBiz) {
    schemasToRender.push(generateLocalBusinessSchema());
  }

  if (articleMetadata) {
    const hasArticle = schemasToRender.some(s => s['@type'] === 'BlogPosting' || s['@type'] === 'Article');
    if (!hasArticle) {
      schemasToRender.push(generateArticleSchema(
        baseMeta.title,
        baseMeta.description,
        baseMeta.datePublished,
        baseMeta.datePublished,
        baseMeta.author,
        articleMetadata.content || "",
        finalImage,
        finalCanonical
      ));
    }
  }

  
// Auto-inject BlogPosting schema for /blog/ pages not covered by articleMetadata
const isBlogPost = finalCanonical.includes('/blog/') && finalCanonical !== `${CANONICAL_BASE_URL}/blog`;
if (isBlogPost) {
  const hasArticle = schemasToRender.some(s => s['@type'] === 'BlogPosting' || s['@type'] === 'Article');
  if (!hasArticle) {
    schemasToRender.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": finalTitle.replace(' | Scoopy Doo', '').replace(' | Scoopy Doo LLC', ''),
      "description": finalDescription,
      "author": {
        "@type": "Organization",
        "name": "Scoopy Doo LLC",
        "url": "https://www.scoopyavl.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Scoopy Doo LLC",
        "url": "https://www.scoopyavl.com",
        "logo": { "@type": "ImageObject", "url": "https://www.scoopyavl.com/scoopy-logo.png" }
      },
      "image": finalImage,
      "url": finalCanonical,
      "mainEntityOfPage": { "@type": "WebPage", "@id": finalCanonical }
    });
  }
}

  if (faqData) {
    const hasFaq = schemasToRender.some(s => s['@type'] === 'FAQPage');
    if (!hasFaq) {
      schemasToRender.push(generateFAQPageSchema(faqData));
    }
  }

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalCanonical} />
      {shouldNoindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:site_name" content="Scoopy Doo LLC" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* Schema.org JSON-LD structured data injection */}
      {schemasToRender.map((s, i) => (
        <script key={`schema-${i}`} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
