import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/research',
        destination: '/research/index.html',
      },
      {
        source: '/research/:path*',
        destination: '/research/:path*',
      },
    ];
  },
};

export default nextConfig;
