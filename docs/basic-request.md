---
title: Basic Request
---

# Basic Request

Solvix provides a simple and consistent API for making HTTP requests.

This section explains how to send requests, pass data, and configure behavior.

## GET Request

```ts
import { createClient } from "solvix";

const client = createClient({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const response = await client.get("/posts");
console.log(response.data);
```

## Query Parameters

```ts
const response = await client.get("/posts", {
  params: {
    userId: 1,
  },
});
```

Result:

```
/posts?userId=1
```

## POST Request

```ts
const response = await client.post("/posts", {
  title: "New Post",
  body: "Hello world",
  userId: 1,
});
```

## Headers

```ts
const response = await client.get("/posts", {
  headers: {
    Authorization: "Bearer token",
  },
});
```

## Other Methods

### PUT

```ts
await client.put("/posts/1", {
  title: "Updated",
});
```

### PATCH

```ts
await client.patch("/posts/1", {
  title: "Partial Update",
});
```

### DELETE

```ts
await client.delete("/posts/1");
```

## Request Options

```ts
await client.get("/posts", {
  timeout: 5000,
  retry: { retries: 2 },
});
```

## Base URL

```ts
const client = createClient({
  baseURL: "https://api.example.com",
});

await client.get("/users");
```

## Absolute URL

```ts
await client.get("https://api.example.com/users");
```

## Full Example

```ts
const response = await client.post(
  "/posts",
  { title: "Solvix Example" },
  {
    params: { preview: true },
    headers: { Authorization: "Bearer token" },
    retry: { retries: 2 },
  },
);

console.log(response.data);
```

## Summary

- Supports all HTTP methods
- Handles params, headers, body
- Built-in retry and lifecycle handling
