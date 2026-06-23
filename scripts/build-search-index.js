const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(process.cwd(), 'content');
const OUTPUT = path.join(process.cwd(), 'public', 'search-index.json');

const docs = [];
const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
for (const cat of categories) {
  if (!cat.isDirectory()) continue;
  const catPath = path.join(CONTENT_DIR, cat.name);
  const files = fs.readdirSync(catPath);
  for (const file of files) {
    if (!file.endsWith('.mdx')) continue;
    const raw = fs.readFileSync(path.join(catPath, file), 'utf-8');
    const { data, content } = matter(raw);
    docs.push({
      slug: `${cat.name}/${file.replace(/\.mdx$/, '')}`,
      title: data.title || file,
      content: (content || '').slice(0, 500),
    });
  }
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(docs), 'utf-8');
console.log(`✅ Search index written: ${docs.length} docs`);
