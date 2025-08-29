import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Star, Phone, MapPin, Shield, CheckCircle, ArrowRight, Home, FileText } from 'lucide-react';
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
                    <Input
                      type="text"
                      name="roofAge"
                      value={formData.roofAge}
                      onChange={handleInputChange}
                      className="p-3"
                      placeholder="e.g., 15 years old"
                    />
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

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
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

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Cape Fear Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500">a month ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4 text-lg">
                "We had an absolutely nominal experience working with Reagan and Jeff from Priceless home improvements! They were absolute professionals the entire time, the crew is only at our house for about six or seven hours to get the whole roof done. We couldn't be happier with the service and the quality of work that they did. Highly recommend them to anyone looking to get a new roof!"
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">Andrew M.</p>
                <span className="text-gray-500">Wilmington, NC</span>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500">9 months ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4 text-lg">
                "This is a great company to work with to replace a roof. They handled working with my insurance company very professionally, making it practically seamless. The crew who actually did all the installation were wonderful. Did it all in 1 day and left my property that night completely without the job's debris. I highly recommend."
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">Diane Bailey-Beger</p>
                <span className="text-gray-500">Wilmington, NC</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={logo} alt="Priceless Restoration" className="h-10" />
          </div>
          <p className="text-lg">
            Professional roofing services for Wilmington, NC and the Cape Fear region.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © 2024 Priceless Restoration. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CapeFearLanding;
