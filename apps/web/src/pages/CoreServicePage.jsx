
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Shield, Clock, ChevronDown } from 'lucide-react';
import SEOHead from '@/components/SEOHead.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CTAButton from '@/components/CTAButton.jsx';
import LocationSection from '@/components/LocationSection.jsx';
import { generateServiceSchema } from '@/utils/schemaGenerators.js';

const faqs = [
  {
    question: "What is Scoopy Doo and what does the service include?",
    answer: "Scoopy Doo LLC is Asheville's locally owned dog poop removal and pooper scooper service. Every visit includes a full grid-pattern yard sweep, double-bagged waste removal hauled off your property, gate closure, and a photo confirmation sent to you. No contracts &mdash; cancel or change anytime."
  },
  {
    question: "How does Scoopy Doo pet waste removal work?",
    answer: "It's simple: request a free quote online, we send you pricing based on yard size and number of dogs, and you pick a schedule. We show up on your day, text you when we're on the way, clean the entire yard, close your gate, and send a photo when done. Payment is handled online &mdash; no checks, no phone tag."
  },
  {
    question: "Do you offer a scoopy poopy service near Asheville, NC?",
    answer: "Yes &mdash; Scoopy Doo provides professional pooper scooper and scoopy poopy service throughout the Asheville metro including Arden, Fletcher, Black Mountain, Hendersonville, Fairview, Swannanoa, Weaverville, and Western North Carolina communities like Mills River, Leicester, and Mars Hill."
  },
  {
    question: "How often should I schedule dog waste removal?",
    answer: "Weekly service is our most popular option and works well for most one- or two-dog households. We also offer 2x weekly service for high-traffic yards and multiple dogs, bi-weekly for lower-use yards, and one-time cleanups if you need to start fresh before beginning a regular schedule."
  },
  {
    question: "Is Scoopy Doo dog waste removal safe for kids and pets?",
    answer: "Yes. We sanitize all scooping equipment between every yard to prevent cross-contamination. We never use harmful chemicals in your yard, and we haul all waste fully off the property. A clean yard is a safer yard &mdash; dog waste carries bacteria and parasites that are hazardous to children and other animals."
  },
  {
    question: "How much does pooper scooper service cost in Asheville?",
    answer: "Pricing is based on yard size and the number of dogs. Most Asheville homeowners pay between $15&ndash;$30 per weekly visit. The fastest way to get your exact price is to submit a free quote request &mdash; we respond the same day, usually within a few hours."
  },
  {
    question: "Do you service HOAs and apartment communities?",
    answer: "Yes. We service HOA common areas, dog-walking paths, and pet waste stations in addition to individual residential homes. We can invoice HOA boards directly and maintain visit records for compliance documentation."
  }
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-foreground hover:bg-muted/40 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 ml-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
};

const CoreServicePage = () => {
  const serviceSchema = generateServiceSchema(
    "Dog Poop Removal",
    "Professional weekly, bi-weekly, and one-time pet waste removal services.",
    "Asheville Metro",
    "$$"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        path="/"
        schema={[serviceSchema, faqSchema]}
      />
      <Helmet>
        <script src="https://elfsightcdn.com/platform.js" async></script>
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-muted/30">
          <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/a31a7ef9578ab021774966b3677f99c1.jpg')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
          <div className="container-shell relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance">Professional Dog Poop Removal & Pooper Scooper Service</h1>

            <div className="mb-10 mx-auto max-w-3xl">
              <img
                src="/hero-asheville-1.jpeg"
                alt="Dog waste removal service in action in Asheville, NC"
                title="Scoopy Doo Professional Dog Poop Removal &mdash; Asheville, NC"
                className="w-full h-auto rounded-2xl shadow-2xl border border-border/50 object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <p className="text-xl text-muted-foreground mb-10 mx-auto leading-relaxed">
              Reclaim your yard and your free time. Our professional dog waste removal services keep your outdoor spaces clean, sanitary, and ready for family fun. We scoop poop professionally so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">Get Your Free Quote</CTAButton>
              <CTAButton size="lg" variant="outline" to="/services" className="h-14 px-8 text-lg w-full sm:w-auto bg-background/50 backdrop-blur">View Services</CTAButton>
            </div>
          </div>
        </section>

        {/* Benefits Zig-Zag */}
        <section className="section-spacing">
          <div className="container-shell">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
              <div className="order-2 md:order-1">
                <h2 className="mb-6 text-3xl font-bold">Pet Waste Removal Benefits</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Leaving pet waste to accumulate isn't just an eyesore&mdash;it's a health hazard. As a dedicated poop pick up company, we know that dog waste carries harmful bacteria and parasites that can infect other pets and children.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <h3 className="text-base font-medium inline m-0">Consistent dog poop removal prevents lawn spots</h3>
                  </li>
                  <li className="flex items-center text-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <h3 className="text-base font-medium inline m-0">Eliminates foul yard odors</h3>
                  </li>
                  <li className="flex items-center text-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <h3 className="text-base font-medium inline m-0">Proper pet waste management reduces disease risk</h3>
                  </li>
                  <li className="flex items-center text-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <h3 className="text-base font-medium inline m-0">Eco-friendly waste disposal</h3>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border bg-muted">
                  <img
                    src="/hero-asheville-2.jpeg"
                    alt="Professional pooper scooper equipment used by Scoopy Doo in Asheville"
                    title="Professional Pet Waste Removal Equipment &mdash; Scoopy Doo LLC"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-spacing bg-card border-y border-border">
          <div className="container-shell">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="mb-4 text-3xl font-bold">Why Choose Our Pooper Scooper Service?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">We pride ourselves on reliability, thoroughness, and treating your yard like our own.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-muted p-8 rounded-2xl border border-border">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="mb-3 text-xl font-bold">Our Dog Poop Scooping Process</h3>
                <p className="text-muted-foreground leading-relaxed">If we ever miss a spot, let us know within 24 hours and we'll come back and re-clean it at no extra charge. We meticulously grid-walk your yard to ensure nothing is missed during our pet waste removal visits.</p>
              </div>
              <div className="bg-muted p-8 rounded-2xl border border-border">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="mb-3 text-xl font-bold">Reliable Scheduling</h3>
                <p className="text-muted-foreground leading-relaxed">We show up on your scheduled day, rain or shine. No guessing when your yard will be clean.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonial - Elfsight Google Reviews Widget */}
        <section className="py-24 bg-background">
          <div className="container-shell max-w-4xl">
            <h2 className="text-center mb-12 text-3xl font-bold">What Our Customers Say</h2>
            <div className="elfsight-app-8240dd2e-e144-493a-add7-52c8fd1b05f7" data-elfsight-app-lazy></div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/30 border-t border-border">
          <div className="container-shell max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Everything you need to know about Scoopy Doo's dog poop removal and pooper scooper service in Asheville, NC.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <LocationSection />

        {/* Final CTA */}
        <section className="py-24 bg-primary text-primary-foreground text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-primary-foreground mb-6 text-3xl md:text-4xl font-bold">Ready to Ditch the Pooper Scooper?</h2>
            <p className="text-xl font-medium text-primary-foreground/90 mb-10 leading-relaxed">
              Get a customized, transparent quote in minutes. No contracts, cancel anytime.
            </p>
            <CTAButton variant="outline" className="bg-background text-foreground border-transparent hover:bg-background/90" size="lg">
              Request Your Free Quote
            </CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoreServicePage;
