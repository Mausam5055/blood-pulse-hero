
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Heart, Droplets, Shield, Users } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const [isLogin, setIsLogin] = useState(mode !== 'signup');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    bloodGroup: '',
    phone: ''
  });

  useEffect(() => {
    if (mode === 'signup') {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [mode]);

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
    <div className="min-h-screen flex bg-black">
      {/* Left Side - Hero Image (Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Blood donation hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-red-900/60" />
        </div>
        
        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute top-20 left-20 w-4 h-4 bg-red-500 rounded-full opacity-60" style={{ animationDelay: '0s' }} />
          <div className="animate-float absolute top-40 right-32 w-3 h-3 bg-red-400 rounded-full opacity-40" style={{ animationDelay: '1s' }} />
          <div className="animate-float absolute bottom-32 left-1/3 w-5 h-5 bg-red-500 rounded-full opacity-50" style={{ animationDelay: '2s' }} />
          <div className="animate-float absolute top-1/2 right-20 w-2 h-2 bg-red-300 rounded-full opacity-70" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-red-500 mb-6 animate-heartbeat" fill="currentColor" />
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Join the <span className="text-red-500">Lifeline</span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Every drop counts. Every donation saves lives. Be part of a community that makes a real difference.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">25,000+</div>
              <div className="text-sm opacity-80">Lives Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">15,000+</div>
              <div className="text-sm opacity-80">Active Donors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Full Width Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-black relative">
        {/* Mobile Hero Banner */}
        <div className="lg:hidden absolute top-0 left-0 right-0 h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Blood donation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        </div>

        <div className="w-full h-full flex items-center justify-center p-8 lg:p-16 relative z-10 mt-32 lg:mt-0">
          {/* Logo for Mobile */}
          <div className="text-center mb-8 lg:hidden">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4 animate-heartbeat" fill="currentColor" />
            <h1 className="text-2xl font-bold text-white">Join the Lifeline</h1>
          </div>

          <Card className="w-full max-w-lg bg-gray-900/90 border-red-500/20 shadow-2xl animate-scale-in">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                {isLogin ? (
                  <>
                    <Shield className="w-8 h-8 text-red-500" />
                    Welcome Back
                  </>
                ) : (
                  <>
                    <Users className="w-8 h-8 text-red-500" />
                    Create Account
                  </>
                )}
              </CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                {isLogin 
                  ? "Sign in to access your donor dashboard" 
                  : "Join thousands of heroes saving lives"
                }
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label htmlFor="fullName" className="text-white text-lg">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="bg-black/50 border-red-500/30 text-white placeholder:text-gray-500 focus:border-red-500 h-12 text-lg"
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bloodGroup" className="text-white text-lg">Blood Group</Label>
                        <select
                          id="bloodGroup"
                          name="bloodGroup"
                          value={formData.bloodGroup}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 bg-black/50 border border-red-500/30 rounded-md text-white focus:border-red-500 focus:outline-none text-lg"
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
                        <Label htmlFor="phone" className="text-white text-lg">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-black/50 border-red-500/30 text-white placeholder:text-gray-500 focus:border-red-500 h-12 text-lg"
                          placeholder="Phone number"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="email" className="text-white text-lg">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-black/50 border-red-500/30 text-white placeholder:text-gray-500 focus:border-red-500 h-12 text-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-white text-lg">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="bg-black/50 border-red-500/30 text-white placeholder:text-gray-500 focus:border-red-500 pr-12 h-12 text-lg"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="animate-fade-in">
                    <Label htmlFor="confirmPassword" className="text-white text-lg">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="bg-black/50 border-red-500/30 text-white placeholder:text-gray-500 focus:border-red-500 h-12 text-lg"
                      placeholder="Confirm your password"
                      required={!isLogin}
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between text-base">
                    <label className="flex items-center text-gray-400">
                      <input type="checkbox" className="mr-3 rounded" />
                      Remember me
                    </label>
                    <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
                      Forgot password?
                    </a>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-4 rounded-lg hover:scale-105 transition-all duration-300 text-lg"
                >
                  <Droplets className="w-5 h-5 mr-3" />
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-red-500/20" />
                  </div>
                  <div className="relative flex justify-center text-sm uppercase">
                    <span className="bg-black px-4 text-gray-400">Or continue with</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-red-500/30 text-white hover:bg-red-500/10 py-4 text-lg"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
              </form>

              <div className="text-center pt-6">
                <p className="text-gray-400 text-lg">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-red-500 hover:text-red-400 ml-2 font-medium transition-colors"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>

              <div className="text-center pt-4">
                <Link to="/" className="text-gray-500 hover:text-white text-lg transition-colors">
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
