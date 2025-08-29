import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, Star, Shield, Clock, Award, Phone, MapPin, Users, Zap } from 'lucide-react';
import { trackFormSubmission } from './TrackingSimple';

const NCLanding = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "",
    urgency: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const webhookUrl = "https://cape-fear-automations.app.n8n.cloud/webhook/95156de0-4688-4232-9677-ae71e5fee828";
      
      // Create FormData for proper payload structure
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('propertyType', formData.propertyType);
      formDataToSend.append('urgency', formData.urgency);
      formDataToSend.append('timestamp', new Date().toISOString());
      formDataToSend.append('source', 'nc_landing_form');
      formDataToSend.append('formType', 'roof_consultation');
      
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });

      // Track the form submission
      trackFormSubmission('nc_landing_form', formData);

      // Redirect to thank you page
      navigate("/thankyou");
      
    } catch (error) {
      console.error("Error sending form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="cursor-pointer">
                <img src="/src/assets/logo.png" alt="Priceless Restoration" className="h-12 w-auto" />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span className="text-red-600 font-semibold">(910) 769-8262</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-600">Wilmington, NC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[700px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(179, 33, 33, 0.85), rgba(139, 26, 26, 0.85)), url('/src/assets/logo.png')`
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-6">
                <span className="bg-yellow-400 text-red-800 px-4 py-2 rounded-full text-sm font-bold">North Carolina Special</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Is Your Roof Ready for <span className="text-yellow-300">Storm Season?</span>
              </h1>
              <p className="text-2xl mb-6 font-semibold">
                Get Your FREE Storm Damage Assessment Today!
              </p>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                North Carolina homeowners know the importance of a strong roof. Our certified inspectors 
                will assess your roof's condition and identify any storm damage or potential issues 
                before the next big storm hits.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Shield className="text-yellow-300" size={24} />
                  <span className="font-semibold">Storm Damage Experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-yellow-300" size={24} />
                  <span className="font-semibold">24-Hour Response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-yellow-300" size={24} />
                  <span className="font-semibold">Insurance Claims Help</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-300" size={24} />
                  <span className="font-semibold">No-Obligation Assessment</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <p className="text-sm opacity-90">
                  <strong>Limited Time:</strong> Free storm damage assessment for North Carolina residents. 
                  Don't wait until it's too late!
                </p>
              </div>
            </div>

            <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-red-600 font-bold">
                  Get Your FREE Storm Assessment
                </CardTitle>
                <p className="text-gray-600">
                  Complete the form below for your no-obligation roof evaluation
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    autoComplete="name"
                    className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                  <Input
                    placeholder="Your Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    autoComplete="email"
                    className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                  <Input
                    placeholder="Your Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    autoComplete="tel"
                    className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                  <Select onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
                    <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Home</SelectItem>
                      <SelectItem value="commercial">Commercial Property</SelectItem>
                      <SelectItem value="multi-family">Multi-Family</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                    <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                      <SelectValue placeholder="How Urgent?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency - Need immediate help</SelectItem>
                      <SelectItem value="soon">Soon - Within the next month</SelectItem>
                      <SelectItem value="planning">Planning - Just getting quotes</SelectItem>
                      <SelectItem value="curious">Curious - Want to know condition</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    type="submit" 
                    disabled={isLoading} 
                    className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg font-semibold"
                  >
                    {isLoading ? "Submitting..." : "Get My FREE Storm Assessment"}
                  </Button>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-3 pt-4">
                    <span className="text-xl font-bold text-red-600">4.9</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-600">883+ Reviews</span>
                  </div>
                  
                  <p className="text-xs text-center text-gray-500">
                    We respect your privacy. Your information will not be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Priceless Restoration?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're the trusted choice for North Carolina homeowners when it comes to storm damage assessment and roof repairs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your protection</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">24-Hour Response</h3>
              <p className="text-gray-600">Emergency storm damage response available</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">Certified inspectors with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Storm Damage Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial assessment to complete restoration, we handle all aspects of storm damage repair.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Emergency Response</h3>
              <p className="text-gray-600 text-sm">24/7 emergency storm damage response</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Damage Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive storm damage evaluation</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Insurance Claims</h3>
              <p className="text-gray-600 text-sm">Expert assistance with insurance claims</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Full Restoration</h3>
              <p className="text-gray-600 text-sm">Complete roof repair and restoration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't Wait Until It's Too Late!</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Storm season is here. Get your FREE assessment today and protect your home before the next storm hits.
          </p>
          <Button 
            onClick={() => document.getElementById('storm-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 hover:bg-yellow-500 text-red-800 text-lg font-bold px-8 py-4"
          >
            Get Your FREE Assessment Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/src/assets/logo.png" alt="Priceless Restoration" className="h-12 w-auto mb-4" />
              <p className="text-gray-400">
                Your trusted partner for storm damage assessment and roof restoration in North Carolina.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(910) 769-8262</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Wilmington, NC</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Storm Damage Assessment</li>
                <li>Emergency Roof Repairs</li>
                <li>Insurance Claims Help</li>
                <li>Complete Restoration</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Priceless Restoration. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NCLanding;
