---
title: Streaming Support Sse Json Lines
---

# Streaming Support (SSE / JSON Lines)

Streaming Support in Solvix enables handling real-time data streams such as Server-Sent Events (SSE) and JSON Lines.

It allows your application to process data as it arrives instead of waiting for the full response.

## What is Streaming?

Streaming is a way of receiving data in chunks over time instead of a single complete response.

Common formats:

- Server-Sent Events (SSE)
- JSON Lines (NDJSON)

## Why Streaming Support?

In real-world systems:

- Real-time updates are required
- Large datasets are streamed progressively
- Waiting for full response is inefficient

Streaming allows better performance and responsiveness.

## Basic Usage

```ts
const response = await client.get("/stream");

const reader = response.body?.getReader();

while (true) {
  const { done, value } = await reader.read();

  if (done) break;

  console.log(new TextDecoder().decode(value));
}
```

## Example: JSON Lines (NDJSON)

```ts
const response = await client.get("/events");

const reader = response.body?.getReader();
const decoder = new TextDecoder();

let buffer = "";

while (true) {
  const { done, value } = await reader.read();

  if (done) break;

  buffer += decoder.decode(value, { stream: true });

  const lines = buffer.split("\n");
  buffer = lines.pop() || "";

  for (const line of lines) {
    if (line.trim()) {
      const json = JSON.parse(line);
      console.log("Event:", json);
    }
  }
}
```

## Example: Server-Sent Events (SSE)

```ts
const response = await client.get("/sse");

const reader = response.body?.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();

  if (done) break;

  const chunk = decoder.decode(value);
  console.log("SSE chunk:", chunk);
}
```

## Use cases

- Live dashboards
- Chat applications
- Real-time analytics
- Event-driven systems

## Important Notes

- Streaming requires `ReadableStream` support
- Works best in modern browsers and Node.js
- Avoid buffering entire response

## Best Practices

- Process chunks incrementally
- Handle partial data safely
- Close streams properly
- Use backpressure if needed

## Integration

Works with:

- Custom transport
- Middleware
- Observability

## Summary

Streaming Support enables real-time data processing, making Solvix suitable for modern event-driven and high-performance applications.
