import React, { useEffect } from 'react';

const ElfsightReviewsWidget = () => {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';
    
    const initWidget = () => {
      if (window.ELFSight) {
        try {
          window.ELFSight.reload();
        } catch (err) {
          console.error('Error reloading Elfsight widget:', err);
        }
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      
      script.onload = () => {
        initWidget();
      };
      
      script.onerror = (err) => {
        console.error('Failed to load Elfsight reviews script:', err);
      };
      
      document.body.appendChild(script);
    } else {
      // Script already exists, just try to re-initialize
      initWidget();
    }
  }, []);

  return (
    <div 
      className="elfsight-app-8240dd2e-e144-493a-add7-52c8fd1b05f7" 
      data-elfsight-app-lazy 
    ></div>
  );
};

export default ElfsightReviewsWidget;