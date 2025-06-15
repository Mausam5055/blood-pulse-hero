
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Calendar, Award, Edit, Download, Bell, MapPin, Save, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface UserProfile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  updated_at: string;
  created_at: string;
}

const UserDashboard = () => {
  const { user, session, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    avatar_url: '',
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  // Fetch user profile
  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
        throw error;
      }

      if (data) {
        setProfile(data);
        setFormData({
          full_name: data.full_name || '',
          avatar_url: data.avatar_url || '',
        });
      } else {
        // Create profile if it doesn't exist
        const { data: newProfile, error: createError } = await supabase
          .from('profiles')
          .insert([
            {
              id: user?.id,
              full_name: user?.user_metadata?.full_name || '',
              avatar_url: user?.user_metadata?.avatar_url || '',
            }
          ])
          .select()
          .single();

        if (createError) throw createError;
        
        setProfile(newProfile);
        setFormData({
          full_name: newProfile.full_name || '',
          avatar_url: newProfile.avatar_url || '',
        });
      }
    } catch (error: any) {
      console.error('Error fetching profile:', error);
      toast({
        title: "Error",
        description: "Failed to load profile data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .update({
          full_name: formData.full_name,
          avatar_url: formData.avatar_url,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user?.id)
        .select()
        .single();

      if (error) throw error;

      setProfile(data);
      setEditing(false);
      toast({
        title: "Success",
        description: "Profile updated successfully!",
      });
    } catch (error: any) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-beige to-pale-yellow/30 dark:from-space-navy dark:to-electric-cyan/10 flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-12 h-12 text-neon-pink animate-heartbeat mx-auto mb-4" fill="currentColor" />
          <p className="text-xl text-rich-charcoal dark:text-soft-white">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  const displayName = profile?.full_name || user.user_metadata?.full_name || user.email || 'User';
  const memberSince = new Date(user.created_at).toLocaleDateString();
  const bloodGroup = user.user_metadata?.blood_group || 'Not specified';
  const phone = user.user_metadata?.phone || 'Not provided';

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-pale-yellow/30 dark:from-space-navy dark:to-electric-cyan/10">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-rich-charcoal dark:text-soft-white mb-2">
              Welcome back, {displayName}!
            </h1>
            <p className="text-xl text-rich-charcoal/70 dark:text-dark-text/70">
              Thank you for being a life-saving hero
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Overview */}
              <div className="glass-card p-6 rounded-2xl animate-slide-up">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {profile?.avatar_url ? (
                        <img src={profile.avatar_url} alt={displayName} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        displayName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-rich-charcoal dark:text-soft-white">
                        {displayName}
                      </h2>
                      <p className="text-rich-charcoal/60 dark:text-dark-text/60">{user.email}</p>
                      <div className="flex items-center text-rich-charcoal/60 dark:text-dark-text/60 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        Member since {memberSince}
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setEditing(!editing)}
                    className="border-deep-coral/20 dark:border-electric-cyan/20"
                  >
                    {editing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                    {editing ? 'Save' : 'Edit Profile'}
                  </Button>
                </div>

                {editing ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="full_name" className="text-rich-charcoal dark:text-soft-white">Full Name</Label>
                      <Input
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="avatar_url" className="text-rich-charcoal dark:text-soft-white">Avatar URL</Label>
                      <Input
                        id="avatar_url"
                        name="avatar_url"
                        value={formData.avatar_url}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter avatar image URL"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleSaveProfile} disabled={loading}>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button variant="outline" onClick={() => setEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 glass rounded-xl">
                      <Heart className="w-8 h-8 mx-auto mb-2 text-deep-coral dark:text-neon-pink" fill="currentColor" />
                      <div className="text-2xl font-bold text-deep-coral dark:text-neon-pink">
                        {bloodGroup}
                      </div>
                      <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                        Blood Group
                      </div>
                    </div>
                    
                    <div className="text-center p-4 glass rounded-xl">
                      <User className="w-8 h-8 mx-auto mb-2 text-deep-coral dark:text-neon-pink" />
                      <div className="text-lg font-bold text-deep-coral dark:text-neon-pink">
                        Active
                      </div>
                      <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                        Status
                      </div>
                    </div>
                    
                    <div className="text-center p-4 glass rounded-xl">
                      <div className="text-lg font-bold text-deep-coral dark:text-neon-pink">
                        {phone}
                      </div>
                      <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                        Phone Number
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Account Information */}
              <div className="glass-card p-6 rounded-2xl animate-slide-up">
                <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-4">
                  Account Information
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 glass rounded-lg">
                    <div>
                      <div className="font-medium text-rich-charcoal dark:text-soft-white">Email</div>
                      <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">{user.email}</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      Verified
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 glass rounded-lg">
                    <div>
                      <div className="font-medium text-rich-charcoal dark:text-soft-white">Account Created</div>
                      <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">{memberSince}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 glass rounded-lg">
                    <div>
                      <div className="font-medium text-rich-charcoal dark:text-soft-white">Last Updated</div>
                      <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                        {profile?.updated_at ? new Date(profile.updated_at).toLocaleDateString() : 'Never'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="glass-card p-6 rounded-2xl animate-fade-in">
                <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button 
                    onClick={() => navigate('/register')}
                    className="w-full bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan text-white"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Blood
                  </Button>
                  <Button 
                    onClick={() => navigate('/request')}
                    variant="outline" 
                    className="w-full border-deep-coral/20 dark:border-electric-cyan/20"
                  >
                    <Bell className="w-4 h-4 mr-2" />
                    Request Blood
                  </Button>
                  <Button 
                    onClick={() => navigate('/events')}
                    variant="outline" 
                    className="w-full border-deep-coral/20 dark:border-electric-cyan/20"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    View Events
                  </Button>
                </div>
              </div>

              {/* Profile Completion */}
              <div className="glass-card p-6 rounded-2xl animate-fade-in">
                <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-4">
                  Profile Completion
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-rich-charcoal/60 dark:text-dark-text/60">Complete your profile</span>
                    <span className="text-rich-charcoal/60 dark:text-dark-text/60">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                    Add more information to help others connect with you
                  </p>
                </div>
              </div>

              {/* Community Stats */}
              <div className="glass-card p-6 rounded-2xl animate-fade-in">
                <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white mb-4">
                  Community Impact
                </h3>
                <div className="space-y-4">
                  <div className="text-center p-3 glass rounded-lg">
                    <div className="text-2xl font-bold text-deep-coral dark:text-neon-pink">25,000+</div>
                    <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">Lives Saved</div>
                  </div>
                  <div className="text-center p-3 glass rounded-lg">
                    <div className="text-2xl font-bold text-deep-coral dark:text-neon-pink">15,000+</div>
                    <div className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">Active Donors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
