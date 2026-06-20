
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ThumbsUp, HeartHandshake, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const ReviewsPage = () => {
  return (
    <>
      <SEOHead 
        title="Customer Reviews | Scoopy Doo Dog Poop Removal Asheville"
        description="Read customer reviews for Scoopy Doo's dog poop removal service in Asheville. Trusted, eco-friendly pet waste removal. See what clients say!"
        canonicalUrl={`${CANONICAL_BASE_URL}/reviews`}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-24 pb-0">
          {/* Hero Section */}
          <section className="bg-primary/5 py-16 md:py-24 border-b border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/noise.png')] opacity-[0.02] mix-blend-multiply pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                  Real Feedback
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-foreground">
                  See Why Asheville Trusts Us
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[65ch] mx-auto mb-8">
                  We take pride in keeping local yards clean, safe, and ready to enjoy. Discover what hundreds of homeowners have to say about our dedicated pet waste removal service.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-[#FF9E30] text-white hover:bg-[#FF9E30]/90"
                >
                  <a
                    href="https://www.google.com/maps/place/ChIJS6mO-bZgYYgRba6PiaitAAM/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Star className="w-5 h-5 fill-current" />
                    Leave Us a Review
                  </a>
                </Button>
              </motion.div>
            </div>
          </section>
          
          {/* Main Widget Section */}
          {/* The widget provides its own container and background styling */}
          <GoogleReviewsWidget />

          {/* Value Props Section */}
          <section className="py-16 bg-muted/30 border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                    <ThumbsUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Consistent Quality</h3>
                  <p className="text-muted-foreground">We never cut corners. Our team performs a thorough grid-walk of your yard every single visit.</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional Care</h3>
                  <p className="text-muted-foreground">Fully insured and deeply respectful of your property. We always ensure gates are securely locked.</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Family Owned</h3>
                  <p className="text-muted-foreground">As a local father-daughter team, we care about the Asheville community and our reputation.</p>
                </div>
              </div>
            </div>
          </section>
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
      </div>
    </>
  );
};

export default ReviewsPage;
