import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const FiveWaysRoofersCutCornersPost = () => {
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
            <span>Quality Control</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            5 Ways Roofers Cut Corners When Replacing Your Roof in Wilmington, NC
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 24, 2025</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Quality Control</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at2.00.45PM.png" alt="5 ways roofers cut corners quality control Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            Not all roofing contractors are created equal. When you're getting a new roof, especially through insurance, it's crucial to know the warning signs of corner-cutting that could compromise your home's protection and void your warranty.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Ways Contractors Cut Corners
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Skipping Proper Underlayment</h3>
                <p className="text-gray-700">
                  Some contractors use cheap felt paper instead of proper synthetic underlayment, or skip the ice and water shield in critical areas. This leaves your roof vulnerable to leaks and doesn't meet current building codes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Inadequate Fastening</h3>
                <p className="text-gray-700">
                  Using too few nails, wrong nail types, or improper nail placement can cause shingles to blow off in high winds. Coastal areas like Wilmington require specific fastening patterns for wind resistance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Poor Flashing Installation</h3>
                <p className="text-gray-700">
                  Flashing around chimneys, vents, and valleys is critical for preventing leaks. Contractors may reuse old flashing, use improper materials, or install it incorrectly to save time and money.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Ignoring Ventilation Requirements</h3>
                <p className="text-gray-700">
                  Proper attic ventilation is essential for preventing moisture problems and maintaining energy efficiency. Some contractors skip installing adequate intake and exhaust vents to reduce costs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Rushing the Job</h3>
                <p className="text-gray-700">
                  Some contractors try to complete jobs too quickly, leading to sloppy workmanship, missed details, and inadequate cleanup. Quality roofing takes time and attention to detail.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Warning Signs to Watch For</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Unusually Low Bids</h3>
                <p className="text-gray-700">
                  If a bid is significantly lower than others, the contractor may be planning to cut corners on materials or labor.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pressure to Sign Immediately</h3>
                <p className="text-gray-700">
                  Legitimate contractors don't pressure you to sign contracts on the spot. Take time to review proposals and check references.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Written Warranty</h3>
                <p className="text-gray-700">
                  Quality contractors stand behind their work with comprehensive written warranties on both materials and labor.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lack of Proper Licensing</h3>
                <p className="text-gray-700">
                  Always verify that contractors have proper licensing and insurance before allowing them to work on your property.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">How Priceless Ensures Quality</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Code-Compliant Installation</h3>
                <p className="text-gray-700">We follow all current building codes and manufacturer specifications for every installation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Materials</h3>
                <p className="text-gray-700">We use only high-grade materials appropriate for coastal North Carolina conditions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Experienced Crews</h3>
                <p className="text-gray-700">Our teams are trained in proper installation techniques and safety procedures.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Warranties</h3>
                <p className="text-gray-700">We provide written warranties on both materials and workmanship for your peace of mind.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Questions to Ask Your Contractor</h3>
          <p className="text-lg leading-relaxed mb-6">
            Before hiring any roofing contractor, ask about their installation process, materials specifications, warranty coverage, and timeline. A quality contractor will be happy to explain their methods and provide detailed answers.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Don't let corner-cutting contractors compromise your home's protection. Choose Priceless Home Improvements for quality roofing installation in <strong>Wilmington, NC, and the entire coastal 910 area</strong>. We do the job right the first time, every time.
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

export default FiveWaysRoofersCutCornersPost;

