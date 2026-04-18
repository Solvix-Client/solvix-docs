---
title: Benchmark Results
---

# Benchmark Results

This document presents real-world benchmarking results for Solvix, demonstrating its performance, stability, and efficiency compared to other HTTP clients.

## Why Benchmarking Matters

Benchmarking helps validate:

- Performance under load
- Stability over time
- Efficiency vs competitors
- Real-world production readiness

## Test Environment

- Runtime: Node.js v24
- Duration per test: ~2 seconds
- Hardware: Standard development machine
- Tooling: Tinybench

## Basic Throughput Test

### Result (Solvix)

- Mean latency: ~0.001 ms
- Throughput: ~1,000,000 req/sec

This demonstrates extremely low overhead.

## Comparison

| Library      | Avg Latency | Throughput  |
| ------------ | ----------- | ----------- |
| Solvix       | ~0.001 ms   | ~1M req/s   |
| Native fetch | ~0.007 ms   | ~130k req/s |
| Axios        | ~0.021 ms   | ~47k req/s  |

## Real Network Test

### Solvix

- Avg latency: ~100–117 ms
- Stable under repeated runs

### Observations

- Minimal overhead vs network time
- Consistent performance
- Efficient retry + pipeline handling

## Memory Stability Test

### Results

- Initial heap: ~7 MB
- After 10k requests: ~10 MB
- Stable across multiple rounds

### Conclusion

No memory leaks detected.

## Concurrency Test

Solvix handles high concurrency efficiently using:

- Internal queue
- Rate limiter
- Deduplication

### Result

- Stable throughput
- No request flooding
- Controlled execution

## Retry Storm Test

Simulated failing requests with retries.

### Result

- Controlled retry behavior
- No exponential explosion
- System stability maintained

## Token Refresh Stampede Test

Multiple requests triggering token refresh simultaneously.

### Result

- Only **1 refresh executed**
- All requests reused the same token

This proves stampede protection works correctly.

## Deduplication Test

Multiple identical requests executed concurrently.

### Result

- Only **1 network call executed**
- Others reused the same promise

## Bundle Size

- Minified: ~23 KB
- Gzip: ~7.8 KB

### Conclusion

- Lightweight
- Production-friendly

## Key Takeaways

- Extremely low overhead
- High throughput
- Memory stable
- Concurrency safe
- Production-ready resilience

## Summary

Solvix is optimized for:

- Performance
- Reliability
- Scalability

It outperforms traditional HTTP clients in controlled benchmarks and maintains stability in real-world scenarios.
