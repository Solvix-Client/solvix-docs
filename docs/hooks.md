---
title: Hooks
---

# Hooks

Hooks allow you to intercept and customize the request lifecycle in Solvix.

They provide a powerful way to inject logic before a request is sent, after a response is received, or when an error occurs.

## Why Hooks?

Hooks are useful for:

- Adding authentication dynamically
- Logging requests and responses
- Transforming data
- Handling errors globally
- Integrating monitoring tools

## Basic usage

```ts
const client = createClient({
  hooks: {
    beforeRequest: (ctx) => {},
    afterResponse: (res) => {},
    onError: (err) => {},
  },
});
```

## Available hooks

### beforeRequest

Runs before the request is sent.

```ts
beforeRequest: (ctx) => {
  ctx.options.headers = {
    ...ctx.options.headers,
    Authorization: "Bearer token",
  };
};
```

Use cases:

- Add headers
- Modify request payload
- Inject tokens

### afterResponse

Runs after receiving the response.

```ts
afterResponse: (response) => {
  console.log("Response received:", response.status);
};
```

Use cases:

- Logging
- Response transformation
- Metrics collection

### onError

Runs when a request fails.

```ts
onError: (error) => {
  console.error("Request failed:", error.message);
};
```

Use cases:

- Global error handling
- Logging failures
- Alert systems

## Example: Auth token injection

```ts
const client = createClient({
  hooks: {
    beforeRequest: (ctx) => {
      ctx.options.headers = {
        ...ctx.options.headers,
        Authorization: `Bearer ${getToken()}`,
      };
    },
  },
});
```

## Example: Logging system

```ts
hooks: {
  beforeRequest: (ctx) => {
    console.log("Request:", ctx.url);
  },
  afterResponse: (res) => {
    console.log("Response:", res.status);
  }
}
```

## Hook execution order

1. beforeRequest
2. Request execution
3. afterResponse OR onError

## Best practices

- Keep hooks lightweight
- Avoid heavy computation
- Use hooks for cross-cutting concerns
- Do not mutate deeply unless necessary

## Summary

Hooks provide a flexible way to extend Solvix without modifying core logic.

They are essential for building scalable and maintainable systems.
