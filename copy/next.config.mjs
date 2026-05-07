import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // 🔧 SSG CONFIGURATION: Ensure static generation is optimized
  output: 'export', // Generate static files for all pages
  trailingSlash: true, // Add trailing slashes for better static hosting
  images: {
    unoptimized: true, // Required for static export
  },

  experimental: {
    // Removed turbo configuration as it's not valid in Next.js 16
  },
};

export default nextConfig;
