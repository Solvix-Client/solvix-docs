---
title: Custom Error Handling
---

# Custom Error Handling

Custom Error Handling in Solvix allows you to control how errors are processed, transformed, and returned to your application.

It helps standardize error structures and improve debugging and user experience.

## What is Custom Error Handling?

It is a mechanism to:

- Transform errors into a consistent format
- Handle specific error cases globally
- Enhance error information
- Control how errors propagate

## Why Custom Error Handling?

In real-world systems:

- APIs return inconsistent error formats
- You need a unified error structure
- Debugging requires enriched error context

Custom error handling solves these problems.

## Basic Usage

```ts
const client = createClient({
  errorHandler: (error, ctx) => {
    return {
      message: error.message,
      status: error.status,
      url: ctx.url,
    };
  },
});
```

## Example: Normalize Error Structure

```ts
errorHandler: (error) => {
  return {
    success: false,
    error: {
      message: error.message,
      code: error.status,
    },
  };
};
```

## Example: Handle Specific Status Codes

```ts
errorHandler: (error) => {
  if (error.status === 401) {
    return {
      message: "Unauthorized access",
      action: "redirect_to_login",
    };
  }

  return error;
};
```

## Example: Add Debug Info

```ts
errorHandler: (error, ctx) => {
  return {
    message: error.message,
    url: ctx.url,
    timestamp: Date.now(),
  };
};
```

## Execution Flow

1. Request fails
2. Error is captured
3. errorHandler is executed
4. Transformed error is returned

## Important Rules

- Always return a structured error
- Do not swallow critical errors silently
- Keep logic simple and predictable

## Common Mistakes

### Returning raw error

```ts
return error;
```

Prefer structured output.

### Throwing inside handler

Avoid throwing new errors unnecessarily.

## Integration

Works with:

- Retry engine
- Middleware
- Snapshot debugging
- Logging system

## Use Cases

- Standardizing API errors
- User-friendly error messages
- Debugging support
- Global error policies

## Summary

Custom Error Handling gives full control over how errors are processed and returned, making your application more consistent and robust.
