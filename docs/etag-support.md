---
title: Etag Support
---

# ETag Support

ETag Support in Solvix enables efficient caching and conditional requests by leveraging HTTP ETags.

It helps reduce unnecessary network calls and improves performance.

## What is an ETag?

An ETag (Entity Tag) is a unique identifier provided by the server for a specific resource version.

When the resource changes, the ETag changes.

## Why ETag Support?

In real-world systems:

- Re-fetching unchanged data wastes bandwidth
- APIs often support conditional requests
- Performance can be improved significantly

ETag support allows Solvix to avoid unnecessary data transfers.

## How it works

1. Server returns an ETag header
2. Solvix stores the ETag
3. Next request includes `If-None-Match` header
4. Server responds:
   - 304 (Not Modified) → use cached data
   - 200 → update cache

## Basic Usage

```ts
const client = createClient({
  cache: {
    etag: true,
  },
});
```

## Example Flow

### First request

```http
GET /users
```

Response:

```
ETag: "abc123"
```

### Second request

```http
GET /users
If-None-Match: "abc123"
```

### Server response

```
304 Not Modified
```

Solvix will reuse cached response.

## Benefits

- Reduced bandwidth usage
- Faster response times
- Lower server load

## Use cases

- Frequently fetched data
- Static resources
- Dashboard APIs

## Important Notes

- Requires server support for ETag
- Cache must be enabled
- Only works for idempotent requests (GET)

## Best Practices

- Use with caching strategies
- Combine with rate limiting
- Avoid for highly dynamic data

## Integration

Works with:

- Cache layer
- Performance optimization
- Network efficiency

## Summary

ETag Support improves performance by avoiding unnecessary data transfers and leveraging HTTP caching mechanisms.
