import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const SpringPetCareChecklist = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SEOHead title="Spring Pet Care Checklist for Asheville Dog Owners | Scoopy Doo" description="Get your yard spring-ready with this complete checklist for Asheville pet owners. Toxic plants, lawn safety, waste cleanup, and more." canonicalUrl={`${CANONICAL_BASE_URL}/blog/spring-pet-care-checklist`} />
    <Header />
    <main className="flex-grow py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles</Link>
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">Tips</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">Spring Pet Care Checklist for Asheville Dog Owners</h1>
          <div className="flex flex-wrap items-center text-muted-foreground text-base gap-6 border-y border-border py-4">
            <div className="flex items-center font-medium"><User className="w-5 h-5 mr-2 text-primary" />Scoopy Doo Team</div>
            <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-primary" />Dec 2025</div>
          </div>
        </header>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p>Spring in Asheville arrives fast &mdash; and with it comes warmer weather, more time outdoors, and a backyard that's been accumulating winter waste under leaves and frost. Before your dog reclaims the yard, run through this checklist to make sure your outdoor space is safe, clean, and ready for the season.</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">Yard Safety Checklist</h2>
          {[
            { item: 'Deep-clean winter waste', detail: "Winter waste doesn't disappear &mdash; it freezes and thaws. A spring deep-clean removes months of accumulated bacteria before warmer temps accelerate bacterial growth." },
            { item: 'Check for toxic spring plants', detail: "Azaleas, sago palms, and lantana are common in Asheville landscaping and highly toxic to dogs. Walk your yard and identify anything that bloomed over winter." },
            { item: 'Inspect your fence line', detail: "Winter weather can shift fence posts and create gaps. Check every section, especially near the bottom, before letting your dog out unsupervised." },
            { item: 'Review lawn care products', detail: "Pre-emergent weed killers and fertilizers applied in spring can be dangerous to pets. Choose pet-safe formulas and keep dogs off treated areas for the recommended drying time." },
            { item: 'Schedule routine vet visits', detail: "Spring is heartworm and tick season in North Carolina. Make sure preventatives are current before outdoor time increases." },
            { item: 'Start a regular waste removal schedule', detail: "If you let cleanup slide over winter, spring is the perfect time to establish a routine &mdash; or hand it off to a professional service." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">{item.item}</p>
                <p className="text-muted-foreground text-sm mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
          <h2 className="text-2xl font-bold mt-10 mb-4">Don't Start Spring Behind on Waste</h2>
          <p>One of the biggest spring yard mistakes Asheville dog owners make is waiting too long to address winter waste buildup. By the time temperatures hit the mid-70s, bacteria from months of accumulated waste are already multiplying rapidly. A one-time spring cleanup &mdash; followed by a regular weekly schedule &mdash; gets your yard back to a healthy baseline fast.</p>
          <p>Scoopy Doo offers one-time cleanups and ongoing weekly or bi-weekly service throughout Asheville and surrounding areas. We handle the cleanup so you can focus on enjoying the season with your dog.</p>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-2">Start spring with a clean yard.</p>
            <Link to="/quote" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">Book a spring cleanup →</Link>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default SpringPetCareChecklist;
