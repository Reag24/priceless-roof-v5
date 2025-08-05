import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const HiddenLeakPost = () => {
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
            <span>Hidden Leak</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hidden Roof Leaks in Wilmington, NC: Just Because You Can't See It Doesn't Mean It's Not There
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published on January 18, 2025</span>
            <span>•</span>
            <span>4 min read</span>
            <span>•</span>
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Leak Detection</span>
          </div>
        </header>

          <img src="/upload/Screenshot2025-08-02at1.58.52PM.png" alt="Hidden roof leak attic Wilmington NC" className="w-full rounded-lg shadow-md mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            Your roof may be leaking and you don't even know it. Hidden leaks can cause thousands of dollars in damage before you notice any visible signs inside your home.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Signs of Hidden Roof Leaks
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Attic Moisture and Stains</h3>
                <p className="text-gray-700">
                  Water stains on attic decking, insulation, or rafters are often the first signs of a leak. These may appear as dark spots, discoloration, or wet areas that you can only see from inside the attic space.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Musty Odors</h3>
                <p className="text-gray-700">
                  A persistent musty smell, especially in upper floors or near the ceiling, can indicate hidden moisture from roof leaks that haven't yet penetrated to visible surfaces.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Exterior Granule Loss</h3>
                <p className="text-gray-700">
                  Shingles losing granules or showing wear patterns may indicate water penetration that hasn't yet reached your living space but is compromising your roof's integrity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Higher Energy Bills</h3>
                <p className="text-gray-700">
                  Wet insulation loses its effectiveness, causing your HVAC system to work harder. Unexplained increases in energy costs could indicate hidden moisture issues.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary">Why Hidden Leaks Are Dangerous</h3>
            <p className="text-lg leading-relaxed mb-4">
              By the time you see water damage inside your home, the leak has likely been present for weeks or months. This extended exposure can lead to structural damage, mold growth, and compromised insulation that costs far more to repair than addressing the leak early.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">Common Areas for Hidden Leaks</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flashing Areas</h3>
                <p className="text-gray-700">Around chimneys, skylights, vents, and wall intersections where metal flashing may have failed or separated.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Valley Areas</h3>
                <p className="text-gray-700">Where two roof planes meet, creating a channel that can trap debris and allow water penetration.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pipe Penetrations</h3>
                <p className="text-gray-700">Around plumbing vents and other roof penetrations where seals may have deteriorated over time.</p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Concerned about hidden leaks in your Wilmington home? Get a comprehensive roof inspection from Priceless Home Improvements. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>, trained to identify problems before they become costly disasters.
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

export default HiddenLeakPost;

