import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home, CheckCircle } from 'lucide-react';
import mismatchImage from '../assets/blog_images/mismatch_whole_new_roof.png';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const MismatchingShingles = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Priceless Home Improvements Logo" className="h-16" />
            <Link to="/" className="text-xl font-bold text-primary">
              Priceless Home Improvements
            </Link>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
              <Home className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-primary text-center">Wilmington, NC Storm Damage: When a Patch Job Means a Whole New Roof</h1>
          <img src={mismatchImage} alt="Mismatch = Whole New Roof" className="w-full rounded-lg shadow-md mb-8" />
          
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-xl leading-relaxed mb-6 text-gray-700 font-medium">
              Let's say a storm rips a few shingles off your roof here in Wilmington, NC. Your insurance company might say, "No problem, we'll just repair that spot." Sounds fair, right? Your roof gets damaged, and insurance pays for it.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-xl font-bold mb-2 text-yellow-800">⚠️ The Hidden Catch</h3>
              <p className="text-lg leading-relaxed text-yellow-700">
                But here's the catch: if your original shingles are discontinued, faded, or simply unavailable, the new ones won't match. This isn't just an aesthetic issue; it can have significant implications for your insurance claim.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              And in many cases, especially along the beautiful North Carolina coast, mismatching shingles in just a few spots can actually call for the <strong className="text-primary">ENTIRE ROOF to be replaced</strong>. If that patch job sticks out like a sore thumb, if local building code requires a uniform appearance, or if it's included in your coverage, your insurance may have to pay for a full roof replacement.
            </p>
            
            <h2 className="text-2xl font-bold mb-6 text-primary">Here's what Priceless Home Improvements does for you:</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Check Shingle Availability</h3>
                  <p className="text-gray-700">We first verify if your existing shingles are still manufactured or if they've been discontinued. If they're discontinued, you're often in luck for a full replacement.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Assess Shingle Condition</h3>
                  <p className="text-gray-700">We meticulously check the condition and color of your current shingles. If they're worn out or faded, new shingles simply won't blend in seamlessly.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Reference Local Regulations</h3>
                  <p className="text-gray-700">We review local building codes and HOA rules in Wilmington, Leland, Southport, and surrounding areas to understand requirements for uniform appearance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Document for Adjusters</h3>
                  <p className="text-gray-700">We carefully document all findings for your insurance adjuster to ensure they take note of the mismatch potential.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Advocate for Full Replacement</h3>
                  <p className="text-gray-700">If a proper match isn't possible, we advocate strongly for a full roof replacement to ensure your home maintains its value and curb appeal.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">The Bottom Line</h3>
              <p className="text-lg leading-relaxed mb-4">
                Sometimes, the extent of your roof damage isn't the only factor. It's also a matter of whether a proper repair is even possible without compromising the look and integrity of your home. We understand the nuances of insurance claims and local requirements to get you the best outcome.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed mb-8 text-center">
              Think your roof might qualify for a full replacement due to mismatching shingles or storm damage? Get a free inspection from Priceless Home Improvements. We're your local experts in <strong>Wilmington, NC, and the entire coastal 910 area</strong>, ready to help you navigate your roofing needs.
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
      </div>
      <Footer />
    </div>
  );
};

export default MismatchingShingles;