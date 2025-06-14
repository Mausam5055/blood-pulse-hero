
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Terms background"
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
              <FileText className="w-8 h-8 text-neon-pink mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-soft-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-dark-text/70 leading-relaxed">
              These terms govern your use of our blood donation services. By using our services, you agree to these terms and conditions.
            </p>
            <div className="mt-6 flex items-center text-sm text-dark-text/60">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span>Last updated: January 15, 2024</span>
            </div>
          </div>

          {/* Content */}
          <div className="glass-card p-8 rounded-2xl animate-slide-up">
            <div className="terms-content">
              <section className="mb-8">
                <div className="flex items-center mb-4">
                  <Scale className="w-6 h-6 text-electric-cyan mr-3" />
                  <h2 className="text-2xl font-bold text-soft-white">Acceptance of Terms</h2>
                </div>
                <p>By accessing or using Lifeline Blood Services ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                
                <div className="important-box">
                  <h4>Legal Agreement</h4>
                  <p>These terms constitute a legally binding agreement between you and Lifeline Blood Services.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Blood Donation Services</h2>
                
                <h3>Eligibility Requirements</h3>
                <p>To donate blood through our services, you must:</p>
                <ul className="enhanced-list">
                  <li>Be at least 16 years old (17 in some states)</li>
                  <li>Weigh at least 110 pounds</li>
                  <li>Be in generally good health</li>
                  <li>Meet all FDA and local health authority requirements</li>
                  <li>Provide valid identification</li>
                  <li>Complete our health screening questionnaire truthfully</li>
                </ul>

                <h3>Health and Safety Requirements</h3>
                <div className="safety-grid">
                  <div className="safety-item acceptable">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
                    <h4>You May Donate If:</h4>
                    <ul>
                      <li>You feel well and healthy</li>
                      <li>Your last donation was over 56 days ago</li>
                      <li>You meet weight and age requirements</li>
                      <li>Your iron levels are adequate</li>
                    </ul>
                  </div>
                  <div className="safety-item not-acceptable">
                    <XCircle className="w-5 h-5 text-red-400 mb-2" />
                    <h4>You Cannot Donate If:</h4>
                    <ul>
                      <li>You have cold or flu symptoms</li>
                      <li>You've taken antibiotics in the last 24 hours</li>
                      <li>You've had recent tattoos or piercings</li>
                      <li>You have certain medical conditions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Your Responsibilities as a Donor</h2>
                
                <h3>Truthful Information</h3>
                <p>You agree to:</p>
                <ul className="enhanced-list">
                  <li>Provide accurate and complete information during screening</li>
                  <li>Disclose all relevant medical history</li>
                  <li>Report any changes to your health status</li>
                  <li>Follow all pre- and post-donation instructions</li>
                  <li>Notify us immediately of any adverse reactions</li>
                </ul>

                <div className="warning-box">
                  <h4>Critical Safety Notice</h4>
                  <p>Providing false information during the screening process can endanger recipients and may result in permanent deferral from donation.</p>
                </div>

                <h3>Appointment and Cancellation Policy</h3>
                <ul className="enhanced-list">
                  <li>Arrive on time for scheduled appointments</li>
                  <li>Provide at least 2 hours notice for cancellations</li>
                  <li>Reschedule missed appointments promptly</li>
                  <li>Follow our center's specific policies and procedures</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Use of Our Website and Services</h2>
                
                <h3>Permitted Uses</h3>
                <ul className="enhanced-list">
                  <li>Schedule and manage donation appointments</li>
                  <li>Access your donation history and records</li>
                  <li>Receive information about blood donation</li>
                  <li>Participate in donor recognition programs</li>
                  <li>Access educational resources and materials</li>
                </ul>

                <h3>Prohibited Uses</h3>
                <p>You may not:</p>
                <ul className="enhanced-list">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>Impersonate another person or entity</li>
                  <li>Share your account credentials with others</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Privacy and Confidentiality</h2>
                
                <p>Your privacy is protected under our Privacy Policy, which is incorporated into these terms by reference. We handle your personal and health information in accordance with:</p>
                <ul className="enhanced-list">
                  <li>HIPAA privacy regulations</li>
                  <li>FDA blood establishment requirements</li>
                  <li>State and local privacy laws</li>
                  <li>Our internal privacy policies</li>
                </ul>

                <div className="privacy-note">
                  <h4>Medical Information</h4>
                  <p>Your blood test results and health information may be shared with healthcare providers when your blood is used for transfusion, as required by law and medical necessity.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Liability and Disclaimers</h2>
                
                <h3>Assumption of Risk</h3>
                <p>You understand and acknowledge that blood donation involves certain inherent risks, including but not limited to:</p>
                <ul className="enhanced-list">
                  <li>Temporary lightheadedness or dizziness</li>
                  <li>Bruising or soreness at the needle site</li>
                  <li>Rare but serious adverse reactions</li>
                  <li>Fainting or nausea</li>
                </ul>

                <h3>Medical Emergency Protocol</h3>
                <p>In case of medical emergency during or after donation:</p>
                <ul className="enhanced-list">
                  <li>Our trained staff will provide immediate assistance</li>
                  <li>Emergency medical services may be contacted</li>
                  <li>You authorize necessary medical treatment</li>
                  <li>We will notify your emergency contact if needed</li>
                </ul>

                <div className="disclaimer-box">
                  <h4>Service Disclaimer</h4>
                  <p>Our services are provided "as is" without warranties of any kind. We make no guarantees about the availability, accuracy, or reliability of our services.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Intellectual Property</h2>
                
                <p>All content on our website and in our materials, including text, graphics, logos, images, and software, is owned by Lifeline Blood Services and protected by copyright and other intellectual property laws.</p>
                
                <h3>Limited License</h3>
                <p>We grant you a limited, non-exclusive license to:</p>
                <ul className="enhanced-list">
                  <li>Access and use our website for personal purposes</li>
                  <li>Print materials for your own reference</li>
                  <li>Share educational content with proper attribution</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Termination</h2>
                
                <h3>Termination by You</h3>
                <p>You may stop using our services at any time by:</p>
                <ul className="enhanced-list">
                  <li>Canceling scheduled appointments</li>
                  <li>Requesting removal from our communications</li>
                  <li>Notifying us of your intent to stop donating</li>
                </ul>

                <h3>Termination by Us</h3>
                <p>We may suspend or terminate your access to our services if:</p>
                <ul className="enhanced-list">
                  <li>You violate these terms of service</li>
                  <li>You become medically ineligible to donate</li>
                  <li>You provide false or misleading information</li>
                  <li>You engage in disruptive or inappropriate behavior</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Dispute Resolution</h2>
                
                <h3>Governing Law</h3>
                <p>These terms are governed by the laws of the state where our services are provided, without regard to conflict of law principles.</p>
                
                <h3>Resolution Process</h3>
                <div className="process-steps">
                  <div className="step">
                    <h4>Step 1: Direct Communication</h4>
                    <p>Contact our management team to discuss any concerns or disputes.</p>
                  </div>
                  <div className="step">
                    <h4>Step 2: Formal Complaint</h4>
                    <p>Submit a written complaint through our formal complaint process.</p>
                  </div>
                  <div className="step">
                    <h4>Step 3: Mediation</h4>
                    <p>If needed, we may engage in mediation to resolve disputes.</p>
                  </div>
                  <div className="step">
                    <h4>Step 4: Legal Action</h4>
                    <p>Legal proceedings in the appropriate jurisdiction as a last resort.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-soft-white mb-4">Changes to Terms</h2>
                
                <p>We may modify these terms at any time. When we make changes:</p>
                <ul className="enhanced-list">
                  <li>We will post the updated terms on our website</li>
                  <li>We will update the "last modified" date</li>
                  <li>We may notify you via email for significant changes</li>
                  <li>Continued use constitutes acceptance of new terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-soft-white mb-4">Contact Information</h2>
                
                <p>For questions about these terms or our services, please contact us:</p>
                
                <div className="contact-methods">
                  <div className="contact-item">
                    <h4>General Information</h4>
                    <p>Email: info@lifelineblood.org</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Hours: Monday-Friday, 8AM-6PM</p>
                  </div>
                  <div className="contact-item">
                    <h4>Legal Department</h4>
                    <p>Email: legal@lifelineblood.org</p>
                    <p>Phone: (555) 123-4570</p>
                    <p>Hours: Monday-Friday, 9AM-5PM</p>
                  </div>
                  <div className="contact-item">
                    <h4>Mailing Address</h4>
                    <p>Lifeline Blood Services<br/>
                    123 Health Center Drive<br/>
                    Medical City, MC 12345</p>
                  </div>
                </div>

                <div className="final-note">
                  <h4>Thank You</h4>
                  <p>Thank you for choosing Lifeline Blood Services. Your commitment to blood donation helps save lives in our community every day.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .terms-content {
          color: #EAEAEA;
          line-height: 1.7;
        }
        
        .terms-content h2 {
          color: #F5F5F5;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #FF1493;
        }
        
        .terms-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #00FFFF;
          margin: 2rem 0 1rem 0;
        }
        
        .terms-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #FF1493;
          margin: 1rem 0 0.5rem 0;
        }
        
        .terms-content p {
          margin-bottom: 1.5rem;
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
          color: #FF1493;
          font-weight: bold;
        }
        
        .terms-content .important-box,
        .terms-content .warning-box,
        .terms-content .privacy-note,
        .terms-content .disclaimer-box,
        .terms-content .final-note {
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 0.5rem;
        }
        
        .terms-content .important-box {
          background: rgba(0, 255, 255, 0.1);
          border-left: 4px solid #00FFFF;
        }
        
        .terms-content .warning-box {
          background: rgba(255, 69, 0, 0.1);
          border-left: 4px solid #FF4500;
        }
        
        .terms-content .privacy-note {
          background: rgba(255, 20, 147, 0.1);
          border-left: 4px solid #FF1493;
        }
        
        .terms-content .disclaimer-box {
          background: rgba(255, 255, 0, 0.1);
          border-left: 4px solid #FFD700;
        }
        
        .terms-content .final-note {
          background: rgba(0, 255, 0, 0.1);
          border-left: 4px solid #00FF00;
          text-align: center;
        }
        
        .terms-content .safety-grid,
        .terms-content .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .terms-content .safety-item,
        .terms-content .contact-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .terms-content .safety-item.acceptable {
          border-left: 4px solid #00FF00;
        }
        
        .terms-content .safety-item.not-acceptable {
          border-left: 4px solid #FF0000;
        }
        
        .terms-content .process-steps {
          display: grid;
          gap: 1rem;
          margin: 2rem 0;
        }
        
        .terms-content .step {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 0.5rem;
          border-left: 4px solid #FF1493;
        }
        
        .terms-content .safety-item ul,
        .terms-content .contact-item ul {
          list-style: none;
          padding-left: 0;
        }
        
        .terms-content .safety-item li,
        .terms-content .contact-item li {
          position: relative;
          padding-left: 1rem;
          margin-bottom: 0.25rem;
          font-size: 0.9rem;
        }
        
        .terms-content .safety-item li:before,
        .terms-content .contact-item li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #EAEAEA;
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;
