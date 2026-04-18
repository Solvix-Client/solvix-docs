---
title: Architecture Overview
---

# Architecture Overview

Solvix is designed as a layered and modular HTTP client that handles not only request execution, but also reliability, security, and observability.

Each request passes through multiple stages, where different responsibilities are handled in a structured way.

## High-level flow

A request in Solvix goes through the following stages:

1. Client initialization
2. Context creation
3. Middleware pipeline
4. Resilience layer (retry, rate limit, circuit breaker)
5. Transport execution
6. Response parsing
7. Observability and profiling

This layered approach ensures that each concern is handled independently and consistently.


## Core components

### Client Layer

The entry point of Solvix.

```
const client = createClient({...});
```

**Responsibilities:**

- Merges global and request-level options
- Initializes internal systems (queue, rate limiter, circuit breaker)
- Creates the request context

---

### Request Context

Every request is converted into a structured context object.

**Contains:**

- URL and HTTP method
- Headers and body
- Metadata (timing, retries, profiling)
- Configuration (retry, cache, security)

This enables Solvix to track and manage the complete lifecycle of a request.

---

### Middleware Pipeline

Solvix uses a middleware-based architecture where each middleware handles a specific concern.

**Examples:**

- Timeout handling
- Transport execution
- Request/response transformation

**Benefits:**

- Extensible
- Composable
- Easy to customize

---

### Resilience Layer

This is the core strength of Solvix, designed to handle real-world failures.

**Includes:**

- Retry engine with backoff strategies
- Circuit breaker to prevent cascading failures
- Rate limiter to control request throughput
- Priority queue for request scheduling

These components ensure stability under high load and unreliable networks.

---

### Transport Layer

Responsible for executing the actual network request.

By default, Solvix uses a fetch-based transport, but it can be replaced with a custom implementation.

**Provides:**

- Full control over request execution
- Environment flexibility (Node, Browser, Edge, etc.)

---

### Response Processing

Handles the response after it is received.

**Steps:**

- Validate HTTP status
- Parse response data
- Apply transformations
- Handle streaming (if enabled)

Ensures consistent and predictable response handling.

---

### Observability Layer

Provides insight into request execution.

**Features:**

- Timeline tracking
- Performance profiling
- Snapshot debugging

Helps developers understand system behavior and performance bottlenecks.

---

### Security Layer

Applies safety checks during request processing.

**Includes:**

- HTTPS enforcement
- Domain allowlist validation
- Header sanitization
- Request/response size limits

Protects applications from unsafe or unintended requests.
