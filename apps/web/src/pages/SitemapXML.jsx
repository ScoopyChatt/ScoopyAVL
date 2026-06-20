
import React, { useEffect, useState } from 'react';
import { generateSitemapData, generateXML } from '@/utils/sitemapGenerator.js';

const SitemapXML = () => {
  const [xmlContent, setXmlContent] = useState('');

  useEffect(() => {
    const initSitemap = async () => {
      try {
        const data = await generateSitemapData();
        const xml = generateXML(data);
        setXmlContent(xml);
        
        // Render the document as raw XML in the browser window
        document.open('text/xml');
        document.write(xml);
        document.close();
      } catch (error) {
        console.error("Error generating sitemap:", error);
      }
    };
    
    initSitemap();
  }, []);

  // Fallback in case document.write fails or is blocked
  return (
    <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap', padding: '20px' }}>
      {xmlContent}
    </pre>
  );
};

export default SitemapXML;
