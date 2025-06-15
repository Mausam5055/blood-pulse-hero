import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Calendar, Award, Edit, Download, Bell, MapPin, User, Droplets, Phone, Trash2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface UserRequest {
  id: string;
  name: string;
  blood_group_needed: string;
  location: string;
  contact_details: string;
  message: string | null;
  status: string;
  created_at: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [userRequests, setUserRequests] = useState<UserRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const mockUser = {
    name: 'John Smith',
    bloodGroup: 'O+',
    totalDonations: 12,
    lastDonation: '2023-12-15',
    nextEligibleDate: '2024-02-15',
    badges: ['Gold Donor', 'Regular Donor', 'Hero'],
    location: 'New York, NY',
  };

  const donationHistory = [
    { id: 1, date: '2023-12-15', location: 'NYC Blood Center', status: 'Completed' },
    { id: 2, date: '2023-09-10', location: 'Red Cross Center', status: 'Completed' },
    { id: 3, date: '2023-06-05', location: 'Hospital Blood Bank', status: 'Completed' },
  ];

  const upcomingEvents = [
    { id: 1, name: 'Community Blood Drive', date: '2024-01-20', location: 'Central Park' },
    { id: 2, name: 'Hospital Blood Campaign', date: '2024-01-25', location: 'Mt. Sinai Hospital' },
  ];

  useEffect(() => {
    if (user) {
      fetchUserRequests();
    }
  }, [user]);

  const fetchUserRequests = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('requests')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUserRequests(data || []);
    } catch (error: any) {
      console.error('Error fetching user requests:', error);
      toast({
        title: "Error",
        description: "Failed to load your requests",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRequest = async (requestId: string) => {
    try {
      const { error } = await supabase
        .from('requests')
        .delete()
        .eq('id', requestId);

      if (error) throw error;

      setUserRequests(prev => prev.filter(req => req.id !== requestId));
      toast({
        title: "Success",
        description: "Request deleted successfully",
      });
    } catch (error: any) {
      console.error('Error deleting request:', error);
      toast({
        title: "Error",
        description: "Failed to delete request",
        variant: "destructive",
      });
    }
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Less than an hour ago';
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  };

  const daysUntilEligible = Math.ceil((new Date(mockUser.nextEligibleDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
  const progressToNextDonation = Math.max(0, Math.min(100, ((56 - daysUntilEligible) / 56) * 100));

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-pale-yellow/30 dark:from-space-navy dark:to-electric-cyan/10">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-rich-charcoal dark:text-soft-white mb-2">
              Welcome back, {mockUser.name}!
            </h1>
            <p className="text-xl text-rich-charcoal/70 dark:text-dark-text/70">
              Thank you for being a life-saving hero
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              
              <div className="glass-card p-6 rounded-2xl animate-slide-up">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {mockUser.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-rich-charcoal dark:text-soft-white">
                        {mockUser.name}
                      </h2>
                      <div className="flex items-center text-rich-charcoal/60 dark:text-dark-text/60">
                        <MapPin className="w-4 h-4 mr-1" />
                        {mockUser.location}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-deep-coral/20 dark:border-electric-cyan/20 hover:bg-transparent hover:border-deep-coral/20 dark:hover:border-electric-cyan/20">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 glass rounded-xl">
                    <Heart className="w-8 h-8 mx-auto mb-2 text-deep-coral dark:text-neon-pink" fill="currentColor" />
                    <div className="text-2xl font-bold text-deep-coral dark:text-neon-pink">
                      {mockUser.bloodGroup}
                    </div>
                    <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                      Blood Group
                    </div>
                  </div>
                  
                  <div className="text-center p-4 glass rounded-xl">
                    <div className="text-2xl font-bold text-deep-coral dark:text-neon-pink">
                      {mockUser.totalDonations}
                    </div>
                    <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                      Total Donations
                    </div>
                  </div>
                  
                  <div className="text-center p-4 glass rounded-xl">
                    <div className="text-2xl font-bold text-deep-coral dark:text-neon-pink">
                      {daysUntilEligible > 0 ? `${daysUntilEligible} days` : 'Eligible'}
                    </div>
                    <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                      Until Next Donation
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="glass-card p-6 rounded-2xl animate-slide-up">
                <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-4">
                  Next Donation Eligibility
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-rich-charcoal/60 dark:text-dark-text/60">
                      Last donation: {new Date(mockUser.lastDonation).toLocaleDateString()}
                    </span>
                    <span className="text-rich-charcoal/60 dark:text-dark-text/60">
                      Next eligible: {new Date(mockUser.nextEligibleDate).toLocaleDateString()}
                    </span>
                  </div>
                  <Progress value={progressToNextDonation} className="h-3" />
                  <div className="text-center">
                    {daysUntilEligible > 0 ? (
                      <p className="text-rich-charcoal/70 dark:text-dark-text/70">
                        You can donate again in {daysUntilEligible} days
                      </p>
                    ) : (
                      <div>
                        <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                          You're eligible to donate!
                        </p>
                        <Button className="bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan text-white hover:opacity-90">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Donation
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Your Blood Requests - Updated */}
              <div className="glass-card p-6 rounded-2xl animate-slide-up">
                <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-4 flex items-center">
                  <Droplets className="w-5 h-5 mr-2 text-deep-coral dark:text-neon-pink" />
                  Your Blood Requests
                </h3>
                
                {loading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-deep-coral dark:border-neon-pink mx-auto"></div>
                    <p className="text-rich-charcoal/60 dark:text-dark-text/60 mt-4">Loading your requests...</p>
                  </div>
                ) : userRequests.length === 0 ? (
                  <div className="text-center py-8">
                    <Droplets className="w-12 h-12 text-rich-charcoal/20 dark:text-dark-text/20 mx-auto mb-4" />
                    <p className="text-rich-charcoal/60 dark:text-dark-text/60 mb-4">You haven't submitted any blood requests yet.</p>
                    <Button 
                      onClick={() => navigate('/request-form')}
                      className="bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan text-white"
                    >
                      Submit a Request
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userRequests.map((request) => (
                      <div key={request.id} className="p-4 glass rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h4 className="font-medium text-rich-charcoal dark:text-soft-white">{request.name}</h4>
                              <Badge className="ml-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                                Needs {request.blood_group_needed}
                              </Badge>
                              <Badge 
                                variant="secondary" 
                                className={`ml-2 ${
                                  request.status === 'active' 
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                                    : 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400'
                                }`}
                              >
                                {request.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60 space-y-1">
                              <div className="flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {request.location}
                              </div>
                              <div className="flex items-center">
                                <Phone className="w-3 h-3 mr-1" />
                                {request.contact_details}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {getTimeAgo(request.created_at)}
                              </div>
                            </div>
                            {request.message && (
                              <p className="text-sm text-rich-charcoal/70 dark:text-dark-text/70 mt-2 italic">"{request.message}"</p>
                            )}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteRequest(request.id)}
                            className="border-red-500/30 text-red-500 hover:bg-red-500/10 ml-4"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              
              <div className="glass-card p-6 rounded-2xl animate-slide-up">
                <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-4">
                  Donation History
                </h3>
                <div className="space-y-4">
                  {donationHistory.map((donation) => (
                    <div key={donation.id} className="flex items-center justify-between p-4 glass rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-deep-coral/10 dark:bg-neon-pink/10 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 text-deep-coral dark:text-neon-pink" fill="currentColor" />
                        </div>
                        <div>
                          <div className="font-medium text-rich-charcoal dark:text-soft-white">
                            {new Date(donation.date).toLocaleDateString()}
                          </div>
                          <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                            {donation.location}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        {donation.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-deep-coral/20 dark:border-electric-cyan/20 hover:bg-transparent hover:border-deep-coral/20 dark:hover:border-electric-cyan/20">
                  View All History
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              <div className="glass-card p-6 rounded-2xl animate-fade-in">
                <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-deep-coral dark:text-neon-pink" />
                  Your Badges
                </h3>
                <div className="space-y-3">
                  {mockUser.badges.map((badge) => (
                    <div key={badge} className="flex items-center p-3 glass rounded-lg">
                      <Award className="w-8 h-8 text-pale-yellow mr-3" />
                      <div>
                        <div className="font-medium text-rich-charcoal dark:text-soft-white">
                          {badge}
                        </div>
                        <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                          Earned
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificate
                </Button>
              </div>

              
              <div className="glass-card p-6 rounded-2xl animate-fade-in">
                <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-deep-coral dark:text-neon-pink" />
                  Upcoming Events
                </h3>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-3 glass rounded-lg">
                      <div className="font-medium text-rich-charcoal dark:text-soft-white mb-1">
                        {event.name}
                      </div>
                      <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60 mb-2">
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-deep-coral/20 dark:border-electric-cyan/20 hover:bg-transparent hover:border-deep-coral/20 dark:hover:border-electric-cyan/20">
                  View All Events
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="glass-card p-6 rounded-2xl animate-fade-in">
                <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button 
                    onClick={() => navigate('/donate-form')}
                    variant="outline" 
                    className="w-full border-deep-coral/20 dark:border-electric-cyan/20 hover:bg-transparent hover:border-deep-coral/20 dark:hover:border-electric-cyan/20"
                  >
                    <Bell className="w-4 h-4 mr-2" />
                    Set Donation Reminder
                  </Button>
                  <Button 
                    onClick={() => navigate('/donate-form')}
                    variant="outline" 
                    className="w-full border-deep-coral/20 dark:border-electric-cyan/20 hover:bg-transparent hover:border-deep-coral/20 dark:hover:border-electric-cyan/20"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Become a Donor
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
