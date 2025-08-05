"use client";

import { useState } from "react";
import Link from "next/link";
import GoogleAuthButton from "../../components/google-auth-button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      // TODO: Implement actual sign-up logic
      console.log('Email sign up:', email.trim());
      // Redirect to password setup or directly to platform
    } catch (error) {
      console.error('Sign up failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = (credential: { credential: string; select_by?: string }) => {
    console.log('Google sign up successful:', credential);
    setIsLoading(false);
  };

  const handleGoogleError = () => {
    console.error('Google sign up failed');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-6 px-8">
        <Link href="/" className="cursor-pointer">
          <h1 className="text-2xl font-semibold">
            <span className="text-blue-500">NWSL</span>{" "}
            <span className="text-black">Data</span>
          </h1>
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-20">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-medium text-center mb-8 text-gray-900">
            Create an account
          </h1>

          {/* Email Sign Up Form */}
          <form onSubmit={handleEmailSignUp} className="mb-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-blue-600 mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                required
                disabled={isLoading}
                placeholder=""
              />
            </div>
            
            <button
              type="submit"
              disabled={!email.trim() || isLoading}
              className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium text-base mb-6"
            >
              {isLoading ? 'Creating account...' : 'Continue'}
            </button>
          </form>

          {/* Log In Link */}
          <p className="text-center text-sm text-gray-600 mb-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:text-blue-600 underline">
              Log in
            </Link>
          </p>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">OR</span>
            </div>
          </div>

          {/* Social Sign Up Options */}
          <div className="space-y-3">
            <GoogleAuthButton
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              disabled={isLoading}
            />
          </div>

          {/* Terms and Privacy */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              <Link href="/terms" className="hover:text-gray-700 underline">
                Terms of Service
              </Link>
              {" | "}
              <Link href="/privacy" className="hover:text-gray-700 underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}