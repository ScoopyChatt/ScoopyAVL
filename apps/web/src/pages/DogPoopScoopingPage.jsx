
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

const DogPoopScoopingPage = () => {
  const faqs = [
    { question: "What does a dog poop scooping visit include?", answer: "A full grid-walk of your yard, scooping and bagging all waste, hauling it away for eco-friendly disposal, an on-the-way text before we arrive, and a photo of your secured gate when we finish." },
    { question: "Do you scoop in the rain?", answer: "Yes. We service on your scheduled day, rain or shine, so your yard stays clean no matter the weather." },
    { question: "Will you close my gate?", answer: "Always. We are careful with gates and pets on every visit, and we send you a photo of the secured gate when the job is done." },
    { question: "What if I have a large or wooded yard?", answer: "We grid-walk your yard regardless of size and quote based on the space and number of dogs, so you get a fair, accurate price." },
    { question: "Can I change my schedule later?", answer: "Anytime. There are no contracts and no penalties. You can adjust, pause, or cancel your scooping schedule whenever you need to." }
  ];

  return (
    <>
      <SEOHead path="/dog-poop-scooping-asheville" faqData={faqs} />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                    Dog Poop Scooping Service in Asheville, NC
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Scooping poop is nobody's favorite chore, so hand it to us. Scoopy Doo delivers thorough, consistent dog poop scooping across the Asheville area. We show up on schedule, grid-walk every inch of your yard, and text you when the job is done.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['No Contracts Required', 'Fully Insured Team', 'Text Notifications On Route', 'Secure Gate Closing'].map((item, i) => (
                      <li key={i} className="flex items-center text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                    <Link to="/quote">Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/a31a7ef9578ab021774966b3677f99c1.jpg" alt="Professional dog poop scooping service in Asheville, NC" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">The Pooper Scooper Service Asheville Relies On</h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Our dog poop scooping service is built around three things you can count on: we show up on schedule, we cover every inch of your yard, and we leave it cleaner than we found it. You get a heads-up text when we are on the way and a photo of your secured gate when we are done, so you know your yard is clean before you even look outside.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Locally owned and fully insured, Scoopy Doo makes pet waste one less thing to think about. Pick a schedule that fits your dogs and your life, and we handle the rest, with no contracts and the freedom to change anytime.
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 bg-muted/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How Our Scooping Process Works</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">Simple, reliable, and surprisingly satisfying.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">1. Pick Your Schedule</h3>
                  <p className="text-muted-foreground leading-relaxed">Choose weekly, twice-weekly, or bi-weekly service online in minutes, whatever fits your yard and your dogs.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">2. We Grid-Walk & Scoop</h3>
                  <p className="text-muted-foreground leading-relaxed">We methodically cover your whole yard in a grid so nothing gets missed, then scoop, bag, and haul it away.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">3. We Text You Done</h3>
                  <p className="text-muted-foreground leading-relaxed">You get a photo of your secured gate and a note that your yard is clean. Missed a spot? We re-clean within 24 hours, free.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Band */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Straightforward Scooping Prices</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Weekly scooping starts at $20 per visit for your first dog, with twice-weekly service from $16 and bi-weekly from $28. Each additional dog is a small add-on. Get your exact price online in about two minutes.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-balance">Dog Poop Scooping FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Scooping Yards Across Asheville</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We scoop in Asheville, Arden, Hendersonville, Black Mountain, Fletcher, Fairview, Woodfin, Weaverville, Swannanoa, and Brevard, NC, plus Mills River, Leicester, and Mars Hill, NC. Check your address when you request a free quote.
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

export default DogPoopScoopingPage;
