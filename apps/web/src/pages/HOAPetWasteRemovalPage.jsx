import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ExternalLink, Shield, Clock, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import FAQAccordion from '@/components/FAQAccordion.jsx';
import SEOHead from '@/components/SEOHead.jsx';

const HOAPetWasteRemovalPage = () => {
  const faqs = [
    { question: "How much does HOA pet waste removal cost in Asheville?", answer: "Community pricing is quoted per property rather than from a flat rate, because cost depends on common-area acreage, how many pet waste stations you have, and how often you want them serviced. Most Asheville HOAs land on a weekly or twice-weekly common-area schedule. Send us your unit count and a rough map of the pet areas and we will return a written quote, with no site visit required to get a number." },
    { question: "Do you handle just the common areas, or individual yards too?", answer: "Both, and they are billed separately. The association contracts the common areas, greenways, and pet stations. Individual homeowners who want their own yard serviced sign up on their own and pay their own invoice, so nothing extra lands on the HOA budget." },
    { question: "Do you provide proof that the visit happened?", answer: "Yes. Every visit ends with a photo sent to your property contact, and each gate or access point is confirmed secured. Boards use it to close out resident complaints without having to walk the property themselves." },
    { question: "Are you insured, and can you provide a certificate?", answer: "Yes. Scoopy Doo AVL is fully insured and we can provide a certificate of insurance naming the association as an additional insured before service starts. Most management companies need this on file, so we send it up front." },
    { question: "Is there a contract or a minimum term?", answer: "No. Community service runs month to month and can be cancelled at any time. We would rather keep your business by showing up than by locking you into a term." },
    { question: "What happens to the waste you collect?", answer: "It is double-bagged and hauled completely off the property. It does not go into your community dumpster or trash enclosure, which is where most odor complaints start." }
  ];

  return (
    <>
      <SEOHead path="/hoa-pet-waste-removal-asheville" faqData={faqs} />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                    HOA Pet Waste Removal in Asheville, NC
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Common-area pet waste is one of the most common complaints a board hears, and one of the easiest to make disappear. Scoopy Doo AVL services greenways, courtyards, and pet relief areas for Asheville HOAs and condo associations on a fixed schedule, with photo proof after every visit.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Quoted per property, no flat-rate guessing', 'Certificate of insurance before service starts', 'Photo confirmation after every visit', 'Month to month, no contract'].map((item, i) => (
                      <li key={i} className="flex items-center text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                    <Link to="/quote">Request a Community Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/service-luxury-home.jpg" alt="Common-area pet waste removal at an Asheville NC residential community" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* The board problem */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Why Pet Waste Becomes a Board Problem</h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Signage and fines rarely fix it. A minority of residents skip the pickup, the waste accumulates along the same three or four stretches of grass, and the complaints land on the board rather than on the residents responsible. Meanwhile the waste itself is a real liability: it carries roundworms, hookworms, giardia, and E. coli, and in a rain-heavy climate like Western North Carolina it washes straight into the storm drains and the French Broad watershed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A scheduled vendor removes the argument entirely. The grounds stay clean regardless of resident behavior, the board stops mediating, and there is a dated photo record showing the association acted. For most Asheville communities the cost is a rounding error next to the landscaping line item.
              </p>
            </div>
          </section>

          {/* What is included */}
          <section className="py-20 bg-muted/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Community Service Includes</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">One vendor for the sweep, the stations, and the paperwork.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Building2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Common-Area Sweeps</h3>
                  <p className="text-muted-foreground leading-relaxed">Greenways, courtyards, dog relief areas, and the grass strips along parking. We walk them in a grid pattern rather than spot-checking, so the far corners get covered too.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Stations Installed and Restocked</h3>
                  <p className="text-muted-foreground leading-relaxed">We install pet waste stations where residents actually walk, then keep bags stocked and bins emptied on the same visit. No separate vendor and no board member buying bags.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">A Record for the Board</h3>
                  <p className="text-muted-foreground leading-relaxed">On-the-way text before the visit, photo confirmation after. Forward it straight to a resident who reports a problem and the thread ends there.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How Community Pricing Works</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Association pricing is quoted per property, based on common-area acreage, station count, and service frequency. It is not the residential rate multiplied by unit count. For reference, individual homeowners in your community can sign up separately from $20 per weekly visit for one dog, $18 per visit twice weekly, or $33 per visit every other week, billed to them rather than to the association. One-time cleanups of an overgrown common area start at $85.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                  <Link to="/quote">Request a Community Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl">
                  <Link to="/pet-waste-station-installation-asheville">Pet Waste Stations</Link>
                </Button>
              </div>
            </div>
          </section>

          <ReviewsSection />

          {/* FAQ */}
          <section className="py-20 bg-card border-y border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-balance">HOA Pet Waste Removal FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Communities We Serve</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We service associations in Asheville, West Asheville, Arden, Fletcher, Hendersonville, Black Mountain, Weaverville, Fairview, Candler, Swannanoa, Woodfin, Mills River, Biltmore Forest, and Brevard, NC. If your property is inside that footprint we can usually start within a week.
              </p>
            </div>
          </section>

          {/* Connect */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Connect With Us</h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                  See what our customers are saying on Google Business Profile
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 transition-all duration-200 active:scale-[0.98] h-14 px-8 rounded-xl">
                    <a href="https://share.google/juT9kR9tE6VIxxUCj" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View on Google
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 active:scale-[0.98] h-14 px-8 rounded-xl">
                    <Link to="/quote">Get a Free Quote</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
};

export default HOAPetWasteRemovalPage;
