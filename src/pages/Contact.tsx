
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, Heart, Globe, Users, Shield } from 'lucide-react';
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

  const quickLinks = [
    { title: 'Donation Centers', icon: MapPin, description: 'Find nearby donation locations' },
    { title: 'Emergency Blood', icon: Heart, description: 'Urgent blood requests' },
    { title: 'Donor Support', icon: Users, description: 'Help for existing donors' },
    { title: 'Medical Professionals', icon: Shield, description: 'Healthcare provider resources' },
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
      
      <div className="relative z-10 pt-16 md:pt-20 pb-8 md:pb-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          {/* Header Section */}
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-soft-white mb-3 md:mb-6 leading-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-electric-cyan">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark-text/80 max-w-4xl mx-auto leading-relaxed px-2">
              Have questions about blood donation? Need help with your account? 
              We're here to help you save lives and make a difference.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {quickLinks.map((link, index) => (
              <Card key={link.title} className="glass-card border-white/10 hover:scale-105 hover:border-neon-pink/30 transition-all duration-300 animate-fade-in group" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-3 sm:p-4 md:p-8 text-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-xl font-bold text-soft-white mb-1 sm:mb-2 md:mb-3 group-hover:text-neon-pink transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-dark-text/70 leading-relaxed hidden sm:block">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 md:gap-12">
            {/* Contact Information - Optimized for mobile */}
            <div className="xl:col-span-2 space-y-4 md:space-y-8">
              {/* Contact Cards */}
              <div className="space-y-3 md:space-y-6 animate-slide-up">
                <Card className="glass-card border-white/10 hover:border-electric-cyan/30 transition-all duration-300">
                  <CardHeader className="pb-2 md:pb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mr-3 md:mr-5">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl text-soft-white font-bold">
                          Phone Support
                        </CardTitle>
                        <p className="text-dark-text/70 text-xs sm:text-sm font-medium">
                          Available 24/7 for emergencies
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2 md:space-y-3 px-3 sm:px-6">
                    <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 p-2 sm:p-3 md:p-4 rounded-lg border border-red-500/20">
                      <p className="text-soft-white text-sm sm:text-base md:text-lg">
                        Emergency: <span className="text-red-400 font-bold text-sm sm:text-lg md:text-xl">1-800-EMERGENCY</span>
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-neon-pink/10 to-electric-cyan/10 p-2 sm:p-3 md:p-4 rounded-lg border border-neon-pink/20">
                      <p className="text-soft-white text-sm sm:text-base md:text-lg">
                        General: <span className="text-neon-pink font-bold text-sm sm:text-lg md:text-xl">1-800-LIFEBLOOD</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10 hover:border-electric-cyan/30 transition-all duration-300">
                  <CardHeader className="pb-2 md:pb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-electric-cyan to-neon-pink rounded-full flex items-center justify-center mr-3 md:mr-5">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl text-soft-white font-bold">
                          Email Support
                        </CardTitle>
                        <p className="text-dark-text/70 text-xs sm:text-sm font-medium">
                          Response within 2 hours
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2 md:space-y-3 px-3 sm:px-6">
                    <div className="bg-gradient-to-r from-electric-cyan/10 to-neon-pink/10 p-2 sm:p-3 md:p-4 rounded-lg border border-electric-cyan/20">
                      <p className="text-soft-white text-sm sm:text-base md:text-lg font-medium break-all">
                        support@lifegiver.org
                      </p>
                      <p className="text-soft-white text-sm sm:text-base md:text-lg font-medium break-all">
                        donations@lifegiver.org
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10 hover:border-neon-pink/30 transition-all duration-300">
                  <CardHeader className="pb-2 md:pb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mr-3 md:mr-5">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl text-soft-white font-bold">
                          Visit Us
                        </CardTitle>
                        <p className="text-dark-text/70 text-xs sm:text-sm font-medium">
                          Main headquarters
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 px-3 sm:px-6">
                    <div className="bg-gradient-to-r from-neon-pink/10 to-electric-cyan/10 p-2 sm:p-3 md:p-4 rounded-lg border border-neon-pink/20">
                      <div className="text-soft-white space-y-1 text-sm sm:text-base md:text-lg">
                        <p className="font-semibold">123 Life Avenue</p>
                        <p>Health District</p>
                        <p>New York, NY 10001</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-white/10 hover:border-electric-cyan/30 transition-all duration-300">
                  <CardHeader className="pb-2 md:pb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-electric-cyan to-neon-pink rounded-full flex items-center justify-center mr-3 md:mr-5">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl text-soft-white font-bold">
                          Operating Hours
                        </CardTitle>
                        <p className="text-dark-text/70 text-xs sm:text-sm font-medium">
                          Donation center schedule
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 px-3 sm:px-6">
                    <div className="bg-gradient-to-r from-electric-cyan/10 to-neon-pink/10 p-2 sm:p-3 md:p-4 rounded-lg border border-electric-cyan/20">
                      <div className="space-y-1 md:space-y-2 text-soft-white text-xs sm:text-sm md:text-base">
                        <p className="flex justify-between"><span className="font-semibold">Mon - Fri:</span> <span>8AM - 8PM</span></p>
                        <p className="flex justify-between"><span className="font-semibold">Saturday:</span> <span>9AM - 6PM</span></p>
                        <p className="flex justify-between"><span className="font-semibold">Sunday:</span> <span>10AM - 4PM</span></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Emergency Notice */}
              <Card className="glass-card border-red-500/30 bg-gradient-to-r from-red-500/15 to-red-600/15 animate-pulse hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center mb-3 md:mb-4">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-500 mr-3 md:mr-4 animate-heartbeat" fill="currentColor" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-400">
                      Emergency Blood Request?
                    </h3>
                  </div>
                  <p className="text-red-300 mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                    For urgent blood requirements, call our emergency hotline immediately. Every second counts when lives are at stake.
                  </p>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base md:text-lg py-3 md:py-4 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Call Emergency Line Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - Compact for mobile */}
            <div className="xl:col-span-3 space-y-4 md:space-y-8">
              <Card className="glass-card border-white/10 animate-slide-up">
                <CardHeader className="pb-4 md:pb-8 px-4 sm:px-6 md:px-8">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-soft-white mb-2">
                    Send us a Message
                  </CardTitle>
                  <p className="text-dark-text/80 text-sm sm:text-base md:text-lg">
                    Fill out the form below and we'll get back to you as soon as possible. Your message matters to us.
                  </p>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                      <div className="space-y-2 md:space-y-3">
                        <Label htmlFor="name" className="text-soft-white text-sm sm:text-base md:text-lg font-semibold">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="glass border-electric-cyan/20 focus:border-electric-cyan text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 rounded-xl"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <Label htmlFor="email" className="text-soft-white text-sm sm:text-base md:text-lg font-semibold">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="glass border-electric-cyan/20 focus:border-electric-cyan text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 rounded-xl"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <Label htmlFor="phone" className="text-soft-white text-sm sm:text-base md:text-lg font-semibold">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="glass border-electric-cyan/20 focus:border-electric-cyan text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 rounded-xl"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <Label className="text-soft-white text-sm sm:text-base md:text-lg font-semibold">
                          Priority Level
                        </Label>
                        <Select onValueChange={(value) => setFormData({...formData, priority: value})}>
                          <SelectTrigger className="glass border-electric-cyan/20 text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 rounded-xl">
                            <SelectValue placeholder="Select priority level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low Priority</SelectItem>
                            <SelectItem value="medium">Medium Priority</SelectItem>
                            <SelectItem value="high">High Priority</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2 md:space-y-3">
                      <Label className="text-soft-white text-sm sm:text-base md:text-lg font-semibold">
                        Subject *
                      </Label>
                      <Select onValueChange={(value) => setFormData({...formData, subject: value})}>
                        <SelectTrigger className="glass border-electric-cyan/20 text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 rounded-xl">
                          <SelectValue placeholder="Select a subject for your inquiry" />
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

                    <div className="space-y-2 md:space-y-3">
                      <Label htmlFor="message" className="text-soft-white text-sm sm:text-base md:text-lg font-semibold">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="glass border-electric-cyan/20 focus:border-electric-cyan text-white min-h-[120px] sm:min-h-[150px] md:min-h-[180px] text-sm sm:text-base md:text-lg rounded-xl resize-none"
                        placeholder="Please describe your inquiry in detail. The more information you provide, the better we can assist you..."
                        required
                      />
                    </div>

                    <div className="flex justify-center pt-4 md:pt-8">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-gradient-to-r from-neon-pink to-electric-cyan hover:from-neon-pink/90 hover:to-electric-cyan/90 text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 animate-glow shadow-2xl"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Professional Contact Image - Desktop Only */}
              <div className="hidden xl:block">
                <Card className="glass-card border-white/10 overflow-hidden">
                  <div className="relative h-80">
                    <img
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                      alt="Professional healthcare team ready to assist"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        We're Here to Help
                      </h3>
                      <p className="text-white/90 text-lg">
                        Our dedicated team of professionals is committed to providing you with exceptional support and assistance.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Additional Resources - Compact for mobile */}
          <div>
            <Card className="glass-card border-white/10">
              <CardHeader className="text-center pb-4 md:pb-8 px-4 sm:px-6 md:px-8">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-soft-white mb-2 md:mb-4">
                  Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-electric-cyan">Resources</span>
                </CardTitle>
                <p className="text-dark-text/80 text-sm sm:text-base md:text-xl max-w-3xl mx-auto">
                  Explore more ways to connect with us and get the comprehensive support you need
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                  <div className="text-center p-4 sm:p-6 md:p-8 glass rounded-2xl hover:scale-105 transition-all duration-300 border border-white/10 hover:border-neon-pink/30">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                      <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-soft-white mb-2 sm:mb-3 md:mb-4 text-lg sm:text-xl md:text-2xl">Online Resources</h3>
                    <p className="text-dark-text/70 text-sm sm:text-base md:text-lg leading-relaxed">
                      Access our comprehensive FAQ, knowledge base, and step-by-step guides for all your needs
                    </p>
                  </div>
                  <div className="text-center p-4 sm:p-6 md:p-8 glass rounded-2xl hover:scale-105 transition-all duration-300 border border-white/10 hover:border-electric-cyan/30">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-electric-cyan to-neon-pink rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-soft-white mb-2 sm:mb-3 md:mb-4 text-lg sm:text-xl md:text-2xl">Community Forum</h3>
                    <p className="text-dark-text/70 text-sm sm:text-base md:text-lg leading-relaxed">
                      Connect with other donors, share experiences, and be part of our life-saving community
                    </p>
                  </div>
                  <div className="text-center p-4 sm:p-6 md:p-8 glass rounded-2xl hover:scale-105 transition-all duration-300 border border-white/10 hover:border-neon-pink/30">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                      <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-soft-white mb-2 sm:mb-3 md:mb-4 text-lg sm:text-xl md:text-2xl">Medical Support</h3>
                    <p className="text-dark-text/70 text-sm sm:text-base md:text-lg leading-relaxed">
                      Get expert medical advice and support from our qualified healthcare team
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
