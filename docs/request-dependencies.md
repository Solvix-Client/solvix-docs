---
title: Request Dependencies
---

# Request Dependencies

Request Dependencies in Solvix allow you to control execution order between requests.

A request can wait for one or more other requests to complete before it executes.

This ensures safe orchestration and prevents race conditions in complex workflows.

## Why Request Dependencies?

In real-world applications:

- Some requests depend on others (e.g., auth → data fetch)
- Parallel execution can cause race conditions
- Order of execution matters

Dependencies ensure correct sequencing.

## Basic usage

```ts
await client.get("/profile", {
  dependsOn: ["auth"],
});
```

## Creating dependencies

Each request can have an identifier.

```ts
await client.post("/login", {
  id: "auth",
});
```

Then other requests can depend on it:

```ts
await client.get("/profile", {
  dependsOn: ["auth"],
});
```

## How it works

1. A request with `id` is registered
2. Dependent requests wait
3. When dependency resolves → queued requests execute
4. If dependency fails → dependent requests fail

## Example

```ts
await client.post("/login", {
  id: "auth",
});

await client.get("/user/profile", {
  dependsOn: ["auth"],
});

await client.get("/user/orders", {
  dependsOn: ["auth"],
});
```

Execution order:

1. /login
2. /user/profile
3. /user/orders

## Multiple dependencies

```ts
await client.get("/dashboard", {
  dependsOn: ["auth", "settings"],
});
```

The request executes only after all dependencies are resolved.

## Failure behavior

If a dependency fails:

- Dependent requests are rejected
- Prevents invalid execution

## Integration with registry

Solvix uses an internal dependency registry:

- Tracks request IDs
- Resolves promises
- Detects circular dependencies

## Circular dependency protection

```ts
// Invalid example
A depends on B
B depends on A
```

Solvix detects and prevents this.

## Best practices

- Use clear and unique IDs
- Avoid deep dependency chains
- Use only when necessary
- Combine with grouping for clarity

## Summary

Request dependencies allow safe and predictable execution of related requests.
