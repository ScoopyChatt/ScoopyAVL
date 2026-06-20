import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const IsDogPoopHurtingYourAshevilleYard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Is Dog Poop Hurting Your Asheville Yard?"
        description="Dog poop doesn't just smell bad &mdash; it kills grass, spreads parasites, and pollutes local water. Here's what's actually happening in your Asheville yard."
        canonicalUrl={`${CANONICAL_BASE_URL}/blog/is-dog-poop-hurting-your-asheville-yard`}
      />
      <Header />
      <main className="flex-grow py-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
          </Link>
          <header className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">Lawn Health</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">
              Is Dog Poop Hurting Your Asheville Yard?
            </h1>
            <div className="flex flex-wrap items-center text-muted-foreground text-base gap-6 border-y border-border py-4">
              <div className="flex items-center font-medium"><User className="w-5 h-5 mr-2 text-primary" />Scoopy Doo Team</div>
              <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-primary" />June 2026</div>
            </div>
          </header>
          <div className="prose prose-lg max-w-none text-foreground">
            <p>Most Asheville dog owners think of yard cleanup as a chore they'd rather skip. But dog waste isn't just an unpleasant inconvenience &mdash; it's actively doing damage to your lawn, your soil, and the local environment. Here's what's actually going on under your feet.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Myth: Dog Poop Is a Natural Fertilizer</h2>
            <p>This one gets repeated a lot, and it's mostly wrong. Cow and horse manure &mdash; when composted &mdash; can improve soil. Dog waste is different. Dogs are carnivores, and their waste is highly acidic and loaded with pathogens. It doesn't break down into useful nutrients. Instead, it introduces harmful bacteria and burns the grass directly where it sits.</p>
            <p>If you've noticed dead yellow or brown patches in your yard, especially in the same spots repeatedly, dog waste is likely the cause.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Nitrogen Burn: The Lawn-Killer You Can't See Coming</h2>
            <p>Dog poop contains high concentrations of nitrogen. A little nitrogen feeds grass. Too much &mdash; concentrated in the same spots week after week &mdash; causes "nitrogen burn," essentially scorching the roots. The result is dead patches that require reseeding, resodding, or months of recovery.</p>
            <p>In Asheville's hot summers, this process accelerates. Waste that might take weeks to damage a lawn in a cooler climate can start killing grass in days when temperatures are above 80°F.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Parasites That Outlast the Poop Itself</h2>
            <p>This is the part most people don't think about. Long after the solid waste has broken down in rain or heat, the parasite eggs it contained remain viable in your soil &mdash; sometimes for months or even years.</p>
            <p>Roundworms (Toxocara canis) are the most common. Their eggs can survive in Asheville's soil through our mild winters and infect humans through skin contact or accidental ingestion. Children who play in the yard and then touch their faces are at particular risk. Hookworm larvae can also penetrate bare feet and skin directly.</p>
            <p>Regular scooping is the only way to interrupt this cycle before eggs have a chance to hatch and spread.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Water Runoff: The Problem That Leaves Your Yard</h2>
            <p>Asheville gets over 50 inches of rain per year. Every time it rains, whatever is sitting in your yard gets picked up and carried somewhere &mdash; into storm drains, into local creeks, and eventually into the French Broad River and its tributaries.</p>
            <p>The EPA has classified dog waste as a non-point source pollutant, in the same category as fertilizer runoff and oil leaks. When waste runs off your yard, it carries E. coli, giardia, salmonella, and fecal coliform bacteria into water sources that other people &mdash; and other animals &mdash; use.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Smell Problem Is a Soil Problem</h2>
            <p>If your backyard has a persistent smell even after you clean it up, the bacteria have already worked their way into the soil. Surface-level cleanup isn't enough at that point. This typically happens after waste has been sitting for weeks or months without removal.</p>
            <p>The good news: consistent weekly removal prevents it from getting to that stage.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Fix Is Simpler Than You Think</h2>
            <p>You don't have to be outside every day picking up after your dog to protect your yard, your family, and the local waterways. A weekly professional scooping service keeps the bacteria load low, prevents nitrogen burn, and removes waste before parasites can establish themselves in the soil.</p>
            <p>Scoopy Doo serves Asheville and surrounding areas with weekly, bi-weekly, and one-time cleanup services. We walk your yard in a grid pattern &mdash; nothing gets missed &mdash; and haul the waste away entirely. Your grass stays green, your soil stays clean, and your kids can play outside without worry.</p>

            <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-lg font-semibold text-foreground mb-2">Ready for a healthier yard?</p>
              <Link to="/quote" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                Get your free quote from Scoopy Doo →
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IsDogPoopHurtingYourAshevilleYard;
