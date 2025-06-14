
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, User, Tag, ArrowRight, Heart, Droplets, Award } from 'lucide-react';
import Navbar from '../components/Navbar';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Health Tips', 'Success Stories', 'Events', 'News', 'Guidelines'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Life-Saving Journey: How Blood Donation Changed Sarah\'s Life',
      excerpt: 'Read about Sarah\'s incredible journey as a blood donor and how she saved multiple lives through her regular donations.',
      author: 'Dr. Michael Chen',
      date: '2024-01-15',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      tags: ['inspiration', 'donor-story', 'life-saving']
    },
    {
      id: 2,
      title: 'Pre-Donation Health Guidelines: What Every Donor Should Know',
      excerpt: 'Essential health tips and guidelines to ensure you\'re prepared for blood donation and maintain optimal health.',
      author: 'Dr. Emily Johnson',
      date: '2024-01-12',
      category: 'Health Tips',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read',
      tags: ['health', 'guidelines', 'preparation']
    },
    {
      id: 3,
      title: 'Community Blood Drive Success: 500 Units Collected',
      excerpt: 'Our recent community blood drive was a tremendous success, collecting 500 units of blood to help patients in need.',
      author: 'Blood Center Team',
      date: '2024-01-10',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '3 min read',
      tags: ['community', 'event', 'success']
    },
    {
      id: 4,
      title: 'Understanding Blood Types: A Comprehensive Guide',
      excerpt: 'Learn about different blood types, compatibility, and why your specific blood type matters in donation.',
      author: 'Dr. Robert Williams',
      date: '2024-01-08',
      category: 'Guidelines',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '10 min read',
      tags: ['education', 'blood-types', 'science']
    },
    {
      id: 5,
      title: 'New Blood Donation Center Opens Downtown',
      excerpt: 'We\'re excited to announce the opening of our new state-of-the-art blood donation center in the downtown area.',
      author: 'Admin Team',
      date: '2024-01-05',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '4 min read',
      tags: ['news', 'facility', 'announcement']
    },
    {
      id: 6,
      title: 'Hero Donor Spotlight: James\' 100th Donation',
      excerpt: 'Celebrating James Miller as he reaches his 100th blood donation milestone, saving hundreds of lives.',
      author: 'Recognition Team',
      date: '2024-01-03',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1594824694694-40ae4b96000b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      tags: ['milestone', 'hero', 'recognition']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-soft-white mb-6">
              Blood Donation Blog
            </h1>
            <p className="text-xl text-dark-text/80 max-w-2xl mx-auto">
              Stories, tips, and insights from our community of life-saving heroes
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass-card p-6 rounded-2xl mb-8 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neon-pink" />
                <Input
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-gradient-to-r from-neon-pink to-electric-cyan text-white" 
                      : "border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="glass-card rounded-2xl overflow-hidden mb-12 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-neon-pink text-white">
                      Featured
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="outline" className="border-electric-cyan text-electric-cyan">
                      {filteredPosts[0].category}
                    </Badge>
                    <span className="text-dark-text/60 text-sm">{filteredPosts[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-soft-white mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  
                  <p className="text-dark-text/80 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-soft-white font-medium">{filteredPosts[0].author}</p>
                        <p className="text-dark-text/60 text-sm">{filteredPosts[0].date}</p>
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <div
                key={post.id}
                className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="outline" 
                      className="border-electric-cyan text-electric-cyan bg-background/80 backdrop-blur-sm"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-soft-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-dark-text/80 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-electric-cyan/20 text-electric-cyan text-xs"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-neon-pink" />
                      <span className="text-dark-text/60 text-sm">{post.date}</span>
                    </div>
                    <span className="text-dark-text/60 text-sm">{post.readTime}</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-electric-cyan/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-soft-white text-sm font-medium">{post.author}</span>
                      </div>
                      
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-electric-cyan hover:bg-electric-cyan/10"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-neon-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-xl font-semibold text-soft-white mb-2">
                No posts found
              </h3>
              <p className="text-dark-text/60">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
