import { useEffect } from 'react';

export const useGTM = (gtmId) => {
  useEffect(() => {
    if (!gtmId) return;

    // Prevent multiple injections if the component re-mounts (e.g., in React StrictMode)
    if (document.getElementById('gtm-script')) return;

    // Initialize the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    // Inject the GTM script
    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    
    // Insert before the first script tag or append to head
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }, [gtmId]);
};