---
title: Dependency Registry
---

# Dependency Registry

The Dependency Registry is an internal system in Solvix that manages request dependencies.

It tracks requests by their unique identifiers and ensures that dependent requests are executed only after their required dependencies are resolved.


## Why Dependency Registry?

When using request dependencies:

- Requests must wait for others to complete
- Execution order must be controlled
- Circular dependencies must be prevented

The registry handles all of this automatically.


## How it works

1. A request is registered with an `id`
2. The registry stores its promise
3. Dependent requests wait for resolution
4. Once resolved → dependent requests continue


## Basic example

```ts
await client.post("/login", {
  id: "auth",
});

await client.get("/profile", {
  dependsOn: ["auth"],
});
```


## Internal structure (conceptual)

```ts
{
  id: string,
  promise: Promise<any>,
  resolve: Function,
  reject: Function,
  dependsOn?: string[]
}
```


## Execution flow

1. Register request in registry
2. Check dependencies
3. Wait for dependencies
4. Execute request
5. Resolve or reject
6. Notify dependents


## Circular dependency detection

Solvix prevents invalid dependency chains.

```ts
// Invalid
A depends on B
B depends on A
```

This is detected and blocked automatically.


## Failure handling

If a dependency fails:

- Dependent requests are rejected
- Prevents inconsistent state


## Example with multiple dependencies

```ts
await client.get("/dashboard", {
  dependsOn: ["auth", "settings"],
});
```

The request runs only after both dependencies complete.


## Best practices

- Use unique IDs
- Keep dependency chains shallow
- Avoid unnecessary dependencies
- Use for critical flows only


## Summary

The Dependency Registry ensures safe and controlled execution of dependent requests in Solvix.

