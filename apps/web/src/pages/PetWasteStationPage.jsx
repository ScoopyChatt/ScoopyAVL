import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ExternalLink, Shield, Clock, MapPin, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import FAQAccordion from '@/components/FAQAccordion.jsx';
import SEOHead from '@/components/SEOHead.jsx';

const PetWasteStationPage = () => {
  const faqs = [
    { question: "What is a pet waste station?", answer: "It is a post-mounted unit combining a bag dispenser, a lidded waste bin, and a sign. Residents take a bag, pick up after their dog, and deposit it in the bin rather than carrying it home or leaving it. The station only works if the bags are actually stocked and the bin is actually emptied, which is the part most properties struggle with." },
    { question: "How many stations does a property need?", answer: "The practical rule is that a resident should never be more than about a minute of walking from one. For most Asheville communities that means one at each pet relief area, one at each entrance to a dog run, and one along any greenway or loop path. A 200-unit property typically lands somewhere between four and eight." },
    { question: "Do you service stations you did not install?", answer: "Yes. If your property already has stations we will restock and empty them on a set schedule, and flag any that are rusted, broken, or badly placed. Plenty of communities have stations that stopped working simply because nobody owned refilling them." },
    { question: "How much does pet waste station installation cost in Asheville?", answer: "Installation and ongoing service are quoted together per property, based on how many stations you need, where they go, and how often you want them serviced. Send the property address and a rough count and we will return a written quote." },
    { question: "Who empties the bins?", answer: "We do, on every scheduled visit, and the waste leaves the property with us. It does not go into your community dumpster, which is what causes the odor complaints around the trash enclosure in summer." },
    { question: "Do stations actually reduce the mess?", answer: "They help, but they are not a substitute for removal. A well-placed, well-stocked station meaningfully raises the share of residents who pick up. It does not reach the ones who never will, which is why most properties pair stations with a scheduled common-area sweep." }
  ];

  return (
    <>
      <SEOHead path="/pet-waste-station-installation-asheville" faqData={faqs} />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                    Pet Waste Station Installation in Asheville, NC
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Most pet waste stations fail for the same reason: the bags run out and nobody refills them. Scoopy Doo AVL installs stations where residents actually walk, then keeps them stocked and emptied on a schedule, so the station keeps working after the first month.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Installation and ongoing service from one vendor', 'Bags restocked and bins emptied every visit', 'We service stations we did not install', 'Waste hauled off property, not to your dumpster'].map((item, i) => (
                      <li key={i} className="flex items-center text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                    <Link to="/quote">Request a Station Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/service-bags-removed.jpg" alt="Pet waste station installation and restocking in Asheville, NC" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Placement */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Placement Decides Whether a Station Gets Used</h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Stations get installed where there is room for a post, not where dogs actually go. The result is a unit at the edge of the parking lot that nobody passes and a strip of grass by the mail kiosk that everyone uses. Before we install anything we walk the property and look at where the worn paths and the existing mess are, because those tell you where residents already stop.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The second failure is restocking. An empty dispenser trains residents to stop checking, and once that habit sets in refilling it does not immediately win them back. Keeping stations stocked is unglamorous and it is most of the value, which is why we bundle it with the install rather than selling hardware and walking away.
              </p>
            </div>
          </section>

          {/* What is included */}
          <section className="py-20 bg-muted/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Install, Stock, Empty, Repeat</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">The whole lifecycle, from one vendor.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <MapPin className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Sited From a Walk-Through</h3>
                  <p className="text-muted-foreground leading-relaxed">We place stations against actual resident traffic and the existing problem areas, not against whatever the site plan shows.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Trash2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Stocked and Emptied on Schedule</h3>
                  <p className="text-muted-foreground leading-relaxed">Bags topped up and bins emptied every visit, with the waste hauled off the property rather than added to your dumpster.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Existing Stations Adopted</h3>
                  <p className="text-muted-foreground leading-relaxed">Already have units? We take over servicing them and tell you which ones are worth relocating or replacing rather than quietly billing around them.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How Station Pricing Works</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Installation and ongoing service are quoted together per property, based on station count, placement, and how often you want them serviced. Most communities pair stations with a scheduled common-area sweep, since stations raise the pickup rate but never reach every resident. Tell us the address and roughly how many you need and we will send a written quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                  <Link to="/quote">Request a Station Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl">
                  <Link to="/apartment-dog-park-cleaning-asheville">Apartment Dog Parks</Link>
                </Button>
              </div>
            </div>
          </section>

          <ReviewsSection />

          {/* FAQ */}
          <section className="py-20 bg-card border-y border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-balance">Pet Waste Station FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Where We Install</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We install and service pet waste stations in Asheville, West Asheville, Arden, Fletcher, Hendersonville, Black Mountain, Weaverville, Fairview, Candler, Swannanoa, Woodfin, Mills River, Biltmore Forest, and Brevard, NC.
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

export default PetWasteStationPage;
