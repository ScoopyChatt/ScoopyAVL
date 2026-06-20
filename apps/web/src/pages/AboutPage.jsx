import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Heart, Shield, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';
import { generateLocalBusinessSchema } from '@/utils/schemaGenerators.js';

const AboutPage = () => {
  const canonicalUrl = getCanonicalUrl('/about');

  const stats = [
    { value: "80+", label: "Five-Star Google Reviews" },
    { value: "2", label: "Branded Service Vehicles" },
    { value: "17+", label: "Communities Served" },
    { value: "100%", label: "Satisfaction Guarantee" },
  ];

  const values = [
    { title: "We show up, every time", body: "Rain, cold, heat &mdash; we are on your route every scheduled week without exception. Our customers never have to wonder if we showed up." },
    { title: "We treat your property with respect", body: "We close and photograph your gate after every visit. We sanitize our equipment between every yard. We haul all waste off your property entirely." },
    { title: "We are genuinely local", body: "We live in the Asheville area. We know the neighborhoods, the terrain, and the community. This is not a franchise &mdash; it is our business and our reputation." },
    { title: "No contracts, no games", body: "We earn your business every single week. There are no lock-in contracts, no cancellation fees, and no confusing pricing. You get what you pay for and nothing you did not agree to." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>About Scoopy Doo | Asheville Pet Waste Removal</title>
        <meta name="description" content="Meet Scoopy Doo LLC &mdash; Asheville's locally owned father and daughter pet waste removal company. 80+ five-star reviews, two branded service vehicles, serving 17+ communities." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="About Scoopy Doo | Asheville Pet Waste Removal" />
        <meta property="og:description" content="Meet Scoopy Doo LLC &mdash; Asheville's locally owned father and daughter pet waste removal company." />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(generateLocalBusinessSchema())}</script>
      </Helmet>

      <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">Locally Owned</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                About Scoopy Doo &mdash; Asheville, NC Pet Waste Removal Company
              </h1>
            <p className="text-lg md:text-xl text-muted-foreground">A father and daughter business built on showing up, doing the work right, and making Asheville yards a little cleaner every week.</p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Scoopy Doo LLC &mdash; the company behind Scoopy Chatt &mdash; was founded by a Asheville-area father and daughter who saw a real need in their community and decided to fill it. What started as a simple idea has grown into a service that hundreds of Asheville families rely on every week.</p>
                <p className="text-muted-foreground leading-relaxed mb-4">We run two branded service vehicles across 17+ communities in the Asheville metro area and Western North Carolina. Our team shows up in uniform, follows a systematic grid-pattern process on every yard, and never cuts corners &mdash; because this is our community too, and our name is on every truck.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">We built the business around a simple promise: make it easy. Online quotes. Online payment. A text when we are on the way. A photo of your secured gate when we are done. No contracts. No surprises.</p>
                <Button asChild size="lg" className="rounded-xl px-8 font-bold">
                  <Link to="/quote">Get Your Free Quote</Link>
                </Button>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
                {/* Team photo &mdash; Asheville mural */}
                <div className="rounded-2xl overflow-hidden border border-border shadow-lg aspect-[4/3] bg-muted flex items-center justify-center">
                  <img
                    src="/team-asheville-mural.jpg"
                    alt="Scoopy Doo LLC owners in front of the Asheville Scenic City mural &mdash; local pet waste removal company serving Asheville NC"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                  />
                  <div style={{display:'none'}} className="w-full h-full items-center justify-center text-muted-foreground text-sm p-8 text-center">
                    <span>Father and daughter owners &mdash; Asheville, NC</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-border shadow aspect-square bg-muted">
                    <img src="/truck-scoopydoo.jpg" alt="Scoopy Doo branded service truck" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border shadow aspect-square bg-muted">
                    <img src="/team-uniforms.jpg" alt="Scoopy Doo team in uniform" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 bg-primary/5 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">80+ Five-Star Google Reviews</h2>
            <p className="text-muted-foreground mb-8">Hundreds of Asheville families trust us with their yards every week. Here is what they say.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { quote: "I have two big dogs and a small yard. Scoopy Doo shows up every week without fail &mdash; I literally never think about it anymore.", author: "Sarah M.", location: "West Asheville" },
                { quote: "Our HOA was getting complaints about dog waste in the common areas. Scoopy Doo solved it in week one. We have had zero complaints since.", author: "HOA Board", location: "Cambridge Square, Hendersonville" },
                { quote: "I was skeptical at first but after the first visit I was sold. They get every single spot. My yard looks better than it has in years.", author: "Tony R.", location: "Woodfin" },
              ].map((review, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                  <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{review.quote}"</p>
                  <div className="text-xs text-muted-foreground font-medium">{review.author} &mdash; {review.location}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="https://share.google/sOBVeLPqRabhfffPg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                Read all our Google reviews
              </a>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 bg-card border border-border rounded-2xl p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In action photos */}
        <section className="py-12 bg-muted/30 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Scoopy Doo In Action</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/images/service-action-yard.jpg", alt: "Scoopy Doo technician cleaning a Asheville yard" },
                { src: "/images/service-bags-removed.jpg", alt: "Waste double-bagged and removed from property" },
                { src: "/images/service-luxury-home.jpg", alt: "Scoopy Doo servicing a luxury property" },
                { src: "/images/happy-customers.jpg", alt: "Happy Scoopy Doo customers with clean yard" },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-border shadow aspect-square bg-muted">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4">Ready to Meet Your New Yard Crew?</h2>
            <p className="text-lg opacity-90 mb-8">Get a free quote in under 2 minutes. We respond the same day.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-xl px-8 h-14 font-bold">
                <Link to="/quote">Get My Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl px-8 h-14 font-bold border-white/40 text-white hover:bg-white/10">
                <a href="tel:828-844-8060"><Phone className="mr-2 w-4 h-4" />Call (828) 844-8060</a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
