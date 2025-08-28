"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function SharedHeader() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const handleChatClick = () => {
    // Seamless navigation - same tab for natural flow
    window.location.href = "https://platform.nwsldata.com";
  };

  const handleLogoClick = () => {
    // Stay in same tab when going to homepage
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

      {/* Right side buttons - only show if not on homepage */}
      {!isHomepage && (
        <div className="flex items-center gap-4">
          {/* Research Button */}
          <button
            onClick={() => window.location.href = "/research"}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            Research
          </button>

          {/* Chat Button */}
          <button
            onClick={handleChatClick}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            Chat
          </button>
        </div>
      )}
    </header>
  );
}