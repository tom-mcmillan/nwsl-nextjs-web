"use client";

import React, { useEffect, useState } from "react";
import SharedHeader from "../../components/shared-header";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export default function ResearchPage() {
  const [researchPosts, setResearchPosts] = useState<PostData[]>([]);

  useEffect(() => {
    // Fetch posts on client side
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setResearchPosts(data))
      .catch(() => setResearchPosts([]));
  }, []);

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

        <div className="space-y-16">
          {researchPosts.length > 0 ? (
            researchPosts.map((post) => (
              <article 
                key={post.slug}
                className="border-b border-gray-200 pb-16 last:border-b-0"
              >
                <header className="mb-8">
                  <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                    {post.title}
                  </h2>
                  <div className="text-sm text-gray-500 mb-4">
                    {post.date}
                  </div>
                  {post.description && (
                    <p className="text-lg text-gray-600">
                      {post.description}
                    </p>
                  )}
                </header>

                <div className="max-w-none">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      table: ({...props}) => (
                        <div className="overflow-x-auto my-6">
                          <table className="min-w-full border-collapse border border-gray-300" {...props} />
                        </div>
                      ),
                      th: ({...props}) => (
                        <th className="border border-gray-300 px-4 py-2 bg-gray-50 text-left font-semibold" {...props} />
                      ),
                      td: ({...props}) => (
                        <td className="border border-gray-300 px-4 py-2" {...props} />
                      ),
                      h1: ({...props}) => (
                        <h1 className="text-2xl font-bold mb-4 mt-6 text-gray-900" {...props} />
                      ),
                      h2: ({...props}) => (
                        <h2 className="text-xl font-semibold mb-3 mt-5 text-gray-900" {...props} />
                      ),
                      h3: ({...props}) => (
                        <h3 className="text-lg font-semibold mb-2 mt-4 text-gray-900" {...props} />
                      ),
                      p: ({...props}) => (
                        <p className="mb-4 text-gray-700 leading-relaxed" {...props} />
                      ),
                      strong: ({...props}) => (
                        <strong className="font-semibold text-gray-900" {...props} />
                      ),
                      ul: ({...props}) => (
                        <ul className="mb-4 ml-6 list-disc" {...props} />
                      ),
                      ol: ({...props}) => (
                        <ol className="mb-4 ml-6 list-decimal" {...props} />
                      ),
                      li: ({...props}) => (
                        <li className="mb-1" {...props} />
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
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