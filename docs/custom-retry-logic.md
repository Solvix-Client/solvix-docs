---
title: Custom Retry Logic
---

# Custom Retry Logic

Custom Retry Logic in Solvix allows you to fully control how retries behave when a request fails.

Instead of relying only on default retry behavior, you can define your own conditions and strategies.

## What is Custom Retry Logic?

It is a function that determines:

- When to retry
- How many times to retry
- Under what conditions retries should stop

## Why Custom Retry Logic?

In real-world systems:

- Not all errors should be retried
- Some APIs require special handling
- You may want smarter retry conditions

Custom retry logic gives full control.

## Basic Usage

```ts
const client = createClient({
  retry: {
    retries: 3,
    shouldRetry: (error, ctx) => {
      return error.status >= 500;
    },
  },
});
```

## Example: Retry Only Server Errors

```ts
shouldRetry: (error) => {
  return error.status >= 500;
};
```

## Example: Retry Network Failures Only

```ts
shouldRetry: (error) => {
  return error.code === "NETWORK_ERROR";
};
```

## Example: Conditional Retry Based on URL

```ts
shouldRetry: (error, ctx) => {
  if (ctx.url.includes("/payments")) {
    return false;
  }

  return error.status >= 500;
};
```

## Retry Count Control

```ts
retry: {
  retries: 5;
}
```

Defines maximum retry attempts.

## Combining with Backoff

```ts
retry: {
  retries: 3,
  shouldRetry: (error) => error.status >= 500
}
```

Backoff strategies can be configured separately.

## Important Rules

- Keep logic lightweight
- Avoid infinite retry loops
- Always define clear conditions

## Common Mistakes

### Retrying all errors

```ts
shouldRetry: () => true;
```

This may cause infinite retries.

### Ignoring status codes

Always check error type or status.

## Integration

Works with:

- Circuit breaker
- Rate limiter
- Token refresh
- Middleware

## Use Cases

- Handling flaky APIs
- Avoiding retries for critical endpoints
- Smart failure recovery

## Summary

Custom Retry Logic provides fine-grained control over retry behavior, making your application more resilient and efficient.
