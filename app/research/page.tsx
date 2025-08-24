import SharedHeader from "../../components/shared-header";
import { getAllPosts } from "../../lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function ResearchPage() {
  const researchPosts = getAllPosts();

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

                <div className="prose prose-lg max-w-none prose-tables:table-auto prose-th:border prose-th:border-gray-300 prose-th:px-4 prose-th:py-2 prose-th:bg-gray-50 prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2">
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
                      code: ({className, children, ...props}) => {
                        // Handle code blocks (```code```)
                        if (className?.includes('language-')) {
                          const copyToClipboard = () => {
                            navigator.clipboard.writeText(String(children));
                          };
                          
                          return (
                            <div className="bg-white border border-gray-300 rounded-lg my-6 overflow-x-auto relative">
                              <button
                                onClick={copyToClipboard}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded transition-colors"
                                title="Copy to clipboard"
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                              </button>
                              <pre className="font-mono text-sm leading-relaxed whitespace-pre text-black p-6 pr-16">
                                <code>{children}</code>
                              </pre>
                            </div>
                          );
                        }
                        // Handle inline code (`code`)
                        return (
                          <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm" {...props}>
                            {children}
                          </code>
                        );
                      },
                      pre: ({children, ...props}) => {
                        const copyToClipboard = () => {
                          const text = typeof children === 'object' && children && 'props' in children 
                            ? children.props.children 
                            : children;
                          navigator.clipboard.writeText(String(text));
                        };

                        return (
                          <div className="bg-white border border-gray-300 rounded-lg my-6 overflow-x-auto relative">
                            <button
                              onClick={copyToClipboard}
                              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded transition-colors"
                              title="Copy to clipboard"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                              </svg>
                            </button>
                            <pre className="font-mono text-sm leading-relaxed whitespace-pre text-black p-6 pr-16" {...props}>
                              {children}
                            </pre>
                          </div>
                        );
                      },
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