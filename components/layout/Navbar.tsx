'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Book, ExternalLink, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { NAV_ITEMS, SITE } from '@/lib/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200/50 dark:bg-transparent dark:backdrop-blur-none dark:border-0">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/solvix-docs/img/solvix-png.png" alt="Solvix" className="w-7 h-7" />
            <span className="font-bold text-lg bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] bg-clip-text text-transparent">Solvix</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map(item => 'external' in item ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                {item.label === 'GitHub' && <Github size={16} />}{item.label}<ExternalLink size={12} />
              </a>
            ) : (
              <Link key={item.label} href={item.href}
                className={`flex items-center gap-1.5 text-sm transition-colors ${pathname.startsWith('/docs') ? 'text-[#0FA38A] font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'}`}>
                {item.label === 'Docs' && <Book size={16} />}{item.label}
              </Link>
            ))}
            <a href={SITE.sponsor} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] hover:from-[#0FA38A] hover:to-[#0D8F77] shadow-sm hover:shadow-md transition-all">
              <Heart size={14} /> Sponsor
            </a>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(true)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Open menu"><Menu size={22} /></button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 z-50 bg-black/40 md:hidden" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 md:hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <span className="font-semibold text-sm">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><X size={20} /></button>
              </div>
              <div className="p-4 space-y-2">
                {NAV_ITEMS.map(item => 'external' in item ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Github size={16} />{item.label}<ExternalLink size={12} className="ml-auto" />
                  </a>
                ) : (
                  <Link key={item.label} href={item.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Book size={16} />{item.label}
                  </Link>
                ))}
                <a href={SITE.sponsor} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A]">
                  <Heart size={16} /> Sponsor <ExternalLink size={12} className="ml-auto" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
