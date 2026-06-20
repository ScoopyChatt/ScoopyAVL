import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Building2, Leaf, Droplets, CalendarCheck, RotateCcw, Star, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import { Button } from '@/components/ui/button';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="text-center mb-12">
    {Icon && <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4"><Icon className="w-7 h-7 text-primary" /></div>}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const ServicesPage = () => {
  const canonicalUrl = getCanonicalUrl('/services');

  const plans = [
    {
      title: 'Weekly Service',
      description: "Our most popular option. We visit once a week and remove all waste from your yard &mdash; every time, without fail.",
      benefits: ['Prevents buildup and odor between visits', 'Best for homes with 2+ dogs', 'Scheduled to the same day each week', 'Waste hauled fully off property'],
      mostPopular: true
    },
    {
      title: '2X Weekly Service',
      description: "For high-traffic yards and multi-dog households that need maximum cleanliness.",
      benefits: ['Two visits per week', 'Maximum yard cleanliness', 'Ideal for 3+ dogs or large yards', 'Great for families with young kids'],
    },
    {
      title: 'Bi-Weekly Service',
      description: "A great balance of cleanliness and value for smaller yards or single-dog homes.",
      benefits: ['Every two weeks', 'Thorough grid-pattern cleanup', 'Waste removed from property', 'Easy online scheduling'],
    },
    {
      title: 'One-Time Cleanup',
      description: "No commitment required. Perfect for moving, events, seasonal resets, or first-time visitors.",
      benefits: ['Comprehensive deep cleanup', 'No recurring commitment', 'Fast scheduling', 'Same thorough process as recurring service'],
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Pet Waste Removal Services in Asheville, NC | Scoopy Doo</title>
        <meta name="description" content="Weekly, bi-weekly, one-time, commercial, and HOA pet waste removal in Asheville, NC. Professional dog poop scooping with online quotes, on-the-way texts, and gate photo confirmation." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Pet Waste Removal Services in Asheville, NC | Scoopy Doo" />
        <meta property="og:description" content="Weekly, bi-weekly, one-time, commercial, and HOA pet waste removal in Asheville, NC. Get your free quote today." />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">Asheville, NC</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                Pet Waste Removal Services in Asheville, NC
              </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">Weekly, bi-weekly, one-time, commercial, and HOA service &mdash; all with online quotes, on-the-way texts, and gate photo confirmation. No contracts, ever.</p>
            <Button asChild size="lg" className="rounded-xl px-8 h-14 text-base font-bold">
              <Link to="/quote">Get Your Free Quote</Link>
            </Button>
          </motion.div>
        </section>

        {/* Service Plans */}
        <section className="py-24 bg-muted/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader icon={CalendarCheck} title="Recurring Service Plans" subtitle="Pick the frequency that fits your household. All plans include waste removal from the property, on-the-way text alerts, and gate photo confirmation." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {plans.map((plan, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <ServiceCard {...plan} />
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="rounded-xl px-8 h-12 font-bold">
                <Link to="/quote">Get Pricing for My Yard</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* One-Time and First-Time */}
        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader icon={RotateCcw} title="One-Time & First-Time Cleanups" subtitle="Not ready for recurring service? No problem. We offer standalone cleanups for any situation." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">One-Time Cleanup</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">Perfect for moving in or out, hosting an event, seasonal yard resets, or just trying us out before committing to regular service. Same thorough grid-pattern process as recurring visits &mdash; all waste removed from the property.</p>
                <ul className="space-y-2 mb-6">
                  {["No commitment or contract required", "Waste fully removed from property", "Gate secured and photo sent when done", "Usually scheduled within 2-5 days"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-xl font-semibold">
                  <Link to="/one-time-cleanup">Learn More About One-Time Service</Link>
                </Button>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">First-Time Deep Clean</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">If your yard has been unmanaged for weeks or months, we start with a thorough deep clean to get it back to baseline before beginning regular service. Overgrown yards and accumulated waste are never a problem &mdash; we handle it all.</p>
                <ul className="space-y-2 mb-6">
                  {["Handles heavily accumulated waste", "Grid-pattern search covers every inch", "Fresh start before recurring service begins", "Priced based on yard size and waste level"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-xl font-semibold">
                  <Link to="/quote">Request a First-Time Cleanup</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial */}
        <section className="py-24 bg-muted/30 border-y border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader icon={Building2} title="Commercial Pet Waste Removal" subtitle="Professional service for businesses, apartment communities, dog parks, and multi-property accounts." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">Scoopy Doo serves commercial properties throughout the Asheville metro and Western North Carolina. We work with apartment complexes, HOA communities, veterinary offices, dog daycares, pet-friendly businesses, and municipal dog parks to maintain clean, safe outdoor environments.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">Commercial pet waste management is about more than aesthetics &mdash; it is about liability, tenant satisfaction, and regulatory compliance. Unmanaged pet waste in shared spaces creates health risks and generates resident complaints. Professional, scheduled service is the most reliable solution.</p>
                <ul className="space-y-3">
                  {[
                    "Apartment complexes and multi-family communities",
                    "HOA common areas, dog-walking paths, and green spaces",
                    "Veterinary offices and pet care facilities",
                    "Dog daycares and boarding facilities",
                    "Municipal and private dog parks",
                    "Corporate campuses with pet-friendly policies"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">What Commercial Service Includes</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Flexible scheduling", desc: "Daily, several times per week, or weekly &mdash; based on usage levels." },
                    { title: "Complete waste removal", desc: "All waste hauled off-site, not collected into on-site bins." },
                    { title: "Equipment sanitation", desc: "Tools sanitized between every property to prevent contamination." },
                    { title: "Service records", desc: "Documentation of every visit for HOA boards and property managers." },
                    { title: "Direct billing", desc: "Invoice-based billing for commercial accounts." }
                  ].map((item, i) => (
                    <li key={i} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <div className="font-semibold text-foreground text-sm">{item.title}</div>
                      <div className="text-muted-foreground text-sm">{item.desc}</div>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-xl font-bold mt-6">
                  <Link to="/quote">Request Commercial Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* HOA and Pet Waste Stations */}
        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader icon={Sparkles} title="HOA & Apartment Pet Waste Stations" subtitle="We install, stock, and service pet waste stations so your community stays compliant and clean &mdash; with zero effort from management." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">Pet waste stations &mdash; the bag dispensers and waste receptacles you see in well-managed communities &mdash; are only effective if they are stocked and emptied consistently. Scoopy Doo provides full-service station management so HOA boards and property managers can set it and forget it.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">Communities with active pet waste programs see fewer complaints, higher resident satisfaction, and better compliance with pet policies. We help Asheville area HOAs build and maintain programs that actually work.</p>
                <ul className="space-y-3">
                  {[
                    "Station placement consulting for new communities",
                    "Bag restocking on regular scheduled visits",
                    "Waste receptacle emptying and removal",
                    "Common area cleanup around stations",
                    "Service documentation for HOA records",
                    "Flat-rate commercial pricing for easy budgeting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-2">For HOA Boards</h3>
                  <p className="text-muted-foreground text-sm">We work directly with HOA boards on scheduling, invoicing, and service documentation. If you are struggling with pet waste rule enforcement, professional service in common areas is the fastest path to compliance.</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-2">For Property Managers</h3>
                  <p className="text-muted-foreground text-sm">Reduce resident complaints and protect property values with a consistent pet waste program. We handle scheduling, execution, and documentation &mdash; you handle everything else.</p>
                </div>
                <Button asChild className="w-full rounded-xl font-bold">
                  <Link to="/quote">Get HOA or Apartment Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Deodorizing and Sanitizing */}
        <section className="py-24 bg-muted/30 border-y border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader icon={Droplets} title="Deodorizing & Yard Sanitizing" subtitle="Remove odors and kill bacteria in the ground &mdash; not just the waste itself." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">Pet waste removal eliminates the source of the problem, but the bacteria and odor compounds it leaves behind in the soil can persist long after the waste is gone. Deodorizing and sanitizing treatments neutralize those residual effects and leave your yard genuinely clean &mdash; not just visually clean.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">This service is especially valuable for yards with years of accumulated contamination, areas near patios or high-traffic zones, or properties being prepared for sale or events. Ask about adding it to your regular service plan.</p>
                <ul className="space-y-3">
                  {[
                    "Neutralizes odor compounds in soil and grass",
                    "Kills bacteria and pathogens left after removal",
                    "Safe for pets, children, and lawn health",
                    "Especially effective near patios and high-use areas",
                    "Can be added to recurring service visits",
                    "Recommended for first-time or deep-clean situations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <Droplets className="w-16 h-16 text-primary mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-bold text-foreground mb-3">Ask About Add-On Sanitizing</h3>
                <p className="text-muted-foreground text-sm mb-6">Deodorizing and sanitizing is available as a standalone service or as an add-on to any recurring plan. Mention it when requesting your quote.</p>
                <Button asChild className="w-full rounded-xl font-bold">
                  <Link to="/quote">Request a Quote with Sanitizing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Health and Safety */}
        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader icon={AlertTriangle} title="Why Pet Waste Is a Health and Safety Issue" subtitle="Dog waste is not just unpleasant. It is classified by the EPA as a pollutant &mdash; and it creates real risks for your family." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "It carries dangerous pathogens",
                  body: "A single gram of dog waste contains up to 23 million fecal coliform bacteria. Dog waste also commonly carries roundworms, hookworms, giardia, E. coli, and salmonella &mdash; many of which can infect humans, especially children who play on the ground."
                },
                {
                  title: "It damages your lawn",
                  body: "Dog waste is highly acidic and kills grass on contact, creating the brown dead spots you see in yards. Unlike cattle manure, dog waste is not a fertilizer &mdash; it is a toxin that degrades soil health and destroys turf over time."
                },
                {
                  title: "It pollutes local waterways",
                  body: "Rain washes dog waste from yards into storm drains that flow directly to rivers, lakes, and streams. The EPA lists dog waste alongside herbicides and insecticides as a major nonpoint source of water pollution. In Asheville, that means the French Broad River."
                }
              ].map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6">
                  <AlertTriangle className="w-8 h-8 text-amber-500 mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">The Safest Yard Is a Clean Yard</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Regular professional pet waste removal eliminates the bacteria, parasite risk, and environmental pollution associated with unmanaged dog waste. It is the single most effective thing you can do to make your yard genuinely safe for your children and pets.</p>
              <Button asChild size="lg" className="rounded-xl px-8 font-bold">
                <Link to="/quote">Start Weekly Service Today</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Lawn and environment benefits */}
        <section className="py-16 bg-primary/5 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground text-center italic mb-4 max-w-3xl mx-auto">
              "I had dead patches everywhere from years of dog waste. After six months of weekly service the grass is recovering and the kids actually use the yard again."
            </blockquote>
            <p className="text-center text-muted-foreground">&mdash; Hendersonville customer, weekly service since 2024</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Reclaim Your Yard?</h2>
            <p className="text-lg opacity-90 mb-8">Get a free quote in under 2 minutes. We serve all of Asheville and surrounding areas including Arden, Hendersonville, Fairview, Black Mountain, Fletcher, Woodfin, Weaverville, Mills River, Mars Hill, Leicester, and Swannanoa.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-xl px-10 h-14 text-base font-bold">
                <Link to="/quote">Get My Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl px-10 h-14 text-base font-bold border-white/40 text-white hover:bg-white/10">
                <a href="tel:828-844-8060">Call (828) 844-8060</a>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
