import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ExternalLink, Shield, Clock, MapPin, Dog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import FAQAccordion from '@/components/FAQAccordion.jsx';
import SEOHead from '@/components/SEOHead.jsx';

const ApartmentDogParkPage = () => {
  const faqs = [
    { question: "How often should an apartment dog park be cleaned?", answer: "Most Asheville communities need twice-weekly service at minimum. A fenced dog run concentrates every dog in the property onto a small patch of ground, so waste builds up far faster than it would across an equivalent area of open lawn. Properties with more than about 150 units, or a dog park under roughly a quarter acre, usually end up on a three-times-weekly or daily schedule." },
    { question: "Do you service the dog park only, or the whole property?", answer: "Either. Some communities contract just the dog run and pet relief areas, others add the courtyards, breezeway landscaping, and the grass along the parking areas. We quote them as separate line items so you can start narrow and expand once leasing sees the difference." },
    { question: "Can you service the park without closing it to residents?", answer: "Yes. Visits take a matter of minutes and we work around whoever is using the run at the time. There is no chemical application that requires clearing the area, so the park never has to be posted closed." },
    { question: "Do you handle the pet waste stations inside the park?", answer: "Yes. We install stations, keep them stocked with bags, and empty the bins on the same visit. Residents are far more likely to pick up when the dispenser is not empty, which reduces what accumulates between our visits." },
    { question: "What does apartment dog park cleaning cost in Asheville?", answer: "It is quoted per property rather than per unit, because the real drivers are the size of the run, the surface it uses, station count, and how often you want us out. Send the property address, unit count, and how many pet areas you have and we will return a written number." },
    { question: "Does the surface matter?", answer: "Yes, and it changes the approach. Turf and pea gravel hold residue and odor rather than absorbing it, so those runs benefit from more frequent visits than a grass run of the same size. Tell us the surface when you request a quote and we will size the schedule to it." }
  ];

  return (
    <>
      <SEOHead path="/apartment-dog-park-cleaning-asheville" faqData={faqs} />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                    Apartment Dog Park Cleaning in Asheville, NC
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    A pet-friendly community is a leasing advantage right up until the dog run starts to smell. Scoopy Doo AVL keeps apartment dog parks, pet relief areas, and courtyards clean on a set schedule, so your amenity stays something the leasing tour walks toward instead of around.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Twice-weekly through daily schedules', 'Stations installed, stocked, and emptied', 'No closures, no chemical downtime', 'Month to month, no contract'].map((item, i) => (
                      <li key={i} className="flex items-center text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                    <Link to="/quote">Request a Property Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/service-action-yard.jpg" alt="Dog park and pet relief area cleaning at an Asheville NC apartment community" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why dog runs fail */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Why Dog Runs Go Bad Faster Than Anyone Expects</h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                A dog park concentrates the waste of every pet in the building onto a fraction of the property. A 200-unit community with a 30 percent pet ratio can put sixty dogs through the same small run, and a single missed week is enough for residents to stop using it. Once they stop using it, they walk the dogs on the landscaping instead, and the problem spreads across the whole property.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Asheville rain compounds it. Waste left on turf or pea gravel does not break down, it liquefies and settles into the base layer, which is why a run can look clean and still smell. Frequent removal is the only thing that prevents it, and it is far cheaper than replacing a turf field that has been saturated for two seasons.
              </p>
            </div>
          </section>

          {/* What we do */}
          <section className="py-20 bg-muted/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Built Around a Leasing Calendar</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">Predictable visits, and proof they happened.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Dog className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">The Run and the Relief Areas</h3>
                  <p className="text-muted-foreground leading-relaxed">Full grid sweep of the fenced run plus the pet relief spots residents actually use, which are rarely the ones on the site plan. Waste is double-bagged and hauled off property.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Stations That Stay Stocked</h3>
                  <p className="text-muted-foreground leading-relaxed">Installed where the traffic is, restocked every visit, bins emptied so they never overflow next to the amenity you are showing prospects.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Photo Proof to the Office</h3>
                  <p className="text-muted-foreground leading-relaxed">On-the-way text before, photo confirmation after, sent to whoever runs the property. Useful the next time a resident emails the office about the dog park.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How Property Pricing Works</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Multi-family pricing is quoted per property, driven by the size and surface of the run, the number of pet waste stations, and service frequency. Send the address, unit count, and pet areas and we will return a written quote without needing a site visit first. Residents who want their own patio or private yard serviced can sign up separately from $20 per weekly visit, billed to them rather than to the property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                  <Link to="/quote">Request a Property Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl">
                  <Link to="/hoa-pet-waste-removal-asheville">HOA Service</Link>
                </Button>
              </div>
            </div>
          </section>

          <ReviewsSection />

          {/* FAQ */}
          <section className="py-20 bg-card border-y border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-balance">Apartment Dog Park Cleaning FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Properties We Serve</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We service apartment and multi-family communities in Asheville, West Asheville, Arden, Fletcher, Hendersonville, Black Mountain, Weaverville, Fairview, Candler, Swannanoa, Woodfin, Mills River, Biltmore Forest, and Brevard, NC.
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

export default ApartmentDogParkPage;
