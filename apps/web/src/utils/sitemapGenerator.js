
import pb from '@/lib/pocketbaseClient.js';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

export const generateSitemapData = async () => {
  const urls = [];
  const today = new Date().toISOString().split('T')[0];

  // 1. Core Pages (Explicitly excluding /thank-you and /pricing)
  const corePages = [
    '', 
    '/about', 
    '/services', 
    '/quote', 
    '/reviews', 
    '/faq', 
    '/service-areas', 
    '/blog', 
    '/privacy-policy', 
    '/terms-of-service',
    '/spring-special',
    '/podcast',
    '/pet-safe-checklist',
    '/dog-park-guide'
  ];

  corePages.forEach(path => {
    urls.push({
      loc: `${CANONICAL_BASE_URL}${path}`,
      lastmod: today,
      changefreq: path === '' ? 'weekly' : 'monthly'
    });
  });

  // 2. Service Pages
  const servicePages = [
    '/dog-poop-removal-asheville',
    '/pet-waste-removal-asheville',
    '/dog-poop-scooping-asheville',
    '/yard-cleanup-asheville',
    '/one-time-cleanup'
  ];

  servicePages.forEach(path => {
    urls.push({
      loc: `${CANONICAL_BASE_URL}${path}`,
      lastmod: today,
      changefreq: 'monthly'
    });
  });

  // 3. Location Pages
  const locations = [
    'arden', 'fletcher', 'woodfin', 'black-mountain', 'hendersonville', 
    'fairview', 'mills-river', 'brevard', 'black-mountain', 'candler', 
    'swannanoa', 'biltmore-forest', 'west-asheville', 'biltmore-forest', 'weaverville', 'downtown'
  ];

  locations.forEach(loc => {
    urls.push({
      loc: `${CANONICAL_BASE_URL}/service/${loc}`,
      lastmod: today,
      changefreq: 'monthly'
    });
  });

  // 4. Hardcoded Live Blog Posts
  const liveBlogSlugs = [
    'is-dog-waste-bad-for-lawn',
    'best-pooper-scooper-services-asheville',
    'how-often-yard-cleaning-pet-waste',
    'why-asheville-homeowners-hiring-pet-waste-removal',
    'pet-waste-removal-hoas-apartments-commercial-asheville',
    'spring-pet-care-checklist',
    'professional-waste-removal-benefits',
    'seasonal-pet-care-tips',
    'health-benefits-yard-cleanup',
    'customer-success-stories',
    'diy-vs-professional',
    'lawn-health-and-pet-waste',
    'health-risks-of-pet-waste',
    'pet-waste-management-guide'
  ];

  liveBlogSlugs.forEach(slug => {
    urls.push({
      loc: `${CANONICAL_BASE_URL}/blog/${slug}`,
      lastmod: today,
      changefreq: 'monthly'
    });
  });

  // 5. Fetch additional DB blog posts, ignoring dead ones
  try {
    const posts = await pb.collection('blog_posts').getFullList({
      sort: '-published_date',
      $autoCancel: false
    });
    
    const deadSlugs = [
      'how-often-clean-yard', 
      'black-mountain', 
      'weaverville', 
      'podcast-blog',
      'benefits',
      'lawn-damage',
      'parasite-risks',
      'water-contamination',
      'why-professional',
      'bacteria-risks',
      'pathogen-risks',
      'pet-safety',
      'family-safety',
      'cost-comparison'
    ];

    posts.forEach(post => {
      // Don't duplicate if we already pushed it via hardcode above, and skip dead ones
      if (post.slug && !deadSlugs.includes(post.slug) && !liveBlogSlugs.includes(post.slug)) {
        urls.push({
          loc: `${CANONICAL_BASE_URL}/blog/${post.slug}`,
          lastmod: post.updated ? post.updated.split(' ')[0] : today,
          changefreq: 'monthly'
        });
      }
    });
  } catch (error) {
    console.error("Failed to fetch blog posts for sitemap:", error);
  }

  return urls;
};

export const generateXML = (urls) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    if (url.lastmod) xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    if (url.changefreq) xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
};
