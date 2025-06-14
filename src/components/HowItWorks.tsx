
import React from 'react';
import { UserPlus, Calendar, Heart, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Register as Donor',
      description: 'Sign up with your details and complete your health profile',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Calendar,
      title: 'Schedule Donation',
      description: 'Book an appointment at your convenient time and location',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
    },
    {
      icon: Heart,
      title: 'Donate Blood',
      description: 'Visit the center and donate blood safely with our medical team',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
    },
    {
      icon: Award,
      title: 'Save Lives',
      description: 'Your donation helps save up to 3 lives and earn recognition',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Becoming a blood donor is simple and rewarding. Follow these easy steps 
            to start your journey as a life-saving hero.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-transparent z-0" />
              )}
              
              {/* Step Card */}
              <div className={`relative z-10 text-center p-8 backdrop-blur-sm bg-white/5 rounded-2xl border ${step.borderColor} transform transition-all duration-300 hover:scale-105 hover:bg-white/10`}>
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center`}>
                    <span className={`text-sm font-bold ${step.color}`}>
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 backdrop-blur-sm bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl border border-red-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Join thousands of heroes who are already making a difference. 
              Your first donation could save up to 3 lives.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              Start Your Hero Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
