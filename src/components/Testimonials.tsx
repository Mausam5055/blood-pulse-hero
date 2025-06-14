
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Donor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      quote: 'Donating blood through LifeGiver has been incredibly rewarding. The process is smooth, and knowing that I\'ve helped save lives gives me immense satisfaction.',
      donations: 12,
    },
    {
      name: 'Michael Chen',
      role: 'Blood Recipient',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      quote: 'I received blood donations during my surgery, and it saved my life. Now I\'m a regular donor myself, giving back to the community that helped me.',
      donations: 8,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Medical Director',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
      quote: 'LifeGiver has revolutionized our blood donation process. The platform makes it easy to connect with donors and manage our blood bank efficiently.',
      donations: 0,
    },
    {
      name: 'James Wilson',
      role: 'First-Time Donor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      quote: 'I was nervous about donating blood for the first time, but the team made me feel comfortable. It\'s amazing to know that my donation can help up to 3 people.',
      donations: 1,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-red-500/10 rounded-full mb-6">
            <Quote className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-400 mb-8 leading-tight">
            Stories from Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-neon-pink animate-pulse">
              Heroes
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-neon-pink mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Hear from donors, recipients, and medical professionals about their 
            <span className="text-red-400 font-medium"> life-changing experiences</span> with blood donation
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial with Enhanced Animation */}
          <div 
            key={currentTestimonial}
            className="text-center p-12 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 shadow-2xl animate-fade-in transform transition-all duration-700 hover:scale-105 hover:shadow-red-500/20"
          >
            <div className="mb-10">
              <div className="relative inline-block mb-8">
                <Quote className="w-16 h-16 text-red-500 mx-auto animate-pulse" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-20"></div>
              </div>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-gray-100 leading-relaxed mb-10 font-light italic relative">
                <span className="text-6xl text-red-500/30 absolute -top-4 -left-4">"</span>
                {testimonials[currentTestimonial].quote}
                <span className="text-6xl text-red-500/30 absolute -bottom-8 -right-4">"</span>
              </blockquote>
            </div>

            {/* Enhanced Author Info */}
            <div className="flex items-center justify-center space-x-6 animate-slide-up">
              <div className="relative">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full border-4 border-red-500 shadow-lg transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-bold text-white mb-1 tracking-wide">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-lg text-red-400 font-medium mb-2">
                  {testimonials[currentTestimonial].role}
                </p>
                {testimonials[currentTestimonial].donations > 0 && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-red-300 text-sm font-medium">
                      {testimonials[currentTestimonial].donations} life-saving donations
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 w-14 h-14 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 w-14 h-14 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`relative transition-all duration-500 ${
                  index === currentTestimonial
                    ? 'w-12 h-4 bg-gradient-to-r from-red-500 to-neon-pink rounded-full'
                    : 'w-4 h-4 bg-gray-600 hover:bg-red-400 rounded-full hover:scale-125'
                }`}
              >
                {index === currentTestimonial && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-neon-pink rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg group-hover:text-red-200 transition-colors duration-300">
                    {testimonial.name}
                  </h5>
                  <p className="text-sm text-red-400 font-medium">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.quote.substring(0, 120)}..."
              </p>
              <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
