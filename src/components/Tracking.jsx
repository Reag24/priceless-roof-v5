import React from 'react';
import { Helmet } from 'react-helmet-async';

const Tracking = () => {
  // Actual tracking IDs
  const GOOGLE_ANALYTICS_ID = 'G-GYE74LV9DR'; // GA4 Measurement ID
  const META_PIXEL_ID = '698918616483263'; // Meta Pixel ID

  return (
    <Helmet>
      {/* Google Analytics 4 with Enhanced Measurement */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_ID}', {
            enhanced_measurement: {
              scrolls: true,
              outbound_clicks: true,
              site_search: true,
              video_engagement: true,
              file_downloads: true,
              form_interactions: true
            }
          });
        `}
      </script>

      {/* Meta Pixel */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </script>

      {/* Meta Pixel Noscript */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: 'none'}}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </Helmet>
  );
};

// Helper functions for tracking events
export const trackEvent = (eventName, parameters = {}) => {
  // Google Analytics event tracking
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Meta Pixel specific tracking functions
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

// Predefined tracking events for your roofing business
export const trackFormSubmission = (formType = 'contact') => {
  // GA4 event
  trackEvent('generate_lead', {
    event_category: 'Form',
    event_label: formType,
    value: 1
  });
  
  // Meta Pixel Lead event (for thank you page only)
  // This will be called specifically on thank you page
};

export const trackLeadConversion = () => {
  // GA4 Lead event
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    event_label: 'Form Submission',
    value: 1
  });
  
  // Meta Pixel Lead event - ONLY for thank you page
  trackMetaPixelEvent('Lead');
};

export const trackPhoneClick = () => {
  trackEvent('contact', {
    event_category: 'Phone',
    event_label: 'Header Click',
    value: 1
  });
};

export const trackBlogView = (blogTitle) => {
  // GA4 event
  trackEvent('page_view', {
    event_category: 'Blog',
    event_label: blogTitle,
    content_type: 'article'
  });
  
  // Meta Pixel custom BlogView event
  trackMetaPixelCustomEvent('BlogView', {
    content_name: blogTitle,
    content_category: 'Blog'
  });
};

// Blog scroll tracking - fires when user scrolls halfway down
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
  
  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export default Tracking;

