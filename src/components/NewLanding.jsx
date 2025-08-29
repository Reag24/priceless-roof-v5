import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Phone, Mail, MapPin, Star, Shield, CheckCircle, Home, FileText, ArrowUpCircle } from 'lucide-react';
import { trackFormSubmission } from './TrackingSimple';
import logo from '../assets/logo.png';
import ikoLogo from '../assets/iko_logo.png';
import house1 from '../assets/house1.svg';
import house2 from '../assets/house2.svg';
import house3 from '../assets/house3.svg';
import house4 from '../assets/house4.svg';
import house5 from '../assets/house5.svg';
import house6 from '../assets/house6.svg';
import BlogCarousel from './BlogCarousel';
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from './SEOSchema';
import TrackingSimple from './TrackingSimple';

const allReviews = [
  {
    name: "Andrew M.",
    text: "We had an absolutely nominal experience working with Reagan and Jeff from Priceless home improvements! They were absolute professionals the entire time, the crew is only at our house for about six or seven hours to get the whole roof done. We couldn't be happier with the service and the quality of work that they did. Highly recommend them to anyone looking to get a new roof!",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "a month ago"
  },
  {
    name: "Diane Bailey-Beger",
    text: "This is a great company to work with to replace a roof. They handled working with my insurance company very professionally, making it practically seamless. The crew who actually did all the installation were wonderful. Did it all in 1 day and left my property that night completely without the job's debris. I highly recommend.",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "9 months ago"
  },
  {
    name: "Benjamin Allman",
    text: "Rob and his team were brilliant to work with! I got their contact information from a friend who was pleased with their work, and Rob was super responsive. He showed up the next day after we spoke and gave a thorough assessment to us. The thing that stood out the most was that he gave us the truth about not needing repairs but rather just some paint in area where we had experienced leak damage. Other companies would have tried to swindle us into paying them for unnecessary repairs, but Rob's honesty saved us time and money. Between the responsiveness, thoroughness, and character of Rob & his team, I could not recommend them enough to anyone in the Sneads Ferry or Jacksonville area that needs roof repair services!",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "a year ago"
  },
  {
    name: "John McIntyre",
    text: "I was able to get a $15K+ roof for just my $2500 deductible! Rob and his team took care of all aspects of the process, from the insurance claim details, to inspections, to coordination of the roofing crew, to full clean up.",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "4 months ago"
  }
];

const reviews = allReviews.filter(review => review.location === "Wilmington, NC");

const images = [house1, house2, house3, house4, house5, house6];

const NewLanding = () => {
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

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      roofAge: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://cape-fear-automations.app.n8n.cloud/webhook/95156de0-4688-4232-9677-ae71e5fee828", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        trackFormSubmission('new_landing_form');
        navigate("/thankyou");
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const scrollToForm = () => {
    document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      <TrackingSimple />
      
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Priceless Home Improvements Logo" className="h-20" />
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
            <a href="/" className="text-gray-700 hover:text-primary">Home</a>
            <a href="/blog" className="text-gray-700 hover:text-primary">Blog</a>
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
            <a href="/contact">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${house2})` }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Wilmington's #1 Roofing Company
                <span className="block text-3xl mt-2 text-white/90">Get a FREE, No-Obligation Inspection Today!</span>
              </h2>
              <p className="text-2xl mb-8 text-white/90">
                Don't let roof concerns keep you up at night. Priceless Home Improvements offers comprehensive, no-cost roof inspections for homeowners in Wilmington, NC. We'll identify any issues and provide clear solutions.
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

            <Card id="lead-form" className="bg-white/95 backdrop-blur-sm">
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
                  <div>
                    <Input
                      placeholder="Your First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      autoComplete="given-name"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Your Phone Number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      autoComplete="tel"
                      required
                    />
                  </div>
                  <div>
                    <Select onValueChange={handleSelectChange}>
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
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg font-semibold">
                    Schedule My FREE Inspection
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    We respect your privacy. Your information will not be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="flex justify-center items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 italic mb-4">
                "I was able to get a <span className="font-bold text-primary">$15K+ roof for just my $2500 deductible!</span> Rob and his team took care of all aspects of the process, from the insurance claim details, to inspections, to coordination of the roofing crew, to full clean up."
              </blockquote>
              <p className="text-lg font-semibold text-gray-800">- John McIntyre</p>
              <div className="mt-6">
                <button
                  onClick={() => document.getElementById('reviews-section').scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary hover:text-primary/80 font-semibold text-lg underline"
                >
                  See More Reviews →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">100% Guaranteed</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We work on a contingent payment basis. This means we only get paid when your insurance claim is approved. 
            If your claim is denied, you owe us nothing. Our expertise in insurance claims and roofing ensures the best possible outcome.
          </p>
          <div className="mt-8">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-green-500 text-white">
              <CheckCircle className="h-5 w-5 mr-2" />
              Satisfaction Guaranteed
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Why Wilmington Homeowners Trust Priceless</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to providing top-tier roofing solutions with integrity and transparency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-20 w-20 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Licensed & Insured</h4>
                <p className="text-lg text-muted-foreground">
                  Fully licensed contractors with comprehensive insurance coverage for your peace of mind.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img src={ikoLogo} alt="IKO Certified" className="h-20 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">IKO Certified Experts</h4>
                <p className="text-lg text-muted-foreground">
                  Our team is certified by IKO, ensuring the highest standards in roofing installation and materials.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Star className="h-20 w-20 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">18/18 5 Star Reviews</h4>
                <p className="text-lg text-muted-foreground">
                  Proudly serving Wilmington with a track record of satisfied customers and exceptional results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Our Work in Wilmington</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={img} alt={`Roofing project ${index + 1}`} className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">What Our Wilmington Customers Say</h3>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.timeAgo}</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4">
                    "{review.text}"
                  </blockquote>
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <span className="text-sm text-gray-500">{review.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BlogCarousel />

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready for Your FREE Roof Inspection?</h3>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            Don't delay! Get peace of mind with a professional inspection and learn how our contingent payment guarantee protects you.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="text-xl px-12 py-6" onClick={scrollToForm}>
              Get Your FREE Inspection
            </Button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8">
        <Button size="lg" className="rounded-full p-4 shadow-lg" onClick={scrollToForm}>
          <ArrowUpCircle className="h-8 w-8" />
        </Button>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src={logo} alt="Priceless Home Improvements Logo" className="h-16 mb-4" />
              <p className="text-gray-300 mb-4">
                Professional roofing services for Wilmington, NC and the surrounding coastal areas. 
                We specialize in insurance claim assistance and quality roof installations.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(910) 508-4015</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Wilmington, NC</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Roof Inspections</li>
                <li>Insurance Claims</li>
                <li>Roof Repairs</li>
                <li>Roof Replacements</li>
                <li>Emergency Services</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61575266752587" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 transition-colors transform hover:scale-110"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/priceless_home_improvements_nc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-500 transition-colors transform hover:scale-110"
                >
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Priceless Home Improvements. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Professional roofing services for Wilmington, NC and the surrounding coastal areas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NewLanding;
