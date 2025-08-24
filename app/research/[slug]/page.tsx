import SharedHeader from "../../../components/shared-header";
import { notFound } from "next/navigation";
import Link from "next/link";

// This would eventually read from your markdown files
const getResearchPost = (slug: string) => {
  // For now, return null to show 404 for non-existent posts
  // You'll replace this with actual markdown file reading
  return null;
};

export default function ResearchPost({ params }: { params: { slug: string } }) {
  const post = getResearchPost(params.slug);

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

        <article className="prose prose-lg max-w-none">
          {/* Post content will be rendered here */}
        </article>
      </div>
    </div>
  );
}