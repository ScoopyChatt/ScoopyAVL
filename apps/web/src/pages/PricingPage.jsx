
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PricingTable from '@/components/PricingTable.jsx';
import FAQAccordion from '@/components/FAQAccordion.jsx';
import CTAButton from '@/components/CTAButton.jsx';
import { generatePriceRangeSchema } from '@/utils/schemaGenerators.js';

const PricingPage = () => {
  const priceRangeSchema = generatePriceRangeSchema("Dog Poop Removal Service", "16", "150", "USD");

  const pricingTiers = [
    {
      name: "2X Weekly Service",
      description: "Twice weekly professional cleaning for homes that need more frequent maintenance.",
      price: "16",
      frequency: "per visit / 1st dog",
      benefits: ["Cleaned twice per week", "Maximum yard cleanliness", "Text alert when en route", "Gates always secured"]
    },
    {
      name: "Weekly Service",
      description: "Consistent yard maintenance for a spotless lawn.",
      price: "20",
      frequency: "per visit / 1st dog",
      benefits: ["Cleaned once every week", "Perfect for 1-2 dogs", "Detailed grid walk", "Eco-friendly disposal"],
      recommended: true
    },
    {
      name: "Bi-Weekly Service",
      description: "For small dogs or large yards.",
      price: "28",
      frequency: "per visit / 1st dog",
      benefits: ["Cleaned every other week", "Budget-friendly option", "Detailed grid walk", "Gates always secured"]
    },
    {
      name: "One-Time Cleanup",
      description: "Deep clean for events or seasonal refresh.",
      price: "75",
      frequency: "base starting price",
      benefits: ["Comprehensive deep clean", "Removal of all accumulated waste", "Before event prep", "No ongoing commitment"]
    }
  ];

  const faqs = [
    { question: "Are there any hidden fees or contracts?", answer: "No! We believe in transparent pricing. There are no contracts, and you can cancel or pause service anytime." },
    { question: "How does billing work?", answer: "We securely keep a card on file and bill automatically after each service is completed. You'll receive a receipt via email." },
    { question: "Does the price change if I have multiple dogs?", answer: "Yes, our base rates shown above are for 1 dog. We charge a small additional fee per extra dog to account for the additional waste and time required to thoroughly clean your yard." },
    { question: "What if my yard is overgrown or very large?", answer: "We provide custom quotes for significantly oversized yards or properties with tall grass/weeds that make scooping significantly more difficult." },
    { question: "Do you charge extra for initial cleanups?", answer: "If it has been a long time since the yard was last cleaned, an initial spring-cleaning fee may apply to get your yard to a maintainable baseline before regular visit rates kick in." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead 
        path="/pricing"
        schema={[priceRangeSchema]}
      />
      
      <Header />

      <main className="flex-grow">
        <section className="pt-24 pb-16 bg-muted/20 border-b border-border">
          <div className="container-shell text-center max-w-3xl mx-auto">
            <h1 className="mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Fair rates based on your yard size and number of dogs. No contracts, cancel anytime.
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-shell max-w-5xl">
            <PricingTable tiers={pricingTiers} />
          </div>
        </section>

        <section className="section-spacing bg-card border-y border-border">
          <div className="container-shell max-w-3xl">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="container-shell">
            <h2 className="mb-6">Need a custom quote?</h2>
            <p className="text-muted-foreground mb-8 text-lg">Every yard is unique. Let us give you an exact price tailored to your property.</p>
            <CTAButton>Get Your Exact Price Now</CTAButton>
          </div>
        </section>
      </main>

      
      <nav aria-label="Scoopy Doo site navigation" className="py-8 border-t border-border bg-muted/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Explore Scoopy Doo</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none m-0 p-0">
            <li><Link to="/" className="text-primary hover:underline font-medium text-sm">Home</Link></li>
            <li><Link to="/services" className="text-primary hover:underline font-medium text-sm">Services</Link></li>
            <li><Link to="/pricing" className="text-primary hover:underline font-medium text-sm">Pricing</Link></li>
            <li><Link to="/quote" className="text-primary hover:underline font-medium text-sm">Get a Quote</Link></li>
            <li><Link to="/faq" className="text-primary hover:underline font-medium text-sm">FAQ</Link></li>
            <li><Link to="/reviews" className="text-primary hover:underline font-medium text-sm">Reviews</Link></li>
            <li><Link to="/service-areas" className="text-primary hover:underline font-medium text-sm">Service Areas</Link></li>
            <li><Link to="/blog" className="text-primary hover:underline font-medium text-sm">Blog</Link></li>
          </ul>
        </div>
      </nav>
      <Footer />
    </div>
  );
};

export default PricingPage;
