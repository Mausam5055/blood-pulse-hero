
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Droplets, MapPin, Phone, Calendar, Clock, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Navbar from '../components/Navbar';

interface BloodRequest {
  id: string;
  name: string;
  blood_group_needed: string;
  location: string;
  contact_details: string;
  message: string | null;
  status: string;
  created_at: string;
}

const RequestsDirectory = () => {
  const [requests, setRequests] = useState<BloodRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('=== FETCHING BLOOD REQUESTS ===');
      
      // Test database connection first
      const { data: testData, error: testError } = await supabase
        .from('requests')
        .select('count', { count: 'exact', head: true });

      if (testError) {
        console.error('Database connection test failed:', testError);
        throw new Error(`Database connection failed: ${testError.message}`);
      }

      console.log('Database connection successful. Total request count:', testData);

      // Fetch all requests (not just active ones) to debug
      const { data, error, count } = await supabase
        .from('requests')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false });

      console.log('Raw Supabase response:', { data, error, count });

      if (error) {
        console.error('Supabase error:', error);
        console.error('Error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw error;
      }

      console.log('All requests from database:', data);
      
      // Filter active requests
      const activeRequests = data?.filter(req => req.status === 'active') || [];
      console.log('Active requests:', activeRequests);
      
      setRequests(activeRequests);
      
      if (data && data.length === 0) {
        console.log('No requests found in database');
      } else if (activeRequests.length === 0 && data && data.length > 0) {
        console.log('Requests exist but none are active:', data);
      }
      
    } catch (error: any) {
      console.error('=== ERROR FETCHING REQUESTS ===');
      console.error('Error:', error);
      console.error('Error message:', error.message);
      setError(error.message);
      toast({
        title: "Error",
        description: "Failed to load blood requests: " + error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      console.log('=== FETCH REQUESTS COMPLETE ===');
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

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-20 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <Droplets className="w-12 h-12 text-neon-pink animate-pulse mx-auto mb-4" />
            <p className="text-xl text-white">Loading blood requests...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-neon-pink to-electric-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <Droplets className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Blood Requests</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Help save lives by responding to urgent blood requests in your area
            </p>
            <div className="mt-6">
              <Button 
                onClick={fetchRequests}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Requests
              </Button>
            </div>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-900/20 border border-red-500/20 rounded-lg">
              <p className="text-red-400">Error: {error}</p>
              <Button 
                onClick={fetchRequests}
                className="mt-2 bg-red-600 hover:bg-red-700"
              >
                Try Again
              </Button>
            </div>
          )}

          <div className="mb-4 text-center">
            <p className="text-white/60">
              Found {requests.length} active blood request{requests.length !== 1 ? 's' : ''}
            </p>
          </div>

          {requests.length === 0 ? (
            <div className="text-center py-16">
              <Droplets className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">No active blood requests</h2>
              <p className="text-white/60 mb-4">Check back later for new requests that need your help.</p>
              <Button 
                onClick={() => window.location.href = '/request-form'}
                className="bg-gradient-to-r from-neon-pink to-electric-cyan text-white"
              >
                Submit a Blood Request
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {requests.map((request) => (
                <Card key={request.id} className="backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-white text-lg">{request.name}</CardTitle>
                        <div className="flex items-center mt-2">
                          <Badge className="bg-red-900/30 text-red-400 border-red-400/20 mr-2">
                            Needs {request.blood_group_needed}
                          </Badge>
                          <Badge variant="secondary" className="bg-green-900/30 text-green-400 border-green-400/20">
                            {request.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-white/70 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-neon-pink" />
                      {request.location}
                    </div>
                    
                    <div className="flex items-center text-white/70 text-sm">
                      <Phone className="w-4 h-4 mr-2 text-neon-pink" />
                      {request.contact_details}
                    </div>

                    <div className="flex items-center text-white/70 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-neon-pink" />
                      {getTimeAgo(request.created_at)}
                    </div>

                    {request.message && (
                      <div className="text-white/70 text-sm bg-black/20 p-3 rounded-lg">
                        <p className="font-medium text-white mb-1">Message:</p>
                        <p>{request.message}</p>
                      </div>
                    )}

                    <div className="pt-4">
                      <Button 
                        className="w-full bg-gradient-to-r from-neon-pink to-electric-cyan text-white"
                        onClick={() => {
                          // Extract phone number if it looks like one
                          const phoneMatch = request.contact_details.match(/[\d\s\-\(\)\+]+/);
                          if (phoneMatch) {
                            window.location.href = `tel:${phoneMatch[0].replace(/\s/g, '')}`;
                          } else {
                            toast({
                              title: "Contact Info",
                              description: request.contact_details,
                            });
                          }
                        }}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestsDirectory;
