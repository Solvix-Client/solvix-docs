'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Heart } from 'lucide-react';
import { SITE } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,163,138,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,163,138,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      {/* Top-right glow */}
      <div className="absolute -top-40 right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#0FA38A]/15 via-[#1FD1B2]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top-left subtle glow */}
      <div className="absolute -top-20 left-[-5%] w-[300px] h-[300px] bg-gradient-to-br from-[#1FD1B2]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Version badge */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/docs/misc/changelog"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 mb-8 hover:border-[#0FA38A]/50 transition-colors shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
            v{SITE.version} &middot; Current Release
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-[#0FA38A] to-[#1FD1B2] dark:from-white dark:via-[#1FD1B2] dark:to-[#0FA38A] bg-clip-text text-transparent">
            HTTP orchestration<br />for production systems
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          TypeScript-first HTTP client with ~50 built-in features — retry, circuit breaker,
          rate limiting, tracing, metrics, health checks, and enterprise security — in 33 KB.
        </motion.p>

        {/* CTA buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/docs/getting-started/introduction"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
            Get Started <ArrowRight size={18} />
          </Link>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
            <Github size={18} /> GitHub
          </a>
          <a href={SITE.sponsor} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] hover:from-[#0FA38A] hover:to-[#0D8F77] shadow-lg hover:shadow-xl transition-all">
            <Heart size={18} /> Sponsor
          </a>
          <span className="text-sm text-gray-400 dark:text-gray-500 hidden sm:inline">·</span>
          <span className="text-sm text-gray-400 dark:text-gray-500 hidden sm:inline">
            npm install @adityadev13/solvix
          </span>
        </motion.div>

        {/* Runtime badges */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-12 text-xs text-gray-400 dark:text-gray-500">
          <span>Node.js</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span>Browser</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span>Deno</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span>Bun</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span>Edge</span>
        </motion.div>
      </div>
    </section>
  );
}
