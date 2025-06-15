import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, CheckCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import Navbar from '../components/Navbar';
import { Download } from 'lucide-react';

interface DonorFormData {
  full_name: string;
  blood_group: string;
  age: string;
  phone_number: string;
  city: string;
  state: string;
  availability: boolean;
}

const DonateForm = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<DonorFormData>({
    full_name: '',
    blood_group: '',
    age: '',
    phone_number: '',
    city: '',
    state: '',
    availability: true,
  });

  React.useEffect(() => {
    console.log('DonateForm - Current user:', user);
    if (!user) {
      console.log('DonateForm - No user found, redirecting to auth');
      navigate('/auth');
    }
  }, [user, navigate]);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const generatePDF = async (donorData: any): Promise<string> => {
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; background: white; color: #333;">
        <div style="text-align: center; margin-bottom: 40px; border-bottom: 3px solid #e91e63; padding-bottom: 20px;">
          <h1 style="color: #e91e63; font-size: 28px; margin: 0;">LifeGiver Blood Donation</h1>
          <h2 style="color: #666; font-size: 18px; margin: 10px 0 0 0;">Donor Registration Certificate</h2>
          <p style="color: #999; margin: 5px 0 0 0;">Certificate ID: LG${Date.now()}</p>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="background: #e91e63; color: white; padding: 20px; border-radius: 10px; display: inline-block;">
            <h2 style="margin: 0; font-size: 24px;">Blood Group: ${donorData.blood_group}</h2>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
          <div>
            <h3 style="color: #e91e63; border-bottom: 2px solid #e91e63; padding-bottom: 10px; margin-bottom: 20px;">Personal Information</h3>
            <div style="margin-bottom: 15px;">
              <strong>Full Name:</strong> ${donorData.full_name}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Age:</strong> ${donorData.age} years
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Phone:</strong> ${donorData.phone_number}
            </div>
          </div>
          
          <div>
            <h3 style="color: #e91e63; border-bottom: 2px solid #e91e63; padding-bottom: 10px; margin-bottom: 20px;">Location Details</h3>
            <div style="margin-bottom: 15px;">
              <strong>City:</strong> ${donorData.city}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>State:</strong> ${donorData.state}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Available:</strong> ${donorData.availability ? 'Yes' : 'No'}
            </div>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
          <h3 style="color: #e91e63; margin-top: 0;">Important Information</h3>
          <p style="margin: 0;">This certificate confirms that ${donorData.full_name} has registered as a blood donor with LifeGiver. Contact them at ${donorData.phone_number} if you need ${donorData.blood_group} blood.</p>
        </div>
        
        <div style="text-align: center; margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px;">
          <p style="color: #666; margin: 0;">Thank you for being a life-saving hero!</p>
          <p style="color: #999; font-size: 14px; margin: 10px 0 0 0;">Generated on ${new Date().toLocaleDateString()} | www.lifegiver.com</p>
        </div>
      </div>
    `;

    const opt = {
      margin: 1,
      filename: `LifeGiver_Donor_${donorData.full_name.replace(/\s+/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    try {
      const pdfBlob = await html2pdf().set(opt).from(element).outputPdf('blob');
      
      // Upload to Supabase Storage
      const fileName = `${user?.id}/${Date.now()}_donor_certificate.pdf`;
      const { data, error } = await supabase.storage
        .from('donor-pdfs')
        .upload(fileName, pdfBlob);

      if (error) {
        console.error('Storage upload error:', error);
        throw error;
      }
      
      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('donor-pdfs')
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error) {
      console.error('PDF generation/upload error:', error);
      // Return null if PDF upload fails, but don't block the donor registration
      return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      console.error('No user found for donor submission');
      toast({
        title: "Error",
        description: "You must be logged in to register as a donor",
        variant: "destructive",
      });
      return;
    }

    console.log('=== DONOR FORM SUBMISSION START ===');
    console.log('User:', user);
    console.log('Form data:', formData);

    setLoading(true);
    try {
      // Validate required fields
      if (!formData.full_name.trim() || !formData.blood_group || !formData.age || !formData.phone_number.trim() || !formData.city.trim() || !formData.state.trim()) {
        throw new Error('Please fill in all required fields');
      }

      // Check if age is valid
      const ageNum = parseInt(formData.age);
      if (isNaN(ageNum) || ageNum < 18 || ageNum > 65) {
        throw new Error('Age must be between 18 and 65');
      }

      // Generate and upload PDF (non-blocking)
      let pdfUrl = '';
      try {
        pdfUrl = await generatePDF(formData);
        console.log('PDF generated and uploaded:', pdfUrl);
      } catch (pdfError) {
        console.warn('PDF generation failed, continuing without PDF:', pdfError);
      }

      // Prepare donor data
      const donorData = {
        user_id: user.id,
        full_name: formData.full_name.trim(),
        blood_group: formData.blood_group,
        age: ageNum,
        phone_number: formData.phone_number.trim(),
        city: formData.city.trim(),
        state: formData.state.trim(),
        availability: formData.availability,
        pdf_url: pdfUrl || null,
      };

      console.log('Inserting donor data:', donorData);

      // Test database connection first
      const { data: testData, error: testError } = await supabase
        .from('donors')
        .select('count', { count: 'exact', head: true });

      if (testError) {
        console.error('Database connection test failed:', testError);
        throw new Error(`Database connection failed: ${testError.message}`);
      }

      console.log('Database connection successful. Current donor count:', testData);

      // Insert donor data into database
      const { data, error } = await supabase
        .from('donors')
        .insert(donorData)
        .select();

      if (error) {
        console.error('Supabase insertion error:', error);
        console.error('Error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw error;
      }

      console.log('Donor registration successful:', data);

      // Verify the insertion by checking if the record exists
      const { data: verifyData, error: verifyError } = await supabase
        .from('donors')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1);

      if (verifyError) {
        console.error('Verification query failed:', verifyError);
      } else {
        console.log('Verification: Found donor record:', verifyData);
      }

      setSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been registered as a donor successfully.",
      });
    } catch (error: any) {
      console.error('=== DONOR SUBMISSION ERROR ===');
      console.error('Error:', error);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      toast({
        title: "Registration Failed",
        description: error.message || "Failed to register as donor. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      console.log('=== DONOR FORM SUBMISSION END ===');
    }
  };

  const handleInputChange = (field: keyof DonorFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-20 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-white">Please log in to register as a donor.</p>
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
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-20 pb-16 px-4 flex items-center justify-center">
          <Card className="max-w-md w-full backdrop-blur-lg bg-white/5 border border-white/10 text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white">Registration Successful!</CardTitle>
              <CardDescription className="text-white/70">
                You've been registered as a donor. Your certificate has been generated and saved.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => navigate('/donors')} 
                className="w-full bg-gradient-to-r from-neon-pink to-electric-cyan text-white"
              >
                View All Donors
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
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Become a Donor</h1>
            <p className="text-white/70">Register to save lives and help those in need</p>
          </div>

          <Card className="backdrop-blur-lg bg-white/5 border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Donor Registration</CardTitle>
              <CardDescription className="text-white/70">
                Fill out your information to register as a blood donor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full_name" className="text-white">Full Name *</Label>
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => handleInputChange('full_name', e.target.value)}
                      className="bg-black/30 border-white/20 text-white"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Blood Group *</Label>
                    <Select onValueChange={(value) => handleInputChange('blood_group', value)} required>
                      <SelectTrigger className="bg-black/30 border-white/20 text-white">
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
                    <Label htmlFor="age" className="text-white">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      min="18"
                      max="65"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="bg-black/30 border-white/20 text-white"
                      placeholder="Enter your age"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone_number" className="text-white">Phone Number *</Label>
                    <Input
                      id="phone_number"
                      value={formData.phone_number}
                      onChange={(e) => handleInputChange('phone_number', e.target.value)}
                      className="bg-black/30 border-white/20 text-white"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-white">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="bg-black/30 border-white/20 text-white"
                      placeholder="Enter your city"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-white">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="bg-black/30 border-white/20 text-white"
                      placeholder="Enter your state"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading || !formData.full_name || !formData.blood_group || !formData.age || !formData.phone_number || !formData.city || !formData.state}
                  className="w-full bg-gradient-to-r from-neon-pink to-electric-cyan text-white py-3"
                >
                  {loading ? 'Registering...' : 'Register as Donor'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
