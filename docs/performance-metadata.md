---
title: Performance Metadata
---

# Performance Metadata

Performance Metadata in Solvix provides detailed information about every request execution.

It is returned in the `meta` field of the response and helps developers understand behavior, performance, and internal processing.

## Why Performance Metadata?

In production systems:

- You need visibility into request execution
- Debugging requires internal context
- Performance analysis needs structured data

Performance metadata gives all of this in a single place.

## Basic usage

```ts
const response = await client.get("/users");

console.log(response.meta);
```

## What does `meta` include?

The `meta` object contains:

- startTime
- endTime
- duration
- retries
- attempt
- runtime
- timeline
- profile
- snapshot

## Example

```ts
{
  startTime: 1700000000000,
  endTime: 1700000000120,
  duration: 120,
  retries: 1,
  attempt: 0,
  runtime: "node",
  timeline: [...],
  profile: {...},
  snapshot: {...}
}
```

## Key Fields Explained

### startTime / endTime

Timestamps for request lifecycle.

### duration

Total time taken (ms).

### retries

Number of retry attempts.

### attempt

Current attempt number.

### runtime

Environment (node, browser, edge).

## Timeline

```ts
response.meta.timeline;
```

Tracks lifecycle events.

## Profile

```ts
response.meta.profile;
```

Provides performance metrics like:

- network time
- parse time
- queue delay

## Snapshot

```ts
response.meta.snapshot;
```

Full debug snapshot of request lifecycle.

## Use cases

### Debugging

Understand failures and retries

### Monitoring

Track performance over time

### Optimization

Identify bottlenecks

## Best practices

- Use meta for debugging and analytics
- Avoid logging sensitive data (use redaction)
- Combine with profiling for deep insights

## Summary

Performance Metadata gives full visibility into request execution, making Solvix highly transparent and debuggable.
