import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const WillClaimGetDroppedPost = () => {
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
            <span>NCJUA Coverage</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Will Filing a Roof Claim Get You Dropped? The Truth About NCJUA in Wilmington, NC
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 25, 2025</span>
            <span>•</span>
            <span>4 min read</span>
            <span>•</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Insurance Coverage</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at2.02.56PM.png" alt="Will claim get you dropped NCJUA Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            Many Wilmington homeowners worry that filing a roof claim will result in their insurance being cancelled. The truth is more nuanced, and understanding North Carolina's insurance landscape can help you make informed decisions about protecting your home.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Understanding NCJUA (North Carolina Joint Underwriting Association)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            NCJUA is North Carolina's insurance pool of last resort for coastal properties. If you can't get coverage through traditional insurers, NCJUA provides essential protection, though with some limitations.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Who Qualifies for NCJUA</h3>
                <p className="text-gray-700">
                  Properties within certain coastal counties, including New Hanover County where Wilmington is located, that have been rejected by at least two private insurers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Coverage Limitations</h3>
                <p className="text-gray-700">
                  NCJUA typically covers wind and hail damage but may have limitations on other perils. Coverage amounts may also be capped.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Higher Costs</h3>
                <p className="text-gray-700">
                  NCJUA premiums are typically higher than private insurance, and deductibles may be percentage-based rather than flat amounts.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">When Insurance Companies Drop Customers</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multiple Claims</h3>
                <p className="text-gray-700">
                  Filing multiple claims within a short period may increase your risk of non-renewal, but a single legitimate storm damage claim typically won't result in cancellation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">High-Risk Areas</h3>
                <p className="text-gray-700">
                  Insurers may choose not to renew policies in areas they consider high-risk, regardless of individual claim history.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Non-Payment</h3>
                <p className="text-gray-700">
                  The most common reason for policy cancellation is non-payment of premiums, not filing legitimate claims.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Protecting Yourself</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Everything</h3>
                <p className="text-gray-700">
                  Proper documentation of storm damage helps ensure your claim is seen as legitimate and necessary.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Work with Professionals</h3>
                <p className="text-gray-700">
                  Insurance restoration specialists can help ensure your claim is handled properly and professionally.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintain Your Property</h3>
                <p className="text-gray-700">
                  Regular maintenance and prompt repairs can help prevent small issues from becoming large claims.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Know Your Options</h3>
                <p className="text-gray-700">
                  Understanding NCJUA and other coverage options ensures you're never without protection for your home.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">The Bottom Line</h3>
          <p className="text-lg leading-relaxed mb-6">
            While there's always some risk when filing insurance claims, legitimate storm damage claims are exactly what your insurance is designed to cover. The key is working with experienced professionals who understand the process and can help you navigate it successfully.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Concerned about your insurance coverage or need help with a roof claim in Wilmington? Contact Priceless Home Improvements. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>, experienced in working with all types of insurance coverage, including NCJUA.
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

export default WillClaimGetDroppedPost;

