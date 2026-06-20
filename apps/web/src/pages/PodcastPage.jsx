
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Headphones, Podcast, Facebook, Twitter, Linkedin, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import PodcastTranscript from '@/components/PodcastTranscript.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import SEOHead from '@/components/SEOHead.jsx';

const PodcastPage = () => {
  const schemaData = {
    "@type": "VideoObject",
    "name": "Scoopy Doo LLC Founder on Recent Podcast",
    "description": "Listen to the Scoopy Doo LLC founder discuss pet waste management, yard cleanup, and business insights on this recent podcast episode.",
    "thumbnailUrl": "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg",
    "uploadDate": "2026-05-15",
    "duration": "PT25M0S",
    "embedUrl": "https://www.youtube.com/embed/BlLL2Yzc5YI"
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead 
        path="/podcast"
        schema={schemaData} 
      />

      <Header />

      <main className="flex-1 pb-24 md:pb-0">
        <section className="pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase border border-primary/20">
                  <PlayCircle className="w-4 h-4 mr-2" /> Featured Episode
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-balance text-foreground">
                  Scoopy Doo LLC Founder on Recent Podcast
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-[55ch]">
                  Join founder Brandon Carter as he shares the origin story of Scoopy Doo, the hidden dangers of pet waste, and why professional yard cleanup is changing weekends for families in Asheville.
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Button asChild size="lg" className="bg-[#FF9E30] text-white hover:bg-[#FF9E30]/90 transition-all active:scale-[0.98]">
                    <a href="#video-player">Watch Episode</a>
                  </Button>
                  <div className="flex items-center gap-3 ml-2 border-l border-border pl-6">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Spotify"><Podcast className="w-6 h-6" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Apple Podcasts"><Headphones className="w-6 h-6" /></a>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} id="video-player" className="space-y-6">
                <div className="relative">
                  <img 
                    src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg"
                    alt="Scoopy Doo LLC founder Brandon Carter and daughter Leighton holding branded signs in front of Asheville scenic city mural with bridge, riverboat, and train"
                    className="w-full rounded-2xl shadow-xl border border-border object-cover"
                  />
                </div>
                <div className="video-container">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/BlLL2Yzc5YI" 
                    title="Scoopy Doo LLC Founder Interview" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full object-cover"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ReviewsSection />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Episode Overview</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      In this in-depth conversation, we dive into what it really takes to run a successful pet waste removal business. Brandon shares how a simple realization about weekend chores turned into Asheville's top-rated cleanup service.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Key Takeaways</h3>
                    <ul className="space-y-3 list-none p-0">
                      {[
                        "Why dog waste is toxic to your lawn and not a natural fertilizer.",
                        "The exact health risks (bacteria and parasites) lingering in an uncleaned yard.",
                        "How the father-daughter duo built a business focused on family time.",
                        "The meticulous sanitization process that prevents cross-contamination."
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                  <PodcastTranscript />
                </motion.div>
              </div>

              <div className="space-y-8">
                <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                  <h3 className="font-bold text-lg mb-4 text-foreground">Share this episode</h3>
                  <div className="flex gap-3">
                    <button className="social-share-btn" aria-label="Share on Facebook"><Facebook className="w-5 h-5" /></button>
                    <button className="social-share-btn" aria-label="Share on Twitter"><Twitter className="w-5 h-5" /></button>
                    <button className="social-share-btn" aria-label="Share on LinkedIn"><Linkedin className="w-5 h-5" /></button>
                    <button className="social-share-btn" aria-label="Share via Email"><Mail className="w-5 h-5" /></button>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
                  <h3 className="font-bold text-2xl mb-4 text-foreground">Reclaim Your Weekend</h3>
                  <p className="text-muted-foreground mb-6">Inspired by the podcast? Let us handle the dirty work so you can enjoy your yard again.</p>
                  <Button asChild size="lg" className="w-full bg-[#FF9E30] text-white hover:bg-[#FF9E30]/90">
                    <Link to="/quote">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default PodcastPage;
