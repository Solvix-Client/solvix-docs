import fs from 'fs';
import path from 'path';

const COMPILED_PATH = path.join(process.cwd(), 'public', 'docs-content.json');

interface CompiledDoc {
  frontmatter: { title: string; description?: string; [key: string]: unknown };
  html: string;
}

type CompiledDocs = Record<string, CompiledDoc>;

let cache: CompiledDocs | null = null;

function loadDocs(): CompiledDocs {
  if (cache) return cache;
  const raw = fs.readFileSync(COMPILED_PATH, 'utf-8');
  cache = JSON.parse(raw) as CompiledDocs;
  return cache;
}

export function getDocSlugs(): string[] {
  return Object.keys(loadDocs());
}

export function getDocBySlug(slug: string): CompiledDoc | null {
  const docs = loadDocs();
  return docs[slug] || null;
}
