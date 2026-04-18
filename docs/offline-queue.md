---
title: Offline Queue
---

# Offline Queue

The Offline Queue in Solvix ensures that requests are not lost when the network is unavailable.

Instead of failing immediately, requests are stored and automatically retried once the connection is restored.

## Why Offline Queue?

In real-world scenarios:

- Users may go offline
- Network connectivity can be unstable
- Requests may fail due to temporary disconnections

Offline queue ensures reliability by preserving requests.

## Basic usage

```ts
const client = createClient({
  offlineQueue: {
    enabled: true,
  },
});
```

## How it works

1. Request is made
2. Network is unavailable
3. Request is added to queue
4. System detects network recovery
5. Queued requests are replayed

## Example

```ts
await client.post("/orders", {
  body: { item: "Pizza" },
});
```

If offline:

- Request is queued
- Automatically sent when online

## Queue behavior

- FIFO (First In, First Out)
- Preserves request order
- Ensures consistency

## Replay mechanism

When network is restored:

- All queued requests are executed
- Original order is maintained
- Errors are handled individually

## Integration with retry

- Offline queue works with retry engine
- Requests can still retry after replay

## Use cases

### Mobile apps

- Offline-first experience

### Poor network environments

- Prevent request loss

### Background sync

- Automatically sync data later

## Error handling

If replay fails:

- Request follows normal retry flow
- Error is returned if retries exhausted

## Best practices

- Use for critical requests
- Avoid large queue sizes
- Combine with retry
- Monitor queue behavior

## Summary

Offline Queue ensures that requests are never lost due to network issues, improving reliability and user experience.
