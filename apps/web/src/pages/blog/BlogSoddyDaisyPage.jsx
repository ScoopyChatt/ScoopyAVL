import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const Page = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SEOHead title="Pet Waste Removal in Weaverville, NC | Scoopy Doo" description="Professional dog poop removal and pet waste cleanup in Weaverville, NC. Reliable service with no long-term contracts. Get your free quote today." canonicalUrl={`${CANONICAL_BASE_URL}/blog/weaverville`} />
    <Header />
    <main className="flex-grow py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles</Link>
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">Service Areas</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">Pet Waste Removal in Weaverville, NC</h1>
          <div className="flex flex-wrap items-center text-muted-foreground text-base gap-6 border-y border-border py-4">
            <div className="flex items-center font-medium"><User className="w-5 h-5 mr-2 text-primary" />Scoopy Doo Team</div>
            <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-primary" />Nov 2025</div>
          </div>
        </header>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p>Weaverville is a growing community just north of Asheville, and dog ownership in this area has grown right along with it. For pet owners across the Weaverville area, keeping yards clean and safe is a constant challenge — especially given North Carolina's warm, wet climate.</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">Professional Cleanup in Weaverville and Surrounding Areas</h2>
          <p>Scoopy Doo serves residential neighborhoods throughout Weaverville, including properties near Beaver Lake and the surrounding communities. We handle yards of all sizes and work around your schedule — you don't even need to be home.</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">Why Pet Waste Removal Matters</h2>
          <p>In Weaverville's humid climate, dog waste left on the lawn for more than a few days begins causing real problems: nitrogen burn kills grass, bacteria multiply rapidly in the heat, and heavy rains carry pathogens into local waterways. Weekly or bi-weekly professional removal prevents all of this before it becomes a problem.</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">Flexible Plans, No Contracts</h2>
          <p>We offer weekly, bi-weekly, and one-time cleanup services with no long-term commitment required. Most Weaverville customers start with a one-time cleanup to see the difference, then sign up for recurring service. We bag and remove all waste from your property entirely — no smelly bags left by the gate.</p>
          <p>Request your free quote today and we'll have pricing to you the same day.</p>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-2">Ready for a cleaner yard in Weaverville?</p>
            <Link to="/quote" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">Get your free quote →</Link>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default Page;
