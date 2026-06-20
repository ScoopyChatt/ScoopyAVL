
import { useMemo } from 'react';
import { generateLocalBusinessSchema } from '@/utils/schemaGenerators.js';
import { seoConfig, CANONICAL_BASE_URL } from '@/config/seoConfig.js';

export const useLocationSEO = (location) => {
  return useMemo(() => {
    if (!location) return null;
    
    const title = `Pet Waste Removal in ${location.name}`;
    const description = location.description || `Professional dog poop scooping services in ${location.name}.`;
    
    // Use the non-www domain for canonical route structure
    const url = `${CANONICAL_BASE_URL}/service/${location.slug}`;
    
    const schema = generateLocalBusinessSchema({
      name: `${seoConfig.businessName} - ${location.name}`,
      url: url
    });

    return {
      title,
      description,
      keywords: location.keywords,
      canonical: url,
      schema
    };
  }, [location]);
};
