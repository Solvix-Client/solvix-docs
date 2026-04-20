---
title: Changelog
---

# Changelog

All notable changes to this project will be documented in this file.

This project follows a structured release approach with clear feature additions and improvements.

## [v1.0.0-beta.2] - Documentation Updates

### Updates

- Updated shields and tags in README file

## [v1.0.0-beta.1] - Initial Release

### Overview

Solvix is a production-grade HTTP client designed for reliability, resilience, and performance.

This initial release introduces a complete system for handling real-world API challenges including retries, failures, concurrency, and observability.

## Core Features

### Request System

- Unified request API (`get`, `post`, `put`, `delete`)
- Base URL support
- Request-level configuration overrides
- Automatic JSON parsing
- Structured response object

### Retry Engine

- Configurable retry attempts
- Exponential backoff strategy
- Retry condition handling
- Retry-aware error metadata

### Circuit Breaker

- Failure threshold detection
- Automatic request blocking on unstable services
- Cooldown and recovery handling

### Rate Limiting

- Token bucket implementation
- Request throughput control
- Prevents API overload and throttling issues

### Request Deduplication

- Prevents duplicate in-flight requests
- Ensures single network call for identical requests
- Improves performance under concurrency

### Request Dependencies

- Supports dependent request execution
- Prevents race conditions
- Includes dependency registry system

### Token Refresh Orchestrator

- Stampede-safe token refresh
- Ensures only one refresh request executes
- Queues dependent requests automatically

### Offline Queue

- Queues requests when offline
- Automatically replays when connection is restored
- Prevents request loss

### Shadow Mode

- Sends requests to secondary backend
- Response comparison support
- Safe backend migration and testing

## Security Features

### HTTPS Enforcement

- Blocks insecure HTTP requests (optional)

### Domain Allowlist

- Restricts requests to trusted domains

### Header Sanitization

- Removes unsafe or sensitive headers

### Body Size Guard

- Prevents large payload abuse

### Response Size Guard

- Protects against oversized responses

### Snapshot Redaction

- Masks sensitive data in logs and debugging

## Observability & Debugging

### Snapshot Debugging

- Full request lifecycle snapshots
- Useful for debugging production issues

### Timeline Tracking

- Tracks each step of request execution

### Profiling Mode

- Measures request performance
- Includes timing breakdown

### Performance Metadata

- Duration
- Retry count
- Queue wait time
- Network time

### Event System (SolvixBus)

- Lifecycle event emission
- Hooks into request flow
- Supports logging and monitoring systems

## Extensibility

### Custom Transport

- Replace fetch with custom implementation
- Supports testing and adapters (e.g., Axios)

### Middleware System

- Request/response transformation
- Custom logic injection

### Hooks

- beforeRequest
- afterResponse
- onError

## Advanced Features

### Request Priority Queue

- Priority-based execution
- Concurrency control
- Queue overflow strategies

### Request Grouping

- Logical grouping of requests
- Batch execution support

### Timeout Handling

- Configurable request timeout
- Safe abort handling

### ETag Support

- Efficient caching strategies

### Streaming Support

- SSE (Server-Sent Events)
- JSON Lines support

## Performance & Optimization

### Lightweight Bundle

- ~7.8 KB (gzipped)

### High Throughput

- Optimized request pipeline
- Minimal overhead

### Memory Stability

- No memory leaks across repeated executions

## Benchmark Highlights

- Handles high concurrency efficiently
- Prevents retry storms
- Token refresh executes only once under load
- Deduplication reduces redundant network calls

## Runtime Support

- Node.js
- Browser
- Bun
- Edge environments

## Philosophy

Solvix is designed to:

- Handle failures as first-class citizens
- Provide production-ready defaults
- Reduce developer boilerplate
- Offer full control when needed

## Notes

This release establishes Solvix as a complete, production-ready HTTP client with advanced system-level capabilities.

Future releases will focus on ecosystem expansion and developer tooling.
