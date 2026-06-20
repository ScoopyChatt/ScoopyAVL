
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

const DogPoopRemovalPage = () => {
  const faqs = [
    { question: "How much does dog poop removal cost in Asheville?", answer: "Weekly dog poop removal starts at $20 per visit for your first dog, with twice-weekly service from $16 per visit and bi-weekly from $28. One-time cleanups start at $75. Each additional dog is a small add-on. You will see an exact price before you commit." },
    { question: "How often should I schedule dog poop removal?", answer: "Most one and two dog homes do best with weekly visits, which keeps bacteria and odor in check and protects your lawn. Busy or multi-dog yards often prefer twice-weekly service, while smaller dogs or larger lots can work well bi-weekly." },
    { question: "Do I need to be home for service?", answer: "No. As long as we can safely access your yard, you do not need to be there. We send an on-the-way text before every visit and a photo of your secured gate when we finish." },
    { question: "What if my yard has not been cleaned in a while?", answer: "No problem. We start with a one-time initial cleanup to get your yard back to a clean baseline, then keep it that way on your regular schedule." },
    { question: "Is there a contract?", answer: "Never. There are no contracts and you can pause or cancel anytime. You stay because your yard is always clean, not because you are locked in." }
  ];

  return (
    <>
      <SEOHead path="/dog-poop-removal-asheville" faqData={faqs} />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                    Professional Dog Poop Removal in Asheville, NC
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Reclaim your yard and your weekends. Scoopy Doo provides reliable, eco-friendly dog poop removal for Asheville homeowners. We show up on your scheduled day, grid-walk every inch of your yard, and haul the mess away, so you can enjoy a clean, safe outdoor space with your family and pets.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Weekly & Bi-Weekly Plans', 'One-Time Deep Cleans', 'Eco-Friendly Disposal', '100% Satisfaction Guarantee'].map((item, i) => (
                      <li key={i} className="flex items-center text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                    <Link to="/quote">Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/a31a7ef9578ab021774966b3677f99c1.jpg" alt="Scoopy Doo team providing dog poop removal services in Asheville, NC" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Intro / Benefits */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Reliable Dog Waste Removal That Protects Your Yard and Your Family</h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Leaving dog waste to pile up is more than an eyesore. It carries bacteria and parasites that can harm pets and children, burns brown spots into your grass, and washes into Asheville creeks and rivers every time it rains. Consistent dog poop removal solves all of it, and it gives you back the time you would have spent scooping.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Scoopy Doo is a locally owned pet waste removal company serving the Greater Asheville area. Whether you have one dog or five, we build a simple schedule around your yard and keep it spotless week after week, with no contracts and no surprises.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-muted/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Asheville Homeowners Choose Scoopy Doo</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">Thorough, dependable, and refreshingly simple. Here is what every visit includes.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">24-Hour Re-Clean Guarantee</h3>
                  <p className="text-muted-foreground leading-relaxed">We meticulously grid-walk your entire yard so nothing gets missed. If we ever do miss a spot, let us know within 24 hours and we will come back and re-clean it free.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Rain-or-Shine Reliability</h3>
                  <p className="text-muted-foreground leading-relaxed">We show up on your scheduled day, every time. You get an on-the-way text before each visit and a photo of your secured gate when we are done.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">No Contracts, Ever</h3>
                  <p className="text-muted-foreground leading-relaxed">Quote and pay online in minutes. Flexible weekly or bi-weekly service with transparent pricing. Pause or cancel anytime.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Band */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Simple, Transparent Pricing</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Weekly dog poop removal starts at just $20 per visit for your first dog. Prefer more frequent service? Twice-weekly visits start at $16 each. On a budget or have a smaller dog? Bi-weekly service starts at $28. Every plan includes our detailed grid-walk, eco-friendly disposal, and the 24-hour re-clean guarantee.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-balance">Dog Poop Removal FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Serving Asheville & Surrounding Communities</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide dog poop removal across Asheville, Arden, Hendersonville, Black Mountain, Fletcher, Fairview, Woodfin, Weaverville, Swannanoa, and Brevard, NC, plus Mills River, Leicester, and Mars Hill, NC. Check your address when you request a free quote.
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

export default DogPoopRemovalPage;
