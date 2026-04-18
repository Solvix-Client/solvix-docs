---
title: Request Grouping
---

# Request Grouping

Request Grouping in Solvix allows you to logically group multiple requests together and manage them as a unit.

This is useful for coordinating related operations and improving control over execution flows.

## Why Request Grouping?

In real-world applications:

- Multiple requests are often related
- You may want to track them together
- You may need batch-level control

Request grouping helps organize and manage such scenarios.

## Basic usage

```ts
await client.get("/users", {
  group: "user-flow",
});
```

## How it works

- Each request can belong to a group
- Groups act as logical identifiers
- Useful for tracking and orchestration

## Example

```ts
await client.get("/user/profile", { group: "user" });
await client.get("/user/orders", { group: "user" });
await client.get("/user/settings", { group: "user" });
```

All requests belong to the same group.

## Use cases

### Tracking

Track related requests together:

```ts
group: "checkout-flow";
```

### Logging

```ts
hooks: {
  beforeRequest: (ctx) => {
    console.log("Group:", ctx.options.group);
  };
}
```

### Debugging

Helps identify related request chains.

## Integration with dependencies

Works well with:

- Request Dependencies
- Priority Queue
- Retry Engine

## Best practices

- Use meaningful group names
- Keep grouping consistent
- Use for logical flows only

## Summary

Request grouping helps organize and track related requests efficiently.
