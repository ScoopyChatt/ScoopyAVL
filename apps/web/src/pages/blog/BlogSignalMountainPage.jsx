import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const Page = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SEOHead title="Pet Waste Removal in Black Mountain, NC | Scoopy Doo" description="Scoopy Doo provides professional dog waste removal for Black Mountain, NC residents. Weekly and bi-weekly service with no contracts required." canonicalUrl={`${CANONICAL_BASE_URL}/blog/black-mountain`} />
    <Header />
    <main className="flex-grow py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles</Link>
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">Service Areas</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">Pet Waste Removal in Black Mountain, NC</h1>
          <div className="flex flex-wrap items-center text-muted-foreground text-base gap-6 border-y border-border py-4">
            <div className="flex items-center font-medium"><User className="w-5 h-5 mr-2 text-primary" />Scoopy Doo Team</div>
            <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-primary" />Nov 2025</div>
          </div>
        </header>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p>Black Mountain is known for its beautiful properties, scenic views, and tight-knit community. For dog owners living on the mountain, maintaining a clean yard is a top priority — and that's exactly what Scoopy Doo delivers.</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">Serving Black Mountain Dog Owners</h2>
          <p>We understand the unique landscape of Black Mountain. From large, wooded lots to manicured suburban lawns, our team is equipped to handle yards of all sizes. We walk your property in a grid pattern to ensure no waste is left behind — no shortcuts, no missed spots.</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">Why Regular Removal Matters on the Mountain</h2>
          <p>Black Mountain's terrain means that rainwater runoff carries bacteria from pet waste directly into the natural areas and creeks that make this community special. Proper, regular pet waste disposal protects the local environment and keeps shared green spaces safe for everyone.</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">Service Options for Black Mountain Residents</h2>
          <p>We offer weekly, bi-weekly, and one-time cleanup services. Most Black Mountain households with one or two dogs do great on our weekly plan. If you have more dogs or a smaller yard, we can customize a schedule that keeps your property consistently clean year-round — through the mountain's rainy springs, hot summers, and leafy falls.</p>
          <p>Getting started is easy: request a free quote online, and we'll typically have a response to you the same day.</p>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-2">Ready for a cleaner yard in Black Mountain?</p>
            <Link to="/quote" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">Get your free quote →</Link>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default Page;
