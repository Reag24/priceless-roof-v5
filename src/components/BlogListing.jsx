import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Home, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../blog_posts/blog-data';
import logo from '../assets/logo.png';
import Footer from './Footer';

const BlogListing = () => {
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
          <Link to="/">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-primary">Priceless Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice and insights from your trusted roofing professionals in Wilmington, NC
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow bg-white">
              <div className="overflow-hidden rounded-t-lg">
                <Link to={`/blog/${post.slug}`}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </Link>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl hover:text-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-primary">Ready for Your Free Roof Inspection?</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Get expert advice and a detailed assessment of your roof's condition
          </p>
          <Link to="/">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
              Schedule Your Free Inspection
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogListing;