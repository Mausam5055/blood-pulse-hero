
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { AlertTriangle, Droplets, MapPin, Phone, Clock, Upload } from 'lucide-react';
import Navbar from '../components/Navbar';

const BloodRequest = () => {
  const [isEmergency, setIsEmergency] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    bloodGroup: '',
    unitsNeeded: '',
    hospitalName: '',
    hospitalAddress: '',
    contactPerson: '',
    contactPhone: '',
    requiredBy: '',
    additionalNotes: '',
    medicalDocument: null as File | null,
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Blood request:', { ...formData, isEmergency });
    // Here we would integrate with Supabase
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-pale-yellow/30 dark:from-space-navy dark:to-electric-cyan/10">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
              isEmergency 
                ? 'bg-gradient-to-r from-red-500 to-red-600 animate-pulse' 
                : 'bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan'
            }`}>
              {isEmergency ? (
                <AlertTriangle className="w-8 h-8 text-white animate-pulse" />
              ) : (
                <Droplets className="w-8 h-8 text-white" />
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-rich-charcoal dark:text-soft-white mb-4">
              {isEmergency ? 'Emergency Blood Request' : 'Request Blood'}
            </h1>
            <p className="text-xl text-rich-charcoal/70 dark:text-dark-text/70">
              Help us find the blood you need quickly and safely
            </p>
          </div>

          {/* Emergency Toggle */}
          <div className="glass-card p-6 rounded-2xl mb-8 animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-rich-charcoal dark:text-soft-white">
                  Emergency Request
                </h3>
                <p className="text-sm text-rich-charcoal/60 dark:text-dark-text/60">
                  Mark as emergency for urgent blood requirements
                </p>
              </div>
              <Switch
                checked={isEmergency}
                onCheckedChange={setIsEmergency}
                className="data-[state=checked]:bg-red-500"
              />
            </div>
          </div>

          {/* Request Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl animate-slide-up space-y-8">
            {/* Patient Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white border-b border-deep-coral/20 dark:border-electric-cyan/20 pb-2">
                Patient Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="patientName" className="text-rich-charcoal dark:text-soft-white">
                    Patient Name
                  </Label>
                  <Input
                    id="patientName"
                    value={formData.patientName}
                    onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-rich-charcoal dark:text-soft-white flex items-center">
                    <Droplets className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" />
                    Blood Group Required
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, bloodGroup: value})}>
                    <SelectTrigger className="glass border-deep-coral/20 dark:border-electric-cyan/20">
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
                  <Label htmlFor="unitsNeeded" className="text-rich-charcoal dark:text-soft-white">
                    Units Needed
                  </Label>
                  <Input
                    id="unitsNeeded"
                    type="number"
                    min="1"
                    value={formData.unitsNeeded}
                    onChange={(e) => setFormData({...formData, unitsNeeded: e.target.value})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requiredBy" className="text-rich-charcoal dark:text-soft-white flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" />
                    Required By
                  </Label>
                  <Input
                    id="requiredBy"
                    type="datetime-local"
                    value={formData.requiredBy}
                    onChange={(e) => setFormData({...formData, requiredBy: e.target.value})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Hospital Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-rich-charcoal dark:text-soft-white border-b border-deep-coral/20 dark:border-electric-cyan/20 pb-2">
                Hospital Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="hospitalName" className="text-rich-charcoal dark:text-soft-white flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" />
                    Hospital Name
                  </Label>
                  <Input
                    id="hospitalName"
                    value={formData.hospitalName}
                    onChange={(e) => setFormData({...formData, hospitalName: e.target.value})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone" className="text-rich-charcoal dark:text-soft-white flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" />
                    Contact Phone
                  </Label>
                  <Input
                    id="contactPhone"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                    required
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="hospitalAddress" className="text-rich-charcoal dark:text-soft-white">
                    Hospital Address
                  </Label>
                  <Textarea
                    id="hospitalAddress"
                    value={formData.hospitalAddress}
                    onChange={(e) => setFormData({...formData, hospitalAddress: e.target.value})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPerson" className="text-rich-charcoal dark:text-soft-white">
                    Contact Person
                  </Label>
                  <Input
                    id="contactPerson"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicalDocument" className="text-rich-charcoal dark:text-soft-white flex items-center">
                    <Upload className="w-4 h-4 mr-2 text-deep-coral dark:text-neon-pink" />
                    Medical Document
                  </Label>
                  <Input
                    id="medicalDocument"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setFormData({...formData, medicalDocument: e.target.files?.[0] || null})}
                    className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label htmlFor="additionalNotes" className="text-rich-charcoal dark:text-soft-white">
                Additional Notes
              </Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                className="glass border-deep-coral/20 dark:border-electric-cyan/20 focus:border-deep-coral dark:focus:border-electric-cyan"
                rows={4}
                placeholder="Any additional information about the patient's condition or requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                size="lg"
                className={`px-12 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 ${
                  isEmergency
                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white animate-pulse'
                    : 'bg-gradient-to-r from-deep-coral to-soft-teal dark:from-neon-pink dark:to-electric-cyan hover:from-deep-coral/90 hover:to-soft-teal/90 dark:hover:from-neon-pink/90 dark:hover:to-electric-cyan/90 text-white animate-glow'
                }`}
              >
                {isEmergency ? (
                  <>
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Submit Emergency Request
                  </>
                ) : (
                  <>
                    <Droplets className="w-5 h-5 mr-2" />
                    Submit Blood Request
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BloodRequest;
