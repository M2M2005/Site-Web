import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Export statique pour Cloudflare Pages
  images: {
    unoptimized: true, // Requis pour l'export statique
  },
};

export default nextConfig;
