
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Droplets, LogIn, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fullscreen Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Blood donation hero background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Navbar />
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Simple Icon */}
          <div className="flex justify-center mb-8">
            <Heart className="w-20 h-20 text-neon-pink" fill="currentColor" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Be a Hero in
            <span className="block text-neon-pink mt-2">Real Life</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Every drop counts. Every donation saves lives. Join thousands of heroes 
            making a difference through blood donation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={() => navigate('/register')}
              className="bg-neon-pink hover:bg-neon-pink/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Become a Donor
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/request')}
              className="border-2 border-white text-white hover:bg-white hover:text-space-navy px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Request Blood
            </Button>
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="ghost"
              onClick={() => navigate('/auth')}
              className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <span className="text-white/60">or</span>
            <Button 
              variant="ghost"
              onClick={() => navigate('/auth')}
              className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Create Account
            </Button>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">25,000+</div>
              <div className="text-white/80">Lives Saved</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">15,000+</div>
              <div className="text-white/80">Active Donors</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
