
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Droplets, User, Phone, Mail, MapPin, Calendar as CalendarIcon, Clock, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';
import Navbar from '../components/Navbar';

const BloodRequest = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    contactPerson: '',
    email: '',
    phone: '',
    bloodGroup: '',
    unitsNeeded: '',
    hospital: '',
    address: '',
    requiredDate: null as Date | null,
    urgency: '',
    medicalCondition: '',
    doctorName: '',
    additionalNotes: '',
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const urgencyLevels = ['Critical', 'Urgent', 'Normal'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Blood request data:', formData);
    // Here we would integrate with Supabase
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
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
              Submit your blood request and connect with verified donors in your area
            </p>
          </div>

          {/* Request Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl animate-slide-up">
            {/* Patient Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-soft-white mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-neon-pink" />
                Patient Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="patientName" className="text-soft-white">
                    Patient Name
                  </Label>
                  <Input
                    id="patientName"
                    value={formData.patientName}
                    onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPerson" className="text-soft-white">
                    Contact Person
                  </Label>
                  <Input
                    id="contactPerson"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-soft-white flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-neon-pink" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-soft-white flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-neon-pink" />
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Blood Requirements */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-soft-white mb-6 flex items-center">
                <Droplets className="w-6 h-6 mr-3 text-neon-pink" />
                Blood Requirements
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label className="text-soft-white">
                    Blood Group Needed
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, bloodGroup: value})}>
                    <SelectTrigger className="glass border-electric-cyan/20 text-white">
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
                  <Label htmlFor="unitsNeeded" className="text-soft-white">
                    Units Needed
                  </Label>
                  <Input
                    id="unitsNeeded"
                    type="number"
                    min="1"
                    value={formData.unitsNeeded}
                    onChange={(e) => setFormData({...formData, unitsNeeded: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-soft-white flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2 text-neon-pink" />
                    Urgency Level
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, urgency: value})}>
                    <SelectTrigger className="glass border-electric-cyan/20 text-white">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencyLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          <span className={level === 'Critical' ? 'text-red-500' : level === 'Urgent' ? 'text-orange-500' : 'text-green-500'}>
                            {level}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Hospital and Location */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-soft-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-neon-pink" />
                Hospital Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="hospital" className="text-soft-white">
                    Hospital Name
                  </Label>
                  <Input
                    id="hospital"
                    value={formData.hospital}
                    onChange={(e) => setFormData({...formData, hospital: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="doctorName" className="text-soft-white">
                    Doctor Name
                  </Label>
                  <Input
                    id="doctorName"
                    value={formData.doctorName}
                    onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address" className="text-soft-white">
                    Hospital Address
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-soft-white flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-neon-pink" />
                    Required Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="glass border-electric-cyan/20 w-full justify-start text-left font-normal text-white"
                      >
                        {formData.requiredDate ? (
                          format(formData.requiredDate, "PPP")
                        ) : (
                          <span>When is blood needed?</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.requiredDate}
                        onSelect={(date) => setFormData({...formData, requiredDate: date})}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicalCondition" className="text-soft-white">
                    Medical Condition
                  </Label>
                  <Input
                    id="medicalCondition"
                    value={formData.medicalCondition}
                    onChange={(e) => setFormData({...formData, medicalCondition: e.target.value})}
                    className="glass border-electric-cyan/20 focus:border-electric-cyan text-white"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-8">
              <Label htmlFor="additionalNotes" className="text-soft-white mb-3 block">
                Additional Notes
              </Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                className="glass border-electric-cyan/20 focus:border-electric-cyan text-white min-h-[120px]"
                placeholder="Any additional information that might help donors..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-neon-pink to-electric-cyan hover:from-neon-pink/90 hover:to-electric-cyan/90 text-white px-16 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 animate-glow"
              >
                <Clock className="w-6 h-6 mr-3" />
                Submit Blood Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BloodRequest;
