---
title: Request Priority Queue
---

# Request Priority Queue

The Request Priority Queue in Solvix allows you to control the execution order of requests based on priority.

It ensures that important requests are processed before less critical ones, especially under high load.

## Why Priority Queue?

In real-world systems:

- Not all requests are equal
- Some requests are critical (auth, payments)
- Some requests can wait (analytics, logs)

Priority queues ensure optimal resource usage.

## Basic usage

```ts
await client.get("/users", {
  priority: 10,
});
```

## How priority works

- Lower value = higher priority
- Higher value = lower priority

Example:

```ts
priority: 1; // Highest priority
priority: 10; // Lower priority
```

## Queue behavior

When concurrency limit is reached:

- Requests are queued
- Sorted based on priority
- Executed in order

## Example

```ts
await client.get("/critical", { priority: 1 });
await client.get("/normal", { priority: 5 });
await client.get("/low", { priority: 10 });
```

Execution order:

1. /critical
2. /normal
3. /low

## Integration with concurrency

Priority queue works with:

- Rate Limiting
- Retry Engine
- Circuit Breaker

## Overflow strategies

Depending on configuration:

- FIFO (default)
- Drop oldest
- Drop lowest priority
- Reject new requests

## Example with strategy

```ts
const client = createClient({
  queue: {
    concurrency: 5,
    maxQueueSize: 100,
    strategy: "drop-lowest-priority",
  },
});
```

## Best practices

- Use priority for critical flows
- Avoid overusing high priority
- Balance system load
- Monitor queue size

## Summary

Priority Queue ensures efficient request execution under load by prioritizing critical operations.
