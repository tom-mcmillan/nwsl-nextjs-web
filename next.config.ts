import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  
  // Remove rewrites entirely - Next.js automatically serves static files from public/
  // Your MkDocs files in public/research/ will be served automatically at /research
};

export default nextConfig;
