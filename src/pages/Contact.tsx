
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
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
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Medical background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <Navbar />
      
      <ScrollArea className="h-screen">
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

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {quickLinks.map((link, index) => (
                <Card key={link.title} className="glass-card border-white/10 hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">
                      {link.title}
                    </h3>
                    <p className="text-dark-text/60 text-sm">
                      {link.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                {/* Contact Cards */}
                <div className="space-y-6 animate-slide-up">
                  <Card className="glass-card border-white/10">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mr-4">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-soft-white">
                            Phone Support
                          </CardTitle>
                          <p className="text-dark-text/60 text-sm">
                            Available 24/7
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <p className="text-soft-white">
                          Emergency: <span className="text-red-400 font-semibold">1-800-EMERGENCY</span>
                        </p>
                        <p className="text-soft-white">
                          General: <span className="text-neon-pink font-semibold">1-800-LIFEBLOOD</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-white/10">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mr-4">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-soft-white">
                            Email Support
                          </CardTitle>
                          <p className="text-dark-text/60 text-sm">
                            Response within 2 hours
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <p className="text-soft-white">
                          support@lifegiver.org
                        </p>
                        <p className="text-soft-white">
                          donations@lifegiver.org
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-white/10">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mr-4">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-soft-white">
                            Visit Us
                          </CardTitle>
                          <p className="text-dark-text/60 text-sm">
                            Main headquarters
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-soft-white">
                        <p>123 Life Avenue</p>
                        <p>Health District</p>
                        <p>New York, NY 10001</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-white/10">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mr-4">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-soft-white">
                            Hours
                          </CardTitle>
                          <p className="text-dark-text/60 text-sm">
                            Donation center hours
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-1 text-soft-white text-sm">
                        <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Emergency Notice */}
                <Card className="glass-card border-red-500/20 bg-gradient-to-r from-red-500/10 to-red-600/10 animate-pulse">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Heart className="w-6 h-6 text-red-500 mr-3 animate-heartbeat" fill="currentColor" />
                      <h3 className="text-lg font-semibold text-red-400">
                        Emergency Blood Request?
                      </h3>
                    </div>
                    <p className="text-red-300 mb-4 text-sm">
                      For urgent blood requirements, call our emergency hotline immediately.
                    </p>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                      Call Emergency Line
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="glass-card border-white/10 animate-slide-up">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-soft-white">
                      Send us a Message
                    </CardTitle>
                    <p className="text-dark-text/70">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="mt-16">
              <Card className="glass-card border-white/10">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-soft-white mb-2">
                    Additional Resources
                  </CardTitle>
                  <p className="text-dark-text/70">
                    Explore more ways to connect with us and get the help you need
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 glass rounded-lg">
                      <Globe className="w-8 h-8 text-neon-pink mx-auto mb-3" />
                      <h3 className="font-semibold text-soft-white mb-2">Online Resources</h3>
                      <p className="text-dark-text/60 text-sm">
                        Access our comprehensive FAQ and knowledge base
                      </p>
                    </div>
                    <div className="text-center p-4 glass rounded-lg">
                      <Users className="w-8 h-8 text-electric-cyan mx-auto mb-3" />
                      <h3 className="font-semibold text-soft-white mb-2">Community Forum</h3>
                      <p className="text-dark-text/60 text-sm">
                        Connect with other donors and share experiences
                      </p>
                    </div>
                    <div className="text-center p-4 glass rounded-lg">
                      <Shield className="w-8 h-8 text-neon-pink mx-auto mb-3" />
                      <h3 className="font-semibold text-soft-white mb-2">Medical Support</h3>
                      <p className="text-dark-text/60 text-sm">
                        Get expert medical advice from our healthcare team
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Contact;
