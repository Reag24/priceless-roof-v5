import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Phone, Mail, MapPin, Star, Shield, CheckCircle, Home, FileText, ArrowUpCircle, Clock, DollarSign, AlertTriangle, Award } from "lucide-react";
import { trackFormSubmission } from "./TrackingSimple";
import logo from "../assets/logo.png";
import ikoLogo from "../assets/iko_logo.png";
import house1 from "../assets/house1.svg";
import house2 from "../assets/house2.svg";
import house3 from "../assets/house3.svg";
import house4 from "../assets/house4.svg";
import house5 from "../assets/house5.svg";
import house6 from "../assets/house6.svg";
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from "./SEOSchema";
import TrackingSimple from "./TrackingSimple";

const images = [house1, house2, house3, house4, house5, house6];

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
    name: "John McIntyre",
    text: "I connected with Priceless Home Improvement through a referral when I was looking for a contractor for a new roof. I was impressed with Rob Swaim, project manager, from my first phone conversation with him. He educated me about my options and explained the insurance claim process (I had no idea this was possible). I assumed I had to pay for a new roof out of pocket, and it turns out I was able to get a $15K+ roof for just my $2500 deductible! Rob and his team took care of all aspects of the process, from the insurance claim details, to inspections, to coordination of the roofing crew, to full clean up.",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "a year ago"
  }
];

const reviews = allReviews.filter(review => review.location === "Wilmington, NC");

// Review Card Component with Read More functionality
const ReviewCard = ({ review, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;
  
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

const HighConvertingLanding = () => {
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
              <div className="mb-4">
                <Badge className="bg-yellow-500 text-black text-lg px-4 py-2 font-bold">
                  <Clock className="h-5 w-5 mr-2" />
                  LIMITED TIME: Storm Season Special
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Wilmington's #1 Roofing Company
                <span className="block text-2xl md:text-3xl mt-4 text-yellow-300">Get a $15,000+ Roof for Just Your Deductible - 100% Insurance Approved or You Pay NOTHING!</span>
              </h1>
              <p className="text-2xl mb-8 text-white/95 font-semibold">
                Wilmington homeowners are saving thousands with our proven insurance claim process. We handle everything - you just pay your deductible when approved.
              </p>
              
              {/* Social Proof */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-xl font-bold">5.0 Stars</span>
                </div>
                <p className="text-center text-lg italic">
                  "I got a $15K+ roof for just my $2500 deductible!" - John M.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-semibold">FREE Inspection & Estimate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-semibold">We Handle All Insurance Claims</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-semibold">IKO Certified Contractors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <Shield className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-semibold">Fully Licensed & Insured</span>
                </div>
              </div>
            </div>
            
            {/* Lead Capture Form */}
            <Card id="lead-form" className="bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-primary">Get Your FREE Roof Inspection</CardTitle>
                <CardDescription className="text-xl text-muted-foreground">
                  Find out if you qualify for a new roof through insurance
                </CardDescription>
                <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-block mt-2">
                  <span className="font-bold">⏰ Limited Time Offer</span>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      autoComplete="given-name"
                      className="h-14 text-lg md:text-xl border-2 border-gray-300 focus:border-primary"
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
                      autoComplete="tel"
                      className="h-14 text-lg md:text-xl border-2 border-gray-300 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Select onValueChange={handleSelectChange} value={formData.roofAge} required>
                      <SelectTrigger className="h-14 text-xl border-2 border-gray-300 focus:border-primary">
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
                  <Button type="submit" className="w-full h-16 text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg transform hover:scale-105 transition-all">
                    🏠 CLAIM MY FREE INSPECTION NOW!
                  </Button>
                  <div className="text-center space-y-2">
                    <p className="text-sm text-green-600 font-semibold">
                      ✅ No obligation • ✅ 100% FREE • ✅ Same day response
                    </p>
                    <p className="text-xs text-muted-foreground">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="py-8 bg-yellow-100 border-t-4 border-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              ⚠️ URGENT: Storm Season Deadline Approaching
            </h3>
            <p className="text-xl text-gray-700 mb-4">
              Insurance companies are cracking down on late claims. If your roof was damaged in the last 12 months, you could lose thousands by waiting.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-red-600 mb-2">1 YEAR</div>
                <p className="text-gray-700">Maximum time to file storm damage claims</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-green-600 mb-2">$15,000+</div>
                <p className="text-gray-700">Average roof replacement value</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 mb-2">FREE</div>
                <p className="text-gray-700">Emergency Leak Stop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal Guarantee */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-5xl font-bold mb-6 text-gray-800">Our ZERO-RISK Guarantee</h3>
          <p className="text-2xl mb-8 max-w-4xl mx-auto text-gray-700 font-semibold">
            We're so confident in our process, we put our money where our mouth is:
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white p-8 shadow-xl border-l-8 border-red-500 transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">❌</div>
              <CardTitle className="text-3xl font-bold text-red-600 mb-4">If Your Claim is DENIED:</CardTitle>
              <CardDescription className="text-2xl text-gray-800 font-semibold">
                You owe us $0. Not a penny. Our inspection, paperwork, and time are completely FREE.
              </CardDescription>
            </Card>
            <Card className="bg-white p-8 shadow-xl border-l-8 border-green-500 transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">✅</div>
              <CardTitle className="text-3xl font-bold text-green-600 mb-4">If Your Claim is APPROVED:</CardTitle>
              <CardDescription className="text-2xl text-gray-800 font-semibold">
                You get a brand new roof and only pay your insurance deductible. We handle everything else!
              </CardDescription>
            </Card>
          </div>
          <div className="mt-12">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full inline-block shadow-lg">
              <span className="text-2xl font-bold">🛡️ 100% SATISFACTION GUARANTEED OR YOUR MONEY BACK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">Why 500+ Wilmington Families Choose Priceless</h3>
            <div className="flex justify-center items-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-10 w-10 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-4 text-3xl font-bold text-gray-800">18/18 5-Star Reviews</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardContent className="pt-8">
                <div className="bg-primary/10 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Licensed & Insured</h4>
                <p className="text-lg text-muted-foreground">
                  Fully licensed contractors with $2M+ insurance coverage for complete peace of mind.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardContent className="pt-8">
                <div className="bg-primary/10 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <img src={ikoLogo} alt="IKO Certified" className="h-16" />
                </div>
                <h4 className="text-2xl font-bold mb-4">IKO Certified Experts</h4>
                <p className="text-lg text-muted-foreground">
                  Factory-trained and certified by IKO, the industry's leading roofing manufacturer.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardContent className="pt-8">
                <div className="bg-primary/10 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Award-Winning Service</h4>
                <p className="text-lg text-muted-foreground">
                  Recognized as Wilmington's #1 roofing contractor with 500+ successful insurance claims.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Real Stories from Real Customers</h3>
            <p className="text-xl text-muted-foreground">See how we've helped Wilmington homeowners save thousands</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Our Premium Work in Wilmington</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={img} alt={`Premium roofing project ${index + 1}`} className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-5xl font-bold mb-6">Don't Let Your Insurance Money Expire!</h3>
          <p className="text-2xl mb-8 max-w-3xl mx-auto font-semibold">
            Storm season is here. Insurance deadlines are approaching. Every day you wait could cost you thousands.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="text-2xl px-16 py-8 font-bold bg-white text-red-600 hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all" onClick={scrollToForm}>
              🚨 GET MY FREE INSPECTION NOW!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Expert Team</h3>
            <ul className="space-y-2">
              <li>Shawn Price - CEO</li>
              <li>Mike DiMichelle - District Manager</li>
              <li>Rob Swaim - Sales Manager</li>
              <li>Jeff Scnebelen - Production Manager</li>
              <li>Reagan Gallagher - Marketing Manager</li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-primary">Visit Our Office</h3>
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
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Priceless Home Improvements. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Licensed, Insured, and Trusted Roofing Contractor serving Wilmington, NC and surrounding areas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HighConvertingLanding;
