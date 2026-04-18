---
title: Rate Limiting
---

# Rate Limiting

Rate limiting in Solvix controls how many requests can be executed within a specific time window.

It prevents API overload, protects backend systems, and ensures stable performance under high traffic.

## Why Rate Limiting?

In real-world systems:

- Too many requests can crash APIs
- External services may enforce limits
- Traffic spikes can degrade performance

Rate limiting ensures controlled and predictable request flow.

## Basic usage

```ts
const client = createClient({
  rateLimit: {
    maxRequests: 10,
    perMilliseconds: 1000,
  },
});
```

## Configuration

```ts
rateLimit: {
  maxRequests: number,
  perMilliseconds: number
}
```

## Options explained

### maxRequests

Maximum number of requests allowed in the time window.

```ts
maxRequests: 10;
```

### perMilliseconds

Time window in milliseconds.

```ts
perMilliseconds: 1000;
```

## How it works

Solvix uses a token bucket strategy:

1. Tokens represent allowed requests
2. Each request consumes one token
3. Tokens refill over time
4. If no tokens → request waits

## Example

```ts
const client = createClient({
  rateLimit: {
    maxRequests: 5,
    perMilliseconds: 1000,
  },
});
```

This means:

- Only 5 requests per second
- Additional requests are queued

## Queue behavior

When limit is exceeded:

- Requests are delayed (not dropped)
- Executed when tokens are available

## Integration with other systems

Rate limiting works with:

- Retry Engine
- Circuit Breaker
- Priority Queue

## Example with burst control

```ts
const client = createClient({
  rateLimit: {
    maxRequests: 20,
    perMilliseconds: 1000,
  },
});
```

Handles burst traffic safely.

## Best practices

- Match API provider limits
- Avoid too strict limits
- Combine with retry
- Monitor traffic patterns

## Summary

Rate limiting ensures stable and controlled request execution under load.
