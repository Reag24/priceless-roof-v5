import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const HowLeaksStartPost = () => {
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
            <span>How Leaks Start</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Roof Leaks Start in Wilmington, NC: It All Begins with One Exposed Nail
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 20, 2025</span>
            <span>•</span>
            <span>4 min read</span>
            <span>•</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Leak Prevention</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at1.58.05PM.png" alt="How roof leaks start exposed nail Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            Most homeowners think roof leaks start with major storm damage. In reality, the majority of leaks begin with something much smaller: one exposed nail that creates a pathway for water to enter your home.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Anatomy of a Roof Leak
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. The Initial Breach</h3>
                <p className="text-gray-700">
                  It starts with a single exposed nail head. Whether from wind lifting a shingle, thermal expansion and contraction, or improper installation, once a nail is exposed, water has found its entry point.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Water Penetration</h3>
                <p className="text-gray-700">
                  Water follows the nail down through the shingle, past the underlayment, and into the roof decking. This process can happen for months before you notice any interior signs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Structural Damage</h3>
                <p className="text-gray-700">
                  Once water reaches the decking, it begins to rot the wood, compromise the structural integrity, and create conditions for mold growth in your attic space.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Interior Manifestation</h3>
                <p className="text-gray-700">
                  By the time you see water stains on your ceiling or walls, the leak has likely been present for weeks or months, causing extensive hidden damage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary">Why Coastal Homes Are Especially Vulnerable</h3>
            <p className="text-lg leading-relaxed mb-4">
              Wilmington's coastal environment accelerates this process. Salt air, high humidity, and frequent wind events cause nails to work loose faster than in inland areas. The combination of thermal cycling and coastal weather makes even properly installed roofs susceptible to nail exposure over time.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">Common Causes of Exposed Nails</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wind Uplift</h3>
                <p className="text-gray-700">High winds can lift shingle edges, exposing the nails underneath and creating immediate leak pathways.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Thermal Movement</h3>
                <p className="text-gray-700">Expansion and contraction from temperature changes can cause nails to back out over time.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Improper Installation</h3>
                <p className="text-gray-700">Nails placed too high, too low, or at wrong angles are more likely to become exposed.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Age and Wear</h3>
                <p className="text-gray-700">As shingles age and become brittle, they're more likely to crack around nail locations.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Prevention and Early Detection</h3>
          <p className="text-lg leading-relaxed mb-6">
            The key to preventing major leak damage is catching exposed nails early. Regular professional inspections can identify these small issues before they become costly problems. What might cost a few hundred dollars to fix today could cost thousands if left unaddressed.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Concerned about potential leak sources in your Wilmington home? Get a comprehensive roof inspection from Priceless Home Improvements. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>, trained to identify and address problems before they become disasters.
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

export default HowLeaksStartPost;

