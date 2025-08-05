"use client";

import React, { useState } from "react";

interface SharedHeaderProps {
  onSignIn?: (email: string) => void;
}

export default function SharedHeader({
  onSignIn,
}: SharedHeaderProps) {
  const [email, setEmail] = useState("");
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && onSignIn) {
      onSignIn(email.trim());
      setEmail("");
      setIsSignInOpen(false);
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
          onClick={() => setIsSignInOpen(true)}
          className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Sign Up
        </button>
        
        {/* Simple modal for sign in */}
        {isSignInOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h2 className="text-xl font-semibold mb-4">Sign in to NWSL Data</h2>
              <form onSubmit={handleSignIn} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSignInOpen(false)}
                    className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                  >
                    Continue
                  </button>
                </div>
              </form>
              <p className="text-xs text-gray-500 text-center mt-4">
                Free access • No password required
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}