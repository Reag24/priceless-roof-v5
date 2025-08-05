import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const NotAllRoofersSamePost = () => {
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
            <span>Not All Roofers Same</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Not All Roofers Are the Same: Why You Need an Insurance Restoration Pro in Wilmington, NC
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 21, 2025</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Contractor Selection</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at2.00.26PM.png" alt="Not all roofers same insurance restoration Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            When you file a claim to get a new roof, make sure you pick an insurance restoration pro. Not all roofers can handle the complex insurance process, and choosing the wrong contractor could cost you thousands.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Difference Between Regular Roofers and Insurance Restoration Specialists
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Insurance Knowledge</h3>
                <p className="text-gray-700">
                  Insurance restoration specialists understand policy language, coverage types, and how to document damage for maximum claim approval. Regular roofers often lack this expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Adjuster Communication</h3>
                <p className="text-gray-700">
                  We know how to communicate with insurance adjusters, present evidence effectively, and advocate for proper coverage on your behalf.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Supplemental Claims</h3>
                <p className="text-gray-700">
                  When additional damage is discovered during work, restoration specialists know how to file supplemental claims to ensure complete coverage.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Compliance</h3>
                <p className="text-gray-700">
                  We understand current building codes and can identify when upgrades are required, ensuring your claim covers all necessary improvements.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">What Happens When You Choose the Wrong Contractor</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Underpaid Claims</h3>
                <p className="text-gray-700">
                  Contractors unfamiliar with insurance may accept lowball settlements, leaving you to pay the difference out of pocket.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Missed Damage</h3>
                <p className="text-gray-700">
                  Inexperienced contractors may miss hidden damage that should be covered, resulting in incomplete repairs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Poor Documentation</h3>
                <p className="text-gray-700">
                  Inadequate damage documentation can lead to claim denials or reduced payouts.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Violations</h3>
                <p className="text-gray-700">
                  Work that doesn't meet current codes can create liability issues and require costly corrections.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Why Priceless Is Different</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialized Training</h3>
                <p className="text-gray-700">Our team is specifically trained in insurance restoration processes and stays current with industry changes.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-700">We have successfully handled hundreds of insurance claims in the Wilmington area.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contingent Service</h3>
                <p className="text-gray-700">We only get paid when your claim is approved, ensuring we're motivated to get you maximum coverage.</p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Don't trust your insurance claim to just any roofer. Choose Priceless Home Improvements, your local insurance restoration specialists in <strong>Wilmington, NC, and the entire coastal 910 area</strong>. We'll fight for every dollar you deserve.
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

export default NotAllRoofersSamePost;

