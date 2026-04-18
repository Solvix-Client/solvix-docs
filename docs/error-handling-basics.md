---
title: Error Handling Basics
---

# Error Handling Basics

Solvix provides a structured and predictable way to handle errors.

Instead of returning inconsistent responses, Solvix throws a standardized error object when a request fails.

This makes error handling easier, safer, and more reliable.


## Basic example

```ts
try {
  const response = await client.get("/invalid-endpoint");
} catch (error) {
  console.error(error.message);
}
```

## Error behavior

In Solvix:

- Successful requests → return a response object
- Failed requests → throw a structured error

This ensures consistent control flow across your application.


## Error structure

A Solvix error contains useful information about what went wrong.

```ts
{
  message: string,
  status?: number,
  isRetryable: boolean,
  attempts: number,
  response?: SolvixResponse,
  meta?: ErrorMeta
}
```


## Properties explained

### message

Human-readable error message.

```ts
console.log(error.message);
```


### status

HTTP status code (if available).

```ts
console.log(error.status); // 404, 500, etc.
```


### isRetryable

Indicates whether the request can be retried.

```ts
if (error.isRetryable) {
  // retry logic
}
```


### attempts

Number of retry attempts made before failure.

```ts
console.log(error.attempts);
```


### response (optional)

The response object (if the server responded).

```ts
console.log(error.response?.data);
```


### meta (optional)

Additional debugging and performance data.

```ts
console.log(error.meta);
```


## Example error

```ts
{
  message: "HTTP Error: 500",
  status: 500,
  isRetryable: true,
  attempts: 3,
  response: { ... },
  meta: {
    duration: 320
  }
}
```


## Handling errors safely

Always use `try/catch` when making requests.

```ts
try {
  const res = await client.get("/users");
  console.log(res.data);
} catch (error) {
  console.error("Request failed:", error.message);
}
```


## Handling specific status codes

```ts
try {
  await client.get("/users");
} catch (error) {
  if (error.status === 404) {
    console.log("Resource not found");
  }

  if (error.status === 500) {
    console.log("Server error");
  }
}
```


## Retry-aware handling

```ts
try {
  await client.get("/users");
} catch (error) {
  if (error.isRetryable) {
    console.log("Temporary issue, retry may succeed");
  }
}
```


## Accessing response data from errors

```ts
try {
  await client.get("/invalid");
} catch (error) {
  console.log(error.response?.data);
}
```

This is useful when APIs return error details in the response body.


## Network errors

Some errors occur before a response is received.

Examples:

- Network failure
- Timeout
- DNS issues

In these cases:

- `status` may be undefined
- `response` may be undefined


## Timeout errors

```ts
await client.get("/slow-api", {
  timeout: 1000,
});
```

If the request exceeds the timeout:

- An error is thrown
- `isRetryable` may be true


## Why this matters

Solvix improves error handling by:

- Standardizing error structure
- Providing retry awareness
- Including debugging metadata
- Avoiding inconsistent error formats


## Comparison with fetch

### fetch

```ts
const res = await fetch("/api");

if (!res.ok) {
  throw new Error("Request failed");
}
```

### Solvix

```ts
try {
  await client.get("/api");
} catch (error) {
  console.log(error.message);
}
```

Solvix handles error detection automatically.


## Best practices

- Always use `try/catch`
- Use `status` for conditional handling
- Use `isRetryable` for retry decisions
- Log `meta` for debugging
- Avoid silent failures


## Summary

Solvix provides a structured and reliable error handling system.

This allows developers to:

- Handle failures consistently
- Debug issues easily
- Build resilient applications
