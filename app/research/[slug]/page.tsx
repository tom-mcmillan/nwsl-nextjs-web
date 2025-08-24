import SharedHeader from "../../../components/shared-header";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "../../../lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ResearchPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <SharedHeader />
      
      <div className="flex-1 px-8 py-12 max-w-4xl mx-auto w-full">
        <nav className="mb-8">
          <Link 
            href="/research" 
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            ← Back to Research
          </Link>
        </nav>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-semibold mb-4 text-gray-900">
              {post.title}
            </h1>
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
                table: ({node, ...props}) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-300" {...props} />
                  </div>
                ),
                th: ({node, ...props}) => (
                  <th className="border border-gray-300 px-4 py-2 bg-gray-50 text-left font-semibold" {...props} />
                ),
                td: ({node, ...props}) => (
                  <td className="border border-gray-300 px-4 py-2" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}