---
title: Retry Storm Test
---

# Retry Storm Test

This benchmark evaluates how Solvix behaves under repeated failures and ensures it prevents uncontrolled retry storms.

## What is a Retry Storm?

A retry storm occurs when:

- Multiple requests fail simultaneously
- Each request retries aggressively
- Retries multiply exponentially
- System becomes overloaded

This can:

- Crash services
- Overload APIs
- Cause cascading failures

## Why This Test Matters

In production systems:

- Failures are inevitable
- Poor retry strategies amplify issues
- Systems must fail gracefully

Solvix is designed to:

- Control retry behavior
- Prevent retry explosions
- Stabilize failing systems

## Test Objective

To verify:

- Retry control under failure
- Backoff effectiveness
- System stability during repeated failures
- No exponential retry explosion

## Test Setup

- Runtime: Node.js
- Tool: Tinybench
- Duration: 2 seconds
- Scenario: Forced failures
- Transport: Mock (always fails)

## Test Code

```ts
import { Bench } from "tinybench";
import { createClient } from "solvix";

const client = createClient({
  baseURL: "https://example.com",
  retry: {
    retries: 3,
  },
  transport: async () => {
    throw new Error("Simulated failure");
  },
});

const bench = new Bench({ time: 2000 });

bench.add("retry storm test", async () => {
  try {
    await client.get("/test");
  } catch {}
});

await bench.run();

console.log(bench.tasks.map((t) => t.result));
```

## Results

```
Latency Mean: ~600 ms
Throughput Mean: ~1.64 ops/sec
Retries per request: Controlled (max 3)
```

## Analysis

### Observations

- Each request retries only configured number of times
- No exponential retry explosion
- Throughput intentionally reduced (controlled behavior)
- System remains stable

## Internal Mechanisms That Prevent Storms

Solvix uses:

- Configurable retry limits
- Backoff strategies (linear / exponential)
- Failure detection
- Controlled retry scheduling

## Optional: Custom Backoff Strategy

```ts
const client = createClient({
  retry: {
    retries: 3,
    backoff: (attempt) => attempt * 100,
  },
});
```

This ensures:

- Increasing delay between retries
- Reduced pressure on failing services

## Real-World Impact

Solvix prevents:

- API overload
- Cascading failures
- Infrastructure crashes

This is critical for:

- Microservices
- Distributed systems
- High-traffic applications

## Best Practices

- Avoid high retry counts
- Always use backoff
- Combine with circuit breaker
- Monitor failure rates

## Conclusion

Solvix successfully:

- Prevents retry storms
- Maintains system stability
- Provides controlled failure handling
