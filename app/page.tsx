
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
        console.log('Fetching headline from API...');
        const response = await fetch('https://platform.nwsldata.com/api/headline');
        console.log('API response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('API response data:', data);
          if (data.headline) {
            console.log('Setting headline to:', data.headline);
            setDynamicHeadline(data.headline);
          }
        } else {
          console.log('API response not ok:', response.status, response.statusText);
        }
      } catch (error) {
        console.log('Failed to fetch dynamic headline:', error);
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
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-20">
        <main className="flex flex-col items-center text-center max-w-2xl w-full">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-3xl font-medium mb-8 text-gray-900">
              {dynamicHeadline}
            </h1>
          </div>

          {/* ChatGPT-style Question Section */}
          <div className="w-full">
            {/* Large Input Box */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask anything"
                  className="w-full min-h-[140px] px-6 py-6 text-base border border-gray-300 rounded-3xl resize-none focus:outline-none placeholder-gray-500 bg-white"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                
                {/* Tools Button */}
                <button
                  type="button"
                  className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L17 10H7L12 15Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-medium">Tools</span>
                </button>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="absolute bottom-4 right-4 p-3 bg-black text-white rounded-full hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
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
            <p className="text-sm text-gray-400 mt-3">
              Press Enter to submit
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
