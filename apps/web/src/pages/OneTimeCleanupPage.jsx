
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';

const OneTimeCleanupPage = () => {
  const canonicalUrl = getCanonicalUrl('/one-time-cleanup');
  const pageTitle = "One-Time Dog Poop Cleanup in Asheville, NC | Scoopy Doo";
  const pageDesc = "Overgrown yard? Get a one-time dog poop cleanup in Asheville, NC. Perfect for spring cleaning, move-outs, or first-time service. Book online.";

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

      <main className="flex-1 pb-24 md:pb-0">
        <section className="pt-24 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
                One-Time Dog Waste Cleanup in Asheville, NC &mdash; No Contract Required
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-[55ch] mx-auto font-medium mb-8">
                Perfect for special events, spring cleaning, or just getting your yard back to a manageable state.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Special Events</h3>
                <p className="text-muted-foreground">Hosting a party or family gathering? We'll make sure your yard is spotless and odor-free before guests arrive.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Spring Cleaning</h3>
                <p className="text-muted-foreground">Clear away months of accumulated winter waste and get your lawn ready for the warmer months.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">No Commitment</h3>
                <p className="text-muted-foreground">Try our service with absolutely no long-term commitment. Just a thorough, professional cleanup when you need it.</p>
              </div>
            </div>
          </div>
        </section>

        <ReviewsSection />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default OneTimeCleanupPage;
