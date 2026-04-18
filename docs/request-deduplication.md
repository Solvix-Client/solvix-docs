---
title: Request Deduplication
---

# Request Deduplication

Request Deduplication in Solvix prevents multiple identical requests from being sent to the server simultaneously.

Instead of executing duplicate requests, Solvix ensures that only one network call is made and all callers receive the same response.

## Why Deduplication?

In real-world applications:

- Multiple components may request the same data
- Rapid user actions can trigger duplicate calls
- Duplicate requests waste bandwidth and resources

Deduplication improves performance and efficiency.

## Basic usage

```ts
await client.get("/users", {
  dedupeKey: "get-users",
});
```

## How it works

1. Request is initiated with a `dedupeKey`
2. Solvix checks if a request with the same key is already in-flight
3. If yes → attaches to existing request
4. If no → executes new request

## Example

```ts
client.get("/users", { dedupeKey: "users" });
client.get("/users", { dedupeKey: "users" });
client.get("/users", { dedupeKey: "users" });
```

Only **one network request** is executed.

All callers receive the same response.

## Without deduplication

```ts
client.get("/users");
client.get("/users");
client.get("/users");
```

This results in **multiple network calls**.

## Use cases

### Prevent duplicate API calls

```ts
dedupeKey: "user-profile";
```

### UI optimization

Useful in:

- React components
- Infinite scrolling
- Data fetching hooks

## Deduplication scope

- Works only for in-flight requests
- Once request completes → new calls execute normally

## Error behavior

If the request fails:

- All attached callers receive the same error

## Best practices

- Use consistent keys
- Avoid overusing dedupe
- Use for idempotent requests (GET)
- Do not use for mutations unless safe

## Summary

Request deduplication improves performance by eliminating redundant network calls.
