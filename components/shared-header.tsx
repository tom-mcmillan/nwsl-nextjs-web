"use client";

import React from "react";
import Link from "next/link";

interface SharedHeaderProps {
  onSignIn?: (email: string) => void;
}

export default function SharedHeader({
  onSignIn,
}: SharedHeaderProps) {


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
        <Link
          href="/login"
          className="text-gray-600 hover:text-gray-800 font-medium"
        >
          Log In
        </Link>

        {/* Sign Up Button */}
        <Link
          href="/signup"
          className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}