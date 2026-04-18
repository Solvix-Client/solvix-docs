---
title: Https Enforcement
---

# HTTPS Enforcement

HTTPS Enforcement in Solvix ensures that all requests are made over secure HTTPS connections.

It prevents accidental or malicious use of insecure HTTP endpoints.


## Why HTTPS Enforcement?

In production systems:

- HTTP is insecure (data can be intercepted)
- Sensitive data like tokens may leak
- Security compliance requires HTTPS

Enforcing HTTPS ensures secure communication.


## Basic usage

```ts
const client = createClient({
  security: {
    enforceHTTPS: true,
  },
});
```


## How it works

1. Request URL is validated
2. If protocol is HTTP → request is blocked
3. Error is thrown


## Example

```ts
await client.get("http://api.example.com/users");
```

Result:

```
Error: Insecure request blocked (HTTPS required)
```


## Allow HTTPS only

```ts
await client.get("https://api.example.com/users");
```

This request will succeed.


## Use cases

### Production security

- Prevent insecure API calls

### Compliance

- Enforce company security policies


## Error handling

```ts
try {
  await client.get("http://api.example.com");
} catch (error) {
  console.log(error.message);
}
```


## Best practices

- Always enable in production
- Combine with domain allowlist
- Avoid disabling unless necessary


## Summary

HTTPS Enforcement ensures that all requests are secure and protects sensitive data.


