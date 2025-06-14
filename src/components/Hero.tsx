
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Droplets } from 'lucide-react';
import BloodParticles from './BloodParticles';
import Navbar from './Navbar';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-red-950/20 to-black overflow-hidden">
      <BloodParticles />
      <Navbar />
      
      {/* Hero Content */}
      <div 
        ref={heroRef}
        className="relative z-10 flex items-center justify-center min-h-screen px-4"
      >
        <div className="text-center max-w-6xl mx-auto">
          {/* Animated Hearts */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Heart className="w-16 h-16 text-red-500 animate-pulse" fill="currentColor" />
              <div className="absolute -top-2 -right-2">
                <Droplets className="w-8 h-8 text-red-600 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent leading-tight">
            Be a Hero in
            <span className="block text-red-500 animate-pulse">Real Life</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Every drop counts. Every donation saves lives. Join thousands of heroes 
            making a difference through blood donation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Become a Donor
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Request Blood
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-red-500 mb-2">25,000+</div>
              <div className="text-gray-300">Lives Saved</div>
            </div>
            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-red-500 mb-2">15,000+</div>
              <div className="text-gray-300">Active Donors</div>
            </div>
            <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
              <div className="text-gray-300">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
