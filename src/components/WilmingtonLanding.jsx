import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Phone, Mail, MapPin, Star, Shield, CheckCircle, Home, FileText, ArrowUpCircle } from "lucide-react";
import { trackFormSubmission } from "./TrackingSimple";
import logo from "../assets/logo.png";
import ikoLogo from "../assets/iko_logo.png";
import house1 from "../assets/house1.svg";
import house2 from "../assets/house2.svg";
import house3 from "../assets/house3.svg";
import house4 from "../assets/house4.svg";
import house5 from "../assets/house5.svg";
import house6 from "../assets/house6.svg";

const WilmingtonLanding = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    roofAge: ""
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
    
    try {
      const webhookUrl = "https://cape-fear-automations.app.n8n.cloud/webhook/95156de0-4688-4232-9677-ae71e5fee828";
      
      // Create FormData for proper payload structure
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('roofAge', formData.roofAge);
      formDataToSend.append('timestamp', new Date().toISOString());
      formDataToSend.append('source', 'wilmington_landing_form');
      formDataToSend.append('formType', 'roof_inspection');
      
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });

      // Track the form submission
      trackFormSubmission('wilmington_landing_form', formData);

      // Redirect to thank you page
      navigate("/thankyou");
      
    } catch (error) {
      console.error("Error sending form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="/" className="cursor-pointer">
                <img src={logo} alt="Priceless Home Improvements Logo" className="h-20" />
              </a>
              <nav className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-700 hover:text-primary font-medium">Home</a>
                <a href="/blog" className="text-gray-700 hover:text-primary font-medium">Blog</a>
              </nav>
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
              <Button className="bg-primary text-primary-foreground hover:bg-accent">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(179, 33, 33, 0.9), rgba(139, 26, 26, 0.9)), url(${house1})`
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Wilmington's <span className="text-white bg-primary/20 px-2 rounded">#1 Roofing Company</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Get a FREE, No-Obligation Inspection Today!
              </p>
              <p className="text-lg mb-8 opacity-90">
                Don't let roof concerns keep you up at night. Priceless Home Improvements offers comprehensive, 
                no-cost roof inspections for homeowners in Wilmington, NC. We'll identify any issues 
                and provide clear solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success" size={20} />
                  <span>Expert Certified Inspectors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success" size={20} />
                  <span>Detailed Report & Recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success" size={20} />
                  <span>No Hidden Fees, Ever</span>
                </div>
              </div>
            </div>

            <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-primary">
                  Schedule Your FREE Inspection
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you shortly.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    autoComplete="given-name"
                    required
                  />
                  <Input
                    placeholder="Your Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    autoComplete="tel"
                    required
                  />
                  <Select onValueChange={(value) => setFormData({ ...formData, roofAge: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Age of Your Roof" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-5">0-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="11-15">11-15 years</SelectItem>
                      <SelectItem value="16-20">16-20 years</SelectItem>
                      <SelectItem value="20+">20+ years</SelectItem>
                      <SelectItem value="unknown">Not sure</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-accent">
                    Schedule My FREE Inspection
                  </Button>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-3 pt-3">
                    <span className="text-xl font-bold text-primary">4.9</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">883+ Reviews</span>
                  </div>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    We respect your privacy. Your information will not be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl font-semibold text-gray-900 mb-4">
              "I was able to get a $15K+ roof for just my $2500 deductible! Rob and his team took care of all aspects of the process, from the insurance claim details, to inspections, to coordination of the roofing crew, to full clean up."
            </blockquote>
            <p className="text-lg text-gray-600">- John McIntyre</p>
            <div className="mt-6">
              <a href="/blog" className="text-primary hover:text-accent font-semibold">
                See More Reviews →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WilmingtonLanding;
