
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import LocationTemplate from '@/components/LocationTemplate.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';
import { generateLocalBusinessSchema } from '@/utils/schemaGenerators.js';

const LocationPage = () => {
  const { slug } = useParams();
  
  // Format slug string (e.g., 'fairview' -> 'Fairview')
  const formattedName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Generate heavily localized Schema for this specific Service Area
  const localBizSchema = generateLocalBusinessSchema({
    name: `Scoopy Doo LLC - ${formattedName}`,
    addressLocality: formattedName,
    url: `${CANONICAL_BASE_URL}/service/${slug}`,
    description: `Professional pet waste removal and dog poop scooping service in ${formattedName}, NC.`,
    areaServed: [
      {
        "@type": "City",
        "name": formattedName
      }
    ]
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead 
        title={`Dog Poop Removal in ${formattedName} | Scoopy Doo`}
        description={`Scoopy Doo offers professional dog poop removal and yard cleanup in ${formattedName}. Get a free quote for pet waste removal today!`}
        canonicalUrl={`${CANONICAL_BASE_URL}/service/${slug}`}
        schema={[localBizSchema]}
      />
      <Header />
      <main className="flex-grow">
        <LocationTemplate locationName={formattedName} />
      </main>
      <Footer />
    </div>
  );
};

export default LocationPage;
