---
title: Request Options Reference
---

# Request Options Reference

This page documents all request-level options available in Solvix.

These options allow fine-grained control over how each request behaves, overriding client-level configuration when needed.

## Basic usage

```ts
await client.get("/users", {
  headers: {
    Authorization: "Bearer token",
  },
  timeout: 2000,
});
```

## Request options structure

```ts
{
  method?: string,
  headers?: Record<string, string>,
  body?: any,
  query?: Record<string, any>,
  timeout?: number,
  retry?: RetryOptions,
  rateLimit?: RateLimitOptions,
  circuitBreaker?: CircuitBreakerOptions,
  security?: SecurityOptions,
  shadow?: ShadowOptions,
  priority?: number,
  dedupeKey?: string,
  dependsOn?: string[],
  signal?: AbortSignal
}
```

## Core options

### headers

Override or extend request headers.

```ts
headers: {
  Authorization: "Bearer token";
}
```

### body

Request payload (auto JSON serialized).

```ts
body: {
  name: "Aditya";
}
```

### query

Query parameters.

```ts
query: {
  page: 1,
  limit: 10
}
```

### timeout

Override request timeout.

```ts
timeout: 3000;
```

## Retry options

```ts
retry: {
  retries: 2,
  baseDelay: 200
}
```

## Rate limiting

```ts
rateLimit: {
  maxRequests: 5,
  perMilliseconds: 1000
}
```

## Circuit breaker

```ts
circuitBreaker: {
  failureThreshold: 3;
}
```

## Security overrides

```ts
security: {
  enforceHTTPS: true;
}
```

## Shadow mode

```ts
shadow: {
  enabled: true,
  secondaryBaseURL: "https://shadow.api"
}
```

## Advanced options

### priority

Controls execution priority (used in queue).

```ts
priority: 10;
```

### dedupeKey

Prevents duplicate in-flight requests.

```ts
dedupeKey: "get-users";
```

### dependsOn

Wait for other requests to complete.

```ts
dependsOn: ["auth-request"];
```

### signal

Abort request manually.

```ts
const controller = new AbortController();

await client.get("/users", {
  signal: controller.signal,
});
```

## Example: full request

```ts
await client.post("/users", {
  body: { name: "Aditya" },
  headers: { Authorization: "Bearer token" },
  timeout: 2000,
  retry: { retries: 2 },
  priority: 5,
});
```

## Best practices

- Use minimal overrides
- Prefer global config for consistency
- Use dedupe for high-frequency requests
- Use dependsOn for safe orchestration

## Summary

Request options give you full control over individual requests without affecting global behavior.
