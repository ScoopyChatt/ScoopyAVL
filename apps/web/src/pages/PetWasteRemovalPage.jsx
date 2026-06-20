
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

const PetWasteRemovalPage = () => {
  const faqs = [
    { question: "Do you offer pet waste removal for HOAs and apartment communities?", answer: "Yes. We provide common-area pet waste removal for HOAs, condos, and apartment communities, and we can install and restock pet waste stations. Request a custom community quote and we will tailor a plan to your property." },
    { question: "How do you price homes with multiple dogs?", answer: "Our base rates cover your first dog, with a small add-on per additional pet to account for the extra waste and time. You will always see the full price before you commit." },
    { question: "Is pet waste really a health risk?", answer: "Yes. Pet waste can carry roundworms, hookworms, giardia, and E. coli that affect both pets and people, and it pollutes local waterways. Regular removal is the simplest way to reduce that risk." },
    { question: "How do you dispose of the waste?", answer: "We bag the waste and haul it away for responsible, eco-friendly disposal. Nothing is left behind in your cans unless you prefer it that way." },
    { question: "Do you sanitize between properties?", answer: "Yes. We sanitize our equipment between yards so we never carry bacteria from one property to the next, keeping every visit safe and hygienic." }
  ];

  return (
    <>
      <SEOHead path="/pet-waste-removal-asheville" faqData={faqs} />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                    Expert Pet Waste Removal in Asheville, NC
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Pet waste is more than an eyesore, it is a health hazard. Our dedicated pet waste removal service keeps homes, multi-dog yards, HOAs, and apartment communities across Asheville clean, sanitary, and odor-free, so everyone can enjoy the outdoors safely.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Affordable Rates', 'Reliable Scheduling', 'Sanitized Equipment', 'Serving 14+ Communities'].map((item, i) => (
                      <li key={i} className="flex items-center text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                    <Link to="/quote">Book Service Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg" alt="Pet waste removal service in action in Asheville, NC" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Intro / Benefits */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Cleaner Yards, Healthier Homes and Communities</h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Left to accumulate, pet waste spreads bacteria and parasites that can harm pets and children, and it washes into Asheville waterways with every rain. Consistent pet waste removal protects your family, your pets, and your property, and it keeps shared spaces pleasant for everyone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Scoopy Doo is a locally owned company serving residential and commercial clients across the Greater Asheville area. From single-dog backyards to multi-pet households, HOAs, and apartment communities, we deliver thorough, eco-friendly pet waste management on a schedule that fits, with no contracts required.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-muted/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Built for Every Property in Asheville</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">Residential or commercial, one dog or one hundred, we keep it clean.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Health-First, Sanitary Process</h3>
                  <p className="text-muted-foreground leading-relaxed">We remove waste, then sanitize our equipment between properties so we never carry bacteria from one yard to the next.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">HOAs & Communities Welcome</h3>
                  <p className="text-muted-foreground leading-relaxed">Common-area service, pet waste station installation, and restocking available. One reliable vendor, consistent results.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Reliable, On-Time Visits</h3>
                  <p className="text-muted-foreground leading-relaxed">We arrive on your scheduled day, rain or shine, with an on-the-way text before every visit. Eco-friendly disposal included.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Band */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Transparent Pricing for Homes & Businesses</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Residential pet waste removal starts at $20 per weekly visit for your first dog, with easy add-ons for additional pets and twice-weekly service from $16 per visit. Multi-family, HOA, and commercial plans are quoted to your property size and station count. Request a tailored estimate today.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-balance">Pet Waste Removal FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Serving Homes & Businesses Across Asheville</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We serve Asheville, Arden, Hendersonville, Black Mountain, Fletcher, Fairview, Woodfin, Weaverville, Swannanoa, and Brevard, NC, plus Mills River, Leicester, and Mars Hill, NC. Check your address when you request a free quote.
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

export default PetWasteRemovalPage;
