
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogPost } from '../../data/blogPosts';

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <>
      {/* Back Button */}
      <div className="mb-8 animate-fade-in">
        <Link to="/blog">
          <Button variant="outline" className="border-electric-cyan/20 text-soft-white hover:bg-electric-cyan/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-2xl mb-8 animate-slide-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-neon-pink/20 text-neon-pink rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-soft-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-dark-text/70 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-dark-text/60 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button size="sm" className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button size="sm" variant="outline" className="border-electric-cyan/20 text-soft-white">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm" variant="outline" className="border-electric-cyan/20 text-soft-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comment
              </Button>
            </div>
          </div>
          
          <div className="lg:order-first">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostHeader;
