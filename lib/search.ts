import Fuse from 'fuse.js';

interface SearchDoc {
  slug: string;
  title: string;
  content: string;
}

let fuseInstance: Fuse<SearchDoc> | null = null;

async function getIndex(): Promise<Fuse<SearchDoc>> {
  if (fuseInstance) return fuseInstance;
  const res = await fetch('/solvix-docs/search-index.json');
  const docs: SearchDoc[] = await res.json();
  fuseInstance = new Fuse(docs, {
    keys: [
      { name: 'title', weight: 3 },
      { name: 'content', weight: 1 },
    ],
    threshold: 0.4,
  });
  return fuseInstance;
}

export async function searchDocs(query: string): Promise<SearchDoc[]> {
  if (!query.trim()) return [];
  const idx = await getIndex();
  return idx.search(query).slice(0, 10).map(r => r.item);
}
