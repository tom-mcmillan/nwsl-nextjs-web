"use client";

import { useState } from "react";
import Link from "next/link";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;

    setIsLoading(true);
    try {
      // TODO: Implement actual log-in logic
      console.log('Log in:', { email: email.trim(), password: password.trim() });
      // Redirect to platform or dashboard
    } catch (error) {
      console.error('Log in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogIn = async () => {
    setIsLoading(true);
    try {
      const { signIn } = await import('next-auth/react');
      await signIn('google', { callbackUrl: 'https://platform.nwsldata.com' });
    } catch (error) {
      console.error('Google log in failed:', error);
    } finally {
      setIsLoading(false);
    }
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
            Welcome back
          </h1>

          {/* Log In Form */}
          <form onSubmit={handleLogIn} className="mb-6">
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

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-blue-600 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                required
                disabled={isLoading}
                placeholder=""
              />
            </div>
            
            <button
              type="submit"
              disabled={!email.trim() || !password.trim() || isLoading}
              className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium text-base mb-6"
            >
              {isLoading ? 'Signing in...' : 'Continue'}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mb-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:text-blue-600 underline">
              Sign up
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

          {/* Social Log In Options */}
          <div className="space-y-3">
            <button
              onClick={handleGoogleLogIn}
              disabled={isLoading}
              className="w-full py-3 px-4 border border-gray-300 rounded-full hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base font-medium"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
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