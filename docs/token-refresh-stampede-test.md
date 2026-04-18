---
title: Token Refresh Stampede Test
---

# Token Refresh Stampede Test

This benchmark validates how Solvix prevents token refresh stampede under high concurrency.

## What is Token Refresh Stampede?

A token refresh stampede occurs when:

- Multiple requests fail due to expired token
- Each request triggers its own refresh call
- Dozens or hundreds of refresh calls hit the auth server

This leads to:

- API overload
- Rate limiting
- Authentication failures
- System instability

## Why This Test Matters

In real systems:

- Tokens expire frequently
- Many requests run in parallel
- Without coordination → system breaks

Solvix solves this using a **centralized refresh orchestrator**.

## Test Objective

To verify:

- Only ONE refresh call happens
- All pending requests wait for refresh
- No duplicate refresh requests
- System remains stable under concurrency

## Test Setup

- Runtime: Node.js
- Requests: 50 concurrent
- Scenario: All requests hit expired token
- Transport: Mock
- Refresh handler: Simulated

## Test Code

```ts
import { createClient } from "solvix";

let refreshCount = 0;

const client = createClient({
  baseURL: "https://example.com",
  tokenRefresh: {
    shouldRefresh: () => true,
    refresh: async () => {
      refreshCount++;
      await new Promise((res) => setTimeout(res, 100));
      return "new-token";
    },
  },
  transport: async () => {
    throw { status: 401 }; // simulate expired token
  },
});

await Promise.all(
  Array.from({ length: 50 }).map(() =>
    client.get("/protected").catch(() => {}),
  ),
);

console.log("Refresh calls:", refreshCount);
```

## Results

```
Refresh calls: 1
```

## Analysis

### Observations

- Only one refresh call executed
- All requests waited for refresh
- No duplicate refresh attempts
- System remained stable

## Internal Mechanism

Solvix uses:

- Shared promise locking
- Central refresh queue
- Pending request suspension
- Replay after refresh

## Flow

1. First request detects token expiry
2. Refresh starts
3. Other requests wait
4. Token updated
5. All requests resume

## Real-World Impact

Prevents:

- Auth server overload
- Rate limit violations
- Duplicate refresh calls

Critical for:

- SaaS apps
- Mobile apps
- Microservices

## Best Practices

- Keep refresh logic lightweight
- Avoid long refresh delays
- Combine with retry logic
- Log refresh events

## Conclusion

Solvix ensures:

- Single refresh execution
- Safe concurrency handling
- Stable authentication flow
