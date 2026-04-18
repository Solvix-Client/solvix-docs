---
title: Quick Start
---

# Quick Start

This guide will help you get started with Solvix by walking through a complete example.

By the end of this guide, you will:

- Create a client
- Send requests
- Handle responses
- Manage errors
- Understand basic configuration

---

## Step 1: Create a client

Start by creating a Solvix client instance.

```ts
import { createClient } from "solvix";

const client = createClient({
  baseURL: "https://jsonplaceholder.typicode.com",
});
```

### What this does

- Defines a base URL for all requests
- Creates a reusable client instance
- Applies default configuration to every request

---

## Step 2: Make your first request

Use the client to send a GET request.

```ts
const response = await client.get("/posts");
```

This sends a request to:

https://jsonplaceholder.typicode.com/posts

### What happens internally

Solvix will:

- Prepare the request context
- Apply middleware
- Execute the request
- Parse the response
- Return structured data

---

## Step 3: Access the response

The response object contains useful information.

```ts
console.log(response.data);
```

### Example response

```json
[
  {
    "id": 1,
    "title": "Example post"
  }
]
```

### Response structure

- `data` → response body
- `status` → HTTP status code
- `headers` → response headers
- `config` → request configuration

---

## Step 4: Handle errors

Solvix provides structured error handling.

```ts
try {
  const res = await client.get("/invalid-endpoint");
} catch (error) {
  console.error(error.message);
}
```

### Why this matters

- Errors are consistent
- Easy to debug
- No need for manual error parsing

---

## Step 5: Enable retries

You can configure automatic retries for failed requests.

```ts
const client = createClient({
  baseURL: "https://api.example.com",
  retry: {
    retries: 3,
  },
});
```

### What this does

- Retries failed requests automatically
- Helps handle network issues
- Improves reliability

---

## Step 6: Send a POST request

Solvix supports all HTTP methods.

```ts
const response = await client.post("/posts", {
  title: "New Post",
  body: "Hello world",
});
```

### What happens

- Request body is serialized
- Headers are applied
- Response is parsed automatically

---

## Step 7: Add headers

You can define global headers when creating the client.

```ts
const client = createClient({
  baseURL: "https://api.example.com",
  headers: {
    Authorization: "Bearer token",
  },
});
```

These headers will be applied to every request.

---

## Step 8: Per-request configuration

You can override configuration for individual requests.

```ts
const response = await client.get("/posts", {
  retry: { retries: 1 },
});
```

---

## What you have learned

In this guide, you:

- Created a reusable HTTP client
- Sent GET and POST requests
- Accessed structured responses
- Handled errors safely
- Configured retries and headers

---

## Why Solvix feels different

Unlike basic HTTP clients, Solvix automatically manages:

- Request lifecycle
- Retry logic
- Error handling
- Performance tracking
- Request coordination

This reduces boilerplate code and improves reliability.
