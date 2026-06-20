
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ExternalLink, Shield, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import FAQAccordion from '@/components/FAQAccordion.jsx';
import SEOHead from '@/components/SEOHead.jsx';

const YardCleanupPage = () => {
  const faqs = [
    { question: "How much does a one-time yard cleanup cost in Asheville?", answer: "One-time dog waste yard cleanups start at $75 and are quoted based on your yard size and how much waste has accumulated. You will get an exact price before we begin." },
    { question: "My yard is really bad. Is that a problem?", answer: "Not at all. Heavily overdue yards are exactly what one-time cleanups are for. We grid-walk the whole space and get it back to a clean baseline in a single visit." },
    { question: "Do I have to sign up for recurring service?", answer: "No. The cleanup is fully standalone. If you would like to keep the results, ongoing weekly or bi-weekly service is one click away, with no contracts." },
    { question: "How long does a cleanup take?", answer: "It depends on yard size and buildup, but most one-time cleanups are completed in a single same-day visit." },
    { question: "Where does the waste go?", answer: "We bag everything and haul it away for responsible, eco-friendly disposal. Nothing is left behind." }
  ];

  return (
    <>
      <SEOHead path="/yard-cleanup-asheville" faqData={faqs} />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                    Dog Waste Yard Cleanup in Asheville, NC
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Sometimes a yard just needs a reset. Whether winter let things pile up, you are moving in, or it has simply been a while, our one-time dog waste yard cleanup gets your Asheville yard back to a clean baseline in a single visit, so you can enjoy your lawn again.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Spring & Fall Deep Cleans', 'Move-In & Move-Out Resets', 'Protects Lawn Health', 'Safe for Kids & Pets'].map((item, i) => (
                      <li key={i} className="flex items-center text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                    <Link to="/quote">Schedule Cleanup <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg" alt="Dog waste yard cleanup service in Asheville, NC" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Reset Your Yard, No Commitment Required</h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                A one-time yard cleanup is the fastest way to take a neglected lawn from not yet to good as new. We grid-walk your entire yard, working section by section so nothing is missed, including the spots that have been hiding for a while. Everything is bagged and hauled away for responsible, eco-friendly disposal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It is perfect for spring and fall refreshes, move-ins and move-outs, overgrown or long-neglected yards, and getting things guest-ready before a backyard event. Want to keep it clean after? Roll straight into easy weekly or bi-weekly service, with no pressure and no contract.
              </p>
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-20 bg-muted/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Perfect for a Fresh Start</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">No yard is too far gone. We get it back to baseline in one visit.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Seasonal Refreshes</h3>
                  <p className="text-muted-foreground leading-relaxed">Clear out a winter's worth of buildup in spring, or tidy up before the holidays, and start the season fresh.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Move-Ins & Events</h3>
                  <p className="text-muted-foreground leading-relaxed">Take over a yard that is truly clean, or get your backyard guest-ready before hosting friends and family.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Neglected Yards</h3>
                  <p className="text-muted-foreground leading-relaxed">Overgrown or long-overdue? That is exactly what we are here for. We grid-walk every inch until it is spotless.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Band */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">One-Time Cleanup Pricing</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                One-time yard cleanups start at $75, depending on yard size and how much waste has accumulated. Want to keep it clean? Ongoing service starts at just $20 per weekly visit for your first dog. Get an exact quote online in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                  <Link to="/quote">Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl">
                  <Link to="/pricing">See Full Pricing</Link>
                </Button>
              </div>
            </div>
          </section>

          <ReviewsSection />

          {/* FAQ */}
          <section className="py-20 bg-card border-y border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-balance">Yard Cleanup FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">One-Time & Recurring Cleanups Across Asheville</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We clean yards in Asheville, Arden, Hendersonville, Black Mountain, Fletcher, Fairview, Woodfin, Weaverville, Swannanoa, and Brevard, NC, plus Mills River, Leicester, and Mars Hill, NC. Check your address when you request a free quote.
              </p>
            </div>
          </section>

          {/* Connect With Us Section */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
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

export default YardCleanupPage;
