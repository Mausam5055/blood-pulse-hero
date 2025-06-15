import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, CheckCircle, User, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface RequestFormData {
  name: string;
  blood_group_needed: string;
  location: string;
  contact_details: string;
  message: string;
}

const RequestForm = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<RequestFormData>({
    name: '',
    blood_group_needed: '',
    location: '',
    contact_details: '',
    message: '',
  });

  React.useEffect(() => {
    console.log('RequestForm - Current user:', user);
    if (!user) {
      console.log('RequestForm - No user found, redirecting to auth');
      navigate('/auth');
    }
  }, [user, navigate]);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      console.error('No user found for request submission');
      toast({
        title: "Error",
        description: "You must be logged in to submit a request",
        variant: "destructive",
      });
      return;
    }

    console.log('=== BLOOD REQUEST SUBMISSION START ===');
    console.log('User object:', JSON.stringify(user, null, 2));
    console.log('User ID:', user.id);
    console.log('Form data:', formData);

    setLoading(true);
    try {
      // Validate required fields
      if (!formData.name.trim() || !formData.blood_group_needed || !formData.location.trim() || !formData.contact_details.trim()) {
        throw new Error('Please fill in all required fields');
      }

      // Check current session status
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      console.log('Current session:', sessionData);
      if (sessionError) {
        console.error('Session error:', sessionError);
        throw new Error('Authentication session error');
      }

      if (!sessionData.session) {
        console.error('No active session found');
        throw new Error('No active session found. Please log in again.');
      }

      // Test if we can access the requests table at all
      console.log('Testing database access...');
      const { data: testData, error: testError } = await supabase
        .from('requests')
        .select('count', { count: 'exact', head: true });

      console.log('Database test result:', { testData, testError });
      
      if (testError) {
        console.error('Database access test failed:', testError);
        throw new Error(`Database access failed: ${testError.message}`);
      }

      // Prepare request data with explicit user_id
      const requestData = {
        user_id: user.id,
        name: formData.name.trim(),
        blood_group_needed: formData.blood_group_needed,
        location: formData.location.trim(),
        contact_details: formData.contact_details.trim(),
        message: formData.message.trim() || null,
        status: 'active',
      };

      console.log('Final request data to insert:', JSON.stringify(requestData, null, 2));

      const { data, error } = await supabase
        .from('requests')
        .insert(requestData)
        .select();

      console.log('Supabase insert response:', { data, error });

      if (error) {
        console.error('Supabase insertion error:', error);
        console.error('Error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        
        // Check if it's an RLS policy violation
        if (error.message.includes('row-level security') || error.message.includes('RLS') || error.code === '42501') {
          throw new Error('Permission denied: Unable to save request data. Please contact support.');
        }
        
        throw error;
      }

      if (!data || data.length === 0) {
        console.error('No data returned from insertion');
        throw new Error('No data was returned from the database insertion');
      }

      console.log('Request submitted successfully:', data);

      // Verify the insertion by checking if the record exists
      const { data: verifyData, error: verifyError } = await supabase
        .from('requests')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1);

      console.log('Verification query result:', { verifyData, verifyError });

      if (verifyError) {
        console.error('Verification query failed:', verifyError);
      } else {
        console.log('Verification: Found request record:', verifyData);
      }

      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Your blood request has been submitted successfully.",
      });
    } catch (error: any) {
      console.error('=== REQUEST SUBMISSION ERROR ===');
      console.error('Error:', error);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit blood request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      console.log('=== BLOOD REQUEST SUBMISSION END ===');
    }
  };

  const handleInputChange = (field: keyof RequestFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <Navbar />
        <div className="relative z-10 pt-20 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-soft-white">Please log in to submit a blood request.</p>
            <Button 
              onClick={() => navigate('/auth')}
              className="mt-4 bg-gradient-to-r from-neon-pink to-electric-cyan text-white"
            >
              Go to Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <Navbar />
        <div className="relative z-10 pt-20 pb-16 px-4 flex items-center justify-center">
          <Card className="max-w-md w-full glass-card animate-fade-in">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mx-auto mb-4 animate-heartbeat">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-soft-white text-center">Request Submitted!</CardTitle>
              <CardDescription className="text-dark-text/70 text-center">
                Your blood request has been submitted. Donors in your area will be notified.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => navigate('/requests')} 
                className="w-full bg-gradient-to-r from-neon-pink to-electric-cyan text-white"
              >
                View All Requests
              </Button>
              <Button 
                onClick={() => navigate('/dashboard')} 
                variant="outline" 
                className="w-full border-electric-cyan/50 text-electric-cyan hover:bg-electric-cyan/10"
              >
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
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
              <Droplets className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-soft-white mb-6">
              Request Blood
            </h1>
            <p className="text-xl text-dark-text/80 max-w-2xl mx-auto">
              Connect with our network of generous donors and get the help you need
            </p>
          </div>

          <Card className="glass-card animate-slide-up">
            <CardHeader>
              <CardTitle className="text-soft-white flex items-center">
                <Droplets className="w-6 h-6 mr-2 text-neon-pink" />
                Blood Request Form
              </CardTitle>
              <CardDescription className="text-dark-text/70">
                Fill out your information to request blood from our donor network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-soft-white flex items-center">
                      <User className="w-4 h-4 mr-2 text-neon-pink" />
                      Patient/Contact Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                      placeholder="Enter patient or contact person name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-soft-white flex items-center">
                      <Droplets className="w-4 h-4 mr-2 text-neon-pink" />
                      Blood Group Needed *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('blood_group_needed', value)} required>
                      <SelectTrigger className="glass border-electric-cyan/20 text-white">
                        <SelectValue placeholder="Select blood group needed" />
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
                    <Label htmlFor="location" className="text-soft-white flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-neon-pink" />
                      Location (City, State) *
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="e.g., New York, NY"
                      className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact_details" className="text-soft-white flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-neon-pink" />
                      Contact Details *
                    </Label>
                    <Input
                      id="contact_details"
                      value={formData.contact_details}
                      onChange={(e) => handleInputChange('contact_details', e.target.value)}
                      placeholder="Phone number, email, or other contact info"
                      className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-soft-white flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-neon-pink" />
                    Additional Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Any additional details about your request..."
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading || !formData.name || !formData.blood_group_needed || !formData.location || !formData.contact_details}
                  className="w-full bg-gradient-to-r from-neon-pink to-electric-cyan hover:from-neon-pink/90 hover:to-electric-cyan/90 text-white py-6 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 animate-glow"
                >
                  <Droplets className="w-6 h-6 mr-3" />
                  {loading ? 'Submitting...' : 'Submit Blood Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
