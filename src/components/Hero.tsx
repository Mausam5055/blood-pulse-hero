
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Droplets } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BloodParticles from './BloodParticles';
import Navbar from './Navbar';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-deep-coral/20 to-soft-teal/30 dark:from-space-navy dark:via-neon-pink/20 dark:to-electric-cyan/30" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 dark:opacity-20"
        >
          <source src="https://player.vimeo.com/external/372542810.sd.mp4?s=8c8a8d8b8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c" type="video/mp4" />
        </video>
      </div>

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
            <div className="relative animate-float">
              <Heart className="w-16 h-16 text-deep-coral dark:text-neon-pink animate-heartbeat" fill="currentColor" />
              <div className="absolute -top-2 -right-2">
                <Droplets className="w-8 h-8 text-soft-teal dark:text-electric-cyan animate-bounce" />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-rich-charcoal via-deep-coral to-soft-teal dark:from-soft-white dark:via-neon-pink dark:to-electric-cyan bg-clip-text text-transparent leading-tight animate-slide-up">
            Be a Hero in
            <span className="block text-deep-coral dark:text-neon-pink animate-glow">Real Life</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-rich-charcoal/80 dark:text-dark-text/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Every drop counts. Every donation saves lives. Join thousands of heroes 
            making a difference through blood donation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              onClick={() => navigate('/register')}
              className="bg-gradient-to-r from-deep-coral to-deep-coral/80 hover:from-deep-coral/90 hover:to-deep-coral dark:from-neon-pink dark:to-neon-pink/80 dark:hover:from-neon-pink/90 dark:hover:to-neon-pink text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-deep-coral/25 dark:hover:shadow-neon-pink/25 animate-glow"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Become a Donor
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/request')}
              className="border-2 border-soft-teal dark:border-electric-cyan text-soft-teal dark:text-electric-cyan hover:bg-soft-teal dark:hover:bg-electric-cyan hover:text-white dark:hover:text-space-navy px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 glass"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Request Blood
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="text-center p-6 glass-card rounded-2xl animate-float">
              <div className="text-3xl font-bold text-deep-coral dark:text-neon-pink mb-2">25,000+</div>
              <div className="text-rich-charcoal/70 dark:text-dark-text/70">Lives Saved</div>
            </div>
            <div className="text-center p-6 glass-card rounded-2xl animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-deep-coral dark:text-neon-pink mb-2">15,000+</div>
              <div className="text-rich-charcoal/70 dark:text-dark-text/70">Active Donors</div>
            </div>
            <div className="text-center p-6 glass-card rounded-2xl animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-deep-coral dark:text-neon-pink mb-2">50+</div>
              <div className="text-rich-charcoal/70 dark:text-dark-text/70">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rich-charcoal/30 dark:border-dark-text/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-deep-coral dark:bg-neon-pink rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
