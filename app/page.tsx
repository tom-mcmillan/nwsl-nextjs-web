
"use client";

import { useState, useEffect } from "react";
import SharedHeader from "../components/shared-header";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [dynamicHeadline, setDynamicHeadline] = useState("What do you want to know about the NWSL?");

  // Fetch dynamic headline from API
  useEffect(() => {
    const fetchHeadline = async () => {
      try {
        const response = await fetch('https://platform.nwsldata.com/api/headline');
        if (response.ok) {
          const data = await response.json();
          if (data.headline) {
            setDynamicHeadline(data.headline);
          }
        }
      } catch {
        console.log('Failed to fetch dynamic headline, using fallback');
        // Keep the default headline if API fails
      }
    };

    fetchHeadline();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      // Navigate to platform with the query
      const encodedQuery = encodeURIComponent(inputText.trim());
      window.location.href = `https://platform.nwsldata.com?q=${encodedQuery}`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <SharedHeader showAuth={false} />
      
      {/* Main content centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <main className="flex flex-col items-center text-center max-w-4xl w-full">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight text-gray-800">
              {dynamicHeadline}
            </h1>
          </div>

          {/* ChatGPT-style Question Section */}
          <div className="w-full max-w-3xl">
            
            {/* Large Input Box */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask anything"
                  className="w-full min-h-[120px] px-6 py-6 text-lg border-2 border-gray-200 rounded-3xl resize-none focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-400"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="absolute bottom-4 right-4 p-3 bg-black text-white rounded-full hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 11L12 6L17 11M12 18V7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
            
            {/* Helper Text */}
            <p className="text-sm text-gray-500 mt-4">
              Press Enter to submit • Free access to NWSL analytics and insights
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
