import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx'],
  basePath: '/solvix-docs',
  outputFileTracingRoot: path.join(process.cwd(), '..'),
};

export default nextConfig;
