'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search as SearchIcon, X } from 'lucide-react';
import { searchDocs } from '@/lib/search';
interface SearchResult { slug: string; title: string; }

export default function Search() {
  const [query, setQuery] = useState(''); const [results, setResults] = useState<SearchResult[]>([]); const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => { const h = (e: MouseEvent) => { if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false); }; document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h); }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search docs..." value={query} onChange={async e => { const v = e.target.value; setQuery(v); if (v.trim()) { const r = await searchDocs(v); setResults(r); setOpen(true); } else { setResults([]); setOpen(false); } }}
          className="w-full pl-9 pr-3 py-2 rounded-lg text-sm bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-[#0FA38A] focus:outline-none transition-colors placeholder:text-gray-400" />
        {query && <button onClick={() => { setQuery(''); setResults([]); setOpen(false); }} className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700"><X size={14} className="text-gray-400" /></button>}
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl max-h-80 overflow-y-auto">
          {results.map(r => (
            <Link key={r.slug} href={`/docs/${r.slug}`} onClick={() => { setOpen(false); setQuery(''); setResults([]); }}
              className="block px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-800 last:border-0">
              <div className="text-sm font-medium">{r.title}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
