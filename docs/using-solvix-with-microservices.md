---
title: Using Solvix With Microservices
---

# Using Solvix with Microservices

This guide explains how to use Solvix in microservices architecture for reliable and scalable service-to-service communication.

## Why use Solvix in Microservices?

Microservices systems require:

- Reliable inter-service communication
- Fault tolerance
- Retry handling
- Circuit breaking
- Load control

Solvix is designed to handle these challenges out of the box.

## Basic Setup

```ts
import { createClient } from "solvix";

export const client = createClient({
  baseURL: "http://user-service",
  retry: { retries: 3 },
  circuitBreaker: {
    failureThreshold: 5,
    resetTimeout: 5000,
  },
});
```

## Example: Service-to-Service Call

```ts
export async function getUser(id: string) {
  const res = await client.get(`/users/${id}`);
  return res.data;
}
```

## Handling Failures

```ts
try {
  const user = await client.get("/users/1");
} catch (error) {
  console.error("Service failed:", error);
}
```

## Retry + Circuit Breaker Pattern

```ts
const client = createClient({
  retry: { retries: 3 },
  circuitBreaker: {
    failureThreshold: 5,
    resetTimeout: 5000,
  },
});
```

This ensures:

- Temporary failures are retried
- Persistent failures stop quickly

## Timeout Handling

```ts
const client = createClient({
  timeout: 3000,
});
```

Prevents hanging service calls.

## Load Control with Rate Limiting

```ts
const client = createClient({
  rateLimit: {
    capacity: 50,
    refillRate: 10,
    interval: 1000,
  },
});
```

Prevents overwhelming downstream services.

## Authentication Between Services

```ts
const client = createClient({
  transformRequest: (ctx) => {
    ctx.options.fetch.headers = {
      ...ctx.options.fetch.headers,
      Authorization: "Bearer internal-token",
    };
    return ctx;
  },
});
```

## Observability with Events

```ts
import { SolvixBus } from "solvix";

SolvixBus.on((event) => {
  console.log(event.type, event.context.url);
});
```

## Best Practices

- Use retries only for transient failures
- Combine retry + circuit breaker
- Always set timeouts
- Use rate limiting to protect services
- Centralize client configuration

## Architecture Example

Service A → Solvix → Service B

- Retry handles transient errors
- Circuit breaker prevents cascading failures
- Rate limiter controls traffic

## Summary

Solvix is well-suited for microservices by providing:

- Reliable communication
- Built-in resilience
- Performance optimization
- Observability
