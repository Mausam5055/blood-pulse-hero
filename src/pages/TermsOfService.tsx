
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Terms background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/95" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in">
            <Link to="/">
              <Button variant="outline" className="border-red-500/20 text-red-500 hover:bg-red-500/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl mb-8 animate-slide-up bg-gray-900/50 border-red-500/20">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-red-500 mr-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              These terms govern your use of our blood donation services. By using our services, you agree to these terms and conditions.
            </p>
            <div className="mt-6 flex items-center text-sm text-gray-400">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span>Last updated: January 15, 2024</span>
            </div>
          </div>

          {/* Content */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl animate-slide-up bg-gray-900/50 border-red-500/20">
            <div className="terms-content">
              <section className="mb-8">
                <div className="flex items-center mb-4">
                  <Scale className="w-6 h-6 text-red-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
                </div>
                <p className="text-gray-300 mb-6">By accessing or using Lifeline Blood Services ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                
                <div className="important-box bg-red-500/10 border border-red-500/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Legal Agreement</h4>
                  <p className="text-gray-300">These terms constitute a legally binding agreement between you and Lifeline Blood Services.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-red-500/20 pb-2">Blood Donation Services</h2>
                
                <h3 className="text-xl font-semibold text-red-400 mt-6 mb-3">Eligibility Requirements</h3>
                <p className="text-gray-300 mb-4">To donate blood through our services, you must:</p>
                <ul className="enhanced-list text-gray-300">
                  <li>Be at least 16 years old (17 in some states)</li>
                  <li>Weigh at least 110 pounds</li>
                  <li>Be in generally good health</li>
                  <li>Meet all FDA and local health authority requirements</li>
                  <li>Provide valid identification</li>
                  <li>Complete our health screening questionnaire truthfully</li>
                </ul>

                <h3 className="text-xl font-semibold text-red-400 mt-6 mb-3">Health and Safety Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="safety-item bg-green-500/10 border border-green-500/20 p-6 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
                    <h4 className="text-lg font-semibold text-green-400 mb-3">You May Donate If:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• You feel well and healthy</li>
                      <li>• Your last donation was over 56 days ago</li>
                      <li>• You meet weight and age requirements</li>
                      <li>• Your iron levels are adequate</li>
                    </ul>
                  </div>
                  <div className="safety-item bg-red-500/10 border border-red-500/20 p-6 rounded-xl">
                    <XCircle className="w-5 h-5 text-red-400 mb-2" />
                    <h4 className="text-lg font-semibold text-red-400 mb-3">You Cannot Donate If:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• You have cold or flu symptoms</li>
                      <li>• You've taken antibiotics in the last 24 hours</li>
                      <li>• You've had recent tattoos or piercings</li>
                      <li>• You have certain medical conditions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-red-500/20 pb-2">Contact Information</h2>
                
                <p className="text-gray-300 mb-6">For questions about these terms or our services, please contact us:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="contact-item bg-gray-800/50 border border-red-500/20 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">General Information</h4>
                    <p className="text-gray-300 text-sm">Email: info@lifelineblood.org</p>
                    <p className="text-gray-300 text-sm">Phone: (555) 123-4567</p>
                    <p className="text-gray-300 text-sm">Hours: Monday-Friday, 8AM-6PM</p>
                  </div>
                  <div className="contact-item bg-gray-800/50 border border-red-500/20 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Legal Department</h4>
                    <p className="text-gray-300 text-sm">Email: legal@lifelineblood.org</p>
                    <p className="text-gray-300 text-sm">Phone: (555) 123-4570</p>
                    <p className="text-gray-300 text-sm">Hours: Monday-Friday, 9AM-5PM</p>
                  </div>
                  <div className="contact-item bg-gray-800/50 border border-red-500/20 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Mailing Address</h4>
                    <p className="text-gray-300 text-sm">Lifeline Blood Services<br/>
                    123 Health Center Drive<br/>
                    Medical City, MC 12345</p>
                  </div>
                </div>

                <div className="final-note bg-red-500/10 border border-red-500/20 p-6 rounded-xl mt-8 text-center">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Thank You</h4>
                  <p className="text-gray-300">Thank you for choosing Lifeline Blood Services. Your commitment to blood donation helps save lives in our community every day.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .terms-content {
          color: #D1D5DB;
          line-height: 1.7;
        }
        
        .terms-content .enhanced-list {
          list-style: none;
          padding-left: 0;
          margin: 1rem 0;
        }
        
        .terms-content .enhanced-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .terms-content .enhanced-list li:before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #EF4444;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;
