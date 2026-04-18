---
title: Retry Engine
---

# Retry Engine

The Retry Engine in Solvix ensures that transient failures do not break your application.

It automatically retries failed requests based on configurable strategies, making your system more resilient.

## Why Retry Matters

In real-world systems, failures are common:

- Network instability
- Temporary server errors
- Rate limits
- Timeouts

Retrying intelligently can significantly improve success rates.

## Basic usage

```ts
const client = createClient({
  retry: {
    retries: 3,
  },
});
```

## Retry configuration

```ts
retry: {
  retries: number,
  baseDelay?: number,
  maxDelay?: number,
  shouldRetry?: (error) => boolean
}
```

## Options explained

### retries

Number of retry attempts.

```ts
retries: 3;
```

### baseDelay

Initial delay (ms) before retry.

```ts
baseDelay: 300;
```

### maxDelay

Maximum delay cap.

```ts
maxDelay: 2000;
```

### shouldRetry

Custom retry logic.

```ts
shouldRetry: (error) => {
  return error.status >= 500;
};
```

## Exponential backoff

Solvix uses exponential backoff:

```
delay = baseDelay * 2^attempt
```

This prevents overwhelming servers.

## Example

```ts
const client = createClient({
  retry: {
    retries: 3,
    baseDelay: 200,
  },
});
```

## Retry flow

1. Request fails
2. Check retry condition
3. Wait (backoff)
4. Retry request
5. Repeat until success or limit reached

## Retry + Error integration

```ts
try {
  await client.get("/api");
} catch (error) {
  console.log(error.attempts);
}
```

## Best practices

- Avoid high retry counts
- Use retry only for transient errors
- Combine with circuit breaker
- Use custom logic when needed

## Summary

The Retry Engine improves reliability by automatically handling temporary failures.
