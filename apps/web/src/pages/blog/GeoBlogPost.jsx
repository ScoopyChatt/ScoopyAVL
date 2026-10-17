import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { getCanonicalUrl } from '@/utils/seoHelpers';
import { generateArticleSchema, generateFAQPageSchema, generateBreadcrumbSchema } from '@/utils/schemaGenerators';
import { geoPostBySlug } from '@/data/geoPosts.js';

// Renders a post from data/geoPosts.js. One component for every post so the page,
// the crawlable fallback, and the JSON-LD all come from the same text.
const GeoBlogPost = ({ slug }) => {
  const post = geoPostBySlug[slug];
  const canonicalUrl = getCanonicalUrl('/blog/' + slug);
  const articleSchema = generateArticleSchema(
    post.title, post.description, 'Scoopy Doo AVL', post.date, post.date, '', undefined, canonicalUrl
  );
  articleSchema.author = { '@type': 'Organization', name: 'Scoopy Doo AVL', url: 'https://www.scoopyavl.com' };
  const faqSchema = generateFAQPageSchema(post.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.scoopyavl.com/' },
    { name: 'Blog', url: 'https://www.scoopyavl.com/blog' },
    { name: post.title, url: canonicalUrl },
  ]);

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <article>
          <p className="text-sm text-muted-foreground mb-2">
            <Link to="/blog" className="underline">Blog</Link> &middot; {post.category} &middot; {post.dateLabel} &middot; {post.readTime}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{post.title}</h1>

          {post.intro.map((p, i) => (
            <p key={i} className={i === 0 ? 'mb-4 text-lg' : 'mb-4'}>{p}</p>
          ))}

          {post.sections.map((section) => (
            <section key={section.h2}>
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">{section.h2}</h2>
              {section.paras.map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))}
              {section.list && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">Frequently asked questions</h2>
          {post.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">{f.q}</h3>
              <p className="mb-4">{f.a}</p>
            </div>
          ))}

          <div className="mt-10 p-6 bg-green-50 rounded-lg border border-green-200">
            <p className="font-semibold text-lg mb-2">See your price in under a minute</p>
            <p className="mb-4">
              Weekly service from $20 per visit. On-the-way text and gate photo every visit. No contracts.
            </p>
            <Link
              to="/quote"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800 transition-colors"
            >
              Get my free quote
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            More on <Link to="/pricing" className="underline">pricing</Link>,{' '}
            <Link to="/how-it-works" className="underline">how service works</Link>, and the{' '}
            <Link to="/service-areas" className="underline">towns we serve</Link>.
          </p>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default GeoBlogPost;
