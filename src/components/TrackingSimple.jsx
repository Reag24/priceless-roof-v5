import { useEffect } from 'react';

const TrackingSimple = () => {
  useEffect(() => {
    // Google Analytics 4
    const GA_ID = 'G-GYE74LV9DR';
    
    // Load GA4 script
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(gaScript);
    
    // Initialize GA4
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, {
      enhanced_measurement: {
        scrolls: true,
        outbound_clicks: true,
        site_search: true,
        video_engagement: true,
        file_downloads: true,
        form_interactions: true
      }
    });

    // Meta Pixel
    const PIXEL_ID = '698918616483263';
    
    // Initialize Meta Pixel
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = '1';
    img.width = '1';
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.head.appendChild(noscript);

  }, []);

  return null; // This component doesn't render anything
};

// Helper functions for tracking events
export const trackEvent = (eventName, parameters = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackMetaPixelEvent = (eventName, parameters = {}) => {
  if (window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackMetaPixelCustomEvent = (eventName, parameters = {}) => {
  if (window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

export const trackFormSubmission = (formType = 'contact') => {
  trackEvent('generate_lead', {
    event_category: 'Form',
    event_label: formType,
    value: 1
  });
};

export const trackLeadConversion = () => {
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    event_label: 'Form Submission',
    value: 1
  });
  
  trackMetaPixelEvent('Lead');
};

export const trackBlogView = (blogTitle) => {
  trackEvent('page_view', {
    event_category: 'Blog',
    event_label: blogTitle,
    content_type: 'article'
  });
  
  trackMetaPixelCustomEvent('BlogView', {
    content_name: blogTitle,
    content_category: 'Blog'
  });
};

export const trackBlogScroll = (blogTitle) => {
  let hasTracked = false;
  
  const handleScroll = () => {
    if (hasTracked) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollTop + windowHeight) / documentHeight;
    
    if (scrollPercent >= 0.5) {
      trackBlogView(blogTitle);
      hasTracked = true;
      window.removeEventListener('scroll', handleScroll);
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export default TrackingSimple;

