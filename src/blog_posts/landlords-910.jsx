import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const Landlords910Post = () => {
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
            <span>Landlords 910</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Landlords in the 910: Your Rental Property Insurance May Not Cover Your Roof
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 21, 2025</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Property Insurance</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at1.59.43PM.png" alt="Landlords 910 rental property insurance Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            If you own rental property in the 910 area, you might be surprised to learn that your insurance policy may not provide the roof coverage you expect. Understanding the difference between ACV and RCV coverage could save you thousands.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ACV vs RCV: What Every Landlord Should Know
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Actual Cash Value (ACV)</h3>
                <p className="text-gray-700">
                  Most rental property policies default to ACV coverage, which pays the depreciated value of your roof. For a 15-year-old roof, this could mean receiving only 50% of replacement costs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Replacement Cost Value (RCV)</h3>
                <p className="text-gray-700">
                  RCV coverage pays the full cost to replace your roof with new materials, regardless of age. This is typically available as an add-on for rental properties.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Why This Matters for 910 Area Landlords</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Coastal Weather Challenges</h3>
                <p className="text-gray-700">
                  Properties in Wilmington, Leland, Hampstead, and surrounding coastal areas face frequent wind and storm damage that can require roof replacement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tenant Safety and Retention</h3>
                <p className="text-gray-700">
                  A damaged roof affects tenant safety and satisfaction. Quick, complete repairs help maintain occupancy and rental income.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Value Protection</h3>
                <p className="text-gray-700">
                  A well-maintained roof protects your investment and maintains property values in competitive rental markets.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Common Coverage Gaps</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Age Limitations</h3>
                <p className="text-gray-700">Many policies exclude coverage for roofs over a certain age, typically 15-20 years.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintenance Requirements</h3>
                <p className="text-gray-700">Policies may require documented regular maintenance to maintain coverage.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Higher Deductibles</h3>
                <p className="text-gray-700">Rental property deductibles are often higher than homeowner policies.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">How Priceless Can Help</h3>
          <p className="text-lg leading-relaxed mb-6">
            We work with landlords throughout the 910 area to navigate insurance claims and ensure you get the coverage you deserve. Our experience with rental property claims helps maximize your benefits while minimizing out-of-pocket costs.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Own rental property in the Wilmington area? Get a professional roof assessment from Priceless Home Improvements. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>, specializing in insurance claims for rental properties.
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

export default Landlords910Post;

