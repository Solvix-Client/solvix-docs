---
title: Timeout Handling
---

# Timeout Handling

Timeout handling in Solvix ensures that requests do not hang indefinitely.

It allows you to define how long a request should wait before being aborted, improving system responsiveness and reliability.

## Why Timeout Matters

In real-world systems:

- APIs can become slow or unresponsive
- Network delays can block execution
- Hanging requests can degrade user experience

Timeouts ensure your application remains responsive.

## Basic usage

```ts
const client = createClient({
  timeout: 5000,
});
```

## Per-request timeout

```ts
await client.get("/users", {
  timeout: 2000,
});
```

## How it works

1. Request starts
2. Timer begins
3. If response arrives → success
4. If timeout reached → request aborted

## Abort behavior

Solvix uses AbortController internally.

```ts
try {
  await client.get("/slow-api", {
    timeout: 1000,
  });
} catch (error) {
  console.log(error.message); // Timeout error
}
```

## Integration with retry

Timeout errors can trigger retries:

```ts
retry: {
  retries: 2;
}
```

## Example

```ts
const client = createClient({
  timeout: 3000,
  retry: { retries: 2 },
});
```

## Best practices

- Set reasonable timeout values
- Avoid very low timeouts
- Combine with retry for resilience
- Use shorter timeout for critical paths

## Summary

Timeout handling prevents requests from hanging and improves overall system responsiveness.
