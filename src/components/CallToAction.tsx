
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, Users, Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-black via-red-950/10 to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Save Lives?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join our community of heroes today. Every donation counts, 
            every donor matters, and every life saved makes a difference.
          </p>
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
          >
            <Heart className="w-6 h-6 mr-3" fill="currentColor" />
            Donate Blood Now
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="w-6 h-6 mr-3" />
            Schedule Appointment
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Join 15K+ Donors</h3>
            <p className="text-gray-300">
              Be part of our growing community of life-saving heroes
            </p>
          </div>

          <div className="text-center p-8 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" fill="currentColor" />
            <h3 className="text-xl font-bold text-white mb-3">Save 3 Lives</h3>
            <p className="text-gray-300">
              Each donation can potentially save up to 3 lives
            </p>
          </div>

          <div className="text-center p-8 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Calendar className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Flexible Scheduling</h3>
            <p className="text-gray-300">
              Book appointments at your convenience, 24/7 online
            </p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center p-8 backdrop-blur-sm bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20">
          <Phone className="w-8 h-8 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Emergency Blood Request?</h3>
          <p className="text-gray-300 mb-4">
            For urgent blood requirements, contact us immediately
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+1-800-LIFEBLOOD" 
              className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors"
            >
              1-800-LIFEBLOOD
            </a>
            <span className="text-gray-400 hidden sm:block">|</span>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
              Request Blood Now
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 LifeGiver. Saving lives, one donation at a time.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
