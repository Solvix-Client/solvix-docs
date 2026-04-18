---
title: Response Size Guard
---

# Response Size Guard

Response Size Guard in Solvix prevents processing excessively large responses from the server.

It protects your application from memory overload, crashes, and unexpected large payloads.

## Why Response Size Guard?

In production systems:

- APIs may return unexpectedly large responses
- Large responses can freeze UI or crash servers
- Bandwidth and memory usage increases

Response Size Guard ensures safe response handling.

## Basic usage

```ts
const client = createClient({
  security: {
    maxResponseSize: 1024 * 1024, // 1MB
  },
});
```

## How it works

1. Response is received
2. Size is checked before parsing
3. If size exceeds limit → request fails

## Example

```ts
await client.get("/large-data");
```

If response exceeds limit:

```
Error: Response size exceeded
```

## Use cases

### API protection

Prevent unexpected large payloads

### Frontend safety

Avoid UI freezes

### Backend stability

Prevent memory spikes

## Error handling

```ts
try {
  await client.get("/data");
} catch (error) {
  console.log(error.message);
}
```

## Best practices

- Set limits based on API expectations
- Use lower limits for frontend apps
- Combine with body size guard

## Integration

Works with:

- Body Size Guard
- Snapshot Debugging
- Security Layer

## Summary

Response Size Guard protects your system from large responses and ensures stable performance.
