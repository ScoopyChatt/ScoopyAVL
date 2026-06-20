
import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';
import BlogPostTemplate from '@/components/BlogPostTemplate.jsx';
import { PlayCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

const PodcastBlogPost = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://scoopyavl.com/blog/podcast-episode"
    },
    "headline": "Scoopy Doo LLC Founder Discusses Pet Waste Management on Recent Podcast",
    "description": "Listen to the Scoopy Doo LLC founder discuss pet waste management, yard cleanup, and business insights on this recent podcast episode.",
    "author": {
      "@type": "Organization",
      "name": "Scoopy Doo"
    },
    "datePublished": "2026-05-15",
    "image": "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg",
    "video": {
      "@type": "VideoObject",
      "name": "Scoopy Doo LLC Founder on Recent Podcast",
      "description": "Listen to the Scoopy Doo LLC founder discuss pet waste management, yard cleanup, and business insights.",
      "thumbnailUrl": "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg",
      "uploadDate": "2026-05-15",
      "embedUrl": "https://www.youtube.com/embed/BlLL2Yzc5YI"
    }
  };

  const content = (
    <div className="space-y-8">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-border">
        <img 
          src="https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg"
          alt="Scoopy Doo LLC founder Brandon Carter and daughter Leighton holding branded signs in front of Asheville scenic city mural with bridge, riverboat, and train"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="video-container mb-10">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/BlLL2Yzc5YI" 
          title="Scoopy Doo LLC Founder Interview" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="absolute inset-0 w-full h-full object-cover"
        ></iframe>
      </div>

      <p className="lead text-xl font-medium text-foreground">
        If you've ever wondered what it takes to launch a professional pet waste management company or why yard cleanup is far more important than just aesthetics, this episode is a must-listen.
      </p>

      <p>
        In a recent podcast feature, Scoopy Doo LLC founder Brandon Carter sat down to talk about the often-overlooked necessity of professional pet waste removal. What began as a simple observation by a father and daughter has grown into Asheville's most trusted service for maintaining clean, safe, and odor-free outdoor spaces.
      </p>

      <h2>The Hidden Dangers Lurking in Your Lawn</h2>
      <p>
        One of the biggest misconceptions discussed in the episode is that dog waste acts as a natural fertilizer. In reality, a dog's high-protein diet produces highly acidic waste that burns grass, creating unsightly yellow patches. But the issues go far beyond lawn health. 
      </p>
      <p>
        Dog waste is classified as an environmental pollutant. A single gram contains roughly 23 million coliform bacteria, alongside potential parasites like roundworms and hookworms. When families try to handle yard cleanup DIY-style, they often miss spots, leaving these hazards right where their children play.
      </p>

      <div className="bg-muted p-8 rounded-2xl my-10 border border-border">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <PlayCircle className="w-6 h-6 mr-3 text-primary" />
          Key Episode Takeaways
        </h3>
        <ul className="space-y-4 list-none p-0 m-0">
          {[
            "The truth about nitrogen burn and why your lawn hates pet waste.",
            "Understanding the severe health risks of bacterial contamination in the yard.",
            "How professional pet waste removal utilizes grid-walking to guarantee an immaculate clean.",
            "The rigorous sanitization protocols that prevent disease transfer between properties."
          ].map((point, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
              <span className="text-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Why Scoopy Doo LLC Stands Out</h2>
      <p>
        During the interview, Brandon emphasized the core values of Scoopy Doo LLC. It isn't just about scooping poop; it's about reclaiming weekends for busy families. By utilizing professional pet waste management, homeowners can eliminate arguments over whose turn it is to clean the yard, ensure their pets aren't tracking bacteria indoors, and enjoy their outdoor spaces without worry.
      </p>

      <div className="not-prose mt-12 mb-8 bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
        <h3 className="text-2xl font-bold mb-4 text-foreground">Want to dive deeper?</h3>
        <p className="text-muted-foreground mb-6">Listen to the full episode, download the transcript, and explore more resources on our dedicated podcast page.</p>
        <Link to="/podcast" className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
          Visit the Full Podcast Page <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <SEOHead 
        title="Scoopy Doo LLC Founder Discusses Pet Waste Management on Recent Podcast"
        description="Listen to the Scoopy Doo LLC founder discuss pet waste management, yard cleanup, and business insights on this recent podcast episode."
        canonicalUrl={`${CANONICAL_BASE_URL}/blog/podcast-episode`}
        schema={schemaData}
      />
      <BlogPostTemplate 
        title="Scoopy Doo LLC Founder Discusses Pet Waste Management on Recent Podcast"
        description="Listen to the Scoopy Doo LLC founder discuss pet waste management, yard cleanup, and business insights."
        date="May 15, 2026"
        author="Scoopy Doo Team"
        content={content}
      />
    </>
  );
};

export default PodcastBlogPost;
