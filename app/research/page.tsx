"use client";

import SharedHeader from "../../components/shared-header";
import Link from "next/link";

// This would eventually be generated from your research posts
const researchPosts = [
  {
    slug: "week-1-playmaking-insights",
    title: "Week 1: Playmaking Insights",
    date: "August 24, 2025",
    description: "Analysis of key pass conversion rates and assist overperformance across NWSL players"
  },
  // Add more posts here as you create them
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <SharedHeader />
      
      <div className="flex-1 px-8 py-12 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold mb-4 text-gray-900">
            NWSL Research
          </h1>
          <p className="text-lg text-gray-600">
            Weekly data analyses and insights from the NWSL database
          </p>
        </div>

        <div className="space-y-8">
          {researchPosts.length > 0 ? (
            researchPosts.map((post) => (
              <article 
                key={post.slug}
                className="border-b border-gray-200 pb-8 last:border-b-0"
              >
                <Link 
                  href={`/research/${post.slug}`}
                  className="block hover:bg-gray-50 rounded-lg p-4 -m-4 transition-colors"
                >
                  <h2 className="text-2xl font-medium mb-2 text-gray-900 hover:text-blue-600">
                    {post.title}
                  </h2>
                  <div className="text-sm text-gray-500 mb-3">
                    {post.date}
                  </div>
                  <p className="text-gray-700">
                    {post.description}
                  </p>
                </Link>
              </article>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Research posts coming soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}