import { useEffect, useCallback } from 'react';

export const usePixel = (pixelId) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Meta Pixel if not already present
    if (!window.fbq) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      if (pixelId) {
        window.fbq('init', pixelId);
      }
    }
  }, [pixelId]);

  const trackPageView = useCallback(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  const trackEvent = useCallback((eventName, data = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, data);
    }
  }, []);

  const trackConversion = useCallback((value = 0, currency = 'USD', eventName = 'Purchase') => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, { value, currency });
    }
  }, []);

  return { trackPageView, trackEvent, trackConversion };
};