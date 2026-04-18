---
title: Logging Events Solvixbus
---

# Logging & Events (SolvixBus)

Solvix provides a powerful event-driven system called **SolvixBus**.

It allows developers to observe, debug, and integrate deeply with the internal lifecycle of every request.

This is especially useful for:

- Debugging complex flows
- Monitoring production systems
- Building analytics pipelines
- Integrating with enterprise observability tools

## What is SolvixBus?

SolvixBus is a global event emitter that broadcasts lifecycle events for every request.

You can subscribe to these events and perform custom actions.

## Basic Usage

```ts
import { SolvixBus } from "solvix";

SolvixBus.on((event) => {
  console.log(event);
});
```

## Event Structure

Every event follows this structure:

```ts
{
  type: string;
  context: SolvixContext;
  timestamp: number;
}
```

### Fields Explained

- **type** → event name
- **context** → request context (URL, options, meta)
- **timestamp** → event time

---

# Core Events (Detailed)

---

## 1. request:start

### When it fires

Triggered when a request is initiated.

### Use cases

- Logging request start
- Tracking API usage
- Debugging request flow

### Example

```ts
SolvixBus.on((event) => {
  if (event.type === "request:start") {
    console.log("Request started:", event.context.url);
  }
});
```

---

## 2. request:success

### When it fires

Triggered when a request completes successfully.

### Use cases

- Success analytics
- Monitoring API health
- Metrics tracking

### Example

```ts
SolvixBus.on((event) => {
  if (event.type === "request:success") {
    console.log("Success:", event.context.url);
  }
});
```

## 3. request:error

### When it fires

Triggered when a request fails.

### Use cases

- Error logging
- Alert systems
- Debugging failures

### Example

```ts
SolvixBus.on((event) => {
  if (event.type === "request:error") {
    console.error("Error:", event.context.url);
  }
});
```

## 4. request:retry

### When it fires

Triggered before a retry attempt.

### Use cases

- Detect retry storms
- Debug unstable APIs
- Monitor failure patterns

### Example

```ts
SolvixBus.on((event) => {
  if (event.type === "request:retry") {
    console.warn("Retrying request:", event.context.url);
  }
});
```

## 5. request:queue

### When it fires

Triggered when a request is added to queue.

### Use cases

- Queue monitoring
- Backpressure detection
- Performance analysis

### Example

```ts
SolvixBus.on((event) => {
  if (event.type === "request:queue") {
    console.log("Queued:", event.context.url);
  }
});
```

## Shadow Mode Events

## 6. request:shadowStart

### When it fires

Triggered when shadow request execution starts.

### Use cases

- A/B testing
- Backend comparison
- Migration validation

### Example

```ts
SolvixBus.on((event) => {
  if (event.type === "request:shadowStart") {
    console.log("Shadow request started");
  }
});
```

## 7. request:shadowComplete

### When it fires

Triggered when shadow execution completes.

### Use cases

- Compare responses
- Track shadow performance

### Example

```ts
SolvixBus.on((event) => {
  if (event.type === "request:shadowComplete") {
    console.log("Shadow completed");
  }
});
```

## 8. request:shadowError

### When it fires

Triggered when shadow execution fails.

### Use cases

- Debug secondary backend
- Detect inconsistencies

### Example

```ts
SolvixBus.on((event) => {
  if (event.type === "request:shadowError") {
    console.error("Shadow failed");
  }
});
```

# Advanced Usage Patterns

## 1. Global Logger

```ts
SolvixBus.on((event) => {
  console.log(`[${event.type}]`, event.context.url);
});
```

## 2. Error Monitoring System

```ts
SolvixBus.on((event) => {
  if (event.type === "request:error") {
    sendToMonitoring(event);
  }
});
```

## 3. Performance Tracking

```ts
SolvixBus.on((event) => {
  if (event.type === "request:success") {
    trackPerformance(event.context.meta);
  }
});
```

## 4. Analytics Pipeline

```ts
SolvixBus.on((event) => {
  if (event.type === "request:success") {
    analytics.track("api_call", {
      url: event.context.url,
    });
  }
});
```

# Enterprise Use Cases

SolvixBus integrates easily with:

- Datadog
- New Relic
- ELK Stack
- Custom dashboards

---

# Best Practices

- Avoid heavy logic inside listeners
- Filter only required events
- Use batching for logs
- Do not block event loop

---

# Summary

SolvixBus provides:

- Real-time observability
- Deep debugging capabilities
- Enterprise-grade integrations

It transforms Solvix from just an HTTP client into a **fully observable system layer**.
