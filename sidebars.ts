import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: true,
      items: [
        "introduction",
        "why-solvix",
        "architecture-overview",
        "design-goal",
        "installation",
        "quick-start",
        "basic-request",
        "response-structure",
        "error-handling-basics",
        "configuration-overview",
      ],
    },

    {
      type: "category",
      label: "Release Notes",
      items: ["changelog"],
    },

    {
      type: "category",
      label: "Core API",
      collapsed: true,
      items: [
        "client-instance",
        "request-options-reference",
        "response-object-structure",
        "hooks",
        "retry-engine",
        "circuit-breaker",
        "rate-limiting",
        "timeout-handling",
        "request-priority-queue",
        "request-grouping",
        "request-dependencies",
        "request-deduplication",
        "dependency-registry",
        "token-refresh-orchestrator",
        "offline-queue",
        "shadow-mode-execution",
        "https-enforcement",
        "domain-allowlist",
        "header-sanitization",
        "body-size-guard",
        "response-size-guard",
        "snapshot-redaction",
        "secure-configuration-examples",
        "snapshot-debugging",
        "timeline-tracking",
        "profiling-mode",
        "performance-metadata",
        "benchmark-results",
        "logging-events-solvixbus",
        "custom-transport",
        "middleware-system",
        "transform-request",
        "transform-response",
        "custom-retry-logic",
        "custom-backoff-strategy",
        "custom-error-handling",
        "etag-support",
        "streaming-support-sse-json-lines",
      ],
    },

    {
      type: "category",
      label: "Usage Patterns",
      collapsed: true,
      items: [
        "using-solvix-with-react",
        "using-solvix-with-nextjs",
        "using-solvix-with-serveless",
        "using-solvix-with-microservices",
        "large-scale-api-orchestration",
      ],
    },

    {
      type: "category",
      label: "Performance Benchmarking",
      collapsed: true,
      items: [
        "benchmark-overview",
        "memory-stability-test",
        "concurrency-test",
        "retry-storm-test",
        "token-refresh-stampede-test",
        "bundle-size-analysis",
      ],
    },

    // {
    //   type: "category",
    //   label: "Migration Guides",
    //   collapsed: true,
    //   items: [
    //     "migrating-from-axios",
    //     "migrating-from-fetch",
    //     "migrating-from-ky",
    //   ],
    // },

    {
      type: "category",
      label: "Contributing",
      collapsed: true,
      items: [
        "contribution-guide",
      ],
    },
  ],
};

export default sidebars;
