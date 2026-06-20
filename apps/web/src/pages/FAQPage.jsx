import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';
import { getFaqData } from '@/data/faqData.js';

const FAQPage = () => {
const faqSections = getFaqData('Asheville');
const allFaqs = faqSections.flatMap(section => section.faqs);

const canonicalUrl = getCanonicalUrl('/faq');
const pageTitle = "Pet Waste Removal FAQs | Scoopy Doo Asheville";
const pageDesc = "Answers to common questions about dog poop removal in Asheville: pricing, scheduling, service areas, gate access, pets, and more.";

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": allFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

return (
<div className="min-h-screen flex flex-col bg-background">
<Helmet>
<title>{pageTitle}</title>
<meta name="description" content={pageDesc} />
<link rel="canonical" href={canonicalUrl} />
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={pageDesc} />
<meta property="og:url" content={canonicalUrl} />
<meta name="twitter:card" content="summary" />
<script type="application/ld+json">{faqSchema}</script>
</Helmet>

<Header />

<main className="flex-grow pb-24 md:pb-0">
<section className="relative py-20 md:py-28 bg-primary/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className="max-w-3xl mx-auto text-center"
>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Frequently Asked Questions About Pet Waste Removal in Asheville, NC
              </h1>
<p className="text-xl text-muted-foreground leading-relaxed">
Everything you need to know about our professional pet waste removal services.
</p>
</motion.div>
</div>
</section>

<ReviewsSection />

<div className="md:mt-8">
<FAQSection location="Asheville" showHeader={false} />
</div>
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
<FloatingCTA />
</div>
);
};

export default FAQPage;
