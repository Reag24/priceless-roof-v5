import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { CheckCircle, Home, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import Footer from './Footer';
import { trackLeadConversion } from './TrackingSimple';

const ThankYou = () => {
  useEffect(() => {
    // Track lead conversion on thank you page load
    trackLeadConversion();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Priceless Home Improvements Logo" className="h-16" />
            <Link to="/" className="text-xl font-bold text-primary">
              Priceless Home Improvements
            </Link>
          </div>
          <Link to="/">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Thank You Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center">
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-primary mb-4">Thank You!</h1>
            <p className="text-xl text-gray-700 mb-8">
              Your request for a FREE roof inspection has been submitted successfully.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">We'll Contact You</h3>
                <p className="text-gray-600">Our team will reach out within 24 hours to schedule your inspection.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">FREE Inspection</h3>
                <p className="text-gray-600">Our certified experts will thoroughly inspect your roof at no cost.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Detailed Report</h3>
                <p className="text-gray-600">You'll receive a comprehensive report with our recommendations.</p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-lg mb-6">
              If you have an urgent roofing concern, don't wait! Call us directly.
            </p>
            <a href="tel:+19105084015" className="inline-flex items-center">
              <Button size="lg" variant="secondary" className="text-xl px-8 py-4">
                <Phone className="h-6 w-6 mr-2" />
                Call (910) 508-4015
              </Button>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Want to learn more about roofing while you wait?
            </p>
            <Link to="/blog">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYou;

