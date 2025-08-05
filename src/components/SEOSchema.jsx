import React from 'react';
import { Helmet } from 'react-helmet-async';

// Organization Schema for Homepage
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Priceless Home Improvements",
    "url": "https://priceless-nc.com",
    "logo": "https://priceless-nc.com/logo.png",
    "description": "Professional roofing services in Wilmington, NC and surrounding coastal areas. Expert roof repair, replacement, and storm damage restoration.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "140 Cinema Dr. Suite I",
      "addressLocality": "Wilmington",
      "addressRegion": "NC",
      "postalCode": "28403",
      "addressCountry": "US"
    },
    "telephone": "(910) 508-4015",
    "areaServed": [
      "Wilmington, NC",
      "Leland, NC", 
      "Hampstead, NC",
      "Wrightsville Beach, NC",
      "Carolina Beach, NC",
      "Southport, NC",
      "Castle Hayne, NC",
      "Surf City, NC"
    ],
    "serviceType": [
      "Roof Repair",
      "Roof Replacement", 
      "Storm Damage Restoration",
      "Insurance Claims Assistance",
      "Wind Damage Repair",
      "Hail Damage Repair"
    ],
    "priceRange": "$$",
    "hasCredential": "IKO Certified",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50+"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Local Business Schema
export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Priceless Home Improvements",
    "image": "https://priceless-nc.com/logo.png",
    "telephone": "(910) 508-4015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "140 Cinema Dr. Suite I",
      "addressLocality": "Wilmington",
      "addressRegion": "NC",
      "postalCode": "28403",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.2208",
      "longitude": "-77.9265"
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "paymentAccepted": "Cash, Check, Credit Card, Insurance Claims"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Blog Article Schema
export const BlogArticleSchema = ({ post, baseUrl = "https://priceless-nc.com" }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image.startsWith('http') ? post.image : `${baseUrl}/${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Priceless Home Improvements",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Priceless Home Improvements",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": "Roofing",
    "wordCount": post.readTime.replace(/\D/g, '') * 200 // Estimate based on read time
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Website Schema
export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Priceless Home Improvements",
    "url": "https://priceless-nc.com",
    "description": "Professional roofing services in Wilmington, NC and surrounding coastal areas",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://priceless-nc.com/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

