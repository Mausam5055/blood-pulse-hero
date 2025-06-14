
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Clock, Users, Search, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      title: 'Community Blood Drive',
      date: '2024-01-20',
      time: '9:00 AM - 5:00 PM',
      location: 'Central Park Community Center',
      address: '123 Park Avenue, New York, NY',
      description: 'Join us for our monthly community blood drive. Help save lives in your neighborhood!',
      organizer: 'NYC Blood Center',
      expectedDonors: 150,
      spotsLeft: 23,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500',
      status: 'upcoming',
      isRegistered: false,
    },
    {
      id: 2,
      title: 'Hospital Emergency Drive',
      date: '2024-01-25',
      time: '10:00 AM - 4:00 PM',
      location: 'Mt. Sinai Hospital',
      address: '456 Medical Plaza, New York, NY',
      description: 'Emergency blood drive to support our hospital patients in need of immediate care.',
      organizer: 'Mt. Sinai Medical Center',
      expectedDonors: 200,
      spotsLeft: 45,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500',
      status: 'urgent',
      isRegistered: true,
    },
    {
      id: 3,
      title: 'Corporate Blood Campaign',
      date: '2024-02-01',
      time: '11:00 AM - 6:00 PM',
      location: 'Tech Corporate Campus',
      address: '789 Innovation Drive, San Francisco, CA',
      description: 'Corporate sponsored blood drive with participation from multiple tech companies.',
      organizer: 'Bay Area Blood Bank',
      expectedDonors: 300,
      spotsLeft: 78,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500',
      status: 'upcoming',
      isRegistered: false,
    },
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRegister = (eventId: number) => {
    console.log('Registering for event:', eventId);
    // Here we would integrate with Supabase
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Medical event background"
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
              Blood Donation Events
            </h1>
            <p className="text-xl text-dark-text/70">
              Find and register for blood donation events in your area
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12 animate-slide-up">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neon-pink" />
              <Input
                placeholder="Search events by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 glass border-electric-cyan/20 focus:border-electric-cyan h-12 text-lg text-white"
              />
            </div>
          </div>

          {/* Events Grid */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="md:flex">
                  {/* Event Image */}
                  <div className="md:w-1/3">
                    <div
                      className="h-64 md:h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${event.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-electric-cyan/20" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${
                            event.status === 'urgent'
                              ? 'bg-red-500 text-white animate-pulse'
                              : 'bg-neon-pink text-white'
                          }`}
                        >
                          {event.status === 'urgent' ? 'URGENT' : 'UPCOMING'}
                        </Badge>
                      </div>

                      {/* Registration Status */}
                      {event.isRegistered && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-500 text-white">
                            Registered
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-soft-white mb-2">
                          {event.title}
                        </h2>
                        <p className="text-dark-text/70 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Event Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-dark-text/80">
                          <Calendar className="w-5 h-5 mr-3 text-neon-pink" />
                          <div>
                            <div className="font-medium text-soft-white">
                              {new Date(event.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                            <div className="text-sm text-dark-text/60">
                              {event.time}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center text-dark-text/80">
                          <MapPin className="w-5 h-5 mr-3 text-neon-pink" />
                          <div>
                            <div className="font-medium text-soft-white">{event.location}</div>
                            <div className="text-sm text-dark-text/60">
                              {event.address}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center text-dark-text/80">
                          <Users className="w-5 h-5 mr-3 text-neon-pink" />
                          <div>
                            <div className="font-medium text-soft-white">
                              {event.expectedDonors} Expected Donors
                            </div>
                            <div className="text-sm text-dark-text/60">
                              {event.spotsLeft} spots remaining
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center text-dark-text/80">
                          <Heart className="w-5 h-5 mr-3 text-neon-pink" fill="currentColor" />
                          <div>
                            <div className="font-medium text-soft-white">Organized by</div>
                            <div className="text-sm text-dark-text/60">
                              {event.organizer}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-dark-text/60">
                            Registration Progress
                          </span>
                          <span className="text-dark-text/60">
                            {event.expectedDonors - event.spotsLeft}/{event.expectedDonors}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-neon-pink to-electric-cyan h-2 rounded-full transition-all duration-300"
                            style={{
                              width: `${((event.expectedDonors - event.spotsLeft) / event.expectedDonors) * 100}%`
                            }}
                          />
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto">
                        <Button
                          onClick={() => handleRegister(event.id)}
                          disabled={event.isRegistered || event.spotsLeft === 0}
                          className={`w-full md:w-auto px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                            event.isRegistered
                              ? 'bg-green-500 hover:bg-green-600 text-white'
                              : event.spotsLeft === 0
                              ? 'bg-gray-400 cursor-not-allowed text-white'
                              : 'bg-gradient-to-r from-neon-pink to-electric-cyan hover:from-neon-pink/90 hover:to-electric-cyan/90 text-white animate-glow'
                          }`}
                        >
                          {event.isRegistered ? (
                            <>
                              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                              You're Registered!
                            </>
                          ) : event.spotsLeft === 0 ? (
                            'Event Full'
                          ) : (
                            <>
                              <Calendar className="w-5 h-5 mr-2" />
                              Register Now
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-neon-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-xl font-semibold text-soft-white mb-2">
                No events found
              </h3>
              <p className="text-dark-text/60">
                Try adjusting your search to find more events.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
