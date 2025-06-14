
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, Phone, Mail, Heart, Award } from 'lucide-react';
import Navbar from '../components/Navbar';

const DonorDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // Mock donor data
  const donors = [
    {
      id: 1,
      name: 'John Smith',
      bloodGroup: 'O+',
      location: 'New York, NY',
      lastDonation: '2 months ago',
      totalDonations: 12,
      isAvailable: true,
      badges: ['Gold Donor', 'Regular'],
      phone: '+1 (555) 123-4567',
      email: 'john.smith@email.com',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      bloodGroup: 'A+',
      location: 'Los Angeles, CA',
      lastDonation: '1 month ago',
      totalDonations: 8,
      isAvailable: true,
      badges: ['Silver Donor'],
      phone: '+1 (555) 987-6543',
      email: 'sarah.j@email.com',
    },
    {
      id: 3,
      name: 'Mike Davis',
      bloodGroup: 'B-',
      location: 'Chicago, IL',
      lastDonation: '3 weeks ago',
      totalDonations: 15,
      isAvailable: false,
      badges: ['Platinum Donor', 'Hero'],
      phone: '+1 (555) 456-7890',
      email: 'mike.davis@email.com',
    },
  ];

  const filteredDonors = donors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodGroup = !selectedBloodGroup || donor.bloodGroup === selectedBloodGroup;
    const matchesLocation = !selectedLocation || donor.location.includes(selectedLocation);
    
    return matchesSearch && matchesBloodGroup && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-pale-yellow/30 dark:from-space-navy dark:to-electric-cyan/10">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-rich-charcoal dark:text-soft-white mb-4">
              Find Blood Donors
            </h1>
            <p className="text-xl text-rich-charcoal/70 dark:text-dark-text/70">
              Connect with verified donors in your area
            </p>
          </div>

          {/* Filters */}
          <div className="glass-card p-6 rounded-2xl mb-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-deep-coral dark:text-neon-pink" />
                <Input
                  placeholder="Search by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                />
              </div>
              
              <Select onValueChange={setSelectedBloodGroup}>
                <SelectTrigger className="glass border-deep-coral/20 dark:border-electric-cyan/20">
                  <SelectValue placeholder="Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Blood Groups</SelectItem>
                  {bloodGroups.map((group) => (
                    <SelectItem key={group} value={group}>
                      {group}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={setSelectedLocation}>
                <SelectTrigger className="glass border-deep-coral/20 dark:border-electric-cyan/20">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                  <SelectItem value="Chicago">Chicago</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan text-white">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Donor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDonors.map((donor, index) => (
              <div
                key={donor.id}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Donor Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan rounded-full flex items-center justify-center text-white font-bold">
                      {donor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-rich-charcoal dark:text-soft-white">
                        {donor.name}
                      </h3>
                      <div className="flex items-center text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                        <MapPin className="w-4 h-4 mr-1" />
                        {donor.location}
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    donor.isAvailable
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  }`}>
                    {donor.isAvailable ? 'Available' : 'Not Available'}
                  </div>
                </div>

                {/* Blood Group */}
                <div className="mb-4">
                  <div className="inline-flex items-center bg-deep-coral/10 dark:bg-neon-pink/10 px-4 py-2 rounded-full">
                    <Heart className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" fill="currentColor" />
                    <span className="text-deep-coral dark:text-neon-pink font-bold text-lg">
                      {donor.bloodGroup}
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="text-center p-2 glass rounded-lg">
                    <div className="text-deep-coral dark:text-neon-pink font-bold">
                      {donor.totalDonations}
                    </div>
                    <div className="text-rich-charcoal/60 dark:text-dark-text/60">
                      Donations
                    </div>
                  </div>
                  <div className="text-center p-2 glass rounded-lg">
                    <div className="text-deep-coral dark:text-neon-pink font-bold">
                      {donor.lastDonation}
                    </div>
                    <div className="text-rich-charcoal/60 dark:text-dark-text/60">
                      Last Donation
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {donor.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="secondary"
                        className="bg-pale-yellow/20 dark:bg-electric-cyan/20 text-rich-charcoal dark:text-dark-text"
                      >
                        <Award className="w-3 h-3 mr-1" />
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan text-white"
                    disabled={!donor.isAvailable}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-deep-coral/20 dark:border-electric-cyan/20 text-deep-coral dark:text-electric-cyan"
                    disabled={!donor.isAvailable}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredDonors.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-deep-coral/10 dark:bg-neon-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-deep-coral dark:text-neon-pink" />
              </div>
              <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-2">
                No donors found
              </h3>
              <p className="text-rich-charcoal/60 dark:text-dark-text/60">
                Try adjusting your search filters to find more donors.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorDirectory;
