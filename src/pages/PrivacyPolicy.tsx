
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Lock, Users, Mail, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Privacy background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in">
            <Link to="/">
              <Button variant="outline" className="border-electric-cyan/20 text-electric-cyan hover:bg-electric-cyan/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="glass-card p-8 rounded-2xl mb-8 animate-slide-up">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-neon-pink mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-soft-white">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-dark-text/70 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our blood donation services.
            </p>
            <div className="mt-6 flex items-center text-sm text-dark-text/60">
              <AlertCircle className="w-4 h-4 mr-2" />
              <span>Last updated: January 15, 2024</span>
            </div>
          </div>

          {/* Content */}
          <div className="glass-card p-8 rounded-2xl animate-slide-up">
            <div className="privacy-content">
              <section className="mb-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-electric-cyan mr-3" />
                  <h2 className="text-2xl font-bold text-soft-white">Information We Collect</h2>
                </div>
                <p className="mb-4">We collect information necessary to provide safe and effective blood donation services:</p>
                
                <h3>Personal Information</h3>
                <ul className="enhanced-list">
                  <li>Full name and contact information</li>
                  <li>Date of birth and government-issued ID</li>
                  <li>Address and emergency contact details</li>
                  <li>Blood type and medical history</li>
                  <li>Donation history and eligibility status</li>
                </ul>

                <h3>Health Information</h3>
                <ul className="enhanced-list">
                  <li>Pre-donation health screening results</li>
                  <li>Blood test results and vital signs</li>
                  <li>Medical conditions affecting donation eligibility</li>
                  <li>Medications and recent travel history</li>
                  <li>Previous adverse reactions to donation</li>
                </ul>

                <h3>Technical Information</h3>
                <ul className="enhanced-list">
                  <li>Website usage data and cookies</li>
                  <li>IP address and browser information</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on site</li>
                </ul>
              </section>

              <section className="mb-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-electric-cyan mr-3" />
                  <h2 className="text-2xl font-bold text-soft-white">How We Use Your Information</h2>
                </div>
                
                <div className="info-box">
                  <h4>Primary Purposes</h4>
                  <p>Your information is primarily used to ensure safe blood donation and transfusion processes.</p>
                </div>

                <h3>Donation Services</h3>
                <ul className="enhanced-list">
                  <li>Determine donation eligibility and safety</li>
                  <li>Process and track blood donations</li>
                  <li>Maintain accurate donation records</li>
                  <li>Contact you for follow-up if needed</li>
                  <li>Schedule future appointments</li>
                </ul>

                <h3>Communication</h3>
                <ul className="enhanced-list">
                  <li>Send appointment reminders and confirmations</li>
                  <li>Notify you of blood drives and events</li>
                  <li>Share donation impact stories and updates</li>
                  <li>Provide test results when required</li>
                  <li>Emergency notifications if necessary</li>
                </ul>

                <h3>Quality and Safety</h3>
                <ul className="enhanced-list">
                  <li>Monitor blood safety and quality standards</li>
                  <li>Conduct research to improve donation processes</li>
                  <li>Comply with regulatory requirements</li>
                  <li>Investigate and prevent fraud</li>
                </ul>
              </section>

              <section className="mb-8">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-electric-cyan mr-3" />
                  <h2 className="text-2xl font-bold text-soft-white">How We Protect Your Information</h2>
                </div>

                <div className="security-measures">
                  <div className="security-item">
                    <h4>Technical Safeguards</h4>
                    <p>We use industry-standard encryption, secure servers, and regular security audits to protect your data.</p>
                  </div>
                  <div className="security-item">
                    <h4>Physical Security</h4>
                    <p>Our facilities have restricted access, surveillance systems, and secure storage for physical records.</p>
                  </div>
                  <div className="security-item">
                    <h4>Administrative Controls</h4>
                    <p>Staff receive privacy training and access is limited to authorized personnel only.</p>
                  </div>
                </div>

                <h3>Data Retention</h3>
                <p>We retain your information for the following periods:</p>
                <ul className="enhanced-list">
                  <li><strong>Active donors:</strong> As long as you remain an active donor</li>
                  <li><strong>Inactive donors:</strong> 10 years after last donation</li>
                  <li><strong>Medical records:</strong> As required by law (typically 10-25 years)</li>
                  <li><strong>Website data:</strong> 2 years or as permitted by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-electric-cyan mr-3" />
                  <h2 className="text-2xl font-bold text-soft-white">Information Sharing</h2>
                </div>

                <div className="warning-box">
                  <h4>We Never Sell Your Information</h4>
                  <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                </div>

                <h3>When We May Share Information</h3>
                <ul className="enhanced-list">
                  <li><strong>Healthcare providers:</strong> When your blood is used for transfusion</li>
                  <li><strong>Regulatory agencies:</strong> As required by law (FDA, CDC, etc.)</li>
                  <li><strong>Emergency situations:</strong> To protect health and safety</li>
                  <li><strong>Legal compliance:</strong> Court orders or legal investigations</li>
                  <li><strong>Service providers:</strong> Contractors who help us operate (with strict confidentiality agreements)</li>
                </ul>

                <h3>Research and Statistics</h3>
                <p>We may use anonymized, aggregated data for:</p>
                <ul className="enhanced-list">
                  <li>Medical research to improve blood safety</li>
                  <li>Public health studies and statistics</li>
                  <li>Quality improvement initiatives</li>
                  <li>Educational materials and presentations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Your Rights and Choices</h2>

                <h3>Access and Correction</h3>
                <p>You have the right to:</p>
                <ul className="enhanced-list">
                  <li>Access your personal information we hold</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Update your contact preferences</li>
                  <li>Receive copies of your donation records</li>
                </ul>

                <h3>Communication Preferences</h3>
                <p>You can opt out of:</p>
                <ul className="enhanced-list">
                  <li>Marketing emails and newsletters</li>
                  <li>Non-essential text messages</li>
                  <li>Promotional phone calls</li>
                  <li>Direct mail communications</li>
                </ul>

                <div className="note-box">
                  <h4>Important Note</h4>
                  <p>Some communications (appointment confirmations, critical health information) cannot be opted out of for safety reasons.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Cookies and Website Tracking</h2>

                <h3>Types of Cookies We Use</h3>
                <ul className="enhanced-list">
                  <li><strong>Essential cookies:</strong> Required for website functionality</li>
                  <li><strong>Performance cookies:</strong> Help us improve website performance</li>
                  <li><strong>Functional cookies:</strong> Remember your preferences</li>
                  <li><strong>Analytics cookies:</strong> Understand how visitors use our site</li>
                </ul>

                <h3>Managing Cookies</h3>
                <p>You can control cookies through your browser settings, but this may affect website functionality.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Children's Privacy</h2>
                <p>Our services are not intended for children under 16 years old. Donors aged 16-17 require parental consent. We do not knowingly collect personal information from children under 16 without parental consent.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Changes to This Policy</h2>
                <p>We may update this privacy policy periodically. We will notify you of significant changes by:</p>
                <ul className="enhanced-list">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to registered donors</li>
                  <li>Displaying notices at our donation centers</li>
                  <li>Updating the "last modified" date at the top of this policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-soft-white mb-4">Contact Us</h2>
                <p>If you have questions about this privacy policy or our privacy practices, please contact us:</p>
                
                <div className="contact-methods">
                  <div className="contact-item">
                    <h4>Privacy Officer</h4>
                    <p>Email: privacy@lifelineblood.org</p>
                    <p>Phone: (555) 123-4567</p>
                  </div>
                  <div className="contact-item">
                    <h4>Mailing Address</h4>
                    <p>Lifeline Blood Services<br/>
                    Attn: Privacy Officer<br/>
                    123 Health Center Drive<br/>
                    Medical City, MC 12345</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .privacy-content {
          color: #EAEAEA;
          line-height: 1.7;
        }
        
        .privacy-content h2 {
          color: #F5F5F5;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #FF1493;
        }
        
        .privacy-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #00FFFF;
          margin: 2rem 0 1rem 0;
        }
        
        .privacy-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #FF1493;
          margin: 1rem 0 0.5rem 0;
        }
        
        .privacy-content p {
          margin-bottom: 1.5rem;
        }
        
        .privacy-content .enhanced-list {
          list-style: none;
          padding-left: 0;
          margin: 1rem 0;
        }
        
        .privacy-content .enhanced-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .privacy-content .enhanced-list li:before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #FF1493;
          font-weight: bold;
        }
        
        .privacy-content .info-box,
        .privacy-content .warning-box,
        .privacy-content .note-box {
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 0.5rem;
        }
        
        .privacy-content .info-box {
          background: rgba(0, 255, 255, 0.1);
          border-left: 4px solid #00FFFF;
        }
        
        .privacy-content .warning-box {
          background: rgba(255, 20, 147, 0.1);
          border-left: 4px solid #FF1493;
        }
        
        .privacy-content .note-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .privacy-content .security-measures,
        .privacy-content .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .privacy-content .security-item,
        .privacy-content .contact-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
