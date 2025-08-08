"use client";

import React from "react";

export default function SharedHeader() {


  const handlePlatformClick = () => {
    window.open("https://platform.nwsldata.com", "_blank");
  };

  const handleDocsClick = () => {
    window.open("https://platform.nwsldata.com/docs/", "_blank");
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
        {/* Platform Button */}
        <button
          onClick={handlePlatformClick}
          className="text-gray-600 hover:text-gray-800 font-medium"
        >
          Platform
        </button>

        {/* Docs Button */}
        <button
          onClick={handleDocsClick}
          className="text-gray-600 hover:text-gray-800 font-medium"
        >
          Docs
        </button>
      </div>
    </header>
  );
}