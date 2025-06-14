
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

  // Mock donor data - this would come from registered users
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
      profilePhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
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
      profilePhoto: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
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
      profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
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
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Donors background"
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
              Find Blood Donors
            </h1>
            <p className="text-xl text-dark-text/70">
              Connect with verified donors in your area
            </p>
          </div>

          {/* Filters */}
          <div className="glass-card p-6 rounded-2xl mb-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neon-pink" />
                <Input
                  placeholder="Search by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                />
              </div>
              
              <Select onValueChange={setSelectedBloodGroup}>
                <SelectTrigger className="glass border-electric-cyan/20 text-white">
                  <SelectValue placeholder="Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  {bloodGroups.map((group) => (
                    <SelectItem key={group} value={group}>
                      {group}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={setSelectedLocation}>
                <SelectTrigger className="glass border-electric-cyan/20 text-white">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                  <SelectItem value="Chicago">Chicago</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Donor Cards */}
          {filteredDonors.length > 0 ? (
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
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        {donor.profilePhoto ? (
                          <img 
                            src={donor.profilePhoto} 
                            alt={donor.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-neon-pink to-electric-cyan flex items-center justify-center text-white font-bold">
                            {donor.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-soft-white">
                          {donor.name}
                        </h3>
                        <div className="flex items-center text-sm text-dark-text/60">
                          <MapPin className="w-4 h-4 mr-1" />
                          {donor.location}
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      donor.isAvailable
                        ? 'bg-green-900/30 text-green-400'
                        : 'bg-red-900/30 text-red-400'
                    }`}>
                      {donor.isAvailable ? 'Available' : 'Not Available'}
                    </div>
                  </div>

                  {/* Blood Group */}
                  <div className="mb-4">
                    <div className="inline-flex items-center bg-neon-pink/10 px-4 py-2 rounded-full">
                      <Heart className="w-4 h-4 mr-2 text-neon-pink" fill="currentColor" />
                      <span className="text-neon-pink font-bold text-lg">
                        {donor.bloodGroup}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="text-center p-2 glass rounded-lg">
                      <div className="text-neon-pink font-bold">
                        {donor.totalDonations}
                      </div>
                      <div className="text-dark-text/60">
                        Donations
                      </div>
                    </div>
                    <div className="text-center p-2 glass rounded-lg">
                      <div className="text-neon-pink font-bold">
                        {donor.lastDonation}
                      </div>
                      <div className="text-dark-text/60">
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
                          className="bg-electric-cyan/20 text-dark-text"
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
                      className="flex-1 bg-gradient-to-r from-neon-pink to-electric-cyan text-white"
                      disabled={!donor.isAvailable}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-electric-cyan/20 text-electric-cyan"
                      disabled={!donor.isAvailable}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State - "Oops, no donors found" */
            <div className="text-center py-20 animate-fade-in">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-neon-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-neon-pink" />
                </div>
                <h3 className="text-3xl font-bold text-soft-white mb-4">
                  Oops! No Donors Found
                </h3>
                <p className="text-dark-text/60 text-lg mb-8 leading-relaxed">
                  We couldn't find any donors matching your criteria right now. 
                  Try adjusting your search filters or check back later as new heroes join our community every day.
                </p>
                <div className="space-y-4">
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedBloodGroup('');
                      setSelectedLocation('');
                    }}
                    className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
                  >
                    Clear All Filters
                  </Button>
                  <p className="text-sm text-dark-text/50">
                    Or encourage someone you know to become a donor and save lives!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorDirectory;
