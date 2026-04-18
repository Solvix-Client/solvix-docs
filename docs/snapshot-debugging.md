---
title: Snapshot Debugging
---

# Snapshot Debugging

Snapshot Debugging in Solvix provides a detailed view of each request lifecycle.

It helps developers understand exactly what happened during a request — including retries, failures, timing, and transformations.

## Why Snapshot Debugging?

In production systems:

- Requests fail unpredictably
- Retries may hide root causes
- Debugging distributed systems is hard

Snapshots provide full visibility into request execution.

## Basic usage

```ts
const client = createClient({
  snapshot: {
    enabled: true,
  },
});
```

## What is included in a snapshot?

A snapshot contains:

- Request details (URL, method, headers)
- Response details (status, headers)
- Retry attempts
- Errors
- Timeline events
- Duration

## Example

```ts
const response = await client.get("/users");

console.log(response.meta.snapshot);
```

## Sample Snapshot Structure

```json
{
  "url": "/users",
  "method": "GET",
  "status": 200,
  "retries": 1,
  "duration": 120,
  "timeline": ["created", "queued", "transportStart", "completed"]
}
```

## Timeline Events

Common events include:

- created
- queued
- dequeued
- transportStart
- responseReceived
- parseStart
- parseEnd
- completed
- failed

## Use cases

### Debugging failures

Identify exactly where a request failed

### Performance analysis

Measure request lifecycle timings

### Observability

Track retries and system behavior

## Combining with Redaction

```ts
const client = createClient({
  snapshot: { enabled: true },
  security: { redactSnapshot: true },
});
```

This ensures sensitive data is hidden.

## Best practices

- Enable during debugging
- Disable in high-performance production paths if not needed
- Combine with profiling for deeper insights

## Summary

Snapshot Debugging provides deep visibility into request execution, making debugging and performance analysis easier.
