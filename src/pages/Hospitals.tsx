
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Phone, Clock, Star, Navigation, Heart, Users, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';

const Hospitals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const hospitalTypes = ['All', 'General', 'Emergency', 'Specialized', 'Children', 'Trauma Center'];

  const hospitals = [
    {
      id: 1,
      name: 'City General Hospital',
      type: 'General',
      address: '123 Medical Center Dr, Downtown',
      phone: '+1 (555) 123-4567',
      distance: '2.3 km',
      rating: 4.8,
      emergencyServices: true,
      bloodBank: true,
      operatingHours: '24/7',
      specialties: ['Emergency Care', 'Surgery', 'ICU', 'Blood Bank'],
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      totalBeds: 450,
      availableBeds: 89,
      bloodUnitsAvailable: {
        'A+': 25,
        'O+': 18,
        'B+': 12,
        'AB+': 8,
        'A-': 15,
        'O-': 22,
        'B-': 9,
        'AB-': 6
      }
    },
    {
      id: 2,
      name: 'St. Mary\'s Medical Center',
      type: 'Specialized',
      address: '456 Healthcare Ave, Midtown',
      phone: '+1 (555) 987-6543',
      distance: '4.7 km',
      rating: 4.9,
      emergencyServices: true,
      bloodBank: true,
      operatingHours: '24/7',
      specialties: ['Cardiology', 'Oncology', 'Neurology', 'Blood Disorders'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      totalBeds: 320,
      availableBeds: 56,
      bloodUnitsAvailable: {
        'A+': 32,
        'O+': 28,
        'B+': 19,
        'AB+': 12,
        'A-': 21,
        'O-': 35,
        'B-': 14,
        'AB-': 8
      }
    },
    {
      id: 3,
      name: 'Regional Trauma Center',
      type: 'Trauma Center',
      address: '789 Emergency Blvd, Westside',
      phone: '+1 (555) 456-7890',
      distance: '6.1 km',
      rating: 4.7,
      emergencyServices: true,
      bloodBank: true,
      operatingHours: '24/7',
      specialties: ['Trauma Surgery', 'Emergency Medicine', 'Critical Care', 'Blood Transfusion'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      totalBeds: 280,
      availableBeds: 34,
      bloodUnitsAvailable: {
        'A+': 18,
        'O+': 24,
        'B+': 14,
        'AB+': 7,
        'A-': 16,
        'O-': 31,
        'B-': 11,
        'AB-': 5
      }
    },
    {
      id: 4,
      name: 'Children\'s Hospital',
      type: 'Children',
      address: '321 Pediatric Way, Eastside',
      phone: '+1 (555) 234-5678',
      distance: '8.2 km',
      rating: 4.9,
      emergencyServices: true,
      bloodBank: true,
      operatingHours: '24/7',
      specialties: ['Pediatric Care', 'NICU', 'Pediatric Surgery', 'Pediatric Oncology'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      totalBeds: 180,
      availableBeds: 23,
      bloodUnitsAvailable: {
        'A+': 12,
        'O+': 16,
        'B+': 8,
        'AB+': 4,
        'A-': 9,
        'O-': 18,
        'B-': 6,
        'AB-': 3
      }
    }
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesType = selectedType === 'All' || hospital.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const getBloodAvailabilityColor = (count: number) => {
    if (count >= 20) return 'text-green-400';
    if (count >= 10) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-soft-white mb-6">
              Nearby Hospitals
            </h1>
            <p className="text-xl text-dark-text/80 max-w-2xl mx-auto">
              Find hospitals and medical centers in your area with blood bank facilities
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass-card p-6 rounded-2xl mb-8 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neon-pink" />
                <Input
                  placeholder="Search hospitals, locations, or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {hospitalTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={selectedType === type 
                      ? "bg-gradient-to-r from-neon-pink to-electric-cyan text-white" 
                      : "border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10"
                    }
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Hospital Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredHospitals.map((hospital, index) => (
              <div
                key={hospital.id}
                className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-neon-pink text-white">
                      {hospital.type}
                    </Badge>
                    {hospital.emergencyServices && (
                      <Badge className="bg-red-500 text-white">
                        <Zap className="w-3 h-3 mr-1" />
                        Emergency
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-soft-white font-medium">{hospital.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-soft-white mb-2">
                        {hospital.name}
                      </h3>
                      <div className="flex items-center text-dark-text/80 mb-1">
                        <MapPin className="w-4 h-4 mr-2 text-neon-pink" />
                        {hospital.address}
                      </div>
                      <div className="flex items-center text-dark-text/80">
                        <Navigation className="w-4 h-4 mr-2 text-electric-cyan" />
                        {hospital.distance} away
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-soft-white font-medium mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty) => (
                        <Badge
                          key={specialty}
                          variant="outline"
                          className="border-electric-cyan/30 text-electric-cyan"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Hospital Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="glass p-3 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-neon-pink mr-1" />
                        <span className="text-neon-pink font-bold">{hospital.availableBeds}</span>
                      </div>
                      <div className="text-dark-text/60 text-sm">Available Beds</div>
                    </div>
                    <div className="glass p-3 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="w-4 h-4 text-electric-cyan mr-1" />
                        <span className="text-electric-cyan font-bold">{hospital.operatingHours}</span>
                      </div>
                      <div className="text-dark-text/60 text-sm">Operating Hours</div>
                    </div>
                  </div>

                  {/* Blood Availability */}
                  {hospital.bloodBank && (
                    <div className="mb-6">
                      <h4 className="text-soft-white font-medium mb-3 flex items-center">
                        <Heart className="w-4 h-4 mr-2 text-neon-pink" fill="currentColor" />
                        Blood Availability
                      </h4>
                      <div className="grid grid-cols-4 gap-2">
                        {Object.entries(hospital.bloodUnitsAvailable).map(([type, count]) => (
                          <div key={type} className="glass p-2 rounded text-center">
                            <div className="text-soft-white font-bold">{type}</div>
                            <div className={`text-sm font-medium ${getBloodAvailabilityColor(count)}`}>
                              {count} units
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact Actions */}
                  <div className="flex space-x-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-neon-pink to-electric-cyan text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Hospital
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredHospitals.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-neon-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-xl font-semibold text-soft-white mb-2">
                No hospitals found
              </h3>
              <p className="text-dark-text/60">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
