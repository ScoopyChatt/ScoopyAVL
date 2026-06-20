
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { getCanonicalUrl, generateArticleSchema } from '@/utils/seoHelpers.js';

const BlogPostTemplate = ({ title, description, slug, author, datePublished, image, content }) => {
  const url = getCanonicalUrl(`/blog/${slug}`);
  const articleSchema = generateArticleSchema(title, description, author, datePublished, image, url);
  const defaultImage = image || "https://horizons-cdn.hostinger.com/d0188638-a120-4cbd-8c61-d1420711a271/8088ef4935a7739f1747caefac1fdcc6.jpg";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{`${title} | Scoopy Doo`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${title} | Scoopy Doo`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={defaultImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="flex-grow py-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-foreground text-balance">
              {title}
            </h1>
            <div className="flex items-center justify-center text-muted-foreground space-x-4">
              <span>By {author || 'Scoopy Doo Team'}</span>
              <span>•</span>
              <time dateTime={datePublished}>{new Date(datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            </div>
          </header>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-balance prose-headings:font-bold prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostTemplate;
