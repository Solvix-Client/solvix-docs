---
title: Profiling Mode
---

# Profiling Mode

Profiling Mode in Solvix provides advanced performance insights by analyzing request execution data.

It builds on Timeline Tracking and gives a summarized performance profile for each request.


## Why Profiling Mode?

In production systems:

- You need deeper performance insights
- Timeline alone is not enough
- You want aggregated metrics

Profiling mode helps identify bottlenecks and optimize performance.


## Basic usage

```ts
const client = createClient({
  profiling: {
    enabled: true,
  },
});
```


## What Profiling Provides

When enabled, Solvix generates:

- Total request duration
- Retry count
- Network time
- Parsing time
- Queue delay


## Example

```ts
const response = await client.get("/users");

console.log(response.meta.profile);
```


## Sample Profile Output

```json
{
  "totalTime": 120,
  "networkTime": 80,
  "parseTime": 20,
  "queueTime": 10,
  "retries": 1
}
```


## How it works

1. Timeline events are recorded
2. Durations between events are calculated
3. Metrics are aggregated into a profile


## Key Metrics Explained

- totalTime → total lifecycle duration
- networkTime → time spent in network request
- parseTime → time spent parsing response
- queueTime → delay before execution
- retries → number of retry attempts


## Use cases

### Performance optimization

Identify slow parts of request lifecycle

### Monitoring

Track system performance over time

### Debugging

Analyze retry behavior and delays


## Combining with Snapshot

```ts
const client = createClient({
  snapshot: { enabled: true },
  profiling: { enabled: true },
});
```


## Best practices

- Enable during performance testing
- Use with benchmarking tools
- Avoid in high-throughput production paths unless needed


## Summary

Profiling Mode provides structured performance insights, helping you optimize request handling.

