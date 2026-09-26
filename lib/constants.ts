export const SITE = {
  title: 'Solvix Documentation',
  description: 'Enterprise-Grade HTTP Orchestration Engine for Modern JavaScript',
  url: 'https://solvix-client.github.io/solvix-docs',
  github: 'https://github.com/Solvix-Client/solvix',
  npm: 'https://www.npmjs.com/package/@solvix-client/client',
  sponsor: 'https://buymeacoffee.com/solvix',
  version: '1.1.0',
} as const;

export const NAV_ITEMS = [
  { label: 'Docs', href: '/docs/getting-started/introduction' },
  { label: 'GitHub', href: SITE.github, external: true },
] as const;
