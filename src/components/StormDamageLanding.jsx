import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Phone, Mail, MapPin, Star, Shield, CheckCircle, Home, FileText, ArrowUpCircle, Clock, DollarSign, AlertTriangle, Award, Zap } from "lucide-react";
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
  const maxLength = 200;
  
  const shouldTruncate = review.text.length > maxLength;
  const displayText = shouldTruncate && !isExpanded 
    ? review.text.substring(0, maxLength) + "..."
    : review.text;

  return (
    <Card key={index} className="hover:shadow-lg transition-shadow" id={index === 0 ? "reviews-section" : undefined}>
      <CardContent className="pt-4 md:pt-6">
        <div className="flex items-center space-x-1 mb-3 md:mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
          ))}
          {review.timeAgo && (
            <span className="ml-2 text-xs md:text-sm text-gray-500">• {review.timeAgo}</span>
          )}
        </div>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-3 md:mb-4 italic">"{displayText}"</p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-primary/80 font-semibold mb-3 md:mb-4 text-sm md:text-base lg:text-lg"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
        <p className="text-base md:text-lg lg:text-xl font-semibold">- {review.name}</p>
      </CardContent>
    </Card>
  );
};

const StormDamageLanding = () => {
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
        trackFormSubmission('storm_damage_assessment');
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
    document.getElementById('storm-form').scrollIntoView({ behavior: 'smooth' });
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
        <div className="container mx-auto px-4 py-2 md:py-4">
          {/* Mobile Header */}
          <div className="flex md:hidden justify-between items-center">
            <img src={logo} alt="Priceless Home Improvements Logo" className="h-16" />
            <div className="flex flex-col items-end text-xs">
              <div className="flex items-center space-x-1 mb-1">
                <Phone className="h-3 w-3 text-primary" />
                <span className="font-semibold">(910) 508-4015</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3 text-primary" />
                <span>North Carolina</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Header */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Priceless Home Improvements Logo" className="h-24" />
            </div>
            <nav className="flex items-center space-x-6 text-sm font-semibold">
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
                <span>North Carolina</span>
              </div>
              <Link to="/contact">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-red-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${house3})` }}
        />
        <div className="relative container mx-auto px-1 sm:px-2 md:px-4 py-8 md:py-20">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Roof leaks, missing shingles, storm damage? Your claim may cover it all.
              <span className="block text-2xl mt-2 text-yellow-300">Get Your Insurance Claim Filed Before It's Too Late - FREE Assessment!</span>
            </h1>

            <p className="text-xl mb-6 text-white/95 font-semibold">
              North Carolina homeowners have limited time to file roof damage claims. Don't lose thousands - we handle the entire insurance process for you.
            </p>
            
            {/* Social Proof */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-base font-bold">5.0 Stars</span>
              </div>
              <p className="text-center text-xl lg:text-2xl font-bold italic">
                "Got an $18K roof for just my deductible!" - Jennifer L.
              </p>
            </div>

            
            {/* Mobile Form - Now positioned after header content */}
            <div className="flex justify-center px-1">
              <Card id="storm-form" className="bg-white/95 backdrop-blur-sm shadow-2xl w-full max-w-sm">
                <CardHeader className="text-center p-3">
                  <CardTitle className="text-xl font-bold text-primary">Get Your FREE Roof Damage Assessment</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Find out if your roof damage qualifies for insurance coverage
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="Your First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        autoComplete="given-name"
                        className="h-12 text-lg border-2 border-gray-300 focus:border-primary"
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
                        className="h-12 text-lg border-2 border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Select onValueChange={handleSelectChange} value={formData.roofAge} required>
                        <SelectTrigger className="h-12 text-lg border-2 border-gray-300 focus:border-primary">
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
                    <Button type="submit" className="w-full h-14 text-base font-bold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg transform hover:scale-105 transition-all">
                      Get Your Free Roof Inspection
                    </Button>
                    <div className="text-center space-y-1">
                      <p className="text-sm text-muted-foreground">
                        We respect your privacy. Your information will never be shared.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Roof leaks, missing shingles, storm damage? Your claim may cover it all.
                <span className="block text-2xl lg:text-3xl mt-4 text-yellow-300">Get Your Insurance Claim Filed Before It's Too Late - FREE Assessment!</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/95 font-semibold">
                North Carolina homeowners have limited time to file roof damage claims. Don't lose thousands - we handle the entire insurance process for you.
              </p>
              
              {/* Social Proof */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-xl font-bold">5.0 Stars</span>
                </div>
                <p className="text-center text-2xl lg:text-3xl font-bold italic">
                  "Got an $18K roof for just my deductible!" - Jennifer L.
                </p>
              </div>

            </div>
            
            {/* Desktop Form */}
            <Card id="storm-form-desktop" className="bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardHeader className="text-center p-6">
                <CardTitle className="text-2xl lg:text-3xl font-bold text-primary">Get Your FREE Roof Damage Assessment</CardTitle>
                <CardDescription className="text-lg lg:text-xl text-muted-foreground">
                  Find out if your roof damage qualifies for insurance coverage
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
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
                      className="h-14 text-lg lg:text-xl border-2 border-gray-300 focus:border-primary"
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
                      className="h-14 text-lg lg:text-xl border-2 border-gray-300 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Select onValueChange={handleSelectChange} value={formData.roofAge} required>
                      <SelectTrigger className="h-14 text-lg lg:text-xl border-2 border-gray-300 focus:border-primary">
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
                  <Button type="submit" className="w-full h-16 text-lg lg:text-xl font-bold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg transform hover:scale-105 transition-all">
                    Get Your Free Roof Inspection
                  </Button>
                  <div className="text-center space-y-2">
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

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Our Happy Homeowners</h3>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">See how we've helped NC homeowners with their roofing needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Roof Replacements Across North Carolina</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={img} alt={`Roof repair project ${index + 1}`} className="w-full h-48 md:h-64 object-cover transform hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">Don't Let Roof Damage Claims Expire!</h3>
          <p className="text-base md:text-lg lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto font-semibold">
            Time is running out. Insurance deadlines are strict. Every day you wait could cost you thousands in roof damage coverage.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="text-base md:text-lg lg:text-xl px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 font-bold bg-white text-red-600 hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all" onClick={scrollToForm}>
              Get Your Free Roof Inspection
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
            <h3 className="text-2xl font-bold mb-4 text-primary">Emergency Contact</h3>
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
            <h3 className="text-2xl font-bold mb-4 text-primary">Roof Damage Experts</h3>
            <ul className="space-y-2">
              <li>Shawn Price - CEO</li>
              <li>Mike DiMichelle - District Manager</li>
              <li>Rob Swaim - Claims Specialist</li>
              <li>Jeff Scnebelen - Emergency Response</li>
              <li>Reagan Gallagher - Customer Care</li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-primary">Service Area</h3>
            <div className="aspect-w-16 aspect-h-9 w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.490690089461!2d-77.92650008477987!3d34.22080008054456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f2e6e6e6e6e7%3A0x89a9f2e6e6e6e6e7!2s140%20Cinema%20Dr%20Suite%20i%2C%20Wilmington%2C%20NC%2028403!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Priceless Home Improvements Storm Damage Service Area"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Priceless Home Improvements. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Emergency Roof Damage Specialists serving North Carolina and surrounding areas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StormDamageLanding;
