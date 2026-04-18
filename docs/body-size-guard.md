---
title: Body Size Guard
---

# Body Size Guard

Body Size Guard in Solvix prevents sending excessively large request payloads.

It protects your application from memory issues, abuse, and unexpected large uploads.

## Why Body Size Guard?

In production systems:

- Large payloads can crash services
- Unexpected data may increase costs
- APIs often have strict size limits

Body Size Guard ensures requests stay within safe limits.

## Basic usage

```ts
const client = createClient({
  security: {
    maxBodySize: 1024 * 1024, // 1MB
  },
});
```

## How it works

1. Request body is prepared
2. Size is calculated
3. If size exceeds limit → request is blocked

## Example

```ts
await client.post("/upload", {
  body: largeData,
});
```

If `largeData` exceeds limit:

```
Error: Request body size exceeded
```

## Supported body types

- JSON
- FormData
- Blob
- String
- ArrayBuffer

## Use cases

### File uploads

Prevent oversized uploads

### API protection

Avoid sending huge payloads

### Cost control

Reduce bandwidth usage

## Error handling

```ts
try {
  await client.post("/upload", { body: data });
} catch (error) {
  console.log(error.message);
}
```

## Best practices

- Set reasonable limits (e.g. 1MB–10MB)
- Adjust per API requirements
- Combine with response size guard

## Integration

Works with:

- Header Sanitization
- Response Size Guard
- Security Layer

## Summary

Body Size Guard protects your system from oversized request payloads and improves reliability.
