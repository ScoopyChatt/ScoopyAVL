
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';
import { locations } from '@/data/locations.js';

const ServiceAreasPage = () => {
  const canonicalUrl = getCanonicalUrl('/service-areas');
  const pageTitle = "Service Areas | Dog Poop Removal Coverage | Scoopy Doo";
  const pageDesc = "We provide professional dog poop removal services across the Asheville metro area, including Arden, Fletcher, Hendersonville, and Western North Carolina.";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Header />

      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Pooper Scooper & Dog Waste Removal Services Near You</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide professional pet waste removal services across the Greater Asheville Metro Area and Western North Carolina. Find a reliable poop pick up company in your neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div 
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  to={`/service/${location.slug}`}
                  className="block p-6 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-md transition-all group h-full"
                >
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{location.name} Pooper Scooper Service</h2>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{location.description} We offer top-tier dog waste removal services in this area.</p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    View Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceAreasPage;
