import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home, CheckCircle } from 'lucide-react';
import notJustShingles from '../assets/blog_images/not_just_shingles.png';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import { BlogArticleSchema } from '../components/SEOSchema';
import { getBlogPost } from './blog-data';
import { trackBlogScroll } from '../components/Tracking';

const RoofingChecklist = () => {
  const postData = getBlogPost('roofing-checklist');
  
  useEffect(() => {
    // Set up blog scroll tracking
    const cleanup = trackBlogScroll('Wilmington, NC Roof Checklist: Everything You Need for an Up-to-Code Roof');
    
    // Cleanup on component unmount
    return cleanup;
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Schema */}
      {postData && <BlogArticleSchema post={postData} />}
      
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
          <h1 className="text-4xl font-bold mb-6 text-primary text-center">Wilmington, NC Roof Checklist | Everything For An Up To Code Roof on The NC Coast</h1>
          <img src={notJustShingles} alt="Not Just Shingles" className="w-full rounded-lg shadow-md mb-8" />
          
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-xl leading-relaxed mb-6 text-gray-700 font-medium">
              When you think of a new roof, you probably picture the shingles. But a truly durable, up-to-code roof replacement involves much more than just the visible surface. At Priceless Home Improvements, we ensure every component is installed correctly to protect your home in Wilmington, NC, and the surrounding coastal areas.
            </p>
            
            <h2 className="text-2xl font-bold mb-6 text-primary">Here's everything we typically replace on a full, up-to-code roof job:</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Shingles or Metal</h3>
                  <p className="text-gray-700">This is your primary roof material, the one everyone knows. We use high-quality shingles or metal roofing designed to withstand coastal North Carolina weather.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Underlayment</h3>
                  <p className="text-gray-700">A crucial water-resistant barrier installed directly under your shingles. It provides an extra layer of protection against moisture penetration.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Starter Strip</h3>
                  <p className="text-gray-700">Applied to the first row of shingles, this specialized strip helps prevent wind uplift, ensuring your shingles stay put even in strong coastal gusts.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Ridge Cap</h3>
                  <p className="text-gray-700">These are specialized shingles that cover the peak (ridge) of your roof, providing a clean finish and crucial protection at the highest point.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Drip Edge</h3>
                  <p className="text-gray-700">A metal trim installed along the edges of your roof. It directs water away from your fascia and prevents water damage to the eaves.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Flashing</h3>
                  <p className="text-gray-700">Metal pieces meticulously sealed around chimneys, skylights, walls, and other exposed areas to prevent water from seeping into your home.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Pipe Boots</h3>
                  <p className="text-gray-700">Rubber seals specifically designed to fit around plumbing vents, ensuring a watertight seal where pipes penetrate the roof.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Ventilation</h3>
                  <p className="text-gray-700">Proper ventilation, whether through ridge vents, box vents, or turbines, is essential for maintaining airflow in your attic. This helps regulate temperature, reduce moisture, and extend the life of your roof.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Decking</h3>
                  <p className="text-gray-700">The wood sheathing beneath your roof underlayment. We only replace decking that is damaged, rotted, or compromised, ensuring a solid foundation for your new roof.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">10. Fascia Repairs</h3>
                  <p className="text-gray-700">If your fascia boards are damaged or show signs of rot, we repair or replace them to maintain the structural integrity and aesthetic appeal of your home.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">11. Nails</h3>
                  <p className="text-gray-700">We use a precise number of nails—typically six per shingle—to ensure maximum wind resistance and adherence, meeting or exceeding local building codes.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Commitment to Excellence</h3>
              <p className="text-lg leading-relaxed mb-4">
                Beyond these essential components, our commitment to quality extends to every detail. We meticulously clean up every nail, protect your landscaping throughout the project, and strive to leave your property better than we found it.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed mb-8 text-center">
              Thinking about a new roof or concerned about your current one? Get a free inspection, a detailed estimate, and a transparent breakdown like this from Priceless Home Improvements. We serve homeowners across <strong>Wilmington, NC, Leland, Hampstead, Surf City, Southport, Castle Hayne, and the entire coastal 910 area</strong>.
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

export default RoofingChecklist;