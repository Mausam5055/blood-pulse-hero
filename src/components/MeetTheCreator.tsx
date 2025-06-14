
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const MeetTheCreator = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-space-navy to-electric-cyan/10">
      <div className="w-full max-w-none xl:px-12 2xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
            Meet the <span className="text-neon-pink">Creator</span>
          </h2>
          <p className="text-xl text-dark-text/70 max-w-2xl mx-auto">
            The passionate developer behind LifeGiver who believes in the power of technology to save lives
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-electric-cyan/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Creator Photo */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-neon-pink/10 to-electric-cyan/10">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-neon-pink/30 shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="App Creator"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating hearts animation */}
                    <Heart className="absolute -top-4 -right-4 w-8 h-8 text-neon-pink animate-heartbeat opacity-80" fill="currentColor" />
                    <Heart className="absolute -bottom-2 -left-2 w-6 h-6 text-electric-cyan animate-pulse opacity-60" fill="currentColor" />
                  </div>
                </div>

                {/* Creator Info */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-soft-white mb-4">
                    Alex Johnson
                  </h3>
                  <p className="text-lg text-neon-pink font-semibold mb-6">
                    Full Stack Developer & Life Enthusiast
                  </p>
                  
                  <div className="space-y-4 text-dark-text/80 mb-8">
                    <p>
                      "I created LifeGiver after witnessing firsthand how difficult it can be to find blood donors during emergencies. 
                      Technology should bridge the gap between those who need help and those willing to help."
                    </p>
                    <p>
                      "Every line of code in this application was written with the hope that it might save a life. 
                      Blood donation is one of the most selfless acts of humanity, and I wanted to make it more accessible."
                    </p>
                    <p className="text-electric-cyan font-medium">
                      "Together, we can build a community where no one has to search desperately for life-saving blood."
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-space-navy/50 text-soft-white hover:bg-neon-pink/20 hover:text-neon-pink transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-space-navy/50 text-soft-white hover:bg-electric-cyan/20 hover:text-electric-cyan transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:alex@lifegiver.com"
                      className="p-3 rounded-full bg-space-navy/50 text-soft-white hover:bg-neon-pink/20 hover:text-neon-pink transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats about the creator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-pink mb-2">5+</div>
            <div className="text-dark-text/70">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-electric-cyan mb-2">50+</div>
            <div className="text-dark-text/70">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-pink mb-2">O+</div>
            <div className="text-dark-text/70">Blood Type (Universal Donor)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheCreator;
