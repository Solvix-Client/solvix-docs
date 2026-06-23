import Link from 'next/link';
import { Github, ExternalLink, BookOpen } from 'lucide-react';
import { SITE } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Solvix &middot; MIT License</p>
        <div className="flex items-center gap-4">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
            <Github size={14} /> GitHub <ExternalLink size={12} />
          </a>
          <Link href="/docs/getting-started/introduction"
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
            <BookOpen size={14} /> Documentation
          </Link>
        </div>
      </div>
    </footer>
  );
}
