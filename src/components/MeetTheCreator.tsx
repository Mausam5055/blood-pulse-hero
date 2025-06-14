
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Heart, Code, Coffee, Star } from 'lucide-react';

const MeetTheCreator = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-space-navy via-space-navy/95 to-electric-cyan/10 min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
            Meet the <span className="text-neon-pink">Creator</span>
          </h2>
          <p className="text-xl text-dark-text/70 max-w-2xl mx-auto">
            The passionate developer behind LifeGiver who believes in the power of technology to save lives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Creator Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Modern rectangular photo container */}
              <div className="w-80 h-96 bg-gradient-to-br from-neon-pink/20 to-electric-cyan/20 p-1 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden border border-neon-pink/30">
                  <img
                    src="/lovable-uploads/e0b9cc04-778d-4b53-8e28-0e3d48912c66.png"
                    alt="App Creator"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center animate-pulse">
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-electric-cyan to-neon-pink rounded-full flex items-center justify-center animate-bounce">
                <Code className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-neon-pink/80 to-electric-cyan/80 rounded-full flex items-center justify-center animate-pulse delay-75">
                <Coffee className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Creator Info Section */}
          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-soft-white mb-2">
                Alex Johnson
              </h3>
              <p className="text-xl text-neon-pink font-semibold mb-6">
                Full Stack Developer & Life Enthusiast
              </p>
              
              <div className="space-y-6 text-dark-text/80 text-lg leading-relaxed">
                <p className="relative">
                  <span className="absolute -left-4 top-0 text-neon-pink text-2xl">"</span>
                  I created LifeGiver after witnessing firsthand how difficult it can be to find blood donors during emergencies. 
                  Technology should bridge the gap between those who need help and those willing to help.
                  <span className="absolute -right-1 bottom-0 text-neon-pink text-2xl">"</span>
                </p>
                
                <p>
                  Every line of code in this application was written with the hope that it might save a life. 
                  Blood donation is one of the most selfless acts of humanity, and I wanted to make it more accessible.
                </p>
                
                <div className="bg-gradient-to-r from-electric-cyan/10 to-neon-pink/10 p-6 rounded-xl border border-electric-cyan/20">
                  <p className="text-electric-cyan font-medium text-xl italic">
                    "Together, we can build a community where no one has to search desperately for life-saving blood."
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl bg-gradient-to-r from-space-navy/80 to-space-navy/60 border border-neon-pink/20 text-soft-white hover:border-neon-pink/50 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-6 h-6 group-hover:text-neon-pink transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/0 to-neon-pink/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl bg-gradient-to-r from-space-navy/80 to-space-navy/60 border border-electric-cyan/20 text-soft-white hover:border-electric-cyan/50 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-6 h-6 group-hover:text-electric-cyan transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/0 to-electric-cyan/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <a
                href="mailto:alex@lifegiver.com"
                className="group relative p-4 rounded-xl bg-gradient-to-r from-space-navy/80 to-space-navy/60 border border-neon-pink/20 text-soft-white hover:border-neon-pink/50 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-6 h-6 group-hover:text-neon-pink transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/0 to-neon-pink/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          <Card className="glass-card border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-neon-pink mb-2 group-hover:scale-110 transition-transform">5+</div>
              <div className="text-dark-text/70 text-lg">Years of Experience</div>
              <Star className="w-6 h-6 text-neon-pink/50 mx-auto mt-4" />
            </CardContent>
          </Card>
          
          <Card className="glass-card border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-electric-cyan mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-dark-text/70 text-lg">Projects Completed</div>
              <Code className="w-6 h-6 text-electric-cyan/50 mx-auto mt-4" />
            </CardContent>
          </Card>
          
          <Card className="glass-card border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-neon-pink mb-2 group-hover:scale-110 transition-transform">O+</div>
              <div className="text-dark-text/70 text-lg">Blood Type (Universal Donor)</div>
              <Heart className="w-6 h-6 text-neon-pink/50 mx-auto mt-4" fill="currentColor" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MeetTheCreator;
