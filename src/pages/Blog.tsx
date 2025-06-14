import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['All', 'Medical Science', 'Community Stories', 'Health Tips', 'Donation Process'];

  // Mock blog data - this would come from a database
  const blogPosts = [
    {
      id: 1,
      title: 'The Science Behind Blood Types: What Every Donor Should Know',
      excerpt: 'Discover the fascinating science behind blood types and why understanding them is crucial for safe blood donation and transfusion.',
      author: 'Dr. Sarah Mitchell',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Medical Science',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Blood Types', 'Medical Science', 'Donation Process']
    },
    {
      id: 2,
      title: 'Community Heroes: Stories of Life-Saving Blood Donations',
      excerpt: 'Read inspiring stories from our donor community and discover how everyday heroes are making a life-saving difference.',
      author: 'Community Team',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Community Stories',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Community', 'Donor Stories', 'Heroes']
    },
    {
      id: 3,
      title: 'The Importance of Regular Blood Donation: A Guide for New Donors',
      excerpt: 'Learn why regular blood donation is vital for maintaining a stable blood supply and how you can become a life-saving hero.',
      author: 'Donation Advocate',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Donation Process',
      image: 'https://images.unsplash.com/photo-1526256260728-5913961cae9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Regular Donation', 'New Donors', 'Blood Supply']
    },
    {
      id: 4,
      title: '5 Simple Health Tips to Prepare for Your Next Blood Donation',
      excerpt: 'Maximize the impact of your donation by following these easy health tips to ensure you are in top shape.',
      author: 'Health Expert',
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Health Tips',
      image: 'https://images.unsplash.com/photo-1532938314630-e9439f347c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Health Tips', 'Blood Donation', 'Donor Preparation']
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1494390248044-34439f76bcca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Blog background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
              Explore Our Blog
            </h1>
            <p className="text-xl text-dark-text/70">
              Stay updated with the latest news, stories, and insights from our community.
            </p>
          </div>

          {/* Filters */}
          <div className="glass-card p-6 rounded-2xl mb-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neon-pink" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                />
              </div>
              
              <Select onValueChange={setSelectedCategory}>
                <SelectTrigger className="glass border-electric-cyan/20 text-white">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white">
                <Search className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-neon-pink/90 text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-soft-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-dark-text/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-sm text-dark-text/60 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link to={`/blog/${post.id}`}>
                      <Button className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white hover:scale-105 transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State - "No articles found" */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-neon-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-12 h-12 text-neon-pink" />
                </div>
                <h3 className="text-3xl font-bold text-soft-white mb-4">
                  No Articles Found
                </h3>
                <p className="text-dark-text/60 text-lg mb-8 leading-relaxed">
                  We couldn't find any articles matching your criteria. 
                  Try adjusting your search or filter settings to discover more content.
                </p>
                <div className="space-y-4">
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                    className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
                  >
                    Clear All Filters
                  </Button>
                  <p className="text-sm text-dark-text/50">
                    Or explore our other categories for more great content!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
