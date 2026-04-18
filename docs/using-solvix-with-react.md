---
title: Using Solvix With React
---

# Using Solvix with React

This guide explains how to use Solvix in React applications with clear patterns and best practices.

## Why use Solvix in React?

React apps often deal with:

- Multiple API calls
- Loading states
- Error handling
- Retry logic
- Performance optimization

Solvix handles these problems efficiently.

## Basic Setup

```ts
import { createClient } from "solvix";

export const client = createClient({
  baseURL: "https://api.example.com",
  retry: { retries: 2 },
});
```

## Example: Fetch Data in Component

```tsx
import { useEffect, useState } from "react";
import { client } from "./client";

export default function Users() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .get("/users")
      .then((res) => setData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

## Handling Errors

```tsx
try {
  const res = await client.get("/users");
} catch (error) {
  console.error(error.message);
}
```

## Using with Custom Hook

```ts
function useApi(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    client.get(url).then((res) => setData(res.data));
  }, [url]);

  return data;
}
```

## Advanced Pattern: Global Client

```ts
// api/client.ts
export const client = createClient({
  baseURL: "/api",
  retry: { retries: 3 },
});
```

Use everywhere:

```ts
import { client } from "@/api/client";
```

## Best Practices

- Create a single shared client
- Use hooks for reuse
- Handle loading + error states
- Avoid duplicate requests (Solvix handles dedupe)

## Summary

Using Solvix in React simplifies API handling and improves reliability with built-in retry, dedupe, and performance features.
