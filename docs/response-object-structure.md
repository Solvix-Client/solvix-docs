---
title: Response Object Structure
---

# Response Object Structure

Solvix returns a structured and enriched response object for every successful request.

This structure is designed to provide not only the response data, but also deep insights into request execution, performance, and debugging.

## Basic example

```ts
const response = await client.get("/users");

console.log(response.data);
```

## Response structure

```ts
{
  data: any,
  status: number,
  headers: Headers,
  meta: {
    startTime: number,
    endTime: number,
    duration: number,
    attempt: number,
    retries: number,
    runtime: string,
    timeline: TimelineEvent[],
    profile: PerformanceProfile,
    snapshot: RequestSnapshot
  }
}
```

## Core fields

### data

The parsed response body.

```ts
console.log(response.data);
```

### status

HTTP status code.

```ts
console.log(response.status);
```

### headers

Response headers object.

```ts
console.log(response.headers.get("content-type"));
```

## Meta object (advanced)

The `meta` field is where Solvix becomes powerful.

### startTime & endTime

Timestamps for request lifecycle.

```ts
console.log(response.meta.startTime);
console.log(response.meta.endTime);
```

### duration

Total time taken.

```ts
console.log(response.meta.duration); // ms
```

### attempt & retries

Retry tracking.

```ts
console.log(response.meta.attempt);
console.log(response.meta.retries);
```

### runtime

Execution environment.

```ts
console.log(response.meta.runtime); // node | browser | edge
```

## Timeline tracking

Tracks each stage of request execution.

```ts
console.log(response.meta.timeline);
```

Includes:

- request:start
- request:queued
- request:network
- request:response
- request:end

## Performance profile

Detailed timing breakdown.

```ts
console.log(response.meta.profile);
```

Includes:

- totalTime
- networkTime
- queueWaitTime
- rateLimitWaitTime
- parseTime

## Snapshot (debugging)

Full request snapshot for debugging.

```ts
console.log(response.meta.snapshot);
```

Includes:

- URL
- method
- headers
- timing
- retries

## Example response

```ts
{
  data: { id: 1, name: "User" },
  status: 200,
  headers: Headers {},
  meta: {
    duration: 120,
    retries: 1,
    profile: {
      totalTime: 120,
      networkTime: 100
    }
  }
}
```

## Why this matters

Unlike traditional clients, Solvix provides:

- Deep observability
- Built-in performance insights
- Debugging without external tools

## Best practices

- Use `data` for UI logic
- Use `meta` for debugging
- Use `profile` for performance optimization
- Use `timeline` for tracing

## Summary

The Solvix response object is more than just data — it is a complete execution report.
