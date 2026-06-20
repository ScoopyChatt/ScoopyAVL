
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { Button } from '@/components/ui/button';
import FAQAccordion from '@/components/FAQAccordion.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const CommercialPetWastePage = () => {
  const faqs = [
    {
      question: "How does pet waste station servicing work?",
      answer: "Our team visits your property on a predetermined schedule (usually weekly or bi-weekly). We empty the station receptacles, replace the trash bags, restock the dog waste bags for residents, and sanitize the station area to eliminate odors and bacteria."
    },
    {
      question: "Can you handle multiple properties?",
      answer: "Yes, we partner with large property management groups and can service multiple apartment complexes, HOA communities, and public parks across the Asheville area under a consolidated billing account."
    },
    {
      question: "What is the cost for commercial accounts?",
      answer: "Commercial pricing is highly customized based on the size of your property, the number of waste stations, and the frequency of service. Contact us directly for a free, comprehensive commercial quote tailored to your community's needs."
    },
    {
      question: "Do you offer open area waste removal for communities?",
      answer: "Absolutely. In addition to servicing stations, our technicians can walk the common areas, green spaces, and dog parks within your community to scoop any uncollected waste left behind by residents."
    },
    {
      question: "Can you install new dog waste stations?",
      answer: "Yes! If your property currently lacks proper pet waste infrastructure, we can recommend, supply, and install durable pet waste stations in high-traffic areas."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead 
        title="Pet Waste Removal for HOAs, Apartments & Commercial Properties"
        description="Pet waste removal for HOAs, apartments & commercial properties in Asheville. Professional cleanup solutions for multi-unit properties."
        canonicalUrl={`${CANONICAL_BASE_URL}/blog/commercial-pet-waste-removal-asheville`}
      />
      <Header />

      <main className="flex-grow py-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
          </Link>
          
          <header className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Commercial Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight text-balance" style={{ letterSpacing: '-0.02em' }}>
              Pet Waste Removal for HOAs, Apartments & Commercial Properties in Asheville
            </h1>
            <div className="flex flex-wrap items-center text-muted-foreground text-base gap-6 border-y border-border py-4">
              <div className="flex items-center font-medium">
                <User className="w-5 h-5 mr-2 text-primary" />
                Scoopy Doo Team
              </div>
              <div className="flex items-center font-medium">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                May 25, 2026
              </div>
            </div>
          </header>

          <div className="blog-prose">
            <p className="lead text-xl text-muted-foreground font-medium mb-8">
              Managing a multi-family property or HOA comes with endless challenges. One of the most persistent and frustrating complaints property managers face? Uncollected dog waste in common areas.
            </p>

            <p>
              As more renters and homeowners prioritize pet-friendly living, the volume of dogs in managed communities is skyrocketing. While accommodating pets is great for occupancy rates, it places a heavy burden on your maintenance staff. Professional commercial pet waste removal in Asheville is the most effective way to protect your property value and keep residents happy.
            </p>
            
            <p>
              Here is how partnering with a dedicated pooper scooper service for apartments and HOAs transforms your community management experience.
            </p>

            <h2>1. Cleaner Common Areas and High Curb Appeal</h2>
            <p>
              First impressions matter. When prospective tenants tour an apartment complex, stepping over dog waste or smelling overflowing trash bins immediately turns them away. HOA pet waste removal in Asheville ensures that your green spaces, walkways, and entranceways remain pristine. A consistently clean environment signals to residents and visitors that the property is expertly managed.
            </p>

            <h2>2. Dramatically Fewer Resident Complaints</h2>
            <p>
              Ask any property manager: phone calls about neighbors not picking up after their dogs are exhausting. By implementing routine cleanup schedules and professional apartment dog waste station service, you proactively address the issue. When common areas are kept clean, community friction decreases, creating a more harmonious living environment for everyone.
            </p>

            <h2>3. Relief for Your Maintenance Team</h2>
            <p>
              Your on-site maintenance crew is already stretched thin handling plumbing issues, HVAC repairs, and unit turnovers. Forcing them to empty dog waste stations or walk the grounds scooping poop takes them away from high-priority tasks. Outsourcing to a professional pet waste station maintenance team allows your staff to focus on what they do best.
            </p>

            <h2>4. Advanced Sanitation and Odor Control</h2>
            <p>
              A full waste station doesn't just look bad&mdash;it creates a severe odor problem, especially during hot North Carolina summers. Professional services do more than just trash bag replacement; they include area sanitizing. We treat the stations and surrounding grass to eliminate lingering odors and neutralize harmful bacteria, ensuring the amenity remains usable and pleasant.
            </p>

            <h2>5. Enhancing the Overall Tenant Experience</h2>
            <p>
              A truly pet-friendly community goes beyond simply allowing dogs. It means providing well-maintained pet waste stations equipped with high-quality bags, clean dog parks, and safe walking paths. When residents see that management invests in comprehensive waste removal, tenant retention improves. People want to live in a community that respects both pets and sanitation.
            </p>

            <hr className="my-12 border-border" />

            <h2>Commercial Services Frequently Asked Questions</h2>
            <div className="mb-12">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>

          <div className="mt-16 bg-secondary text-secondary-foreground rounded-3xl p-8 md:p-12 text-center shadow-xl border border-border">
            <h3 className="text-3xl font-bold mb-4 text-white">Improve Your Property's Cleanliness</h3>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Boost resident satisfaction and property appeal. Contact Scoopy Doo today for a customized commercial pet waste management quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg">
                <Link to="/quote">Request Commercial Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-secondary-foreground/20 text-white hover:bg-white/10 h-14 px-8 text-lg rounded-xl">
                <a href="tel:828-844-8060">Call (828) 844-8060</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-secondary-foreground/70">
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Multi-Property Discounts</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Fully Insured</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Reliable Service</span>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CommercialPetWastePage;
