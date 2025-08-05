import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const GranulesInGuttersPost = () => {
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
            <span>Granule Loss</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Granules in Your Gutters? Your Wilmington, NC Roof is Trying to Warn You
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 26, 2025</span>
            <span>•</span>
            <span>4 min read</span>
            <span>•</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Roof Maintenance</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at2.03.08PM.png" alt="Granules in gutters roof warning Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            If you're spotting sand-like granules while cleaning your gutters or coming out of downspouts, your roof is trying to warn you about a serious problem. These granules are your roof's first line of defense, and losing them signals potential damage that could qualify for insurance coverage.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Are Shingle Granules?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Those little specs you're finding are granules from your shingles. They're super important because they protect your shingles from sun damage, rain, and heat. When they start coming off in large quantities, it's a sign your roof is deteriorating.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">UV Protection</h3>
                <p className="text-gray-700">
                  Granules shield the asphalt mat from harmful UV rays that can cause shingles to become brittle and crack.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Weather Resistance</h3>
                <p className="text-gray-700">
                  They provide a protective barrier against rain, wind, and temperature fluctuations that can damage the underlying materials.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fire Resistance</h3>
                <p className="text-gray-700">
                  Granules help maintain the fire rating of your roofing system, which is important for insurance and safety.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Common Causes of Granule Loss</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hail Damage</h3>
                <p className="text-gray-700">
                  Hail impacts can knock granules loose, creating exposed spots that are vulnerable to further damage.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wind Damage</h3>
                <p className="text-gray-700">
                  High winds can lift shingle edges and scrape granules off, especially on older or improperly installed roofs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Age and Weathering</h3>
                <p className="text-gray-700">
                  As shingles age, the adhesive holding granules weakens, leading to natural granule loss over time.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Foot Traffic</h3>
                <p className="text-gray-700">
                  Walking on the roof or debris impact can scrape granules off, creating weak spots in your roof's protection.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">When Granule Loss Becomes a Problem</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excessive Loss</h3>
                <p className="text-gray-700">
                  Large amounts of granules in gutters or around your home indicate significant damage that may qualify for insurance coverage.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Exposed Mat</h3>
                <p className="text-gray-700">
                  When granule loss exposes the dark asphalt mat underneath, your shingles are vulnerable to rapid deterioration.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pattern Recognition</h3>
                <p className="text-gray-700">
                  Granule loss in specific patterns often indicates storm damage that insurance companies will cover.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Why This Matters for Coastal Homes</h3>
          <p className="text-lg leading-relaxed mb-6">
            Wilmington's coastal environment accelerates granule loss through salt air, high winds, and frequent storms. What might take years to develop inland can happen much faster here, making regular inspections crucial for protecting your investment.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Finding granules in your gutters in Wilmington? Don't ignore this warning sign. Get a free inspection from Priceless Home Improvements. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>, trained to identify storm damage that qualifies for insurance coverage.
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

export default GranulesInGuttersPost;

