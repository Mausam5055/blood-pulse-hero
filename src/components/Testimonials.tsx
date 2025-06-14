
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
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stories from Our Heroes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from donors, recipients, and medical professionals about their 
            experiences with blood donation and how it has impacted their lives.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="text-center p-8 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
            <div className="mb-8">
              <Quote className="w-12 h-12 text-red-500 mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 font-light italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-2 border-red-500"
              />
              <div className="text-left">
                <h4 className="text-xl font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-400">
                  {testimonials[currentTestimonial].role}
                </p>
                {testimonials[currentTestimonial].donations > 0 && (
                  <p className="text-red-500 text-sm">
                    {testimonials[currentTestimonial].donations} donations
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-red-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-red-500"
                />
                <div>
                  <h5 className="font-semibold text-white">{testimonial.name}</h5>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.quote.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
