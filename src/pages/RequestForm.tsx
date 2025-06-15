
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, CheckCircle } from 'lucide-react';
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
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to submit a request",
        variant: "destructive",
      });
      return;
    }

    console.log('Starting blood request submission...');
    console.log('Form data:', formData);
    console.log('User ID:', user.id);

    setLoading(true);
    try {
      const requestData = {
        user_id: user.id,
        name: formData.name.trim(),
        blood_group_needed: formData.blood_group_needed,
        location: formData.location.trim(),
        contact_details: formData.contact_details.trim(),
        message: formData.message.trim() || null,
        status: 'active',
      };

      console.log('Inserting request data:', requestData);

      const { data, error } = await supabase
        .from('requests')
        .insert(requestData)
        .select();

      if (error) {
        console.error('Supabase insertion error:', error);
        throw error;
      }

      console.log('Request submitted successfully:', data);

      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Your blood request has been submitted successfully.",
      });
    } catch (error: any) {
      console.error('Error submitting request:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit blood request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof RequestFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!user) return null;

  if (submitted) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-20 pb-16 px-4 flex items-center justify-center">
          <Card className="max-w-md w-full backdrop-blur-lg bg-white/5 border border-white/10 text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white">Request Submitted!</CardTitle>
              <CardDescription className="text-white/70">
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
                className="w-full border-white/20 text-white hover:bg-white/10"
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
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Request Blood</h1>
            <p className="text-white/70">Submit your blood request to connect with donors</p>
          </div>

          <Card className="backdrop-blur-lg bg-white/5 border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Blood Request Form</CardTitle>
              <CardDescription className="text-white/70">
                Fill out your information to request blood from our donor network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Patient/Contact Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-black/30 border-white/20 text-white"
                    placeholder="Enter patient or contact person name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Blood Group Needed *</Label>
                  <Select onValueChange={(value) => handleInputChange('blood_group_needed', value)} required>
                    <SelectTrigger className="bg-black/30 border-white/20 text-white">
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
                  <Label htmlFor="location" className="text-white">Location (City, State) *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="e.g., New York, NY"
                    className="bg-black/30 border-white/20 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact_details" className="text-white">Contact Details *</Label>
                  <Input
                    id="contact_details"
                    value={formData.contact_details}
                    onChange={(e) => handleInputChange('contact_details', e.target.value)}
                    placeholder="Phone number, email, or other contact info"
                    className="bg-black/30 border-white/20 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Any additional details about your request..."
                    className="bg-black/30 border-white/20 text-white min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading || !formData.name || !formData.blood_group_needed || !formData.location || !formData.contact_details}
                  className="w-full bg-gradient-to-r from-neon-pink to-electric-cyan text-white py-3"
                >
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
