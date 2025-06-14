
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    priority: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    // Here we would integrate with Supabase
  };

  const subjects = [
    'General Inquiry',
    'Donation Appointment',
    'Blood Request',
    'Technical Support',
    'Partnership Inquiry',
    'Emergency Request'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Medical background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-dark-text/70 max-w-3xl mx-auto">
              Have questions about blood donation? Need help with your account? 
              We're here to help you save lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6 animate-slide-up">
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-soft-white">
                        Phone Support
                      </h3>
                      <p className="text-dark-text/60">
                        Available 24/7
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 ml-16">
                    <p className="text-soft-white font-medium">
                      Emergency: <span className="text-red-500">1-800-EMERGENCY</span>
                    </p>
                    <p className="text-soft-white">
                      General: <span className="text-neon-pink">1-800-LIFEBLOOD</span>
                    </p>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-soft-white">
                        Email Support
                      </h3>
                      <p className="text-dark-text/60">
                        Response within 2 hours
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 ml-16">
                    <p className="text-soft-white">
                      support@lifegiver.org
                    </p>
                    <p className="text-soft-white">
                      donations@lifegiver.org
                    </p>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-soft-white">
                        Visit Us
                      </h3>
                      <p className="text-dark-text/60">
                        Main headquarters
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <p className="text-soft-white">
                      123 Life Avenue<br />
                      Health District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-soft-white">
                        Hours
                      </h3>
                      <p className="text-dark-text/60">
                        Donation center hours
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1 ml-16 text-soft-white">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 animate-pulse">
                <div className="flex items-center mb-3">
                  <Heart className="w-6 h-6 text-red-500 mr-3 animate-heartbeat" fill="currentColor" />
                  <h3 className="text-lg font-semibold text-red-400">
                    Emergency Blood Request?
                  </h3>
                </div>
                <p className="text-red-300 mb-4">
                  For urgent blood requirements, call our emergency hotline immediately.
                </p>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Call Emergency Line
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8 rounded-2xl animate-slide-up">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-soft-white mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-dark-text/70">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-soft-white">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-soft-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-soft-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-soft-white">
                        Priority Level
                      </Label>
                      <Select onValueChange={(value) => setFormData({...formData, priority: value})}>
                        <SelectTrigger className="glass border-electric-cyan/20 text-white">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-soft-white">
                      Subject *
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, subject: value})}>
                      <SelectTrigger className="glass border-electric-cyan/20 text-white">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-soft-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="glass border-electric-cyan/20 focus:border-electric-cyan text-white min-h-[120px]"
                      placeholder="Please describe your inquiry in detail..."
                      required
                    />
                  </div>

                  <div className="flex justify-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-neon-pink to-electric-cyan hover:from-neon-pink/90 hover:to-electric-cyan/90 text-white px-12 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 animate-glow"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
