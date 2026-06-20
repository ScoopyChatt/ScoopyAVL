import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const IsDogWasteBadForLawn = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SEOHead title="Is Dog Waste Bad for Your Lawn? | Scoopy Doo Asheville" description="Dog waste kills grass, spreads parasites, and introduces toxic bacteria into your soil. Here's the science behind what's happening in your Asheville yard." canonicalUrl={`${CANONICAL_BASE_URL}/blog/is-dog-waste-bad-for-lawn`} />
    <Header />
    <main className="flex-grow py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles</Link>
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">Lawn Health</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">Is Dog Waste Bad for Your Lawn?</h1>
          <div className="flex flex-wrap items-center text-muted-foreground text-base gap-6 border-y border-border py-4">
            <div className="flex items-center font-medium"><User className="w-5 h-5 mr-2 text-primary" />Scoopy Doo Team</div>
            <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-primary" />May 2026</div>
          </div>
        </header>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p>Short answer: yes, absolutely. Dog waste is one of the most underestimated sources of lawn damage and health risk for Asheville homeowners. Despite the widespread myth that it acts as a fertilizer, dog waste is actively harmful to your grass, your soil, and your family's health.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Why Dog Waste Kills Grass</h2>
          <p>Unlike composted cow or horse manure, dog waste is highly acidic. Dogs are primarily carnivores, and their digestive systems produce waste with a very different chemical composition &mdash; one that burns rather than nourishes grass. The high nitrogen concentration in dog waste causes "nitrogen burn," creating the dead yellow and brown patches you may have noticed in spots your dog uses repeatedly.</p>
          <p>In Asheville's hot summers, this damage happens faster. Temperatures above 80°F accelerate the chemical reactions that scorch grass roots, meaning a few days of waste sitting in the same spot can kill a patch that takes weeks to recover. Consistent removal is the only way to prevent permanent damage.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">The Bacteria and Pathogen Problem</h2>
          <p>The EPA classifies dog waste as a dangerous non-point source pollutant &mdash; in the same category as toxic chemicals and oil spills. A single gram of dog feces can contain up to 23 million fecal coliform bacteria, including E. coli, Salmonella, and Campylobacter. These pathogens don't just sit on the surface. They leach into your soil and can remain viable for months or even years.</p>
          <p>Roundworm (Toxocara canis) eggs are particularly dangerous. They survive Asheville's mild winters and can infect humans through skin contact or accidental ingestion. Children playing in the yard &mdash; touching soil and then their faces &mdash; are at the highest risk. Hookworm larvae can also penetrate bare skin directly.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Water Runoff: Leaving Your Yard Behind</h2>
          <p>Asheville receives over 50 inches of rain per year. Every rainfall event carries whatever is sitting in your yard into storm drains and eventually into local waterways &mdash; including Asheville Creek and the French Broad River. Dog waste in that runoff contributes E. coli, giardia, and fecal coliform to water sources used for recreation and wildlife habitat.</p>
          <p>This isn't just a personal yard problem. It's a community environmental issue that responsible pet ownership &mdash; or professional removal &mdash; directly addresses.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">How Often Does Waste Need to Be Removed?</h2>
          <p>Most yard care experts recommend at minimum once-weekly removal for households with one or two dogs. In Asheville's warm, wet climate, more frequent removal is better. The longer waste sits, the deeper pathogens penetrate the soil and the more extensive the grass damage becomes.</p>
          <p>For homeowners who don't have time for regular yard cleanup, Scoopy Doo's weekly and bi-weekly services keep bacteria levels low, prevent nitrogen burn, and remove waste before parasites can establish in the soil.</p>

          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-2">Protect your lawn and your family.</p>
            <Link to="/quote" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">Get a free quote from Scoopy Doo →</Link>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default IsDogWasteBadForLawn;
