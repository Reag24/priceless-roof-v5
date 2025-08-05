import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const WhyRoofersKnockPost = () => {
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
            <span>Why Roofers Knock</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Why Roofers Keep Knocking on Your Door in Wilmington, NC
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 16, 2025</span>
            <span>•</span>
            <span>3 min read</span>
            <span>•</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Wind Damage</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at1.57.36PM.png" alt="Why roofers knock on your door Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            Wondering why roofers keep knocking on your door? IT'S TO GET YOU MONEY from your wind and hail insurance. We're here to see if your roof damage qualifies for replacement covered by insurance.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Real Reason Behind Door-to-Door Roofing
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Storm Damage Assessment</h3>
                <p className="text-gray-700">
                  After storms hit the Wilmington area, we canvass neighborhoods to identify homes with potential wind and hail damage that homeowners might not notice from ground level.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Insurance Claim Assistance</h3>
                <p className="text-gray-700">
                  We help homeowners navigate the insurance claim process to get the full coverage they're entitled to under their wind and hail policy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Free Professional Inspection</h3>
                <p className="text-gray-700">
                  Our certified inspectors provide detailed assessments at no cost, documenting damage that might qualify for insurance coverage.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Contingent Service Model</h3>
                <p className="text-gray-700">
                  We only get paid when your insurance claim is approved, so there's no risk to homeowners for our inspection and claim assistance services.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary">What Makes Us Different</h3>
            <p className="text-lg leading-relaxed mb-4">
              We're not here to sell you something you don't need — we're here to see if your roof damage qualifies for a replacement covered by insurance. Our goal is to help you get the money you're already entitled to under your existing policy.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">Common Types of Storm Damage We Identify</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hail Damage</h3>
                <p className="text-gray-700">Granule loss, exposed mat, cracked or bruised shingles from hail impact.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wind Damage</h3>
                <p className="text-gray-700">Lifted, creased, or missing shingles caused by high winds during storms.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Debris Impact</h3>
                <p className="text-gray-700">Damage from falling branches, flying debris, or other storm-related impacts.</p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Think your roof might have storm damage? Get a free inspection from Priceless Home Improvements. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>, ready to help you get the insurance coverage you deserve.
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

export default WhyRoofersKnockPost;

