---
title: Configuration Overview
---

# Configuration Overview

Solvix is built to be highly configurable.

It allows developers to control behavior across retries, security, performance, transport, and request lifecycle — all from a single configuration object.


## Basic configuration

```ts
import { createClient } from "solvix";

const client = createClient({
  baseURL: "https://api.example.com",
});
```


## Configuration structure

```ts
{
  baseURL?: string,
  headers?: Record<string, string>,
  timeout?: number,
  retry?: RetryOptions,
  rateLimit?: RateLimitOptions,
  circuitBreaker?: CircuitBreakerOptions,
  security?: SecurityOptions,
  shadow?: ShadowOptions,
  transport?: CustomTransport,
  hooks?: Hooks
}
```


## Core options

### baseURL

Base URL for all requests.

```ts
baseURL: "https://api.example.com";
```


### headers

Default headers applied to every request.

```ts
headers: {
  Authorization: "Bearer token",
  "Content-Type": "application/json"
}
```


### timeout

Maximum time (ms) before request fails.

```ts
timeout: 5000;
```


## Retry configuration

Controls automatic retries.

```ts
retry: {
  retries: 3,
  baseDelay: 300
}
```

Features:

- Exponential backoff
- Retry conditions
- Failure handling


## Rate limiting

Controls request throughput.

```ts
rateLimit: {
  maxRequests: 10,
  perMilliseconds: 1000
}
```

Prevents:

- API overload
- Traffic bursts


## Circuit breaker

Stops requests when service is unstable.

```ts
circuitBreaker: {
  failureThreshold: 5,
  cooldownTime: 10000
}
```

Prevents cascading failures.


## Security configuration

Adds protection layers.

```ts
security: {
  enforceHTTPS: true,
  allowedDomains: ["api.example.com"],
  maxBodySize: 1_000_000
}
```

Includes:

- HTTPS enforcement
- Domain allowlist
- Payload guards


## Shadow mode

Send request to secondary backend.

```ts
shadow: {
  enabled: true,
  secondaryBaseURL: "https://shadow-api.com",
  compareResponse: true
}
```

Used for:

- Testing new systems
- Safe migrations


## Custom transport

Override default fetch behavior.

```ts
transport: async (ctx) => {
  return fetch(ctx.url, ctx.options);
};
```

Useful for:

- Axios integration
- Mocking
- Testing


## Hooks

Modify request/response lifecycle.

```ts
hooks: {
  beforeRequest: (ctx) => {},
  afterResponse: (res) => {},
  onError: (err) => {}
}
```


## Per-request override

```ts
await client.get("/users", {
  timeout: 2000,
  retry: { retries: 1 },
});
```

Overrides global config.


## Example: full config

```ts
const client = createClient({
  baseURL: "https://api.example.com",
  timeout: 5000,
  retry: { retries: 3 },
  rateLimit: { maxRequests: 5, perMilliseconds: 1000 },
  security: {
    enforceHTTPS: true,
    allowedDomains: ["api.example.com"],
  },
});
```


## Why configuration matters

Solvix allows:

- Fine-grained control
- Production safety
- Flexibility across environments


## Best practices

- Keep global config minimal
- Override per request when needed
- Enable security in production
- Use retry carefully


## Summary

Solvix configuration provides a centralized way to control behavior across the entire request lifecycle.

