import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, PlayCircle, Podcast } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingCTA from '@/components/FloatingCTA.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';

const BlogPage = () => {
  const posts = [
    {
      title: "Pet Waste Management: A Guide for Busy Pet Owners",
      excerpt: "A comprehensive guide for busy pet owners on managing yard waste, the benefits of professional cleanup, and how to reclaim your weekends.",
      date: "May 9, 2026",
      slug: "/blog/pet-waste-management-guide"
    },
    {
      title: "The Hidden Health Risks of Pet Waste in Your Yard",
      excerpt: "Discover the hidden health risks of pet waste, including parasites and bacteria, and learn how professional pet waste removal keeps your yard safe.",
      date: "May 9, 2026",
      slug: "/blog/health-risks-pet-waste"
    },
    {
      title: "Why Regular Pet Waste Removal is Essential for Your Lawn's Health",
      excerpt: "Learn how pet waste causes nitrogen burn and damages your grass, and discover why professional pet waste removal is essential for maintaining a healthy lawn.",
      date: "May 9, 2026",
      slug: "/blog/lawn-health-pet-waste"
    },
    {
      title: 'DIY vs. Professional Pet Waste Removal: Which is Right for You?',
      excerpt: 'Compare the hidden costs, time investments, and health risks of cleaning your own yard versus hiring a professional service.',
      date: 'April 28, 2026',
      slug: '/blog/diy-vs-professional'
    },
    {
      title: 'Real Results: Scoopy Chatt Customer Success Stories',
      excerpt: 'Read how professional pet waste removal solved real problems for families, busy professionals, and pet owners across the Asheville area.',
      date: 'April 24, 2026',
      slug: '/blog/customer-success-stories'
    },
    {
      title: 'The Critical Health Benefits of Regular Yard Cleanup',
      excerpt: 'Discover why regular pet waste removal is crucial for protecting your family from bacteria and keeping your dogs healthy.',
      date: 'April 21, 2026',
      slug: '/blog/health-benefits-yard-cleanup'
    },
    {
      title: 'Seasonal Pet Care Guide for Asheville Residents',
      excerpt: 'From summer heat to winter freezes, learn how to protect your pet and maintain a clean, safe yard year-round.',
      date: 'April 18, 2026',
      slug: '/blog/seasonal-pet-care-tips'
    },
    {
      title: 'The True Value of Professional Pet Waste Removal',
      excerpt: 'Discover why hiring a professional pet waste removal service is about more than just convenience. Learn about the health risks and cost benefits.',
      date: 'April 15, 2026',
      slug: '/blog/professional-waste-removal-benefits'
    },
    {
      title: 'How Often Should You Clean Your Yard? Pet Waste Removal Guide',
      excerpt: 'Learn how often you should schedule pet waste removal and yard cleaning to keep your outdoor space safe and sanitary.',
      date: 'April 10, 2026',
      slug: '/blog/how-often-clean-yard'
    },
    {
      title: 'Benefits of Professional Pet Waste Removal',
      excerpt: 'Discover the top health benefits and time-saving advantages of hiring a professional pet waste removal service.',
      date: 'April 5, 2026',
      slug: '/blog/benefits'
    },
    {
      title: 'Pet Waste Removal in Black Mountain',
      excerpt: 'Learn why Scoopy Chatt is the preferred pet waste removal service for residents of Black Mountain, NC.',
      date: 'March 28, 2026',
      slug: '/blog/black-mountain'
    },
    {
      title: 'Pet Waste Removal in Weaverville',
      excerpt: 'Discover reliable and affordable pet waste removal services in Weaverville, NC with Scoopy Chatt.',
      date: 'March 20, 2026',
      slug: '/blog/weaverville'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Blog & Resources | Asheville Pet Waste Removal</title>
        <meta name='description' content='Read tips, news, and insights about yard cleanup and pet waste management in Asheville.' />
      </Helmet>

      <Header />

      <main className="flex-1 pb-24 md:pb-0">
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance tracking-tight">
                Scoopy Chatt Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Tips, guides, and news about keeping your yard clean, safe, and pet-friendly.
              </p>
            </motion.div>
          </div>
        </section>

        <ReviewsSection />

        <section className="py-12 border-b border-border bg-muted/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="podcast-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-video bg-muted">
                  <img 
                    src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg" 
                    alt="Scoopy Doo Founder Brandon Carter and daughter Leighton holding branded signs in front of Asheville scenic city mural"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-semibold tracking-wide uppercase border border-white/20">
                    <Podcast className="w-3 h-3 mr-2" /> Featured Podcast
                  </div>
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center group pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    May 15, 2026
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    <Link to="/blog/podcast-episode" className="hover:text-primary transition-colors">
                      Scoopy Doo LLC Founder Discusses Pet Waste Management on Recent Podcast
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-8 line-clamp-3">
                    Listen to founder Brandon Carter share insights on the hidden dangers of pet waste, maintaining a healthy yard, and how a family business is reclaiming weekends for Asheville residents.
                  </p>
                  <Link to="/blog/podcast-episode" className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors mt-auto">
                    Listen to Episode <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <motion.article 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-4 line-clamp-2">
                    <Link to={post.slug} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-8 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to={post.slug} className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors mt-auto">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default BlogPage;