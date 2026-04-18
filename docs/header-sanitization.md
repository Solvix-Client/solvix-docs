---
title: Header Sanitization
---

# Header Sanitization

Header Sanitization in Solvix ensures that outgoing request headers are safe, clean, and free from insecure or malicious values.

It protects against header injection attacks and prevents unsafe headers from being sent.

## Why Header Sanitization?

In production systems:

- Headers may contain sensitive data
- Malicious input can inject unsafe headers
- Some headers should never be manually set

Sanitization ensures headers are secure and compliant.

## Basic usage

```ts
const client = createClient({
  security: {
    blockInsecureHeaders: true,
  },
});
```

## What does it do?

Solvix will:

- Remove unsafe headers
- Block restricted headers
- Prevent header injection
- Normalize header values

## Example

```ts
await client.post("/data", {
  headers: {
    "Content-Length": "999999", // ❌ blocked
    Authorization: "Bearer token", // ✅ allowed
  },
});
```

Result:

- Unsafe headers are removed automatically

## Common blocked headers

- Content-Length
- Host
- Connection
- Transfer-Encoding

These are controlled internally by the runtime.

## Safe headers

Examples of allowed headers:

```ts
headers: {
  Authorization: "Bearer token",
  "Content-Type": "application/json"
}
```

## Injection protection

```ts
headers: {
  "X-Custom": "valid-value\nmalicious"
}
```

Solvix will sanitize invalid characters.

## Error handling

```ts
try {
  await client.post("/data", { headers });
} catch (error) {
  console.log(error.message);
}
```

## Best practices

- Avoid manually setting restricted headers
- Always enable sanitization in production
- Validate dynamic header inputs

## Integration with security layer

Works with:

- HTTPS Enforcement
- Domain Allowlist
- Body Size Guard

## Summary

Header Sanitization ensures safe, clean, and secure request headers, protecting your application from injection attacks.
