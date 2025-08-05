import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const HurricaneDeductiblesPost = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Priceless Home Improvements Logo" className="h-16" />
            <Link to="/" className="text-xl font-bold text-primary">
              Priceless Home Improvements
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary">Blog</Link>
            <Link to="/#form">
              <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <nav className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">›</span>
            <span>Hurricane Deductibles</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Why You Shouldn't Wait for a Hurricane to Replace Your Roof in Wilmington, NC
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 22, 2025</span>
            <span>•</span>
            <span>4 min read</span>
            <span>•</span>
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Hurricane Prep</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at2.01.10PM.png" alt="Hurricane deductibles higher Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            Once a hurricane hits, everything gets more expensive. If your roof already has damage, waiting could cost you thousands in higher deductibles and inflated repair costs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Hurricane Cost Explosion
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Many homeowners in the Wilmington area make the costly mistake of waiting for a major hurricane to address their roof issues. Here's why that's an expensive gamble:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deductibles Skyrocket</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Normal Wind/Hail:</strong> $1,000 - $2,500 deductible
                </p>
                <p className="text-gray-700">
                  <strong>Hurricane:</strong> $5,000 - $15,000+ deductible
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Supply & Labor Issues</h3>
                <p className="text-gray-700">
                  Materials become scarce, labor costs increase dramatically, longer wait times for repairs, and quality contractors get booked up for months.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Insurance Restrictions</h3>
                <p className="text-gray-700">
                  After major storms, insurance companies become more restrictive with approvals, require more documentation, and implement stricter guidelines.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">We've Already Had Plenty of Storms to File For</h3>
          <p className="text-lg leading-relaxed mb-6">
            You don't need a named hurricane to file a claim. The Wilmington area has experienced numerous storms and wind events that qualify for insurance coverage:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Frequent Coastal Wind Events</h3>
                <p className="text-gray-700">Regular high-wind events that can damage shingles and roofing materials.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Severe Thunderstorms</h3>
                <p className="text-gray-700">Storms with damaging winds, hail, and debris that qualify for wind/hail coverage.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nor'easters and Tropical Systems</h3>
                <p className="text-gray-700">Weather systems that bring sustained winds and can cause significant roof damage.</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary">Real Cost Comparison: $20,000 Roof Replacement</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Before Hurricane</h4>
                <p className="text-gray-700">Total Cost: $20,000</p>
                <p className="text-gray-700">Wind/Hail Deductible: $1,500</p>
                <p className="text-gray-700 font-semibold">Your Cost: $1,500</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">After Hurricane</h4>
                <p className="text-gray-700">Total Cost: $25,000+ (inflated)</p>
                <p className="text-gray-700">Hurricane Deductible: $8,000</p>
                <p className="text-gray-700 font-semibold">Your Cost: $8,000+</p>
              </div>
            </div>
            <p className="text-lg font-semibold text-primary mt-4">Potential Savings: $6,500+</p>
          </div>

          <h3 className="text-xl font-bold mb-4">Areas We Serve</h3>
          <p className="text-lg leading-relaxed mb-6">
            Free inspections across the greater Wilmington area:
          </p>
          
          <div className="grid grid-cols-3 gap-2 mb-8 text-center">
            <span className="bg-gray-100 px-3 py-1 rounded">Wilmington</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Leland</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Hampstead</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Southport</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Wrightsville Beach</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Carolina Beach</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Castle Hayne</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Surf City</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Topsail Beach</span>
          </div>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Don't wait for hurricane season. Get your roof looked at now and save thousands. Be stress-free during the next storm with Priceless Home Improvements. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>.
          </p>
        </div>
      </article>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
        <Link to="/blog">
          <Button size="lg" className="text-lg bg-primary hover:bg-primary/90">
            <Home className="h-5 w-5 mr-2" />
            More Blog Posts
          </Button>
        </Link>
        <Link to="/">
          <Button size="lg" className="text-lg bg-primary hover:bg-primary/90">
            <Home className="h-5 w-5 mr-2" />
            Book Your Free Inspection
          </Button>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default HurricaneDeductiblesPost;

