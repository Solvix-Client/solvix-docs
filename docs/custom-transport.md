---
title: Custom Transport
---

# Custom Transport

Custom Transport is one of the most powerful features of Solvix.

It allows you to completely control how HTTP requests are executed — enabling integration with any runtime, custom network layer, or infrastructure.

## What is a Transport?

In Solvix, a **transport** is the function responsible for executing the actual network request.

By default, Solvix uses `fetch`, but you can override it.

## Why Custom Transport?

In real-world systems:

- You may not want to use `fetch`
- You may need to integrate with internal SDKs
- You may want to mock requests
- You may need special networking logic (proxies, gateways)

Custom transport gives you full control.

## Transport Type

A transport must follow this signature:

```ts
type SolvixTransport = (ctx: SolvixContext) => Promise<Response>;
```

It receives the request context and must return a standard `Response`.

## ⚡ Basic Example

```ts
const client = createClient({
  transport: async (ctx) => {
    return fetch(ctx.url, ctx.options.fetch);
  },
});
```

## Custom Logic Example

```ts
const client = createClient({
  transport: async (ctx) => {
    console.log("Sending request to:", ctx.url);

    const res = await fetch(ctx.url, ctx.options.fetch);

    console.log("Response status:", res.status);

    return res;
  },
});
```

## Mock Transport (Testing)

```ts
const client = createClient({
  transport: async () => {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  },
});
```

### Use case

- Unit testing
- Offline development
- Simulating APIs

## Axios Adapter Example

You can integrate with libraries like Axios:

```ts
import axios from "axios";

const client = createClient({
  transport: async (ctx) => {
    const res = await axios({
      url: ctx.url,
      method: ctx.options.fetch.method,
      data: ctx.options.fetch.body,
      headers: ctx.options.fetch.headers,
    });

    return new Response(JSON.stringify(res.data), {
      status: res.status,
    });
  },
});
```

## Enterprise Example (Gateway / Proxy)

```ts
const client = createClient({
  transport: async (ctx) => {
    const gatewayUrl = "https://internal-gateway";

    return fetch(gatewayUrl, {
      method: "POST",
      body: JSON.stringify({
        url: ctx.url,
        options: ctx.options.fetch,
      }),
    });
  },
});
```

## Important Rules

Your custom transport MUST:

- Return a valid `Response`
- Handle errors properly
- Not break async flow
- Respect request options

---

## Common Mistakes

### Returning plain object

```ts
return {
  status: 200,
};
```

This is invalid.

### Correct way

```ts
return new Response(JSON.stringify({ ok: true }), {
  status: 200,
});
```

## Integration with Solvix Features

Even with custom transport, Solvix still provides:

- Retry engine
- Circuit breaker
- Rate limiting
- Deduplication
- Token refresh
- Security layer

Transport only replaces **network execution**, not the system.

## Advanced Pattern: Conditional Transport

```ts
transport: async (ctx) => {
  if (ctx.url.includes("/internal")) {
    return internalTransport(ctx);
  }

  return fetch(ctx.url, ctx.options.fetch);
};
```

## Use Cases Summary

| Use Case      | Description        |
| ------------- | ------------------ |
| Testing       | Mock APIs          |
| Integration   | Use Axios / SDK    |
| Enterprise    | Gateway routing    |
| Optimization  | Custom fetch logic |
| Edge runtimes | Special execution  |

## Summary

Custom Transport makes Solvix:

- Fully extensible
- Runtime agnostic
- Enterprise ready

It allows you to plug Solvix into **any system architecture**.
