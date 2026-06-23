const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(process.cwd(), 'content');
const OUTPUT = path.join(process.cwd(), 'public', 'docs-content.json');

async function compile() {
  const { unified } = await import('unified');
  const remarkParse = (await import('remark-parse')).default;
  const remarkRehype = (await import('remark-rehype')).default;
  const rehypeStringify = (await import('rehype-stringify')).default;
  const rehypeSlug = (await import('rehype-slug')).default;
  const remarkGfm = (await import('remark-gfm')).default;
  const rehypePrettyCode = (await import('rehype-pretty-code')).default;

  const docs = {};

  async function processFile(filePath, slug) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeSlug)
      .use(rehypePrettyCode, { theme: 'github-dark-dimmed', keepBackground: true })
      .use(rehypeStringify, { allowDangerousHtml: true });

    const result = await processor.process(content);
    docs[slug] = {
      frontmatter: { title: data.title || slug.split('/').pop(), ...data },
      html: String(result),
    };
  }

  const categories = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
  for (const cat of categories) {
    if (!cat.isDirectory()) continue;
    const catPath = path.join(CONTENT_DIR, cat.name);
    const files = fs.readdirSync(catPath).filter(f => f.endsWith('.mdx'));
    for (const file of files) {
      const slug = `${cat.name}/${file.replace(/\.mdx$/, '')}`;
      await processFile(path.join(catPath, file), slug);
    }
  }

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(docs), 'utf-8');
  console.log(`✅ Compiled ${Object.keys(docs).length} docs to HTML`);
}

compile().catch(err => { console.error(err); process.exit(1); });
