
import { useMemo } from 'react';
import { generateArticleSchema } from '@/utils/schemaGenerators.js';
import { CANONICAL_BASE_URL } from '@/config/seoConfig.js';

export const useBlogSEO = (post) => {
  return useMemo(() => {
    if (!post) return null;
    
    // Generates canonical URL using non-www domain
    const url = `${CANONICAL_BASE_URL}/blog/${post.slug}`;
    const schema = generateArticleSchema(post);

    return {
      title: post.title,
      description: post.excerpt,
      keywords: post.tags?.join(', '),
      canonical: url,
      ogImage: post.featuredImage,
      ogType: 'article',
      schema
    };
  }, [post]);
};
