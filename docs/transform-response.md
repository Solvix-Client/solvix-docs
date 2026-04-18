---
title: Transform Response
---

# Transform Response

Transform Response in Solvix allows you to modify, normalize, or enhance the response before it is returned to your application.

It is useful for shaping API responses into a consistent format across your app.

## What is Transform Response?

Transform Response is a function that runs after the response is received but before it is returned to the caller.

It allows you to:

- Modify response data
- Normalize API formats
- Handle global response structures
- Add custom metadata

## Why use Transform Response?

In real-world applications:

- Different APIs return different formats
- You may want a unified response structure
- You may need to extract nested data

Transform Response ensures consistency.

## Basic Usage

```ts
const client = createClient({
  transformResponse: async (response) => {
    const data = await response.json();

    return {
      ...response,
      data,
    };
  },
});
```

## Example: Normalize API Response

```ts
transformResponse: async (response) => {
  const data = await response.json();

  return new Response(
    JSON.stringify({
      success: true,
      payload: data,
    }),
    {
      status: response.status,
    },
  );
};
```

## Example: Extract Nested Data

```ts
transformResponse: async (response) => {
  const data = await response.json();

  return new Response(JSON.stringify(data.result), {
    status: response.status,
  });
};
```

## Example: Add Metadata

```ts
transformResponse: async (response) => {
  const data = await response.json();

  return new Response(
    JSON.stringify({
      data,
      receivedAt: Date.now(),
    }),
    {
      status: response.status,
    },
  );
};
```

## Execution Timing

Transform Response runs:

1. After transport
2. After retries
3. Before final response is returned

## Important Rules

- Must return a valid Response
- Handle JSON parsing carefully
- Avoid multiple body reads without cloning

## Common Mistake

### Reading response twice ❌

```ts
await response.json();
await response.json(); // ❌ error
```

### Correct way ✅

```ts
const cloned = response.clone();
const data = await cloned.json();
```

## When to use Transform Response vs Middleware

Use Transform Response when:

- You only need to modify response
- You want clean and direct logic

Use Middleware when:

- You need full control (before + after)
- You need error interception

## Integration

Works with:

- Snapshot debugging
- Profiling
- Retry engine

## Summary

Transform Response provides a simple and powerful way to standardize and enhance API responses.
