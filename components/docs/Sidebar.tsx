'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { sidebars } from '@/config/sidebars';
import Search from './Search';

function getDocLabel(slug: string): string {
  return (slug.split('/').pop() || '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function Sidebar() {
  const pathname = usePathname();
  const activeSlug = pathname.replace(/^\/docs\//, '').replace(/\/$/, '');
  const categories = Object.entries(sidebars);

  // Track open categories as a Set
  const [openCategories, setOpenCategories] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    initial.add('Release Notes');
    for (const [label, items] of categories) {
      if (items.some(s => s === activeSlug)) initial.add(label);
    }
    return initial;
  });

  const toggle = useCallback((label: string) => {
    setOpenCategories(prev => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }, []);

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 overflow-y-auto h-[calc(100vh-4rem)] sticky top-16 bg-white dark:bg-gray-900 hidden md:block">
      <div className="p-3"><Search /></div>
      <nav className="px-2 pb-6">
        {categories.map(([label, items]) => {
          const hasActive = items.some(s => s === activeSlug);
          const open = openCategories.has(label);
          return (
            <div key={label} className="mb-2">
              <button onClick={() => toggle(label)}
                className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors ${hasActive ? 'text-[#0FA38A]' : 'text-gray-600 dark:text-gray-400'} hover:bg-gray-100 dark:hover:bg-gray-800`}>
                {label}<ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>
              {open && <div className="ml-2 space-y-0.5 mt-1">
                {items.map(slug => (
                  <Link key={slug} href={`/docs/${slug}`}
                    className={`sidebar-link ${slug === activeSlug ? 'active' : ''}`}>
                    {getDocLabel(slug)}
                  </Link>
                ))}
              </div>}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
