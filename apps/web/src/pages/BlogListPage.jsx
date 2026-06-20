import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const allPosts = [
    { slug: '/blog/dog-poop-cleanup-asheville-summer-heat', title: 'Why Asheville Yards Need Regular Dog Poop Cleanup During Hot, Humid Weather', desc: 'Summer heat and humidity make dog waste smell worse, grow bacteria faster, and attract flies. Here is why Asheville dog owners need to stay on top of yard cleanup in summer.', date: 'Jun 2026', cat: 'Yard Tips' },
  { slug: '/blog/how-often-scoop-dog-poop-asheville', title: 'How Often Should You Scoop Dog Poop in Asheville?', desc: 'Most vets and yard experts say at least once a week. Here\'s why &mdash; and how Scoopy Doo makes it effortless.', date: 'Jun 2026', cat: 'Yard Tips' },
  { slug: '/blog/is-dog-poop-hurting-your-asheville-yard', title: 'Is Dog Poop Hurting Your Asheville Yard?', desc: 'Dog poop doesn\'t just smell bad &mdash; it kills grass, spreads parasites, and pollutes local water.', date: 'Jun 2026', cat: 'Lawn Health' },
  { slug: '/blog/asheville-pet-waste-removal-homeowners', title: 'Why Asheville Homeowners Are Hiring Pet Waste Removal Services', desc: 'Discover why more Asheville families are turning to professional pet waste removal to protect their yards.', date: 'May 2026', cat: 'Homeowner Tips' },
  { slug: '/blog/commercial-pet-waste-removal-asheville', title: 'Pet Waste Removal for HOAs, Apartments & Commercial Properties', desc: 'Professional pet waste management solutions for multi-unit properties and commercial spaces in Asheville.', date: 'May 2026', cat: 'Commercial' },
  { slug: '/blog/is-dog-waste-bad-for-lawn', title: 'Is Dog Waste Bad for Your Lawn?', desc: 'The truth about dog waste and lawn health &mdash; and what you can do to protect your grass.', date: 'May 2026', cat: 'Lawn Health' },
  { slug: '/blog/best-pooper-scooper-services-asheville', title: 'Best Pooper Scooper Services in Asheville', desc: 'A guide to finding the right dog waste removal service for your Asheville home.', date: 'Apr 2026', cat: 'Local Guide' },
  { slug: '/blog/professional-waste-removal-benefits', title: 'The True Value of Professional Pet Waste Removal', desc: 'Why hiring a professional pooper scooper service is worth every penny for your yard, family, and peace of mind.', date: 'Apr 2026', cat: 'Services' },
  { slug: '/blog/health-risks-of-pet-waste', title: 'The Hidden Health Risks of Pet Waste in Your Yard', desc: 'Dog waste harbors dangerous pathogens &mdash; here\'s what you need to know to keep your family safe.', date: 'Mar 2026', cat: 'Health' },
  { slug: '/blog/lawn-health-and-pet-waste', title: 'Why Regular Pet Waste Removal is Essential for Your Lawn', desc: 'How dog waste damages your grass over time &mdash; and how consistent cleanup prevents permanent lawn damage.', date: 'Mar 2026', cat: 'Lawn Health' },
  { slug: '/blog/health-benefits-yard-cleanup', title: 'The Critical Health Benefits of Regular Yard Cleanup', desc: 'Bacteria from pet waste can persist in soil for years. Learn how regular scooping protects your whole family.', date: 'Feb 2026', cat: 'Health' },
  { slug: '/blog/diy-vs-professional', title: 'DIY vs. Professional Pet Waste Removal: Which is Right for You?', desc: 'Comparing the cost, convenience, and results of doing it yourself versus hiring Scoopy Doo.', date: 'Feb 2026', cat: 'Services' },
  { slug: '/blog/seasonal-pet-care-tips', title: 'Seasonal Pet Care Guide for Asheville Residents', desc: 'How to keep your yard clean and your pets healthy through every season in the North Carolina Valley.', date: 'Jan 2026', cat: 'Tips' },
  { slug: '/blog/pet-waste-management-guide', title: 'Pet Waste Management: A Guide for Busy Pet Owners', desc: 'A practical guide to managing pet waste &mdash; from daily habits to professional services.', date: 'Jan 2026', cat: 'Tips' },
  { slug: '/blog/spring-pet-care-checklist', title: 'Spring Pet Care Checklist for Asheville Dog Owners', desc: 'Get your yard spring-ready with this complete checklist for Asheville pet owners.', date: 'Dec 2025', cat: 'Tips' },
  { slug: '/blog/how-often-clean-yard', title: 'How Often Should You Clean Your Yard of Pet Waste?', desc: 'Expert guidance on cleanup frequency based on dog count, yard size, and Asheville\'s climate.', date: 'Nov 2025', cat: 'Yard Tips' },
  { slug: '/blog/black-mountain', title: 'Pet Waste Removal in Black Mountain, NC', desc: 'Scoopy Doo now serves Black Mountain residents with reliable weekly and bi-weekly dog waste removal.', date: 'Nov 2025', cat: 'Service Areas' },
  { slug: '/blog/weaverville', title: 'Pet Waste Removal in Weaverville, NC', desc: 'Professional dog poop removal service available throughout Weaverville and surrounding communities.', date: 'Oct 2025', cat: 'Service Areas' },
];

const BlogListPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SEOHead title="Pet Waste & Dog Care Blog | Scoopy Doo Asheville" description="Tips on pet waste removal, yard health, and dog care for Asheville homeowners from the Scoopy Doo blog." canonicalUrl={`${CANONICAL_BASE_URL}/blog`} />
    <Header />
    <main className="flex-grow py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6"><BookOpen className="w-7 h-7" /></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                Asheville Pet Care Tips and Dog Owner Resources | Scoopy Doo Blog
              </h1>
          <p className="text-lg text-muted-foreground">Tips on pet waste removal, yard health, and dog care for Asheville homeowners.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <Link key={post.slug} to={post.slug} className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">{post.cat}</span>
                <h2 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                <p className="text-muted-foreground text-sm flex-grow leading-relaxed">{post.desc}</p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="inline-flex items-center text-primary text-sm font-semibold gap-1 group-hover:gap-2 transition-all">Read <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default BlogListPage;
