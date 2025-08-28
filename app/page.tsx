
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
      <SharedHeader />
      
      {/* Main content centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-20">
        <main className="flex flex-col items-center text-center max-w-2xl w-full">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-3xl font-medium text-gray-900">
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
                  style={{ caretColor: 'black' }}
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

          {/* Access Options */}
          <div className="w-full mt-16">
            <h2 className="text-xl font-medium text-gray-900 mb-6">
              Access the most comprehensive NWSL database ever built
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* MCP Integration */}
              <a 
                href="https://platform.nwsldata.com/docs/mcp"
                className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors cursor-pointer block"
              >
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">MCP Server</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Connect directly to our database through ChatGPT or Claude using our MCP endpoint
                </p>
                <span className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                  Get endpoint →
                </span>
              </a>

              {/* API Access */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors cursor-not-allowed opacity-75">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">API Access</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Query the database directly with our REST API for your own applications
                </p>
                <span className="text-sm text-gray-400 font-medium">
                  Coming soon
                </span>
              </div>

              {/* Research */}
              <a 
                href="/research"
                className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors cursor-pointer block"
              >
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Research & Analysis</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Read our published research with insights from data science queries
                </p>
                <span className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                  View research →
                </span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
