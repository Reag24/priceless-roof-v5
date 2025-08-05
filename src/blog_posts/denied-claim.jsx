import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const DeniedClaimPost = () => {
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
            <span>Denied Claims</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Wilmington, NC Roof Claim Denied? 3 Ways We Can Help You Get Full Approval
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 15, 2025</span>
            <span>•</span>
            <span>4 min read</span>
            <span>•</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Insurance Claims</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at1.57.16PM.png" alt="Roof claim denied - How to get approval Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            A denied or partially approved claim for a new roof is not the end. Here are 3 ways we can help you overturn or supplement your claim so you get a full approval.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            3 Proven Strategies to Overturn Your Denied Roof Claim
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Discontinued Shingles</h3>
                <p className="text-gray-700 mb-2">
                  If your shingles have been discontinued and no exact match is available, your insurer typically owes you a full replacement. They can't force you to accept mismatched shingles.
                </p>
                <p className="text-sm text-gray-600">
                  This is especially common in coastal areas like Wilmington, Wrightsville Beach, and Carolina Beach where salt air accelerates shingle aging.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Brittle Shingles That Can't Be Repaired</h3>
                <p className="text-gray-700 mb-2">
                  If your existing shingles are too brittle and break when lifted or tested, your roof can't be properly repaired. This makes replacement the only feasible and required option.
                </p>
                <p className="text-sm text-gray-600">
                  Common in the 910 area due to high humidity, salt exposure, and intense UV rays from sun reflection off the water.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Missing Code-Required Items</h3>
                <p className="text-gray-700 mb-2">
                  Insurers sometimes miss necessary items required by local building codes (like drip edge, ventilation, or ice & water barrier). We have a dedicated team for reviewing your claim payout, line by line, to ensure these critical line-items are included and fully paid.
                </p>
                <p className="text-sm text-gray-600">
                  North Carolina building codes have specific requirements that many adjusters overlook.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary">Why Choose Priceless Home Improvements for Your Claim?</h3>
            <div className="space-y-2">
              <p className="text-gray-700">✅ <strong>Local Expertise:</strong> We know Wilmington, Leland, Hampstead, and coastal NC building codes</p>
              <p className="text-gray-700">✅ <strong>Insurance Specialists:</strong> Our team reviews claims line-by-line</p>
              <p className="text-gray-700">✅ <strong>No Risk:</strong> We work contingent on your claim approval</p>
              <p className="text-gray-700">✅ <strong>IKO Certified:</strong> Premium materials and installation</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Serving the Greater Wilmington Area</h3>
          <p className="text-lg leading-relaxed mb-6">
            We help homeowners throughout the Cape Fear region, including:
          </p>
          
          <div className="grid grid-cols-3 gap-2 mb-8 text-center">
            <span className="bg-gray-100 px-3 py-1 rounded">Wilmington, NC</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Wrightsville Beach</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Carolina Beach</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Leland, NC</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Hampstead, NC</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Southport, NC</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Castle Hayne</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Surf City</span>
            <span className="bg-gray-100 px-3 py-1 rounded">Topsail Beach</span>
          </div>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Think your denied claim can be overturned? Get a free second opinion from Priceless Home Improvements. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>, ready to help you get the full approval you deserve.
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

export default DeniedClaimPost;

