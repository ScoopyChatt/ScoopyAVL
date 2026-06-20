
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import QuoteForm from '@/components/QuoteForm.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';

const QuoteRequestPage = () => {
  const canonicalUrl = getCanonicalUrl('/quote');
  const pageTitle = "Get a Free Pet Waste Removal Quote | Asheville, NC";
  const pageDesc = "Get a fast, free quote for dog poop removal in Asheville, NC. Tell us your yard size and number of dogs and we'll send pricing right away.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 pb-24 md:pb-0">
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                  Get a Free Pet Waste Removal Quote in Asheville, NC
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch] mx-auto">
                  Fill out the form below and we'll provide a customized quote for your property within 24 hours. No obligation, no pressure.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="lg:col-span-2 bg-card rounded-2xl p-8 shadow-lg border border-primary/20"
                >
                  <h2 className="text-2xl font-semibold mb-2">Your Information</h2>
                  <p className="text-sm text-muted-foreground mb-6">Please provide accurate details so we can give you the best quote.</p>
                  <QuoteForm />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-card rounded-2xl p-8 shadow-lg h-fit"
                >
                  <h2 className="text-xl font-semibold mb-6">Need help?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Call or Text</p>
                        <a href="tel:828-844-8060" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200">
                          828-844-8060
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <ReviewsSection />
        </main>

        
      <nav aria-label="Scoopy Doo site navigation" className="py-8 border-t border-border bg-muted/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Explore Scoopy Doo</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none m-0 p-0">
            <li><Link to="/" className="text-primary hover:underline font-medium text-sm">Home</Link></li>
            <li><Link to="/services" className="text-primary hover:underline font-medium text-sm">Services</Link></li>
            <li><Link to="/pricing" className="text-primary hover:underline font-medium text-sm">Pricing</Link></li>
            <li><Link to="/quote" className="text-primary hover:underline font-medium text-sm">Get a Quote</Link></li>
            <li><Link to="/faq" className="text-primary hover:underline font-medium text-sm">FAQ</Link></li>
            <li><Link to="/reviews" className="text-primary hover:underline font-medium text-sm">Reviews</Link></li>
            <li><Link to="/service-areas" className="text-primary hover:underline font-medium text-sm">Service Areas</Link></li>
            <li><Link to="/blog" className="text-primary hover:underline font-medium text-sm">Blog</Link></li>
          </ul>
        </div>
      </nav>
      <Footer />
        <FloatingCTA />
      </div>
    </>
  );
};

export default QuoteRequestPage;
