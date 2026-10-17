import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';

import { providers as services, descriptions, CHECKED_ON } from '@/data/comparison.js';

const ComparisonPage = () => {
  const canonicalUrl = getCanonicalUrl('/comparison');
  const title = "Pet Waste Removal Services in Asheville, NC: 2026 Comparison | Scoopy Doo";
  const desc = "Side-by-side comparison of dog poop removal services in Asheville, NC: Scoopy Doo AVL, DoodyCalls, and Doo Doo Blues, by price, service area, schedule options, and features.";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <Header />

      <main className="flex-grow pb-24 md:pb-0">
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              Pet Waste Removal Services in Asheville, NC
              <span className="block text-2xl md:text-3xl font-semibold text-muted-foreground mt-2">2026 Comparison</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mt-4">
              Pet waste removal companies with a confirmed Asheville location, compared by service area, schedule options, published pricing, and standout features. Each row comes from that company's own Asheville page, checked {CHECKED_ON}. Pricing marked "Not listed" is not published on the provider's website.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground text-xs tracking-wider">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Service</th>
                    <th className="px-4 py-3 font-semibold">Service area</th>
                    <th className="px-4 py-3 font-semibold">Frequency options</th>
                    <th className="px-4 py-3 font-semibold">Starting price</th>
                    <th className="px-4 py-3 font-semibold">Notable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {services.map((s, i) => (
                    <tr key={i} className={s.name === "Scoopy Doo AVL" ? "bg-primary/5" : "bg-background"}>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                          {s.name}
                        </a>
                        {s.local && (
                          <span className="ml-2 text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">Local</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground">{s.area}</td>
                      <td className="px-4 py-4 text-sm text-foreground whitespace-nowrap">{s.frequency}</td>
                      <td className="px-4 py-4 text-sm text-foreground whitespace-nowrap">{s.price}</td>
                      <td className="px-4 py-4 text-sm text-muted-foreground">{s.notable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Table reflects each provider's public website as of {CHECKED_ON}. Offers and coverage change, so contact each provider directly for current pricing and availability at your address.
            </p>
          </div>
        </section>

        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">About Each Service</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {descriptions.map((d, i) => (
              <div key={i} className="rounded-lg border border-border p-5 bg-background">
                <h3 className="font-semibold text-foreground mb-2">{d.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 bg-primary/5">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Get a Free Quote from Scoopy Doo</h2>
            <p className="text-muted-foreground mb-6">
              Weekly service from $20 per visit across the Asheville area, with no contracts. On-the-way texts and gate photo confirmation included on every visit.
            </p>
            <Link
              to="/quote"
              className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default ComparisonPage;
