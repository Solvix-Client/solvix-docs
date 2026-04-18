---
title: Circuit Breaker
---

# Circuit Breaker

The Circuit Breaker in Solvix protects your application from cascading failures when a service becomes unstable.

It temporarily stops requests to failing services and allows them to recover before retrying.

## Why Circuit Breaker?

In production systems:

- APIs can fail repeatedly
- Retrying continuously can overload services
- Downstream systems can collapse

Circuit breaker prevents this by "breaking the circuit".

## Basic usage

```ts
const client = createClient({
  circuitBreaker: {
    failureThreshold: 5,
    cooldownTime: 10000,
  },
});
```

## Configuration

```ts
circuitBreaker: {
  failureThreshold: number,
  cooldownTime: number
}
```

## Options explained

### failureThreshold

Number of consecutive failures before circuit opens.

```ts
failureThreshold: 5;
```

### cooldownTime

Time (ms) before retrying requests after circuit opens.

```ts
cooldownTime: 10000;
```

## How it works

1. Requests succeed → circuit stays closed
2. Failures increase → threshold reached
3. Circuit opens → requests are blocked
4. Cooldown period starts
5. After cooldown → circuit allows limited requests
6. If successful → circuit closes again

## States

### Closed

- Normal operation
- Requests flow normally

### Open

- Requests blocked
- Immediate failure returned

### Half-Open

- Limited requests allowed
- Used to test recovery

## Example

```ts
const client = createClient({
  circuitBreaker: {
    failureThreshold: 3,
    cooldownTime: 5000,
  },
});
```

## Integration with retry

Circuit breaker works with retry engine:

- Retry handles temporary failures
- Circuit breaker handles persistent failures

## Error behavior

When circuit is open:

```ts
try {
  await client.get("/api");
} catch (error) {
  console.log(error.message); // Circuit open
}
```

## Best practices

- Set reasonable thresholds
- Combine with retry and rate limiting
- Monitor failure patterns
- Avoid too aggressive blocking

## Summary

Circuit breaker prevents system overload by stopping requests to failing services.
