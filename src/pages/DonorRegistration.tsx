
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Heart, User, Phone, Mail, MapPin, Calendar as CalendarIcon, Droplets, Upload, FileText, Camera } from 'lucide-react';
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

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [medicalDoc, setMedicalDoc] = useState<File | null>(null);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    console.log('Profile photo:', profilePhoto);
    console.log('Medical document:', medicalDoc);
    // Here we would integrate with Supabase
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePhoto(e.target.files[0]);
    }
  };

  const handleDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedicalDoc(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full mb-6 animate-heartbeat">
              <Heart className="w-10 h-10 text-white" fill="currentColor" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-soft-white mb-6">
              Become a Hero
            </h1>
            <p className="text-xl text-dark-text/80 max-w-2xl mx-auto">
              Join our community of life-saving donors and make a difference in someone's life today
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl animate-slide-up">
            {/* Photo Upload Section */}
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-soft-white mb-6 flex items-center justify-center">
                <Camera className="w-6 h-6 mr-3 text-neon-pink" />
                Profile Information
              </h3>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 bg-gradient-to-r from-neon-pink/20 to-electric-cyan/20 rounded-full flex items-center justify-center border-2 border-dashed border-neon-pink/50">
                  {profilePhoto ? (
                    <img 
                      src={URL.createObjectURL(profilePhoto)} 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <Camera className="w-12 h-12 text-neon-pink/70" />
                  )}
                </div>
                
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  <Button type="button" variant="outline" className="border-electric-cyan/50 text-electric-cyan hover:bg-electric-cyan/10">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-soft-white flex items-center">
                  <User className="w-4 h-4 mr-2 text-neon-pink" />
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-soft-white">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-soft-white flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-neon-pink" />
                  Email
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
                <Label htmlFor="phone" className="text-soft-white flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-neon-pink" />
                  Phone
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-soft-white flex items-center">
                  <Droplets className="w-4 h-4 mr-2 text-neon-pink" />
                  Blood Group
                </Label>
                <Select onValueChange={(value) => setFormData({...formData, bloodGroup: value})}>
                  <SelectTrigger className="glass border-electric-cyan/20 text-white">
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
                <Label className="text-soft-white flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2 text-neon-pink" />
                  Last Donation Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="glass border-electric-cyan/20 w-full justify-start text-left font-normal text-white"
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
              <h3 className="text-xl font-semibold text-soft-white flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-neon-pink" />
                Address Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address" className="text-soft-white">
                    Street Address
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-soft-white">
                    City
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-soft-white">
                    State
                  </Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Medical Document Upload */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-soft-white mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-neon-pink" />
                Medical Documents
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-soft-white mb-2 block">
                    Upload Medical Certificate (PDF)
                  </Label>
                  <label className="cursor-pointer block">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleDocUpload}
                      className="hidden"
                    />
                    <div className="glass border-2 border-dashed border-electric-cyan/50 rounded-lg p-6 text-center hover:border-electric-cyan transition-colors">
                      <Upload className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
                      <p className="text-dark-text">
                        {medicalDoc ? medicalDoc.name : 'Click to upload PDF document'}
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-12 flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-neon-pink to-electric-cyan hover:from-neon-pink/90 hover:to-electric-cyan/90 text-white px-16 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 animate-glow"
              >
                <Heart className="w-6 h-6 mr-3" fill="currentColor" />
                Register as Hero Donor
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonorRegistration;
