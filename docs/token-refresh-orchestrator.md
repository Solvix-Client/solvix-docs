---
title: Token Refresh Orchestrator
---

# Token Refresh Orchestrator

The Token Refresh Orchestrator in Solvix ensures safe and efficient handling of expired authentication tokens under high concurrency.

It prevents multiple simultaneous refresh requests and guarantees that only one refresh operation runs at a time.


## Why Token Refresh Orchestration?

In real-world systems:

- Tokens expire frequently
- Multiple requests may fail at the same time
- Each request may try to refresh the token

This leads to:

- Duplicate refresh calls
- Race conditions
- Server overload

Solvix solves this using a centralized orchestrator.


## Basic concept

When a token expires:

1. First request triggers token refresh
2. Other requests wait
3. Token refresh completes
4. All queued requests resume with new token


## Example

```ts
const client = createClient({
  hooks: {
    onError: async (error, ctx) => {
      if (error.status === 401) {
        await refreshToken();
      }
    },
  },
});
```


## Internal behavior

- Only one refresh request executes
- All other failed requests are queued
- After refresh → queued requests retry automatically


## Flow

1. Request fails with 401
2. Check if refresh is in progress
3. If not → start refresh
4. If yes → wait
5. Refresh completes
6. Retry all queued requests


## Example scenario

```ts
// 10 requests fail at same time
// Only ONE refresh call is made
// All 10 requests retry after refresh
```


## Benefits

- Prevents token refresh storms
- Reduces server load
- Ensures consistent authentication state
- Improves performance under concurrency


## Integration with retry

Works seamlessly with retry engine:

- Refresh happens before retry
- Requests retry with new token


## Best practices

- Keep refresh logic centralized
- Avoid manual refresh handling
- Use hooks for integration
- Ensure refresh endpoint is reliable


## Summary

The Token Refresh Orchestrator ensures safe, efficient, and scalable token management in concurrent environments.

