
import React from 'react';
import Hero from '../components/Hero';
import DonorStats from '../components/DonorStats';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <Hero />
      <DonorStats />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
