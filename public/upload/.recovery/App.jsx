import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Phone, Mail, MapPin, Star, Shield, CheckCircle, Home, FileText, ArrowUpCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

import logo from './assets/logo.png';
import ikoLogo from './assets/iko_logo.png';
import house1 from './assets/house1.svg';
import house2 from './assets/house2.svg';
import house3 from './assets/house3.svg';
import house4 from './assets/house4.svg';
import house5 from './assets/house5.svg';
import house6 from './assets/house6.svg';

const allReviews = [
  {
    name: "Andrew Mira",
    text: "Priceless Home Improvements did an amazing job on our roof replacement. They were professional, efficient, and the quality of work was outstanding. Highly recommend!",
    rating: 5,
    location: "Wilmington, NC"
  },
  {
    name: "Crystal R.",
    text: "I had the pleasure of having my new roof installed by Priceless Home Improvements. My Inspection Specialist was Jaye Hayman. It was a joy working with Jaye. He explained everything in great detail. He was very attentive, and made sure I understood every aspect of the process. He was very timely, and provided a great deal of guidance along the way. I would definitely recommend Jaye and Priceless Home Improvements to my friends and family!",
    rating: 5,
    location: "Wilmington, NC"
  },
  {
    name: "Michelle M.",
    text: "Great experience with Priceless Home Improvements. Gayle Fraser was my POC. I was definitely in need of a new roof. Gayle always communicated with me the next step and always showed up as scheduled. Priceless, as a whole, made me feel comfortable with the process. As a matter of fact, Priceless communicated better than my insurance company. My house looks great.",
    rating: 5,
    location: "Wilmington, NC"
  },
  {
    name: "Daniel S.",
    text: "I had some shingles fly off during a windstorm. Called Priceless and Rob arrived promptly as scheduled. After his assessment it was clear my damage was extensive and it was suggested I make an insurance claim. Priceless worked with my insurance company to complete the claim and get the work done. It was a very easy process for this homeowner. Great job by Rob and the Priceless Team.",
    rating: 5,
    location: "Wilmington, NC"
  },
  {
    name: "Sarah K.",
    text: "Priceless Home Improvements replaced our roof quickly and efficiently after storm damage. Their team was professional and the quality of work was excellent. Highly recommend their services!",
    rating: 5,
    location: "Wilmington, NC"
  },
  {
    name: "Michael T.",
    text: "From the initial inspection to the final installation, Priceless Home Improvements exceeded our expectations. They made the insurance claim process simple and delivered a beautiful new roof. Fantastic job!",
    rating: 5,
    location: "Wilmington, NC"
  }
];

const reviews = allReviews.filter(review => review.location === "Wilmington, NC");

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
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Priceless Home Improvements Logo" className="h-20" />
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
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
              <p className="text-xl mb-8 text-white/90">
                Don't let roof concerns keep you up at night. Priceless Home Improvements offers comprehensive, no-cost roof inspections for homeowners in Wilmington, NC. We'll identify any issues and provide clear solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Expert Certified Inspectors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Detailed Report & Recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>No Hidden Fees, Ever</span>
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

      {/* Contingent Guarantee Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 text-primary">Our Unbeatable Contingent Payment Guarantee</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            We stand by our commitment to your satisfaction. Our work is completely contingent on your insurance claim getting fully approved. This means:
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-6 shadow-lg border-l-4 border-primary">
              <CardTitle className="text-2xl font-bold text-primary mb-3">If Your Claim is Denied:</CardTitle>
              <CardDescription className="text-lg text-gray-800">
                You owe us absolutely nothing. Our inspection and assistance come at no cost to you.
              </CardDescription>
            </Card>
            <Card className="bg-white p-6 shadow-lg border-l-4 border-primary">
              <CardTitle className="text-2xl font-bold text-primary mb-3">If Your Claim is Approved:</CardTitle>
              <CardDescription className="text-lg text-gray-800">
                You only pay your deductible for a full new roof. We handle the rest, ensuring a seamless process.
              </CardDescription>
            </Card>
          </div>
          <p className="text-lg mt-8 text-gray-600">
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
            <h3 className="text-3xl font-bold mb-4">Why Wilmington Homeowners Trust Priceless</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to providing top-tier roofing solutions with integrity and transparency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Licensed & Insured</h4>
                <p className="text-muted-foreground">
                  Fully licensed contractors with comprehensive insurance coverage for your peace of mind.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img src={ikoLogo} alt="IKO Certified" className="h-12 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">IKO Certified Experts</h4>
                <p className="text-muted-foreground">
                  Our team is certified by IKO, ensuring the highest standards in roofing installation and materials.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">5-Star Reviews</h4>
                <p className="text-muted-foreground">
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
          <h3 className="text-3xl font-bold text-center mb-12">Our Work in Wilmington</h3>
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
            <h3 className="text-3xl font-bold mb-4">What Our Wilmington Customers Say</h3>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">Trusted by Homeowners Like You</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready for Your FREE Roof Inspection?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't delay! Get peace of mind with a professional inspection and learn how our contingent payment guarantee protects you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (910) 508-4015
            </Button>
            <span className="text-lg">or fill out the form above</span>
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
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logo} alt="Priceless Home Improvements Logo" className="h-8" />
                <h4 className="text-lg font-semibold">Priceless Home Improvements</h4>
              </div>
              <p className="text-gray-400">
                Your trusted roofing experts in Wilmington, NC. Quality, integrity, and peace of mind.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
                <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(910) 508-4015</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@pricelessnc.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>140 Cinema Dr. Suite I, Wilmington, NC 28403</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Priceless Home Improvements. All rights reserved.</p>
          </div>
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
          <Mail className="h-6 w-6 text-primary" />
          <p className="text-lg font-semibold">info@pricelessnc.com</p>
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
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;


