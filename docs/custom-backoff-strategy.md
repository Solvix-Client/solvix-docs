---
title: Custom Backoff Strategy
---

# Custom Backoff Strategy

Custom Backoff Strategy in Solvix allows you to control the delay between retry attempts.

Instead of retrying immediately, backoff strategies help space out retries to avoid overwhelming systems.

## What is Backoff?

Backoff is the delay applied between retry attempts.

It helps:

- Reduce server load
- Prevent retry storms
- Improve system stability

## Why Custom Backoff?

In real-world systems:

- Immediate retries can cause cascading failures
- APIs may need time to recover
- Different systems require different retry patterns

Custom backoff gives full control over retry timing.

## Basic Usage

```ts
const client = createClient({
  retry: {
    retries: 3,
    backoff: (attempt) => {
      return attempt * 100; // linear delay
    },
  },
});
```

## Example: Linear Backoff

```ts
backoff: (attempt) => attempt * 200;
```

Retry delays:

- 1st retry → 200ms
- 2nd retry → 400ms
- 3rd retry → 600ms

## Example: Exponential Backoff

```ts
backoff: (attempt) => Math.pow(2, attempt) * 100;
```

Retry delays:

- 1st retry → 200ms
- 2nd retry → 400ms
- 3rd retry → 800ms

## Example: Exponential with Cap

```ts
backoff: (attempt) => {
  const delay = Math.pow(2, attempt) * 100;
  return Math.min(delay, 2000);
};
```

## Example: Jitter (Recommended)

```ts
backoff: (attempt) => {
  const base = Math.pow(2, attempt) * 100;
  return base + Math.random() * 100;
};
```

Prevents synchronized retry spikes.

## Execution Flow

1. Request fails
2. Retry condition checked
3. Backoff delay calculated
4. Wait before next attempt

## Important Rules

- Always return delay in milliseconds
- Avoid extremely large delays
- Use jitter for distributed systems

## Best Practices

- Use exponential backoff for unstable APIs
- Add jitter to avoid retry storms
- Cap maximum delay
- Combine with circuit breaker

## Integration

Works with:

- Retry engine
- Circuit breaker
- Rate limiting

## Summary

Custom Backoff Strategy ensures controlled and stable retry behavior, preventing system overload and improving reliability.
