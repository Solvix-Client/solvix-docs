---
title: Timeline Tracking
---

# Timeline Tracking

Timeline Tracking in Solvix records every stage of a request lifecycle with precise timestamps.

It helps developers understand exactly how long each step of a request takes.

## Why Timeline Tracking?

In production systems:

- Performance bottlenecks are hard to detect
- Network delays may vary
- Parsing and retries add overhead

Timeline tracking gives detailed insight into request execution.

## Basic usage

```ts
const client = createClient({
  profiling: {
    enabled: true,
  },
});
```

## How it works

Solvix internally records timestamps for key lifecycle events.

Each event is stored in a timeline array inside `meta`.

## Example

```ts
const response = await client.get("/users");

console.log(response.meta.timeline);
```

## Sample Timeline

```json
[
  "created",
  "queued",
  "dequeued",
  "transportStart",
  "responseReceived",
  "parseStart",
  "parseEnd",
  "completed"
]
```

## Key Events Explained

- created → request initialized
- queued → added to queue
- dequeued → picked for execution
- transportStart → network request started
- responseReceived → response arrived
- parseStart → parsing begins
- parseEnd → parsing completed
- completed → request finished

## Measuring durations

```ts
const duration = response.meta.duration;
```

You can also calculate durations between events.

## Use cases

### Performance debugging

Identify slow stages

### Network analysis

Measure API latency

### Optimization

Improve request pipeline

## Combining with Snapshot

```ts
const client = createClient({
  snapshot: { enabled: true },
  profiling: { enabled: true },
});
```

## Best practices

- Enable in development and testing
- Use with benchmarking tools
- Avoid heavy logging in production

## Summary

Timeline Tracking provides a clear breakdown of request execution, helping optimize performance.
