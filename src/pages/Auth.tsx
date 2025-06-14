
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Heart, Droplets, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    bloodGroup: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Image (Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Blood donation hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-space-navy/80 to-neon-pink/60" />
        </div>
        
        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute top-20 left-20 w-4 h-4 bg-neon-pink rounded-full opacity-60" style={{ animationDelay: '0s' }} />
          <div className="animate-float absolute top-40 right-32 w-3 h-3 bg-electric-cyan rounded-full opacity-40" style={{ animationDelay: '1s' }} />
          <div className="animate-float absolute bottom-32 left-1/3 w-5 h-5 bg-neon-pink rounded-full opacity-50" style={{ animationDelay: '2s' }} />
          <div className="animate-float absolute top-1/2 right-20 w-2 h-2 bg-electric-cyan rounded-full opacity-70" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-neon-pink mb-6 animate-heartbeat" fill="currentColor" />
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Join the <span className="text-neon-pink">Lifeline</span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Every drop counts. Every donation saves lives. Be part of a community that makes a real difference.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-pink">25,000+</div>
              <div className="text-sm opacity-80">Lives Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-cyan">15,000+</div>
              <div className="text-sm opacity-80">Active Donors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form (Desktop) / Full Width (Mobile) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-space-navy to-electric-cyan/10">
        {/* Mobile Hero Banner */}
        <div className="lg:hidden absolute top-0 left-0 right-0 h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Blood donation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-navy" />
        </div>

        <div className="w-full max-w-md relative z-10 mt-32 lg:mt-0">
          {/* Logo for Mobile */}
          <div className="text-center mb-8 lg:hidden">
            <Heart className="w-12 h-12 text-neon-pink mx-auto mb-4 animate-heartbeat" fill="currentColor" />
            <h1 className="text-2xl font-bold text-soft-white">Join the Lifeline</h1>
          </div>

          <Card className="glass-card border-electric-cyan/20 shadow-2xl animate-scale-in">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-soft-white flex items-center justify-center gap-2">
                {isLogin ? (
                  <>
                    <Shield className="w-6 h-6 text-neon-pink" />
                    Welcome Back
                  </>
                ) : (
                  <>
                    <Users className="w-6 h-6 text-electric-cyan" />
                    Create Account
                  </>
                )}
              </CardTitle>
              <CardDescription className="text-dark-text/70">
                {isLogin 
                  ? "Sign in to access your donor dashboard" 
                  : "Join thousands of heroes saving lives"
                }
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="fullName" className="text-soft-white">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="bg-space-navy/50 border-electric-cyan/30 text-soft-white placeholder:text-dark-text/50 focus:border-neon-pink"
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bloodGroup" className="text-soft-white">Blood Group</Label>
                        <select
                          id="bloodGroup"
                          name="bloodGroup"
                          value={formData.bloodGroup}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-space-navy/50 border border-electric-cyan/30 rounded-md text-soft-white focus:border-neon-pink focus:outline-none"
                          required={!isLogin}
                        >
                          <option value="">Select</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-soft-white">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-space-navy/50 border-electric-cyan/30 text-soft-white placeholder:text-dark-text/50 focus:border-neon-pink"
                          placeholder="Phone number"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="email" className="text-soft-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-space-navy/50 border-electric-cyan/30 text-soft-white placeholder:text-dark-text/50 focus:border-neon-pink"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-soft-white">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="bg-space-navy/50 border-electric-cyan/30 text-soft-white placeholder:text-dark-text/50 focus:border-neon-pink pr-10"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-text/60 hover:text-soft-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="animate-fade-in">
                    <Label htmlFor="confirmPassword" className="text-soft-white">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="bg-space-navy/50 border-electric-cyan/30 text-soft-white placeholder:text-dark-text/50 focus:border-neon-pink"
                      placeholder="Confirm your password"
                      required={!isLogin}
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-dark-text/70">
                      <input type="checkbox" className="mr-2 rounded" />
                      Remember me
                    </label>
                    <a href="#" className="text-neon-pink hover:text-neon-pink/80 transition-colors">
                      Forgot password?
                    </a>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-neon-pink to-electric-cyan text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300"
                >
                  <Droplets className="w-4 h-4 mr-2" />
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-electric-cyan/20" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-space-navy px-2 text-dark-text/60">Or continue with</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-electric-cyan/30 text-soft-white hover:bg-electric-cyan/10"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
              </form>

              <div className="text-center pt-4">
                <p className="text-dark-text/70 text-sm">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-neon-pink hover:text-neon-pink/80 ml-1 font-medium transition-colors"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>

              <div className="text-center pt-2">
                <Link to="/" className="text-dark-text/60 hover:text-soft-white text-sm transition-colors">
                  ← Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
