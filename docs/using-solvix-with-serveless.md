---
title: Using Solvix With Serveless
---

# Using Solvix with Serverless

This guide explains how to use Solvix in Serverless environments such as AWS Lambda, Vercel Functions, and Cloudflare Workers.

## Why use Solvix in Serverless?

Serverless environments require:

- Fast execution
- Minimal overhead
- Efficient retries
- Cold start optimization

Solvix is lightweight and optimized for such environments.

## Basic Setup

```ts
import { createClient } from "solvix";

const client = createClient({
  baseURL: "https://api.example.com",
  retry: { retries: 2 },
});
```

## Example: AWS Lambda

```ts
export const handler = async () => {
  const res = await client.get("/users");

  return {
    statusCode: 200,
    body: JSON.stringify(res.data),
  };
};
```

## Example: Vercel Function

```ts
export default async function handler(req, res) {
  const response = await client.get("/users");

  res.status(200).json(response.data);
}
```

## Example: Cloudflare Workers

```ts
export default {
  async fetch(request) {
    const res = await client.get("/users");

    return new Response(JSON.stringify(res.data));
  },
};
```

## Handling Cold Starts

Serverless functions may restart frequently.

Best practice:

- Create client outside handler

```ts
const client = createClient({...});

export const handler = async () => {
  return client.get("/users");
};
```

## Performance Tips

- Keep retries low
- Avoid heavy middleware
- Use caching where possible

## Error Handling

```ts
try {
  await client.get("/users");
} catch (error) {
  console.error(error);
}
```

## Integration Benefits

Solvix provides:

- Retry handling
- Circuit breaking
- Rate limiting
- Token refresh

All inside serverless environment.

## Summary

Solvix works efficiently in serverless environments by:

- Minimizing overhead
- Handling failures
- Providing reliability
