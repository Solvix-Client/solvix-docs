# Solvix Documentation

Official documentation website for [Solvix](https://github.com/solvix-client) - Universal Cross-Runtime HTTP Client.

Built with [Next.js](https://nextjs.org/) 15 and deployed to GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/solvix-docs](http://localhost:3000/solvix-docs) to view the docs.

## Build

```bash
npm run build
```

Generates static content into the `out` directory for deployment.

## Deployment

Deployment is automated via GitHub Actions. Pushing to the `main` branch triggers a build and deploys to GitHub Pages.

## Project Structure

- `app/` - Next.js app directory with layouts and pages
- `components/` - React components (docs, landing, layout, mdx)
- `content/` - MDX documentation files organized by category
- `config/` - Sidebar and site configuration
- `lib/` - Utility functions and constants
- `scripts/` - Build scripts for docs and search index
- `public/` - Static assets

## Documentation Categories

- **Getting Started** - Installation, quick start, architecture overview
- **Core API** - Client instance, hooks, middleware, caching, and more
- **Usage Patterns** - Integration guides for React, Next.js, serverless, microservices
- **Benchmarking** - Performance tests and analysis
