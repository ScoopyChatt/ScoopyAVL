import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const BestPooperScooperServicesAsheville = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SEOHead title="Best Pooper Scooper Services in Asheville | Scoopy Doo" description="Looking for the best pooper scooper service in Asheville? Here's what to look for &mdash; and why Scoopy Doo is the area's top-rated choice." canonicalUrl={`${CANONICAL_BASE_URL}/blog/best-pooper-scooper-services-asheville`} />
    <Header />
    <main className="flex-grow py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles</Link>
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">Local Guide</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">Best Pooper Scooper Services in Asheville</h1>
          <div className="flex flex-wrap items-center text-muted-foreground text-base gap-6 border-y border-border py-4">
            <div className="flex items-center font-medium"><User className="w-5 h-5 mr-2 text-primary" />Scoopy Doo Team</div>
            <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-primary" />Apr 2026</div>
          </div>
        </header>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p>Asheville has a growing population of dog owners &mdash; and with that comes the need for reliable, professional pet waste removal. If you've been doing it yourself or putting it off entirely, you're not alone. But how do you find the right pooper scooper service for your home? Here's what to look for.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">What Makes a Great Pooper Scooper Service?</h2>
          <p>Not all yard cleanup services are created equal. When evaluating options in the Asheville area, here are the key factors that separate professional operations from fly-by-night alternatives:</p>
          <ul className="space-y-3 my-4">
            {[
              'Grid-pattern scooping &mdash; not just a walk-through. Every corner of your yard should be checked.',
              'Waste removed from your property entirely &mdash; not just bagged and left by the gate.',
              'Consistent scheduling &mdash; weekly or bi-weekly service you can rely on.',
              'Local ownership &mdash; a company with roots in the Asheville community that stands behind its work.',
              'Transparent pricing &mdash; no hidden fees, no contracts required.',
              'Verified customer reviews &mdash; especially from neighborhoods you recognize.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Service Areas to Look For</h2>
          <p>The best Asheville pooper scooper services cover a wide footprint &mdash; including the suburbs where dog ownership rates are highest. Look for coverage in Fairview, Arden, Hendersonville, Black Mountain, Fletcher, Mills River, and Weaverville, not just downtown zip codes.</p>
          <p>Scoopy Doo serves all of these areas and more. If you're not sure whether your neighborhood is covered, the fastest way to find out is to request a free quote &mdash; turnaround is usually the same day.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Weekly vs. Bi-Weekly: What's Right for You?</h2>
          <p>For most Asheville households with one or two dogs, weekly service is the sweet spot &mdash; enough to keep bacteria and odor under control without being excessive. If you have three or more dogs, a small yard, or young children who play outside regularly, weekly is strongly recommended.</p>
          <p>Bi-weekly works well for single-dog households with larger yards, especially if the dog tends to use the same area consistently. One-time cleanups are also available for spring cleaning, move-outs, pre-event yard prep, or simply trying the service before committing to a schedule.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Why Scoopy Doo?</h2>
          <p>Scoopy Doo is Asheville's locally owned and operated pet waste removal company. We serve residential yards, HOAs, apartment complexes, and commercial properties throughout the greater Asheville area. Our customers consistently mention three things: thoroughness, reliability, and the fact that we actually haul the waste away rather than leaving bagged waste behind.</p>
          <p>We're also fully insured, we use sanitized equipment between yards, and we offer flexible scheduling with no long-term contracts. Most customers find that having a clean yard &mdash; without doing the work themselves &mdash; makes the service worth every dollar within the first visit.</p>

          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-2">See why Asheville dog owners choose Scoopy Doo.</p>
            <Link to="/quote" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">Get your free quote →</Link>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default BestPooperScooperServicesAsheville;
