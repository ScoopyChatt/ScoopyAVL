
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CTAButton from '@/components/CTAButton.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import LocationSection from '@/components/LocationSection.jsx';

const NearMePage = () => {
  const localReviews = [
    { author: "Michael T.", location: "Black Mountain", quote: "Fast, local, and incredibly dependable. The best scooping service near me." },
    { author: "Jessica R.", location: "Arden", quote: "Love supporting a local business that does exactly what they promise." },
    { author: "David P.", location: "Fairview", quote: "They always lock the gate and leave the yard spotless. Highly recommended in the area." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead path="/near-me" />
      
      <Header />

      <main className="flex-grow">
        <section className="pt-24 pb-16 bg-card border-b border-border">
          <div className="container-shell text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-foreground">Pooper Scooper Service Near Me in Asheville, NC</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're your local, neighborhood pet waste removal experts. Proudly serving Asheville and surrounding areas so you never have to search for a scooper again.
            </p>
            <CTAButton>Check My Zip Code</CTAButton>
          </div>
        </section>

        <LocationSection />

        <section className="section-spacing bg-background">
          <div className="container-shell">
            <h2 className="text-center mb-12">Trusted by Neighbors Near You</h2>
            <div className="testimonial-masonry">
              {localReviews.map((review, i) => (
                <div key={i} className="break-inside-avoid">
                  <TestimonialCard {...review} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 border-t border-border">
          <div className="container-shell text-center max-w-2xl">
            <h2 className="mb-6">Local Service, Professional Standards</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Being local means we understand the area, the weather, and our community. We respond quickly and provide a level of service national franchises can't match.
            </p>
            <CTAButton variant="default">Hire Your Local Scooper</CTAButton>
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

export default NearMePage;
