import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const HowOftenCleanYard = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SEOHead title="How Often Should You Clean Your Yard of Pet Waste? | Scoopy Doo" description="Expert guidance on cleanup frequency based on dog count, yard size, and Asheville's climate. Most experts recommend at least once a week." canonicalUrl={`${CANONICAL_BASE_URL}/blog/how-often-clean-yard`} />
    <Header />
    <main className="flex-grow py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles</Link>
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">Yard Tips</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">How Often Should You Clean Your Yard of Pet Waste?</h1>
          <div className="flex flex-wrap items-center text-muted-foreground text-base gap-6 border-y border-border py-4">
            <div className="flex items-center font-medium"><User className="w-5 h-5 mr-2 text-primary" />Scoopy Doo Team</div>
            <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-primary" />Nov 2025</div>
          </div>
        </header>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p>If you have a dog, you already know the yard doesn't clean itself. But how often is often enough? The answer depends on a few key factors — and in Asheville's climate, the stakes are higher than in most places.</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">The General Rule: Once a Week Minimum</h2>
          <p>Most veterinarians and lawn care professionals agree that weekly cleanup is the baseline for a single dog. Beyond that, frequency should scale with the number of dogs, yard size, and how much time your pets spend outside. Left longer than a week, waste builds up bacteria rapidly — especially in North Carolina's warm, humid conditions.</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">By Dog Count</h2>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>1 dog:</strong> Once per week minimum</li>
            <li><strong>2 dogs:</strong> Once or twice per week</li>
            <li><strong>3+ dogs:</strong> Twice per week or more</li>
            <li><strong>Puppies:</strong> Every 2–3 days — they go far more frequently</li>
          </ul>
          <h2 className="text-2xl font-bold mt-10 mb-4">Why Asheville's Weather Changes the Math</h2>
          <p>With over 50 inches of rain annually and summer temperatures regularly above 85°F, Asheville's climate accelerates everything. Bacteria in dog waste can double in as little as four hours during hot weather. What seems manageable after a few days becomes a genuine biohazard within a week. If your kids or pets spend time in the yard, regular removal isn't optional — it's essential.</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">The Easiest Solution</h2>
          <p>Scoopy Doo handles the math for you. Our weekly and bi-weekly plans are designed around Asheville's climate and the most common household dog counts. We show up on schedule, walk the entire yard in a grid pattern, and remove all waste from your property. No reminders, no weekend chores, no odor.</p>
          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-2">Let us handle the schedule for you.</p>
            <Link to="/quote" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">Get a free quote from Scoopy Doo →</Link>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default HowOftenCleanYard;
