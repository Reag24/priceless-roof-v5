import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const RoofProblemsFirstPost = () => {
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
            <span>Roof Problems First</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Roof Problems in Wilmington, NC? Here's the First Thing You Should Do
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 19, 2025</span>
            <span>•</span>
            <span>3 min read</span>
            <span>•</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Insurance Claims</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at1.58.52PM.png" alt="Roof problems do this first Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            When you discover roof problems, your first instinct might be to call a contractor for repairs. But there's a smarter first step that could save you thousands: file an insurance claim first.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why File a Claim Before Making Repairs
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Preserve Evidence</h3>
                <p className="text-gray-700">
                  Once you make repairs, the evidence of storm damage is gone forever. Insurance adjusters need to see the actual damage to approve your claim.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Maximize Coverage</h3>
                <p className="text-gray-700">
                  What looks like a small repair might actually qualify for a full roof replacement. Professional assessment can identify damage you might miss.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Avoid Out-of-Pocket Costs</h3>
                <p className="text-gray-700">
                  Why pay for repairs when your insurance might cover a complete replacement? Filing first ensures you don't miss out on coverage you're entitled to.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Professional Documentation</h3>
                <p className="text-gray-700">
                  Insurance restoration contractors know how to document damage properly for maximum claim approval. DIY repairs often miss critical details.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary">The Right Process</h3>
            <p className="text-lg leading-relaxed mb-4">
              Don't let small problems become big expenses. The smart approach is: inspect first, file claim, then repair with insurance coverage. This process ensures you get the maximum benefit from your insurance policy.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">Common Roof Problems That Qualify for Claims</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wind Damage</h3>
                <p className="text-gray-700">Lifted, creased, or missing shingles from high winds during storms.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hail Damage</h3>
                <p className="text-gray-700">Granule loss, exposed mat, or impact marks from hail storms.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Storm Debris</h3>
                <p className="text-gray-700">Damage from falling branches, flying debris, or other storm-related impacts.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Age-Related Issues</h3>
                <p className="text-gray-700">When combined with storm damage, age-related wear can support a full replacement claim.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Why Choose Priceless for Your Claim</h3>
          <p className="text-lg leading-relaxed mb-6">
            We specialize in insurance restoration and know exactly how to document and present your claim for maximum approval. Our contingent service means you only pay if your claim is approved.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Discovered roof problems in your Wilmington home? Don't make repairs first. Get a professional assessment from Priceless Home Improvements. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>, ready to help you get the insurance coverage you deserve.
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

export default RoofProblemsFirstPost;

