
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-soft-white mb-2">Lifeline Blood Services</h3>
            <p className="text-dark-text/60 text-sm">
              Saving lives through blood donation since 2010
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-dark-text/60 hover:text-electric-cyan transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-dark-text/60 hover:text-electric-cyan transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link 
              to="/contact" 
              className="text-dark-text/60 hover:text-electric-cyan transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/blog" 
              className="text-dark-text/60 hover:text-electric-cyan transition-colors duration-300"
            >
              Blog
            </Link>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-dark-text/50 text-sm">
            © 2024 Lifeline Blood Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
