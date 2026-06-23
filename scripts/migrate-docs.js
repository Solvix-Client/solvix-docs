const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const DOCS_DIR = path.join(process.cwd(), 'docs');
const CONTENT_DIR = path.join(process.cwd(), 'content');

// Build reverse mapping: filename without extension -> content category path
const sidebars = {
  "getting-started": [
    "introduction", "why-solvix", "architecture-overview", "design-goal",
    "installation", "quick-start", "basic-request", "response-structure",
    "error-handling-basics", "configuration-overview",
  ],
  "core-api": [
    "client-instance", "request-options-reference", "response-object-structure",
    "hooks", "retry-engine", "circuit-breaker", "rate-limiting",
    "timeout-handling", "request-priority-queue", "request-grouping",
    "request-dependencies", "request-deduplication", "dependency-registry",
    "token-refresh-orchestrator", "offline-queue", "shadow-mode-execution",
    "https-enforcement", "domain-allowlist", "header-sanitization",
    "body-size-guard", "response-size-guard", "snapshot-redaction",
    "secure-configuration-examples", "snapshot-debugging", "timeline-tracking",
    "profiling-mode", "performance-metadata", "benchmark-results",
    "logging-events-solvixbus", "custom-transport", "middleware-system",
    "transform-request", "transform-response", "custom-retry-logic",
    "custom-backoff-strategy", "custom-error-handling", "etag-support",
    "streaming-support-sse-json-lines",
  ],
  "usage-patterns": [
    "using-solvix-with-react", "using-solvix-with-nextjs",
    "using-solvix-with-serveless", "using-solvix-with-microservices",
    "large-scale-api-orchestration",
  ],
  "benchmarking": [
    "benchmark-overview", "memory-stability-test", "concurrency-test",
    "retry-storm-test", "token-refresh-stampede-test", "bundle-size-analysis",
  ],
};

// Build name -> category mapping
const nameToCategory = {};
for (const [cat, files] of Object.entries(sidebars)) {
  for (const f of files) {
    nameToCategory[f] = cat;
  }
}
// Special files
nameToCategory['changelog'] = 'misc';
nameToCategory['contribution-guide'] = 'misc';

let converted = 0;
let errors = 0;

const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.md'));

for (const file of files) {
  const name = file.replace(/\.md$/, '');
  const category = nameToCategory[name];

  if (!category) {
    console.warn(`⚠️  No category mapping for: ${name}, skipping`);
    errors++;
    continue;
  }

  const srcPath = path.join(DOCS_DIR, file);
  const raw = fs.readFileSync(srcPath, 'utf-8');
  const { data, content } = matter(raw);

  // Build clean frontmatter — strip Docusaurus-only fields
  const cleanFm = {};
  const stripFields = ['id', 'slug', 'sidebar_position'];
  for (const [k, v] of Object.entries(data)) {
    if (!stripFields.includes(k)) {
      cleanFm[k] = v;
    }
  }

  // Build frontmatter string
  const fmKeys = Object.keys(cleanFm);
  let fmStr = '';
  if (fmKeys.length > 0) {
    fmStr = '---\n';
    for (const k of fmKeys) {
      fmStr += `${k}: ${cleanFm[k]}\n`;
    }
    fmStr += '---\n\n';
  }

  const mdxContent = fmStr + content.trim() + '\n';

  const targetDir = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.join(targetDir, `${name}.mdx`);
  fs.writeFileSync(targetFile, mdxContent, 'utf-8');
  converted++;
  console.log(`✅ ${file} → content/${category}/${name}.mdx`);
}

console.log(`\nDone! ${converted} files converted, ${errors} errors`);
