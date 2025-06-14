
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Droplets } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/6823543/6823543-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/7579757/7579757-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      <Navbar />
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Simple Icon */}
          <div className="flex justify-center mb-8">
            <Heart className="w-20 h-20 text-deep-coral dark:text-neon-pink" fill="currentColor" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Be a Hero in
            <span className="block text-deep-coral dark:text-neon-pink mt-2">Real Life</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Every drop counts. Every donation saves lives. Join thousands of heroes 
            making a difference through blood donation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/register')}
              className="bg-deep-coral hover:bg-deep-coral/90 dark:bg-neon-pink dark:hover:bg-neon-pink/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Become a Donor
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/request')}
              className="border-2 border-white text-white hover:bg-white hover:text-rich-charcoal dark:hover:text-space-navy px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Request Blood
            </Button>
          </div>

          {/* Simple Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center backdrop-blur-sm bg-white/10 dark:bg-white/5 p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">25,000+</div>
              <div className="text-white/80">Lives Saved</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 dark:bg-white/5 p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">15,000+</div>
              <div className="text-white/80">Active Donors</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 dark:bg-white/5 p-6 rounded-xl border border-white/20">
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
