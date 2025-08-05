import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const NoRoofMoneyNoProblemPost = () => {
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
            <span>No Roof Money No Problem</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Worried About Filing a Roof Claim in Wilmington, NC? Here's Why It's 100% Risk-Free
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 23, 2025</span>
            <span>•</span>
            <span>4 min read</span>
            <span>•</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Risk-Free Service</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at2.02.44PM.png" alt="No roof money no problem contingent roofing Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            Many homeowners hesitate to file roof claims because they're worried about costs, claim denials, or insurance complications. With Priceless Home Improvements' contingent roofing service, you have absolutely nothing to lose and a brand new roof to gain.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How Contingent Roofing Works
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Initial Inspection</h3>
                <p className="text-gray-700">
                  We provide a comprehensive roof inspection at no cost to determine if you have claimable damage.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">We Handle the Claim Process</h3>
                <p className="text-gray-700">
                  Our team manages the entire insurance claim process, from documentation to adjuster meetings, at no upfront cost to you.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Only Upon Approval</h3>
                <p className="text-gray-700">
                  We only get paid when your insurance claim is approved and the work is completed. No approval means no cost to you.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">You Pay Only Your Deductible</h3>
                <p className="text-gray-700">
                  When approved, you pay only your insurance deductible for a complete roof replacement. We handle the rest with your insurance company.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">What This Means for You</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero Financial Risk</h3>
                <p className="text-gray-700">
                  If your claim is denied, you owe us nothing. Our inspection, documentation, and claim assistance come at no cost.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Advocacy</h3>
                <p className="text-gray-700">
                  We're motivated to get your claim approved because we only get paid when you do. This aligns our interests with yours.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Maximum Coverage</h3>
                <p className="text-gray-700">
                  We work to ensure you receive the full coverage you're entitled to under your policy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Workmanship</h3>
                <p className="text-gray-700">
                  When approved, you get a complete roof replacement using quality materials and professional installation.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Common Concerns Addressed</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Will My Rates Go Up?</h3>
                <p className="text-gray-700">Filing a legitimate storm damage claim typically doesn't affect your rates, as it's considered a no-fault claim.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What If I Don't Have Damage?</h3>
                <p className="text-gray-700">If we don't find claimable damage, you've received a free professional roof inspection with no obligation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is This Legal?</h3>
                <p className="text-gray-700">Contingent roofing is completely legal and is a standard practice in the insurance restoration industry.</p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Ready to see if your roof qualifies for insurance coverage? Contact Priceless Home Improvements for your free, no-obligation inspection. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>, committed to getting you the coverage you deserve with zero risk to you.
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

export default NoRoofMoneyNoProblemPost;

