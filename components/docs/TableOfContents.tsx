'use client';
import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface TocItem { id: string; text: string; level: number; }

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const pathname = usePathname();

  const scanHeadings = useCallback(() => {
    // Wait for DOM to update after navigation
    requestAnimationFrame(() => {
      const article = document.querySelector('article');
      if (!article) { setItems([]); return; }

      const headings = article.querySelectorAll('h2, h3');
      const tocItems: TocItem[] = [];
      headings.forEach(h => {
        if (h.id) tocItems.push({ id: h.id, text: h.textContent || '', level: Number(h.tagName[1]) });
      });
      setItems(tocItems);
      setActiveId('');

      // Set up intersection observer for active tracking
      const observer = new IntersectionObserver(
        entries => {
          for (const e of entries) {
            if (e.isIntersecting) {
              setActiveId(e.target.id);
            }
          }
        },
        { rootMargin: '-80px 0px -80% 0px' }
      );
      headings.forEach(h => {
        if (h.id) observer.observe(h);
      });

      // Cleanup after a timeout
      setTimeout(() => observer.disconnect(), 10000);
    });
  }, []);

  useEffect(() => {
    scanHeadings();
    // Re-scan after a short delay to ensure content is rendered
    const timer = setTimeout(scanHeadings, 100);
    return () => clearTimeout(timer);
  }, [pathname, scanHeadings]);

  if (items.length === 0) return null;

  return (
    <nav className="hidden xl:block w-56 shrink-0">
      <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-8rem)]">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-2">On this page</h3>
        <div className="space-y-0.5">
          {items.map((item, i) => (
            <a key={item.id || `toc-${i}`} href={`#${item.id}`}
              className={`toc-link ${item.level === 3 ? 'pl-8' : ''} ${activeId === item.id ? 'active' : ''}`}>{item.text}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
