import React from 'react';
import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <img 
            src={logo} 
            alt="Priceless Home Improvements" 
            className="h-12 mb-4"
          />
          <h3 className="text-2xl font-bold mb-4 text-primary">Contact Us</h3>
          <p className="flex items-center mb-2">
            <Phone className="h-5 w-5 mr-2 text-primary" />
            (910) 508-4015
          </p>
          <p className="flex items-start mb-2">
            <MapPin className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
            140 Cinema Dr. Suite i, Wilmington, NC
          </p>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Team</h3>
          <ul className="space-y-2">
            <li>Shawn Price - CEO</li>
            <li>Mike DiMichelle - District Manager</li>
            <li>Rob Swaim - Sales Manager</li>
            <li>Jeff Scnebelen - Production Manager</li>
            <li>Reagan Gallagher - Marketing Manager</li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold mb-4 text-primary">Find Us</h3>
          <div className="aspect-w-16 aspect-h-9 w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.490690089461!2d-77.92650008477987!3d34.22080008054456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f2e6e6e6e6e7%3A0x89a9f2e6e6e6e6e7!2s140%20Cinema%20Dr%20Suite%20i%2C%20Wilmington%2C%20NC%2028403!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Priceless Home Improvements Location"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-gray-700">
        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a 
            href="https://www.facebook.com/profile.php?id=61575266752587" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a 
            href="https://www.instagram.com/priceless_home_improvements_nc/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
          <a href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="/blog" className="text-gray-400 hover:text-primary transition-colors">
            Back to Home
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Priceless Home Improvements. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Professional roofing services for Wilmington, NC and the surrounding coastal areas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


