import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Server mode required for inquiry API + admin CMS
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Keep Node-native mail/DB packages out of Turbopack bundling (Vercel build)
  serverExternalPackages: [
    'imapflow',
    'mailparser',
    'pino',
    'thread-stream',
    'nodemailer',
    'mysql2',
    'encoding-japanese',
    'libmime',
    'mailsplit',
  ],
};

export default nextConfig;
