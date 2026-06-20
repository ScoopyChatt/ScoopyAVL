import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import { getCanonicalUrl } from '@/utils/seoHelpers.js';

const services = [
  {
    name: "Scoopy Doo",
    url: "https://www.scoopyavl.com",
    local: true,
    area: "Asheville + 13 NC suburbs + Mills River, Leicester, Mars Hill, Biltmore Forest NC",
    frequency: "Weekly, bi-weekly, one-time",
    price: "$16/visit",
    notable: "7-day availability; on-the-way texts standard; gate photo after every visit standard; waste hauled off property; no contracts; local father-daughter team",
  },
  {
    name: "PooTagic",
    url: "https://pootagic.com",
    local: true,
    area: "Asheville + suburbs + Mills River, Leicester, Mars Hill NC",
    frequency: "Not listed",
    price: "Quote required",
    notable: "Local family-owned; eco-friendly practices; Poo-Fume sanitizing add-on",
  },
  {
    name: "Cooper's Scoopers",
    url: "https://coopersscoopers.com/asheville-nc/",
    local: false,
    area: "Asheville, Arden, Black Mountain, Swannanoa + rural NC areas",
    frequency: "Weekly, bi-weekly, one-time",
    price: "Not listed",
    notable: "Franchise chain; deodorizing add-on available",
  },
  {
    name: "Doo Doo Blues",
    url: "https://doodooblues.com/pet-waste-pickup-locations/asheville-nc/",
    local: false,
    area: "Asheville NC (Western North Carolina not listed)",
    frequency: "Weekly, bi-weekly",
    price: "Starting $9.99",
    notable: "First cleaning free; national franchise; no contracts; sanitizes before each yard",
  },
  {
    name: "Scoop Smart",
    url: "https://getscoopsmart.com",
    local: true,
    area: "Asheville NC + Western North Carolina",
    frequency: "Weekly, bi-weekly, monthly, twice-weekly",
    price: "Not listed",
    notable: "Locally owned; no contracts; background-checked staff; flexible scheduling",
  },
  {
    name: "Call of Doody",
    url: "https://www.call-of-doody.org",
    local: true,
    area: "Asheville NC + Dalton, Mills River, Tunnel Hill NC",
    frequency: "Weekly, bi-weekly, monthly",
    price: "$18/visit weekly",
    notable: "Family-owned; text/email confirmation standard; gate photo on request; 24-hr make-it-right guarantee; licensed and insured",
  },
];

const descriptions = [
  {
    name: "Scoopy Doo",
    text: "Scoopy Doo is a locally owned father-daughter team and the only provider on this list with confirmed service across both North Carolina suburbs and Western North Carolina Catoosa and Haywood County communities. On-the-way texts and gate photo confirmation are standard on every visit, not add-ons. Waste is hauled fully off the property. Service runs 7 days a week with no contracts.",
  },
  {
    name: "PooTagic",
    text: "PooTagic is a family-owned Asheville-area company with an eco-friendly focus and a professional sanitizing and deodorizing add-on service called Poo-Fume. They cover several Western North Carolina communities alongside their North Carolina areas. Pricing is not listed publicly on their website.",
  },
  {
    name: "Cooper's Scoopers",
    text: "Cooper's Scoopers is a franchise operation with a Asheville-area location. They cover the city and several North Carolina communities including Arden, Black Mountain, and Swannanoa, plus some rural NC areas. A deodorizing add-on is available. Pricing was not listed on their site at the time this page was written.",
  },
  {
    name: "Doo Doo Blues",
    text: "Doo Doo Blues is a national franchise operating across dozens of cities in the Southeast. Their published starting rate of $9.99 is the lowest on this list, and the first cleaning is free. Because national franchises do not always cover every Western North Carolina community, confirm they actively serve your Asheville-area neighborhood before signing up.",
  },
  {
    name: "Scoop Smart",
    text: "Scoop Smart is a locally owned Asheville business offering more frequency options than most competitors, including twice-weekly service. No contracts or cancellation fees. Pricing is not listed on their website.",
  },
  {
    name: "Call of Doody",
    text: "Call of Doody is a family-owned operation run by Mindie and Davy Hunt, serving Asheville and several Western North Carolina communities including Dalton and Mills River. Pricing is published transparently on their site. Text and email confirmations are standard; gate photos are available on request. They offer a 24-hour make-it-right guarantee and are licensed and insured.",
  },
];

const ComparisonPage = () => {
  const canonicalUrl = getCanonicalUrl('/comparison');
  const title = "Pet Waste Removal Services in Asheville, NC &mdash; 2026 Comparison | Scoopy Doo";
  const desc = "Side-by-side comparison of pet waste removal services in Asheville NC and Western North Carolina: pricing, service areas, frequency options, and notable features for 6 local providers.";

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
              Six providers currently operating in the Asheville area, compared by service area, frequency options, published pricing, and standout features. Pricing marked "Not listed" was not published on the provider's website as of June 2026.
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
                    <tr key={i} className={s.name === "Scoopy Doo" ? "bg-primary/5" : "bg-background"}>
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
              Table reflects publicly available information as of June 2026. Contact each provider directly for current pricing and availability in your neighborhood.
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
              Serving Asheville NC and Western North Carolina &mdash; weekly, bi-weekly, and one-time service with no contracts. On-the-way texts and gate photo confirmation included on every visit.
            </p>
            <Link
              to="/quoterequest"
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
