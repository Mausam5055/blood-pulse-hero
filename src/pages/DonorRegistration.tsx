
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Heart, User, Phone, Mail, MapPin, Calendar as CalendarIcon, Droplets } from 'lucide-react';
import { format } from 'date-fns';
import Navbar from '../components/Navbar';

const DonorRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bloodGroup: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    lastDonation: null as Date | null,
    medicalConditions: '',
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Here we would integrate with Supabase
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-pale-yellow/30 dark:from-space-navy dark:to-neon-pink/10">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan rounded-full mb-6 animate-heartbeat">
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-rich-charcoal dark:text-soft-white mb-4">
              Become a Hero
            </h1>
            <p className="text-xl text-rich-charcoal/70 dark:text-dark-text/70">
              Join our community of life-saving donors
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-rich-charcoal dark:text-soft-white flex items-center">
                  <User className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" />
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-rich-charcoal dark:text-soft-white">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-rich-charcoal dark:text-soft-white flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-rich-charcoal dark:text-soft-white flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" />
                  Phone
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-rich-charcoal dark:text-soft-white flex items-center">
                  <Droplets className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" />
                  Blood Group
                </Label>
                <Select onValueChange={(value) => setFormData({...formData, bloodGroup: value})}>
                  <SelectTrigger className="glass border-deep-coral/20 dark:border-electric-cyan/20">
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-rich-charcoal dark:text-soft-white flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" />
                  Last Donation Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="glass border-deep-coral/20 dark:border-electric-cyan/20 w-full justify-start text-left font-normal"
                    >
                      {formData.lastDonation ? (
                        format(formData.lastDonation, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.lastDonation}
                      onSelect={(date) => setFormData({...formData, lastDonation: date})}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Address Section */}
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-deep-coral dark:text-neon-pink" />
                Address Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address" className="text-rich-charcoal dark:text-soft-white">
                    Street Address
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-rich-charcoal dark:text-soft-white">
                    City
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-rich-charcoal dark:text-soft-white">
                    State
                  </Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan hover:from-deep-coral/90 hover:to-soft-teal/90 dark:hover:from-neon-pink/90 dark:hover:to-electric-cyan/90 text-white px-12 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 animate-glow"
              >
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Register as Donor
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonorRegistration;
