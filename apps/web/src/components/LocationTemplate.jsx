
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Loader2, AlertCircle, Star, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';
import { generateLocalBusinessSchema, generateFAQPageSchema, generateBreadcrumbSchema, generateLocationSchema } from '@/utils/schemaGenerators.js';
import { locations } from '@/data/locations.js';

const LocationTemplate = ({ city: propCity }) => {
  const { slug } = useParams();
  const citySlug = propCity || slug;

  const locationData = locations.find(l =>
    l.slug.toLowerCase() === citySlug?.toLowerCase() ||
    l.id.toLowerCase() === citySlug?.toLowerCase()
  );

  if (!citySlug) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center flex flex-col items-center">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <h2 className="text-2xl font-bold mb-2">Loading Location...</h2>
            <p className="text-muted-foreground">Please wait while we fetch the service area details.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!locationData) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center flex flex-col items-center max-w-md px-4">
            <AlertCircle className="w-12 h-12 text-destructive mb-4" />
            <h2 className="text-2xl font-bold mb-2">Location Not Found</h2>
            <p className="text-muted-foreground mb-6">We could not find the service area you are looking for. We serve the greater Asheville area and Western North Carolina.</p>
            <Button asChild>
              <Link to="/service-areas">View All Service Areas</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { name, seoTitle, seoDescription, serviceDescription, localContext, neighborhoods, testimonial, benefits, faqItems } = locationData;
  const canonicalUrl = getCanonicalUrl('/service/' + locationData.slug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://scoopyavl.com/' },
    { name: 'Service Areas', url: 'https://scoopyavl.com/service-areas' },
    { name: name, url: canonicalUrl }
  ]);
  const faqSchema = faqItems && faqItems.length > 0 ? generateFAQPageSchema(faqItems) : null;
  const locationSchema = generateLocationSchema(locationData);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">
          {JSON.stringify(generateLocalBusinessSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(locationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/10 blur-3xl opacity-50 mix-blend-screen" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-900/20 blur-3xl opacity-50 mix-blend-screen" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30 shadow-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Now Serving {name} & Surrounding Areas</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                  Dog Poop Removal in {name}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                  {serviceDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                    <Link to="/quote">Get a Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-transparent border-slate-700 text-white hover:bg-slate-800 hover:text-white h-14 px-8 text-lg rounded-xl transition-all active:scale-[0.98]">
                    <a href="tel:828-844-8060">Call (828) 844-8060</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-8 bg-card border-b border-border">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "ð»", label: "Online Quotes & Pay" },
              { icon: "ð±", label: "On-the-Way Texts" },
              { icon: "ð¸", label: "Gate Photo When Done" },
              { icon: "ð«", label: "No Contracts" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-semibold text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Local Context */}
        {localContext && (
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why {name} Pet Owners Need Professional Cleanup</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{localContext}</p>
            </div>
          </section>
        )}

        {/* Neighborhoods */}
        {neighborhoods && neighborhoods.length > 0 && (
          <section className="py-12 bg-primary/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <h2 className="text-2xl font-bold text-foreground">Neighborhoods We Serve in {name}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((n, i) => (
                  <span key={i} className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-foreground font-medium">
                    {n}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Not sure if we cover your street? <Link to="/quote" className="text-primary hover:underline font-medium">Request a free quote</Link> and we will confirm your address.</p>
            </div>
          </section>
        )}

        {/* Benefits */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why {name} Chooses Scoopy Doo</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Professional, reliable pet waste removal with every detail handled for you.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium leading-snug">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {testimonial && (
          <section className="py-14 bg-primary/5 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-foreground italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-muted-foreground not-italic text-sm">&mdash; {testimonial.author}</cite>
            </div>
          </section>
        )}

        <ReviewsSection />

        {/* CTA banner */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Accepting New Clients in {name}</h2>
                  <p className="text-primary-foreground/80 text-lg">Online quote, fast scheduling, no contracts.</p>
                </div>
              </div>
              <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 h-12 px-8 rounded-xl font-semibold shadow-sm">
                <Link to="/quote">Get My Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqItems && faqItems.length > 0 && (
          <section className="pt-20 pb-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
                  {name} Pet Waste Removal FAQs
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={"item-" + index}
                    className="bg-card border border-border rounded-xl px-6 shadow-sm data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all duration-200"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        <div className="border-t border-border/50">
          <FAQSection location={name} />
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default LocationTemplate;
