---
title: Response Structure
---

# Response Structure

Every request in Solvix returns a structured response object.

This consistent structure ensures that developers can reliably access response data, debug issues, and understand request behavior without dealing with inconsistencies across different APIs.

---

## Basic example

```ts
const response = await client.get("/posts");
```

---

## Response object

A typical Solvix response looks like this:

```ts
{
  data: any,
  status: number,
  statusText: string,
  headers: Record<string, string>,
  config: RequestConfig,
  meta?: ResponseMeta
}
```

---

## Detailed breakdown

### data

The `data` field contains the parsed response body.

```ts
console.log(response.data);
```

- Automatically parsed (JSON by default)
- Represents the actual payload returned from the server
- No need to manually call `.json()` like in fetch

---

### status

The HTTP status code returned by the server.

```ts
console.log(response.status); // 200
```

Used for:

- Conditional logic
- Success/failure checks

---

### statusText

A human-readable status message.

```ts
console.log(response.statusText); // "OK"
```

---

### headers

Contains all response headers.

```ts
console.log(response.headers["content-type"]);
```

Useful for:

- Content type validation
- Authentication headers
- Debugging API behavior

---

### config

The final request configuration used for this request.

```ts
console.log(response.config);
```

Includes:

- URL
- Headers
- Retry configuration
- Timeout settings

This is extremely useful for debugging and tracing request behavior.

---

### meta (optional)

Additional metadata provided by Solvix.

```ts
console.log(response.meta);
```

May include:

- Request duration
- Retry attempts
- Timing breakdown
- Internal debugging snapshots

---

## Example response

```ts
{
  data: [
    { id: 1, title: "Post" }
  ],
  status: 200,
  statusText: "OK",
  headers: {
    "content-type": "application/json"
  },
  config: { ... },
  meta: {
    duration: 120,
    retries: 1
  }
}
```

---

## Why this structure matters

Solvix enforces a consistent response format across all requests.

This provides:

- Predictability
- Easier debugging
- Reduced boilerplate code
- Better developer experience

---

## Comparison with fetch

### fetch

```ts
const res = await fetch("/api");
const data = await res.json();
```

### Solvix

```ts
const res = await client.get("/api");
console.log(res.data);
```

Solvix removes manual parsing and adds structured metadata.

---

## Handling empty responses

Some endpoints return no content (e.g., HTTP 204).

```ts
await client.delete("/resource");
```

In such cases:

- `data` may be null or undefined
- `status` still reflects the correct HTTP status

---

## Streaming responses

When streaming is enabled:

- `data` may be a stream or async iterator
- Handling differs from standard JSON responses

Refer to the streaming documentation for more details.

---

## Error responses

Solvix throws structured errors instead of returning failed responses.

```ts
try {
  await client.get("/invalid");
} catch (error) {
  console.log(error.response);
}
```

Error object includes:

- response
- status
- message
- metadata

---

## Best practices

- Always use `response.data` for payload
- Use `status` for control flow
- Use `meta` for debugging and performance analysis
- Avoid relying on raw response handling

---

## Summary

Solvix standardizes API responses into a predictable structure.

This improves:

- Developer experience
- Debugging
- Reliability
- Code consistency
