---
title: Secure Configuration Examples
---

# Secure Configuration Examples

This guide provides production-ready configuration examples combining multiple Solvix features for secure, reliable, and high-performance API communication.

## Why Secure Configuration Matters

In real-world systems:

- APIs may be unstable
- Traffic can spike
- Tokens expire
- Security risks exist

A proper configuration ensures:

- Stability
- Security
- Performance
- Observability

## Basic Secure Setup

```ts
const client = createClient({
  baseURL: "https://api.example.com",

  security: {
    enforceHTTPS: true,
    allowedDomains: ["api.example.com"],
    blockInsecureHeaders: true,
    maxBodySize: 1024 * 1024,
    maxResponseSize: 1024 * 1024,
    redactSnapshot: true,
  },

  retry: {
    retries: 3,
  },
});
```

## Advanced Production Setup

```ts
const client = createClient({
  baseURL: "https://api.example.com",

  retry: {
    retries: 5,
  },

  rateLimit: {
    capacity: 50,
    refillRate: 10,
    interval: 1000,
  },

  circuitBreaker: {
    failureThreshold: 5,
    failureRate: 0.5,
    rollingWindow: 10000,
    minimumRequests: 10,
    resetTimeout: 5000,
  },

  security: {
    enforceHTTPS: true,
    allowedDomains: ["api.example.com"],
    blockInsecureHeaders: true,
    maxBodySize: 2 * 1024 * 1024,
    maxResponseSize: 2 * 1024 * 1024,
    redactSnapshot: true,
  },

  snapshot: {
    enabled: true,
  },
});
```

## Token-Based Auth Setup

```ts
const client = createClient({
  auth: {
    attachToken: (token, ctx) => {
      ctx.options.fetch.headers = {
        ...ctx.options.fetch.headers,
        Authorization: `Bearer ${token}`,
      };
    },
    refreshToken: async () => {
      return "new-token";
    },
    shouldRefresh: (error) => {
      return error.status === 401;
    },
  },
});
```

## Offline + Retry Setup

```ts
const client = createClient({
  retry: { retries: 3 },
  offline: { enabled: true },
});
```

## Performance Optimized Setup

```ts
const client = createClient({
  rateLimit: {
    capacity: 100,
    refillRate: 20,
    interval: 1000,
  },
  queue: {
    maxQueueSize: 1000,
  },
  retry: {
    retries: 2,
  },
});
```

## Debugging + Observability Setup

```ts
const client = createClient({
  snapshot: {
    enabled: true,
  },
  profiling: {
    enabled: true,
  },
});
```

## Best Practices

- Enable all security features in production
- Use retry + circuit breaker together
- Limit request/response sizes
- Use rate limiting for high traffic
- Enable snapshot only when needed

## Summary

Secure configuration combines:

- Security layer
- Resilience layer
- Performance controls
- Observability

This ensures your system is production-ready.
