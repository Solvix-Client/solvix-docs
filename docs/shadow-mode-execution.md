---
title: Shadow Mode Execution
---

# Shadow Mode Execution

Shadow Mode in Solvix allows you to send requests to a secondary backend alongside the primary request.

The response from the secondary backend does not affect the main response but can be used for comparison, testing, and validation.

## Why Shadow Mode?

In production systems:

- You may want to test a new backend
- You may migrate services gradually
- You may validate responses without impacting users

Shadow mode enables safe experimentation.

## Basic usage

```ts
const client = createClient({
  shadow: {
    enabled: true,
    secondaryBaseURL: "https://shadow-api.example.com",
  },
});
```

## How it works

1. Primary request is executed normally
2. Shadow request is sent in parallel
3. Primary response is returned
4. Shadow response is used internally

## Example

```ts
await client.get("/users", {
  shadow: {
    enabled: true,
    secondaryBaseURL: "https://new-api.example.com",
  },
});
```

## Response comparison

```ts
shadow: {
  enabled: true,
  secondaryBaseURL: "https://new-api.example.com",
  compareResponse: true
}
```

If responses differ:

- Callback is triggered
- Event is emitted

## Difference handler

```ts
shadow: {
  compareResponse: true,
  onDifference: (primary, secondary) => {
    console.log("Mismatch detected");
  }
}
```

## Use cases

### Backend migration

- Test new API without breaking users

### A/B testing

- Compare system performance

### Debugging

- Detect inconsistencies

## Important notes

- Shadow request NEVER affects main response
- Errors in shadow mode are ignored
- Runs in background

## Performance impact

- Minimal overhead
- Runs asynchronously
- Does not block primary request

## Best practices

- Use only in staging or controlled environments
- Monitor differences carefully
- Avoid sensitive data leakage

## Summary

Shadow Mode allows safe testing of new systems without impacting production behavior.
