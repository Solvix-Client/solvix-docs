---
title: Using Solvix With Nextjs
---

# Using Solvix with Next.js

This guide explains how to use Solvix in Next.js applications, including Server Components, API routes, and Edge environments.

## Why use Solvix in Next.js?

Next.js applications require:

- Server-side data fetching (SSR)
- Client-side data fetching
- API route communication
- Edge runtime compatibility

Solvix works seamlessly across all of these.

## Basic Setup

```ts
// lib/client.ts
import { createClient } from "solvix";

export const client = createClient({
  baseURL: "https://api.example.com",
  retry: { retries: 2 },
});
```

## Using in Server Components

```tsx
// app/users/page.tsx
import { client } from "@/lib/client";

export default async function Page() {
  const res = await client.get("/users");

  return <pre>{JSON.stringify(res.data, null, 2)}</pre>;
}
```

## Using in Client Components

```tsx
"use client";

import { useEffect, useState } from "react";
import { client } from "@/lib/client";

export default function Users() {
  const [data, setData] = useState(null);

  useEffect(() => {
    client.get("/users").then((res) => setData(res.data));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

## Using in API Routes

```ts
// app/api/users/route.ts
import { client } from "@/lib/client";

export async function GET() {
  const res = await client.get("/users");

  return Response.json(res.data);
}
```

## Edge Runtime Support

```ts
export const runtime = "edge";

export async function GET() {
  const res = await client.get("/users");

  return new Response(JSON.stringify(res.data));
}
```

Solvix works in Edge because it is fetch-based.

## Authentication Example

```ts
const client = createClient({
  baseURL: "/api",
  transformRequest: (ctx) => {
    ctx.options.fetch.headers = {
      ...ctx.options.fetch.headers,
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    };
    return ctx;
  },
});
```

## Best Practices

- Use one shared client instance
- Use Server Components for faster data fetching
- Use Client Components for dynamic updates
- Keep secrets on server side only
- Combine with caching strategies

## Summary

Solvix integrates seamlessly with Next.js across:

- Server Components
- Client Components
- API Routes
- Edge Runtime

It provides consistent and reliable API handling across the entire app.
