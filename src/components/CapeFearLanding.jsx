import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Star, Phone, MapPin, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const CapeFearLanding = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: ''
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
    formDataToSend.append('address', formData.address);
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

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logo} alt="Priceless Restoration" className="h-12" />
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-lg font-semibold">(910) 769-8262</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-lg">Wilmington, NC</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Cape Fear's #1 Roofing Company
            </h1>
            <p className="text-3xl mb-8">
              Get Your FREE Roof Inspection & Insurance Claim Assessment
            </p>
            
            {/* Social Proof */}
            <div className="flex justify-center items-center mb-8">
              <div className="flex space-x-1 mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-semibold">18/18 5-Star Reviews</span>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={scrollToForm}
              className="bg-yellow-400 hover:bg-yellow-500 text-red-800 text-2xl font-bold py-6 px-12 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              GET FREE INSPECTION NOW
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Insurance Experts</h3>
              <p className="text-lg text-gray-600">
                We handle all insurance claims and paperwork. Most customers pay only their deductible!
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Same-Day Service</h3>
              <p className="text-lg text-gray-600">
                Emergency repairs and inspections completed the same day you call us.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">100% Satisfaction</h3>
              <p className="text-lg text-gray-600">
                Perfect 5-star rating with 18 verified customer reviews.
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
            <Card className="p-6 shadow-lg">
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

            <Card className="p-6 shadow-lg">
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

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Get Your FREE Roof Inspection</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll contact you within 24 hours to schedule your free inspection.
              </p>
            </div>

            <Card className="p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold mb-2">Your Full Name *</label>
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="text-lg p-4"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="text-lg p-4"
                    placeholder="(910) 555-1234"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="text-lg p-4"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-2">Property Address</label>
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="text-lg p-4"
                    placeholder="Enter your property address"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  GET FREE INSPECTION
                </Button>
              </form>
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
