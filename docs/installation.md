---
title: Installation
---

# Installation

Solvix can be installed using any modern JavaScript package manager.

It is designed to work seamlessly across multiple runtimes including Node.js, browsers, and edge environments.

## Install Solvix

### Using npm

```bash
npm install solvix
```

### Using pnpm

```bash
pnpm add solvix
```

### Using yarn

```bash
yarn add solvix
```

### Using bun

```bash
bun add solvix
```

## Environment support

Solvix is runtime-agnostic and works in:

- Node.js (v18+ recommended)
- Modern browsers
- Bun runtime
- Edge environments (Cloudflare Workers, Vercel Edge)

No environment-specific setup is required.

## Module support

Solvix supports modern JavaScript module systems.

### ES Modules (recommended)

```ts
import { createClient } from "solvix";
```

### CommonJS (Node.js)

```js
const { createClient } = require("solvix");
```

## TypeScript support

Solvix is written in TypeScript and includes built-in type definitions.

No additional packages are required.

```ts
import { createClient } from "solvix";

const client = createClient({
  baseURL: "https://api.example.com",
});
```

Type inference works out of the box.

## Verify installation

Create a simple test file:

```ts
import { createClient } from "solvix";

const client = createClient({
  baseURL: "https://jsonplaceholder.typicode.com",
});

async function test() {
  const res = await client.get("/posts");
  console.log(res.data);
}

test();
```

If this runs successfully, Solvix is installed correctly.

## Browser usage

Solvix works directly in the browser without additional configuration.

```ts
import { createClient } from "solvix";

const client = createClient({
  baseURL: "/api",
});
```

Ensure your environment supports fetch.

## Node.js usage

Node.js v18+ includes native fetch, so no polyfills are required.

For older Node versions, you may need a fetch polyfill.

## Bundlers and frameworks

Solvix works with:

- Vite
- Next.js
- Webpack
- Rollup
- Turbopack

No special configuration is needed.

## Best practices

- Use a single client instance across your application
- Configure global settings (retry, headers) at client creation
- Avoid creating a new client per request

Example:

```ts
const client = createClient({
  baseURL: "https://api.example.com",
  retry: { retries: 3 },
});
```

## Troubleshooting

### Module not found

Ensure Solvix is installed:

```bash
npm install solvix
```

### Fetch not available

If using older Node.js:

- Upgrade to Node.js v18+
- Or install a fetch polyfill

### TypeScript errors

Ensure your tsconfig.json includes:

```json
{
  "moduleResolution": "node",
  "esModuleInterop": true
}
```

## Summary

Solvix installation is simple and requires no complex setup.

It works across environments, supports modern tooling, and is ready for production use immediately after installation.
