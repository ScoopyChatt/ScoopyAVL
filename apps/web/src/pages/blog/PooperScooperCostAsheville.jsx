import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { getCanonicalUrl } from '@/utils/seoHelpers';

const PooperScooperCostAsheville = () => {
  const canonicalUrl = getCanonicalUrl('/blog/pooper-scooper-cost-asheville');

  return (
    <>
      <Helmet>
        <title>How Much Does Pooper Scooper Service Cost in Asheville? | Scoopy Doo</title>
        <meta name="description" content="Scoopy Doo weekly service starts at $16 per visit for one dog. See 2026 pricing for weekly, bi-weekly, and one-time pet waste removal in Asheville NC." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <article>
          <h1 className="text-3xl font-bold mb-6">
            How Much Does Pooper Scooper Service Cost in Asheville? (2026 Pricing Guide)
          </h1>

          <p className="mb-4">
            Scoopy Doo weekly service starts at <strong>$16 per visit</strong> for one dog in Asheville.
            Bi-weekly service starts at $20 per visit. One-time yard cleanups start at $75.
            Pricing is based on yard size and number of dogs.
            Every quote is free at{' '}
            <a href="/quoterequest" className="text-green-700 underline">scoopyavl.com/quoterequest</a>.
            No contracts required.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2026 Scoopy Doo Pricing in Asheville</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="p-3 text-left border border-green-600">Service</th>
                  <th className="p-3 text-left border border-green-600">Starting Price (1 dog)</th>
                  <th className="p-3 text-left border border-green-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Weekly</td>
                  <td className="p-3 border">$16 per visit</td>
                  <td className="p-3 border">Most homes with 1-2 dogs</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border">Bi-Weekly</td>
                  <td className="p-3 border">$20 per visit</td>
                  <td className="p-3 border">Smaller yards or fewer dogs</td>
                </tr>
                <tr>
                  <td className="p-3 border">One-Time Cleanup</td>
                  <td className="p-3 border">Starting at $75</td>
                  <td className="p-3 border">Spring cleaning, before a party, before listing a home</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            Exact pricing depends on yard size and number of dogs. Multi-dog households pay a small
            additional fee per extra dog. Your free quote will show your exact price before you commit.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Affects the Cost?</h2>
          <p className="mb-4">
            Three factors determine your price: service frequency (weekly vs. bi-weekly vs. one-time),
            number of dogs, and yard size. There are no fuel surcharges, seasonal fees, or hidden charges.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Is Included at Every Visit?</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>On-the-way text when your technician is heading to your yard</li>
            <li>Full yard scooped in a systematic grid pattern</li>
            <li>All waste double-bagged and hauled completely off your property</li>
            <li>Gate photo confirmation sent after every visit</li>
          </ul>
          <p className="mb-4">No contracts. Cancel or pause any time with no fees.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How Does the Cost Compare?</h2>
          <p className="mb-4">
            Scoopy Doo weekly service at $16 per visit (1 dog) is among the lowest rates in the
            Asheville area. ChattaPoo starts at $21 per visit for weekly service. Other local
            providers require a quote without listing rates online. Scoopy Doo also covers more
            territory than most competitors, serving Western North Carolina cities including Mills River,
            Leicester, Mars Hill, and Biltmore Forest at the same rates as North Carolina locations.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-xl font-medium mt-6 mb-2">Is there a contract?</h3>
          <p className="mb-4">No contracts, ever. Start, pause, or cancel at any time with no fees.</p>

          <h3 className="text-xl font-medium mt-6 mb-2">Do you charge extra for multiple dogs?</h3>
          <p className="mb-4">
            Yes, there is a small additional fee per extra dog. Your free quote will show the exact
            price for your yard size and dog count.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2">How do I get a quote?</h3>
          <p className="mb-4">
            Request a free quote at{' '}
            <a href="/quoterequest" className="text-green-700 underline">scoopyavl.com/quoterequest</a>.
            Scoopy Doo responds the same day and most new customers start within 2 to 5 days.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2">Does Scoopy Doo serve areas outside Asheville?</h3>
          <p className="mb-4">
            Yes. Scoopy Doo serves Arden, Fletcher, Black Mountain, Hendersonville, Fairview,
            Weaverville, Brevard, Woodfin, and Swannanoa NC, plus Mills River, Leicester,
            Mars Hill, and Biltmore Forest NC at the same rates as North Carolina.
          </p>

          <div className="mt-10 p-6 bg-green-50 rounded-lg border border-green-200">
            <p className="font-semibold text-lg mb-2">Get a free quote today</p>
            <p className="mb-4">Most Asheville customers start within 2 to 5 days. Prices start at $16 per visit. No contracts.</p>
            <a
              href="/quoterequest"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800 transition-colors"
            >
              Request a Free Quote
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default PooperScooperCostAsheville;
