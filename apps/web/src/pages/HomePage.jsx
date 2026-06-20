
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle2, Leaf, ClipboardCheck, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import PetSafeChecklistCTA from '@/components/PetSafeChecklistCTA.jsx';
import CustomGoogleReviewsCarousel from '@/components/CustomGoogleReviewsCarousel.jsx';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';

const HomePage = () => {
  const services = [{
    title: 'Weekly Service',
    description: 'Keep your yard consistently clean with our most popular dog waste removal option.',
    benefits: ['Scheduled weekly visits', 'Complete yard cleanup', 'Waste disposal included', 'Flexible scheduling'],
    mostPopular: true
  }, {
    title: '2X Weekly Service',
    description: 'Twice weekly professional cleaning service for homes that need more frequent pet waste removal.',
    benefits: ['Two visits per week', 'Maximum yard cleanliness', 'Perfect for multiple pets', 'Ideal for high-traffic yards']
  }, {
    title: 'Bi-Weekly Service',
    description: 'Perfect balance of cleanliness and affordability for smaller yards needing a scoop poop service.',
    benefits: ['Every two weeks service', 'Thorough yard inspection', 'Eco-friendly disposal', 'Easy online booking']
  }, {
    title: 'One-Time Cleanup',
    description: 'Deep cleaning pooper scooper service for special occasions or seasonal needs.',
    benefits: ['Comprehensive cleanup', 'Same-day availability', 'No commitment required', 'Perfect for events']
  }];

  const canonicalUrl = getCanonicalUrl('/');

  return (
    <>
      <Helmet>
        <title>Dog Poop Removal & Pooper Scooper Service | Asheville NC</title>
        <meta name="description" content="Professional dog poop removal & pooper scooper service in Asheville, NC. Reliable weekly pet waste cleanup. Get your free quote from Scoopy Doo today." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Dog Poop Removal & Pooper Scooper Service | Asheville NC" />
        <meta property="og:description" content="Professional dog poop removal & pooper scooper service in Asheville, NC. Reliable weekly pet waste cleanup. Get your free quote from Scoopy Doo today." />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 relative pb-24 md:pb-0">
          <section className="relative flex flex-col items-center bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="w-full flex justify-center mb-8"
              >
                <img 
                  src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/7f889d94bae15b826df9c1daf461a7b9.png" 
                  alt="Scoopy Doo LLC - Professional dog poop removal service in Asheville" 
                  title="Scoopy Doo Pet Waste Removal Logo"
                  className="w-[180px] md:w-[220px] h-auto object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full max-w-4xl mx-auto mb-10 px-4 sm:px-0"
              >
                <div className="relative aspect-[4/3] sm:aspect-video md:aspect-[2.35/1] overflow-hidden rounded-2xl shadow-2xl border border-border/50 bg-muted">
                  <img
                    src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/a31a7ef9578ab021774966b3677f99c1.jpg"
                    alt="Professional pooper scooper service cleaning a yard in Asheville, NC"
                    title="Dog Poop Removal Service in Action"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }} 
                className="max-w-4xl mx-auto text-center mt-4 mb-16"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                  Dog Poop Removal in Asheville, NC
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-[65ch] mx-auto">
                  Spend more time enjoying your yard and less time cleaning it. Our reliable <Link to="/services" className="text-primary hover:underline">pooper scooper service</Link> keeps your outdoor space clean, safe, and ready for your family and pets. We specialize in professional <Link to="/dog-poop-removal-asheville" className="text-primary hover:underline">dog poop removal</Link> and comprehensive <Link to="/pet-waste-removal-asheville" className="text-primary hover:underline">pet waste removal</Link> services.
                </p>
                <p className="text-base font-medium text-primary mb-10">
                  Proudly Serving the Asheville North Carolina Metro Area
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button asChild size="lg" className="bg-[#FF9E30] text-white hover:bg-[#FF9E30]/90 transition-all duration-200 active:scale-[0.98] h-14 px-8 text-lg rounded-xl shadow-xl w-full sm:w-auto">
                    <Link to="/quote" className="flex items-center">
                      <ClipboardCheck className="mr-2 h-5 w-5" />
                      Get Your Free Pooper Scooper Quote
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98] h-14 px-8 text-lg rounded-xl w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                    <Link to="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-10 bg-card border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center gap-2 p-4">
                  <span className="text-3xl">⭐</span>
                  <div className="font-extrabold text-lg text-foreground">5-Star Rated</div>
                  <div className="text-sm text-muted-foreground">on Google Reviews</div>
                </div>
                <div className="flex flex-col items-center gap-2 p-4">
                  <span className="text-3xl">👨‍👧</span>
                  <div className="font-extrabold text-lg text-foreground">Family Owned</div>
                  <div className="text-sm text-muted-foreground">Local father & daughter team</div>
                </div>
                <div className="flex flex-col items-center gap-2 p-4">
                  <span className="text-3xl">📍</span>
                  <div className="font-extrabold text-lg text-foreground">17+ Communities</div>
                  <div className="text-sm text-muted-foreground">Asheville metro & North NC</div>
                </div>
                <div className="flex flex-col items-center gap-2 p-4">
                  <span className="text-3xl">🚫</span>
                  <div className="font-extrabold text-lg text-foreground">No Contracts</div>
                  <div className="text-sm text-muted-foreground">Cancel or change anytime</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border/50 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Online quotes & payment</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> On-the-way text before every visit</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Gate photo sent when done</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Residential, commercial & HOA service</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Fully insured & equipment sanitized</span>
              </div>
            </div>
          </section>

          <section className="py-24 bg-background border-b border-border/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }} 
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">What Our Customers Say</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Don't just take our word for it. See why pet owners across Asheville trust us with their yards.
                </p>
              </motion.div>
              
              <CustomGoogleReviewsCarousel />
            </div>
          </section>

          <section className="py-24 bg-muted/30 border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Expert Dog Poop Scooping & Pet Waste Removal</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Choose the service plan that fits your needs. As a leading poop pick up company, we provide custom quotes for all our clients. Whether you need regular dog waste removal or a <Link to="/one-time-cleanup" className="text-primary hover:underline">one-time scoop poop service</Link>, we've got you covered.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {services.map((service, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                    <ServiceCard {...service} />
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button asChild variant="outline" size="lg" className="transition-all duration-200 active:scale-[0.98] h-12 px-8 rounded-xl bg-background">
                  <Link to="/quote" className="flex items-center">
                    Ready to get started? Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-24 bg-background border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">About Scoopy Doo</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Scoopy Doo LLC was founded with a simple mission: to give Asheville homeowners their weekends back. We understand that while you love your dogs, cleaning up after them is a chore that often falls to the bottom of the to-do list.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    As a locally owned and operated business, we take pride in serving our community. From <Link to="/service/arden" className="text-primary hover:underline">dog poop removal in Arden</Link> to <Link to="/service/hendersonville" className="text-primary hover:underline">pet waste cleanup in Hendersonville</Link>, our dedicated team ensures your yard is safe, sanitary, and ready for play.
                  </p>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-xl">
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg" alt="Scoopy Doo founder and team" title="About Scoopy Doo LLC" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/20 border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-2xl font-bold mb-8">Areas We Serve</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/service/arden" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors">Arden</Link>
                <Link to="/service/fletcher" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors">Fletcher</Link>
                <Link to="/service/black-mountain" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors">Black Mountain</Link>
                <Link to="/service/hendersonville" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors">Hendersonville</Link>
                <Link to="/service/fairview" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors">Fairview</Link>
                <Link to="/service/mills-river" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors">Mills River, NC</Link>
                <Link to="/service/brevard" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors">Brevard, NC</Link>
              </div>
            </div>
          </section>

          <PetSafeChecklistCTA />

          <section className="py-20 bg-primary text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Connect With Us</h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                  See what our customers are saying and connect with us on Google Business Profile
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 transition-all duration-200 active:scale-[0.98] h-14 px-8 rounded-xl">
                    <a href="https://share.google/juT9kR9tE6VIxxUCj" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View on Google
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 active:scale-[0.98] h-14 px-8 rounded-xl">
                    <Link to="/quote">Get a Free Quote</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
};

export default HomePage;
