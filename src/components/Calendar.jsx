import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Footer from './Footer';
import logo from '../assets/logo.png';
import { Phone, MapPin, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Calendar = () => {
  // Generate array of 60 days
  const days = Array.from({ length: 60 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Priceless Home Improvements Logo" className="h-20" />
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary">Blog</Link>
            <Link to="/calendar" className="text-primary font-bold">Calendar</Link>
          </nav>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-semibold">(910) 508-4015</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Wilmington, NC</span>
            </div>
            <Link to="/contact">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            How long till your new roof:
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your roofing project timeline with our 60-day calendar. Each day represents a step closer to your beautiful new roof!
          </p>
        </div>

        {/* Calendar Grid */}
        <Card className="max-w-7xl mx-auto shadow-lg">
          <CardHeader className="text-center bg-primary text-white">
            <CardTitle className="text-3xl">60-Day Roofing Timeline</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-10 gap-3 md:gap-4">
              {days.map((day) => (
                <div
                  key={day}
                  className="aspect-square flex items-center justify-center bg-gray-50 hover:bg-primary hover:text-white transition-colors duration-200 rounded-lg border-2 border-gray-200 hover:border-primary cursor-pointer group"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold group-hover:text-white">
                      Day
                    </div>
                    <div className="text-2xl font-bold group-hover:text-white">
                      {day}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Information Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">What to Expect</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Days 1-7:</strong> Initial inspection and insurance claim filing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Days 8-21:</strong> Insurance review and approval process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Days 22-35:</strong> Material ordering and scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Days 36-45:</strong> Pre-installation preparations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Days 46-60:</strong> Installation and final inspection</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Why Choose Priceless?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <span>Transparent timeline and process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <span>Licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <span>IKO certified installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <span>Contingent payment guarantee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <span>5-star customer satisfaction</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-primary text-white rounded-lg p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your 60-Day Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your FREE roof inspection today and begin the countdown to your new roof!
          </p>
          <Link to="/">
            <Button size="lg" variant="secondary" className="text-xl px-12 py-6">
              Schedule FREE Inspection
            </Button>
          </Link>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link to="/">
            <Button variant="outline" size="lg" className="text-lg">
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Calendar;
