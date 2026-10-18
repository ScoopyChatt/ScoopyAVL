import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, MapPin, ShieldCheck, BadgeCheck, Gift, MessageSquare, Camera, CheckCircle2 } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm.jsx';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';

const PHONE = '828-844-8060';
const SOURCE = 'scoopyavl.com/1st-scoop-free';

const SERVICE_AREAS = [
  'Asheville', 'North Asheville', 'West Asheville', 'South Asheville',
  'East Asheville', 'Arden', 'Fletcher', 'Candler', 'Black Mountain',
  'Swannanoa', 'Weaverville', 'Fairview', 'Mills River', 'Hendersonville',
];

// Fall 2026 offer. Prices match the `base` values in components/QuoteForm.jsx.
// After OFFER_END, swap this page back to evergreen copy (and inject-seo.cjs).
const OFFER_END = 'November 30, 2026';

const TRUST_ITEMS = [
  { icon: BadgeCheck, label: 'Locally Owned & Operated' },
  { icon: ShieldCheck, label: 'No Contracts, Cancel Anytime' },
  { icon: MessageSquare, label: 'On-the-Way Text Every Visit' },
  { icon: Camera, label: 'Gate Photo When We Finish' },
];

const OFFER_STEPS = [
  'Choose weekly or 2X-weekly service.',
  'Pay for your first month up front.',
  'Your first visit is free: weekly plans are billed for 3 visits instead of 4, and 2X-weekly plans for 7 instead of 8.',
  'After that, pay as you go. No contracts, cancel anytime.',
];

const FirstScoopFreePage = () => {
  const canonicalUrl = getCanonicalUrl('/1st-scoop-free');
  const pageTitle = 'Fall Special: 1st Scoop FREE | Dog Poop Removal Asheville';
  const pageDesc = "Fall special through Nov 30: your first scoop is free when you prepay your first month of weekly or 2X-weekly dog poop removal in Asheville. No contracts.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        {/* Minimal header: logo + click-to-call only */}
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3 gap-4">
              <img
                src="/logo-scoopy-asheville.png"
                alt="Scoopy Doo AVL pet waste removal logo"
                className="w-[120px] md:w-[150px] h-auto object-contain"
              />
              <a
                href={`tel:${PHONE}`}
                onClick={() => window.fbq && window.fbq('track', 'Contact')}
                className="flex items-center gap-2 px-3 py-2 text-sm md:text-base font-bold text-foreground hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span>{PHONE}</span>
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* HERO + OFFER + FORM */}
          <section className="py-14 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
                  We Scoop Dog Poop
                </h1>

                {/* Eye-catching offer banner */}
                <div className="inline-flex items-center gap-3 rounded-2xl bg-primary text-primary-foreground px-6 py-4 md:px-8 md:py-5 shadow-xl shadow-primary/20 mb-6 max-w-2xl">
                  <Gift className="h-7 w-7 md:h-8 md:w-8 flex-shrink-0" />
                  <span className="text-xl md:text-2xl font-extrabold text-balance leading-snug">
                    Fall Special: Your 1st Scoop is FREE With a Weekly or 2X-Weekly Plan
                  </span>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[60ch] mx-auto">
                  Falling leaves hide what your dog leaves behind. Get your yard back before the holidays, and your first visit is on us. Offer ends {OFFER_END}.
                </p>
              </motion.div>

              {/* Compact trust row */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap justify-center gap-x-6 gap-y-3 list-none m-0 p-0 mb-10"
              >
                {TRUST_ITEMS.map((item) => (
                  <li key={item.label} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </motion.ul>

              {/* How the offer works: terms stated up front (Google Ads requires "free" offers to show conditions) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border mb-8"
              >
                <h2 className="text-2xl font-semibold mb-4">How the Offer Works</h2>
                <ul className="space-y-3 list-none m-0 p-0 mb-6">
                  {OFFER_STEPS.map((step) => (
                    <li key={step} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Weekly, 1 dog</p>
                    <p className="text-lg font-bold text-foreground">First month $60 <span className="text-sm font-normal text-muted-foreground line-through">$80</span></p>
                    <p className="text-sm text-muted-foreground">$20/visit, 3 visits billed instead of 4</p>
                  </div>
                  <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">2X weekly, 1 dog</p>
                    <p className="text-lg font-bold text-foreground">First month $126 <span className="text-sm font-normal text-muted-foreground line-through">$144</span></p>
                    <p className="text-sm text-muted-foreground">$18/visit, 7 visits billed instead of 8</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Offer valid for new weekly and 2X-weekly customers who sign up by {OFFER_END}. First month must be paid up front. Not available with bi-weekly service or one-time cleanups. Additional dogs add a small per-visit fee; your exact price is shown instantly below.
                </p>
              </motion.div>

              {/* Quote form (same component + logic, tagged with this page's source) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-primary/20"
              >
                <h2 className="text-2xl font-semibold mb-2">Claim Your Free Scoop</h2>
                <p className="text-sm text-muted-foreground mb-6">Choose weekly or 2X-weekly for an instant price and to lock in your free first scoop.</p>
                <QuoteForm source={SOURCE} />
              </motion.div>
            </div>
          </section>

        </main>

        {/* Minimal footer: phone, service areas, legal links */}
        <footer className="bg-slate-950 text-slate-300 py-10 md:py-12 mt-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <a
              href={`tel:${PHONE}`}
              onClick={() => window.fbq && window.fbq('track', 'Contact')}
              className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5 text-primary" />
              {PHONE}
            </a>

            <div>
              <p className="flex items-center justify-center gap-2 text-sm font-semibold text-white mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                Serving Asheville, NC & Western North Carolina
              </p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
                {SERVICE_AREAS.join(' \u2022 ')}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
              <span>&copy; {new Date().getFullYear()} Scoopy Doo AVL LLC</span>
              <div className="flex gap-4">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FirstScoopFreePage;
