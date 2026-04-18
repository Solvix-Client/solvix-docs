---
title: Transform Request
---

# Transform Request

Transform Request in Solvix allows you to modify or enhance the request before it is sent to the server.

It is a simpler and more focused alternative to middleware when you only need to modify request data.

## What is Transform Request?

Transform Request is a function that runs before the request is executed.

It allows you to:

- Modify headers
- Change request body
- Add authentication
- Normalize request data

## Why use Transform Request?

In real-world applications:

- You often need to attach tokens
- You may want to standardize headers
- You may need to modify payloads

Transform Request provides a clean way to do this.

## Basic Usage

```ts
const client = createClient({
  transformRequest: (ctx) => {
    ctx.options.fetch.headers = {
      ...ctx.options.fetch.headers,
      "X-App-Version": "1.0",
    };

    return ctx;
  },
});
```

## Example: Add Authorization Token

```ts
const client = createClient({
  transformRequest: (ctx) => {
    ctx.options.fetch.headers = {
      ...ctx.options.fetch.headers,
      Authorization: "Bearer token",
    };

    return ctx;
  },
});
```

## Example: Modify Request Body

```ts
transformRequest: (ctx) => {
  if (ctx.options.fetch.body) {
    const body = JSON.parse(ctx.options.fetch.body as string);

    body.timestamp = Date.now();

    ctx.options.fetch.body = JSON.stringify(body);
  }

  return ctx;
};
```

## Example: Add Default Headers

```ts
transformRequest: (ctx) => {
  ctx.options.fetch.headers = {
    "Content-Type": "application/json",
    ...ctx.options.fetch.headers,
  };

  return ctx;
};
```

## Execution Timing

Transform Request runs:

1. Before middleware
2. Before transport
3. Before retry logic

## Important Rules

- Must return updated context
- Should not block execution
- Keep logic lightweight

## When to use Transform Request vs Middleware

Use Transform Request when:

- You only need to modify request
- Logic is simple and direct

Use Middleware when:

- You need before + after control
- You need response handling

## Integration

Works with:

- Token refresh system
- Security layer
- Retry engine

## Summary

Transform Request provides a clean and efficient way to modify outgoing requests without adding middleware complexity.
