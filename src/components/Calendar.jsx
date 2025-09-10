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
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            How long till your new roof:
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your step by step path to getting your payout for a new roof!
          </p>
        </div>

        {/* Calendar Grid */}
        <Card className="max-w-7xl mx-auto shadow-lg">
          <CardHeader className="text-center bg-primary text-white">
            <CardTitle className="text-3xl">60-Day Roofing Timeline</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-8">
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-4">
              {days.map((day) => (
                <div
                  key={day}
                  className="aspect-square flex items-center justify-center bg-gray-50 hover:bg-primary hover:text-white transition-colors duration-200 rounded-lg border-2 border-gray-200 hover:border-primary cursor-pointer group"
                >
                  <div className="text-center">
                    <div className="text-xs md:text-lg font-bold group-hover:text-white">
                      Day
                    </div>
                    <div className="text-sm md:text-2xl font-bold group-hover:text-white">
                      {day}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Timeline Section */}
        <div className="mt-16 space-y-8 max-w-6xl mx-auto">
          {/* Day 0 */}
          <Card className="shadow-lg border-l-4 border-primary">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-primary">Day 0 – Your Call & Inspection</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>You schedule your free roof inspection.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Your roof is checked that same day (or within 24 hours).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>You see photos of any issues so you know exactly what's going on.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>You learn if your roof looks like it may qualify for replacement.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Day 7-14 */}
          <Card className="shadow-lg border-l-4 border-primary">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-primary">Day 7–14 – Your Adjuster Visit</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>The adjuster calls you and sets a time to come out.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>We meet them at your home so you don't have to go through it alone.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>We point out the damage and make sure nothing is missed.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>After the inspection, the adjuster files paperwork with your carrier.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Day 15-25 */}
          <Card className="shadow-lg border-l-4 border-primary">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-primary">Day 15–25 – Approval Process</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Your carrier reviews the adjuster's report.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>If your claim is approved, we move forward with you under a contingency agreement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>This means we only do the work if your claim is approved — no risk to you.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Day 26-35 */}
          <Card className="shadow-lg border-l-4 border-primary">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-primary">Day 26–35 – Your Project Gets Ready</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Once approved, your paperwork is finalized.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>You pick shingle colors and style that fit your home.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Materials are measured, ordered, and reserved for your project.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Day 36-50 */}
          <Card className="shadow-lg border-l-4 border-primary">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-primary">Day 36–50 – Your Build Is Scheduled</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Your roof is added to the install calendar.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>You get updates on delivery and install dates.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>You know exactly when the crew is coming so you can plan ahead.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Day 51-60 */}
          <Card className="shadow-lg border-l-4 border-primary">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-primary">Day 51–60 – Your 1-Day Roof Install</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Your new roof is installed in just one day.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Your yard is cleaned, nails picked up, and debris hauled away.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>You walk the property with us and approve the work.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>You finish with a brand-new roof, ready before storm season.</span>
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
