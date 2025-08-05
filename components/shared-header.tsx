"use client";

import React, { useState } from "react";

interface SharedHeaderProps {
  onSignIn?: (email: string) => void;
}

export default function SharedHeader({
  onSignIn,
}: SharedHeaderProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      setIsLoading(true);
      try {
        // TODO: Implement actual sign-in logic
        if (onSignIn) {
          onSignIn(email.trim());
        }
        setEmail("");
        setPassword("");
        setIsSignInOpen(false);
      } catch (error) {
        console.error('Sign in failed:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      setIsLoading(true);
      try {
        // TODO: Implement actual sign-up logic
        console.log('Sign up:', { email: email.trim(), password: password.trim() });
        setEmail("");
        setPassword("");
        setIsSignUpOpen(false);
      } catch (error) {
        console.error('Sign up failed:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement Google OAuth
      console.log('Google sign in clicked');
    } catch (error) {
      console.error('Google sign in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDocsClick = () => {
    window.open("https://platform.nwsldata.com/docs", "_blank");
  };

  const handleLogoClick = () => {
    window.location.href = "https://nwsldata.com";
  };

  return (
    <header className="w-full flex justify-between items-center py-6 px-8 border-0 shadow-none">
      {/* Logo */}
      <div 
        onClick={handleLogoClick}
        className="cursor-pointer"
      >
        <h1 className="text-2xl font-semibold">
          <span className="text-blue-500">NWSL</span>{" "}
          <span className="text-black">Data</span>
        </h1>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center gap-4">
        {/* Docs Button */}
        <button
          onClick={handleDocsClick}
          className="text-gray-600 hover:text-gray-800 font-medium"
        >
          Docs
        </button>

        {/* Log In Button */}
        <button
          onClick={() => setIsSignInOpen(true)}
          className="text-gray-600 hover:text-gray-800 font-medium"
        >
          Log In
        </button>

        {/* Sign Up Button */}
        <button
          onClick={() => setIsSignUpOpen(true)}
          className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Sign Up
        </button>
        
        {/* Log In Modal */}
        {isSignInOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h2 className="text-xl font-semibold mb-4">Welcome back</h2>
              <form onSubmit={handleSignIn} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isLoading}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isLoading}
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignInOpen(false);
                      setEmail("");
                      setPassword("");
                    }}
                    className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
                    disabled={isLoading || !email.trim() || !password.trim()}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </button>
                </div>
              </form>
              <p className="text-xs text-gray-500 text-center mt-4">
                Don&apos;t have an account?{' '}
                <button
                  onClick={() => {
                    setIsSignInOpen(false);
                    setIsSignUpOpen(true);
                    setEmail("");
                    setPassword("");
                  }}
                  className="text-blue-500 hover:text-blue-600 underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        )}

        {/* Sign Up Modal */}
        {isSignUpOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h2 className="text-xl font-semibold mb-4">Create your account</h2>
              
              {/* Google Sign Up Button */}
              <button
                onClick={handleGoogleSignIn}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {isLoading ? 'Signing up...' : 'Continue with Google'}
              </button>
              
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <form onSubmit={handleSignUp} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isLoading}
                />
                <input
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isLoading}
                  minLength={8}
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUpOpen(false);
                      setEmail("");
                      setPassword("");
                    }}
                    className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
                    disabled={isLoading || !email.trim() || !password.trim()}
                  >
                    {isLoading ? 'Creating...' : 'Create Account'}
                  </button>
                </div>
              </form>
              <p className="text-xs text-gray-500 text-center mt-4">
                Already have an account?{' '}
                <button
                  onClick={() => {
                    setIsSignUpOpen(false);
                    setIsSignInOpen(true);
                    setEmail("");
                    setPassword("");
                  }}
                  className="text-blue-500 hover:text-blue-600 underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}