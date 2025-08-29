import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { Star, Phone, MapPin, Shield, CheckCircle, ArrowRight, Home, FileText, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';
import ikoLogo from '../assets/iko_logo.png';

const CapeFearLanding = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    roofAge: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('roofAge', formData.roofAge);
    formDataToSend.append('source', 'capefear_landing_form');

    try {
      const response = await fetch('https://cape-fear-automations.app.n8n.cloud/webhook/95156de0-4688-4232-9677-ae71e5fee828', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Priceless Restoration" className="h-12" />
            <img src={ikoLogo} alt="IKO" className="h-8" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-red-600 font-medium">Home</a>
            <a href="/services" className="text-gray-700 hover:text-red-600 font-medium">Services</a>
            <a href="/contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">(910) 769-8262</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Wilmington, NC</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Form */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Cape Fear's #1 Roofing Company
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Get Your FREE Roof Inspection & Insurance Claim Assessment
              </p>
              
              {/* Social Proof */}
              <div className="flex justify-center lg:justify-start items-center mb-8">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold">18/18 5-Star Reviews</span>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:max-w-md">
              <Card className="p-8 shadow-xl bg-white text-gray-800">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Get Your FREE Inspection</h3>
                  <p className="text-gray-600">We'll contact you within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Full Name *</label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="p-3"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="p-3"
                      placeholder="(910) 555-1234"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="p-3"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Age of Roof</label>
                    <Select name="roofAge" value={formData.roofAge} onValueChange={(value) => setFormData({...formData, roofAge: value})}>
                      <SelectTrigger className="p-3">
                        <SelectValue placeholder="Select roof age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5 years">0-5 years</SelectItem>
                        <SelectItem value="6-10 years">6-10 years</SelectItem>
                        <SelectItem value="11-15 years">11-15 years</SelectItem>
                        <SelectItem value="16-20 years">16-20 years</SelectItem>
                        <SelectItem value="21-25 years">21-25 years</SelectItem>
                        <SelectItem value="26-30 years">26-30 years</SelectItem>
                        <SelectItem value="31+ years">31+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    GET FREE INSPECTION
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Review Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-lg bg-white">
              <div className="text-center mb-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 text-lg italic text-center">
                "I was able to get a <span className="font-bold text-red-600">$15K+ roof for just my $2500 deductible!</span> Rob and his team took care of all aspects of the process, from the insurance claim details, to inspections, to coordination of the roofing crew, to full clean up."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-gray-800 mb-4">- John McIntyre</p>
                <a href="#reviews" className="text-red-600 hover:text-red-700 font-medium">
                  See More Reviews →
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional roofing solutions for the Cape Fear region</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Roof Replacement</h3>
              <p className="text-gray-600">
                Complete roof replacement with premium materials and expert installation.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Insurance Claims</h3>
              <p className="text-gray-600">
                We handle all insurance paperwork and negotiations for you.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Emergency Repairs</h3>
              <p className="text-gray-600">
                Same-day emergency repairs and storm damage assessment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Wilmington Customers Say</h2>
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl text-gray-600">Trusted by Homeowners Like You</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">a month ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4 text-sm italic">
                "We had an absolutely nominal experience working with Reagan and Jeff from Priceless home improvements! They were absolute professionals the entire time, the crew is only at our house for about six or..."
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800 text-sm">- Andrew M.</p>
                <a href="#" className="text-red-600 hover:text-red-700 text-sm">Read More</a>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">9 months ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4 text-sm italic">
                "This is a great company to work with to replace a roof. They handled working with my insurance company very professionally, making it practically seamless. The crew who actually did all the installati..."
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800 text-sm">- Diane Bailey-Beger</p>
                <a href="#" className="text-red-600 hover:text-red-700 text-sm">Read More</a>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">a year ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4 text-sm italic">
                "Rob and his team were brilliant to work with! I got their contact information from a friend who was pleased with their work, and Rob was super responsive. He showed up the next day after we spoke and..."
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800 text-sm">- Benjamin Allman</p>
                <a href="#" className="text-red-600 hover:text-red-700 text-sm">Read More</a>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">4 months ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4 text-sm italic">
                "I connected with Priceless Home Improvement through a referral when I was looking for a contractor for a new roof. I was impressed with Rob Swaim, project manager, from my first phone conversation wit..."
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800 text-sm">- John McIntyre</p>
                <a href="#" className="text-red-600 hover:text-red-700 text-sm">Read More</a>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">6 months ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4 text-sm italic">
                "Very easy process from start to finish. From initial contact to finished product, it was way quicker than I expected. Rob was my point of contact. He assisted with all aspects of the process & it ran..."
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800 text-sm">- Amy Focer</p>
                <a href="#" className="text-red-600 hover:text-red-700 text-sm">Read More</a>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">3 months ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4 text-sm italic">
                "Our whole process with Rob was smooth from start to finish, highly recommended!"
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800 text-sm">- Laura Green</p>
                <a href="#" className="text-red-600 hover:text-red-700 text-sm">Read More</a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Us */}
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="Priceless Home Improvements" className="h-8 mr-2" />
                <span className="text-sm font-semibold">PRICELESS HOME IMPROVEMENTS</span>
              </div>
              <h3 className="text-orange-500 font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(910) 508-4015</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>140 Cinema Dr. Suite I, Wilmington, NC 28403</span>
                </div>
              </div>
            </div>

            {/* Our Team */}
            <div>
              <h3 className="text-orange-500 font-bold mb-4">Our Team</h3>
              <div className="space-y-1 text-sm">
                <p>Shawn Price - CEO</p>
                <p>Mike DiMichelle - District Manager</p>
                <p>Rob Swaim - Sales Manager</p>
                <p>Jeff Scnebelen - Production Manager</p>
                <p>Reagan Gallagher - Marketing Manager</p>
              </div>
            </div>

            {/* Find Us */}
            <div>
              <h3 className="text-orange-500 font-bold mb-4">Find Us</h3>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-sm mb-2">140 Cinema Dr suite i</p>
                <p className="text-sm mb-2">Wilmington, NC</p>
                <a href="#" className="text-blue-400 text-sm hover:underline">View larger map</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="/privacy" className="text-white hover:text-gray-300">Privacy Policy</a>
                <a href="/blog" className="text-white hover:text-gray-300">More Blog Posts</a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                  <Facebook className="h-4 w-4 text-white" />
                </a>
                <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700">
                  <Instagram className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-400">© 2025 Priceless Home Improvements. All rights reserved.</p>
              <p className="text-xs text-gray-500 mt-2">Professional roofing services for Wilmington, NC and the surrounding coastal areas.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CapeFearLanding;
