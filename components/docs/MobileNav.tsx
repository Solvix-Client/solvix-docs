'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sidebars } from '@/config/sidebars';

function getDocLabel(slug: string): string {
  return (slug.split('/').pop() || '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function MobileNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['Getting Started']));
  const activeSlug = pathname.replace(/^\/docs\//, '').replace(/\/$/, '');

  const toggleCategory = (label: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <div className="md:hidden relative">
      <button onClick={() => setMenuOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Menu size={18} /> Browse docs
      </button>
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)} className="fixed inset-0 z-40 bg-black/40" />
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl max-h-[70vh] overflow-y-auto">
              <div className="p-3">
                {Object.entries(sidebars).map(([label, items]) => (
                  <div key={label} className="mb-1">
                    <button onClick={() => toggleCategory(label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                      {label}<ChevronDown size={14} className={`transition-transform ${expanded.has(label) ? 'rotate-180' : ''}`} />
                    </button>
                    {expanded.has(label) && <div className="ml-3 space-y-0.5">
                      {items.map(slug => (
                        <Link key={slug} href={`/docs/${slug}`} onClick={() => setMenuOpen(false)}
                          className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${slug === activeSlug ? 'text-[#0FA38A] font-medium bg-[#0FA38A]/10' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                          {getDocLabel(slug)}
                        </Link>
                      ))}
                    </div>}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
