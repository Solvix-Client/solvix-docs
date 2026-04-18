---
title: Domain Allowlist
---

# Domain Allowlist

Domain Allowlist in Solvix restricts outgoing requests to a predefined set of trusted domains.

This prevents accidental calls to malicious or unintended endpoints and strengthens security.


## Why Domain Allowlist?

In production systems:

- Developers may accidentally call wrong endpoints
- Third-party integrations can introduce risks
- Security policies require strict domain control

Allowlisting ensures only trusted domains are accessible.


## Basic usage

```ts
const client = createClient({
  security: {
    allowedDomains: ["api.example.com"],
  },
});
```


## How it works

1. Extract domain from request URL
2. Check against allowed list
3. If not allowed → request is blocked


## Example

```ts
await client.get("https://api.example.com/users"); // ✅ allowed

await client.get("https://malicious.com"); // ❌ blocked
```


## Multiple domains

```ts
security: {
  allowedDomains: ["api.example.com", "auth.example.com"];
}
```


## Subdomain handling

You can include subdomains explicitly:

```ts
allowedDomains: ["api.example.com", "v2.api.example.com"];
```


## Error handling

```ts
try {
  await client.get("https://unknown.com");
} catch (error) {
  console.log(error.message); // Domain not allowed
}
```


## Integration with HTTPS

Domain allowlist works best with:

- HTTPS Enforcement
- Header Sanitization


## Best practices

- Keep allowlist strict
- Avoid wildcards
- Regularly audit domains
- Use in production environments


## Summary

Domain Allowlist ensures requests are only made to trusted endpoints, improving security and control.
