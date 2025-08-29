import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Phone, Mail, MapPin, Star, Shield, CheckCircle, Home, FileText, ArrowUpCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

// Blog Components
import BlogCarousel from './components/BlogCarousel';
import BlogListing from './components/BlogListing';
import ThankYou from './components/ThankYou';
import ScrollToTop from './components/ScrollToTop';
import RoofingChecklist from './blog_posts/roofing-checklist';
import MismatchingShingles from './blog_posts/mismatching-shingles';
import DeniedClaimPost from './blog_posts/denied-claim';
import WhyRoofersKnockPost from './blog_posts/why-roofers-knock';
import HiddenLeakPost from './blog_posts/hidden-leak';
import RoofProblemsFirstPost from './blog_posts/roof-problems-first';
import HowLeaksStartPost from './blog_posts/how-leaks-start';
import Landlords910Post from './blog_posts/landlords-910';
import NotAllRoofersSamePost from './blog_posts/not-all-roofers-same';
import HurricaneDeductiblesPost from './blog_posts/hurricane-deductibles';
import NoRoofMoneyNoProblemPost from './blog_posts/no-roof-money-no-problem';
import FiveWaysRoofersCutCornersPost from './blog_posts/5-ways-roofers-cut-corners';
import WillClaimGetDroppedPost from './blog_posts/will-claim-get-dropped';
import GranulesInGuttersPost from './blog_posts/granules-in-gutters';

import logo from './assets/logo.png';
import ikoLogo from './assets/iko_logo.png';

// SEO and Tracking Components
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from './components/SEOSchema';
import TrackingSimple, { trackFormSubmission } from './components/TrackingSimple';
import house1 from './assets/house1.svg';
import house2 from './assets/house2.svg';
import house3 from './assets/house3.svg';
import house4 from './assets/house4.svg';
import house5 from './assets/house5.svg';
import house6 from './assets/house6.svg';
import NCLanding from "./components/NCLanding.jsx";
import WilmingtonLanding from "./components/WilmingtonLanding.jsx";

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
    text: "I connected with Priceless Home Improvement through a referral when I was looking for a contractor for a new roof. I was impressed with Rob Swaim, project manager, from my first phone conversation with him. He educated me about my options and explained the insurance claim process (I had no idea this was possible). I assumed I had to pay for a new roof out of pocket, and it turns out I was able to get a $15K+ roof for just my $2500 deductible! Rob and his team took care of all aspects of the process, from the insurance claim details, to inspections, to coordination of the roofing crew, to full clean up. I am overjoyed that he was able to upgrade my roof to a fully fortified one through a grant from the NCIUA since my policy included the appropriate endorsement - living in coastal NC with frequent hurricanes, this is a massive upgrade! From start to finish, Rob and his team, including Russell the foreman, and Eduardo and his amazing crew of roofing technicians, exhibited professionalism, experience, and expertise. They kept me in the loop every step of the way, there were never any surprises, and Rob responded promptly every time I had a question. When I say professionalism from start to finish, I mean it - when the roof was completed, crew members spent several hours going over my yard with a fine tooth comb picking up stray nails and debris, they left my property looking better than they found it. I truly can't recommend Rob Swaim and his crew from Priceless Home Improvement strongly enough. Call them, you'll be glad you did. -John M.",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "a year ago"
  },
  {
    name: "Amy Focer",
    text: "Very easy process from start to finish. From initial contact to finished product, it was way quicker than I expected. Rob was my point of contact. He assisted with all aspects of the process & it ran seamlessly. There was very minimal work on my end. Would recommend without hesitation!",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "a year ago"
  },
  {
    name: "Laura Green",
    text: "Our whole process with Rob was smooth from start to finish, highly recommended!",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "4 months ago"
  }
];

const reviews = allReviews.filter(review => review.location === "Wilmington, NC");

// Review Card Component with Read More functionality
const ReviewCard = ({ review, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200; // Characters to show before "Read More"
  
  const shouldTruncate = review.text.length > maxLength;
  const displayText = shouldTruncate && !isExpanded 
    ? review.text.substring(0, maxLength) + "..."
    : review.text;

  return (
    <Card key={index} className="hover:shadow-lg transition-shadow" id={index === 0 ? "reviews-section" : undefined}>
      <CardContent className="pt-6">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          {review.timeAgo && (
            <span className="ml-2 text-sm text-gray-500">• {review.timeAgo}</span>
          )}
        </div>
        <p className="text-xl text-muted-foreground mb-4 italic">"{displayText}"</p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-primary/80 font-semibold mb-4 text-lg"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
        <p className="text-xl font-semibold">- {review.name}</p>
      </CardContent>
    </Card>
  );
};

const images = [house1, house2, house3, house4, house5, house6];

const LandingPage = () => {
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
      const response = await fetch("https://cape-fear-automations.app.n8n.cloud/webhook/18ab4a15-454e-48eb-ada7-098d5ca273dd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Track form submission
        trackFormSubmission('roof_inspection');
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
      {/* SEO Schema and Tracking */}
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      <TrackingSimple />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Priceless Home Improvements Logo" className="h-20" />
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary">Blog</Link>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${house2})` }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Worried About Your Roof?
                <span className="block text-3xl mt-2 text-white/90">Get a FREE, No-Obligation Inspection Today!</span>
              </h2>
              <p className="text-2xl mb-8 text-white/90">
                Don't let roof concerns keep you up at night. Priceless Home Improvements offers comprehensive, no-cost roof inspections for homeowners in Wilmington, NC. We'll identify any issues and provide clear solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6" />
                  <span className="text-lg">Expert Certified Inspectors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6" />
                  <span className="text-lg">Detailed Report & Recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6" />
                  <span className="text-lg">No Hidden Fees, Ever</span>
                </div>
              </div>
            </div>
            
            {/* Lead Capture Form */}
            <Card id="lead-form" className="bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Schedule Your FREE Inspection</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll contact you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="h-12 text-lg"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-12 text-lg"
                    />
                  </div>
                  <div>
                    <Select onValueChange={handleSelectChange} value={formData.roofAge} required>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Age of Your Roof" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5">0-5 Years</SelectItem>
                        <SelectItem value="6-10">6-10 Years</SelectItem>
                        <SelectItem value="11-15">11-15 Years</SelectItem>
                        <SelectItem value="20+">20+ Years</SelectItem>
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

      {/* Review Snippet Section */}
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

      {/* Contingent Guarantee Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4 text-primary">Our Unbeatable Guarantee</h3>
          <p className="text-2xl mb-8 max-w-3xl mx-auto text-gray-700">
            We stand by our commitment to your satisfaction. Our work is completely contingent on your insurance claim getting fully approved. This means:
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-6 shadow-lg border-l-4 border-primary">
              <CardTitle className="text-2xl font-bold text-primary mb-3">If Your Claim is Denied:</CardTitle>
              <CardDescription className="text-xl text-gray-800">
                You owe us absolutely nothing. Our inspection and assistance come at no cost to you.
              </CardDescription>
            </Card>
            <Card className="bg-white p-6 shadow-lg border-l-4 border-primary">
              <CardTitle className="text-2xl font-bold text-primary mb-3">If Your Claim is Approved:</CardTitle>
              <CardDescription className="text-xl text-gray-800">
                You only pay your deductible for a full new roof. We handle the rest, ensuring a seamless process.
              </CardDescription>
            </Card>
          </div>
          <p className="text-xl mt-8 text-gray-600">
            This guarantee ensures you have nothing to lose and a brand new roof to gain. We only get paid when you get approved!
          </p>
          <div className="mt-8">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-green-500 text-white">
              <CheckCircle className="h-5 w-5 mr-2" />
              Satisfaction Guaranteed
            </Badge>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                <h4 className="text-xl font-semibold mb-2">5-Star Reviews</h4>
                <p className="text-lg text-muted-foreground">
                  Proudly serving Wilmington with a track record of satisfied customers and exceptional results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">What Our Wilmington Customers Say</h3>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-2xl font-semibold">Trusted by Homeowners Like You</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Carousel Section */}
      <BlogCarousel />

      {/* Final CTA Section */}
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

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <Button size="lg" className="rounded-full p-4 shadow-lg" onClick={scrollToForm}>
          <ArrowUpCircle className="h-8 w-8" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
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
              140 Cinema Dr. Suite I, Wilmington, NC 28403
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
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
            <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">
              More Blog Posts
            </Link>
            
            {/* Social Media Links */}
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

const ContactPage = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center py-16">
    <Card className="w-full max-w-2xl mx-auto p-8 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl text-primary mb-2">Contact Us</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          We're here to help with all your roofing needs.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <Phone className="h-6 w-6 text-primary" />
          <p className="text-lg font-semibold">(910) 508-4015</p>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="h-6 w-6 text-primary" />
          <p className="text-lg font-semibold">140 Cinema Dr. Suite I, Wilmington, NC 28403</p>
        </div>
        <div className="text-center mt-8">
          <Link to="/">
            <Button size="lg" className="text-lg">
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  </div>
);

const ThankYouPage = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center py-16">
    <Card className="w-full max-w-2xl mx-auto p-8 shadow-lg text-center">
      <CardHeader>
        <CardTitle className="text-3xl text-primary mb-2">Thank You!</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          Your request for a FREE roof inspection has been successfully submitted.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <CheckCircle className="h-24 w-24 text-green-500 mx-auto" />
        <p className="text-xl font-semibold text-gray-800">
          We appreciate you reaching out to Priceless Home Improvements.
        </p>
        <p className="text-lg text-muted-foreground">
          Our team will review your information and contact you shortly to schedule your inspection.
        </p>
        <Link to="/">
          <Button size="lg" className="text-lg">
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
        </Link>
      </CardContent>
    </Card>
  </div>
);

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-background flex flex-col items-center py-16">
    <Card className="w-full max-w-4xl mx-auto p-8 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl text-primary mb-2">Privacy Policy</CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          Your privacy is important to us.
        </CardDescription>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <p>
          This Privacy Policy describes how Priceless Home Improvements ("we," "us," or "our") collects, uses, and discloses your personal information when you visit or make a submission through pricelessnc.com (the "Site").
        </p>
        <h3>Information We Collect</h3>
        <p>
          When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your submissions. We may also collect additional information if you contact us for customer support.
        </p>
        <h4>Personal Information</h4>
        <ul>
          <li><strong>Name:</strong> Collected when you provide it in our contact forms.</li>
          <li><strong>Phone Number:</strong> Collected when you provide it in our contact forms.</li>
          <li><strong>Roof Age:</strong> Collected when you provide it in our contact forms.</li>
        </ul>
        <h3>How We Use Your Information</h3>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide you with free roof inspection services.</li>
          <li>Communicate with you regarding your inspection request.</li>
          <li>Improve our services and website.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <h3>Sharing Your Personal Information</h3>
        <p>
          We do not share your personal information with third parties except as necessary to provide our services or as required by law. We may use third-party service providers to assist us in operating our business, such as for data storage or communication, and these providers may have access to your personal information.
        </p>
        <h3>Your Rights</h3>
        <p>
          You have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
        </p>
        <h3>Contact Us</h3>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@pricelessnc.com or by mail using the details provided below:
        </p>
        <p>
          Priceless Home Improvements<br/>
          140 Cinema Dr. Suite I<br/>
          Wilmington, NC 28403
        </p>
      </CardContent>
      <div className="text-center mt-8">
        <Link to="/">
          <Button size="lg" className="text-lg">
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </Card>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/blog/roofing-checklist" element={<RoofingChecklist />} />
        <Route path="/blog/mismatching-shingles" element={<MismatchingShingles />} />
        <Route path="/blog/denied-claim" element={<DeniedClaimPost />} />
        <Route path="/blog/why-roofers-knock" element={<WhyRoofersKnockPost />} />
        <Route path="/blog/hidden-leak" element={<HiddenLeakPost />} />
        <Route path="/blog/roof-problems-first" element={<RoofProblemsFirstPost />} />
        <Route path="/blog/how-leaks-start" element={<HowLeaksStartPost />} />
        <Route path="/blog/landlords-910" element={<Landlords910Post />} />
        <Route path="/blog/not-all-roofers-same" element={<NotAllRoofersSamePost />} />
        <Route path="/blog/hurricane-deductibles" element={<HurricaneDeductiblesPost />} />
        <Route path="/blog/no-roof-money-no-problem" element={<NoRoofMoneyNoProblemPost />} />
        <Route path="/blog/5-ways-roofers-cut-corners" element={<FiveWaysRoofersCutCornersPost />} />
        <Route path="/blog/will-claim-get-dropped" element={<WillClaimGetDroppedPost />} />
        <Route path="/blog/granules-in-gutters" element={<GranulesInGuttersPost />} />
        <Route path="/wilmington-landing" element={<WilmingtonLanding />} />
        <Route path="/nc-landing" element={<NCLanding />} />
      </Routes>
    </Router>
  );
}

export default App;


