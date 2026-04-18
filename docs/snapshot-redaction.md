---
title: Snapshot Redaction
---

# Snapshot Redaction

Snapshot Redaction in Solvix ensures that sensitive data is masked or removed from debugging snapshots.

It allows safe logging and debugging without exposing secrets like tokens, passwords, or personal data.

## Why Snapshot Redaction?

In production systems:

- Logs may contain sensitive data
- Debug snapshots can leak secrets
- Security compliance requires masking

Snapshot Redaction ensures safe observability.

## Basic usage

```ts
const client = createClient({
  security: {
    redactSnapshot: true,
  },
  snapshot: {
    enabled: true,
  },
});
```

## What gets redacted?

Typical sensitive fields:

- Authorization headers
- Tokens
- Cookies
- Personal data

## Example

Before redaction:

```json
{
  "headers": {
    "Authorization": "Bearer secret-token"
  }
}
```

After redaction:

```json
{
  "headers": {
    "Authorization": "[REDACTED]"
  }
}
```

## How it works

1. Snapshot is generated
2. Redaction rules are applied
3. Sensitive fields are masked

## Custom behavior

You can extend redaction logic using custom transformers:

```ts
snapshot: {
  enabled: true,
  transform: (snapshot) => {
    delete snapshot.headers["X-Internal"];
    return snapshot;
  }
}
```

## Use cases

### Debugging safely

Inspect requests without exposing secrets

### Logging systems

Store safe logs

### Compliance

Meet GDPR / security requirements

## Best practices

- Always enable in production
- Avoid logging raw headers
- Combine with secure logging systems

## Integration

Works with:

- Snapshot Debugging
- Profiling Mode
- Security Layer

## Summary

Snapshot Redaction protects sensitive data while enabling powerful debugging.
