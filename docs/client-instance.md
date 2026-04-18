---
title: Client Instance
---

# Client Instance

The client instance is the core entry point for using Solvix.

It is created using the `createClient` function and is responsible for managing all requests, configurations, and internal systems.

## Creating a client

```ts
import { createClient } from "solvix";

const client = createClient({
  baseURL: "https://api.example.com",
});
```

## Basic usage

```ts
const response = await client.get("/users");
console.log(response.data);
```

## Available methods

The client provides standard HTTP methods:

```ts
client.get(url, options?)
client.post(url, options?)
client.put(url, options?)
client.delete(url, options?)
client.patch(url, options?)
```

## Request example

```ts
await client.post("/users", {
  body: {
    name: "John Doe",
  },
});
```

## Global configuration

Configuration passed during client creation applies to all requests.

```ts
const client = createClient({
  baseURL: "https://api.example.com",
  headers: {
    Authorization: "Bearer token",
  },
  timeout: 5000,
});
```

## Per-request override

You can override configuration per request.

```ts
await client.get("/users", {
  timeout: 2000,
  headers: {
    Authorization: "Bearer new-token",
  },
});
```

## Configuration merging

Solvix merges:

- Global config (client level)
- Request config (per call)

Priority:

Request config > Client config

## Internal flow (simplified)

1. Create request context
2. Apply middleware
3. Apply security rules
4. Execute transport
5. Handle retry / rate limit / circuit breaker
6. Parse response
7. Return structured response

## Example: full usage

```ts
const client = createClient({
  baseURL: "https://api.example.com",
  retry: { retries: 3 },
});

const response = await client.get("/users");

console.log(response.data);
```

## Best practices

- Use a single client instance per app
- Keep global config minimal
- Override only when needed
- Avoid recreating client frequently

## Summary

The client instance is the central interface for interacting with Solvix.

It handles:

- Requests
- Configuration
- Resilience
- Security
- Observability
