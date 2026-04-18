---
title: Middleware System
---

# Middleware System

The Middleware System in Solvix allows you to intercept, modify, and control requests and responses at different stages of execution.

It provides a powerful way to customize behavior without modifying core logic.

## What is Middleware?

Middleware is a function that runs between the request initiation and the final response.

It can:

- Modify request data
- Transform responses
- Handle errors
- Add logging or analytics
- Control execution flow

## Why Middleware?

In real-world applications:

- You need reusable logic across requests
- You want centralized control
- You want to extend behavior without changing core code

Middleware provides a clean and scalable solution.

## Basic Usage

```ts
const client = createClient({
  middleware: [
    async (ctx, next) => {
      console.log("Before request:", ctx.url);

      const response = await next();

      console.log("After response:", response.status);

      return response;
    },
  ],
});
```

## Middleware Flow

Each middleware follows this pattern:

```ts
async (ctx, next) => {
  // before request

  const response = await next();

  // after response

  return response;
};
```

## Execution Order

Middleware executes in sequence:

1. First middleware (before)
2. Second middleware (before)
3. Transport execution
4. Second middleware (after)
5. First middleware (after)

## Example: Adding Headers

```ts
async (ctx, next) => {
  ctx.options.fetch.headers = {
    ...ctx.options.fetch.headers,
    Authorization: "Bearer token",
  };

  return next();
};
```

## Example: Response Transformation

```ts
async (ctx, next) => {
  const res = await next();

  const data = await res.json();

  return new Response(JSON.stringify({ wrapped: data }), {
    status: res.status,
  });
};
```

## Example: Error Handling

```ts
async (ctx, next) => {
  try {
    return await next();
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};
```

## Example: Logging Middleware

```ts
async (ctx, next) => {
  const start = Date.now();

  const res = await next();

  const duration = Date.now() - start;

  console.log("Request took:", duration, "ms");

  return res;
};
```

## Advanced Pattern: Conditional Middleware

```ts
async (ctx, next) => {
  if (ctx.url.includes("/secure")) {
    ctx.options.fetch.headers = {
      ...ctx.options.fetch.headers,
      Authorization: "Bearer secure-token",
    };
  }

  return next();
};
```

## Important Rules

- Always call `next()` unless intentionally stopping the flow
- Always return a response
- Do not block execution
- Handle errors properly

## Common Mistakes

### Forgetting next()

```ts
async (ctx, next) => {
  // Missing next() → request never executes
};
```

### Not returning response

```ts
async (ctx, next) => {
  await next(); // missing return
};
```

## Integration with Solvix Features

Middleware works alongside:

- Retry engine
- Circuit breaker
- Rate limiting
- Security layer
- Token refresh

It enhances behavior without replacing core features.

## Use Cases

- Authentication injection
- Logging and analytics
- Response shaping
- Error handling
- Feature toggles

## Summary

Middleware System provides:

- Flexible request control
- Reusable logic
- Clean architecture

It is one of the core extensibility features of Solvix.
