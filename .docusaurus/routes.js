import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/solvix-docs/markdown-page',
    component: ComponentCreator('/solvix-docs/markdown-page', '13a'),
    exact: true
  },
  {
    path: '/solvix-docs/',
    component: ComponentCreator('/solvix-docs/', '59d'),
    exact: true
  },
  {
    path: '/solvix-docs/',
    component: ComponentCreator('/solvix-docs/', '323'),
    routes: [
      {
        path: '/solvix-docs/',
        component: ComponentCreator('/solvix-docs/', '809'),
        routes: [
          {
            path: '/solvix-docs/',
            component: ComponentCreator('/solvix-docs/', '252'),
            routes: [
              {
                path: '/solvix-docs/architecture-overview',
                component: ComponentCreator('/solvix-docs/architecture-overview', '752'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/basic-request',
                component: ComponentCreator('/solvix-docs/basic-request', '22d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/benchmark-overview',
                component: ComponentCreator('/solvix-docs/benchmark-overview', '189'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/benchmark-results',
                component: ComponentCreator('/solvix-docs/benchmark-results', '9cd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/body-size-guard',
                component: ComponentCreator('/solvix-docs/body-size-guard', '93a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/bundle-size-analysis',
                component: ComponentCreator('/solvix-docs/bundle-size-analysis', '383'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/changelog',
                component: ComponentCreator('/solvix-docs/changelog', '62c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/circuit-breaker',
                component: ComponentCreator('/solvix-docs/circuit-breaker', '6fa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/client-instance',
                component: ComponentCreator('/solvix-docs/client-instance', '892'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/comparison-vs-axios',
                component: ComponentCreator('/solvix-docs/comparison-vs-axios', '272'),
                exact: true
              },
              {
                path: '/solvix-docs/concurrency-test',
                component: ComponentCreator('/solvix-docs/concurrency-test', '047'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/configuration-overview',
                component: ComponentCreator('/solvix-docs/configuration-overview', 'ac8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/contribution-guide',
                component: ComponentCreator('/solvix-docs/contribution-guide', '03a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/custom-backoff-strategy',
                component: ComponentCreator('/solvix-docs/custom-backoff-strategy', '517'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/custom-error-handling',
                component: ComponentCreator('/solvix-docs/custom-error-handling', 'e9d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/custom-retry-logic',
                component: ComponentCreator('/solvix-docs/custom-retry-logic', 'c05'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/custom-transport',
                component: ComponentCreator('/solvix-docs/custom-transport', '2dd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/dependency-registry',
                component: ComponentCreator('/solvix-docs/dependency-registry', 'b55'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/design-goal',
                component: ComponentCreator('/solvix-docs/design-goal', '260'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/development-setup',
                component: ComponentCreator('/solvix-docs/development-setup', '737'),
                exact: true
              },
              {
                path: '/solvix-docs/domain-allowlist',
                component: ComponentCreator('/solvix-docs/domain-allowlist', '8f9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/error-handling-basics',
                component: ComponentCreator('/solvix-docs/error-handling-basics', '82d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/etag-support',
                component: ComponentCreator('/solvix-docs/etag-support', '89a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/header-sanitization',
                component: ComponentCreator('/solvix-docs/header-sanitization', 'eb2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/hooks',
                component: ComponentCreator('/solvix-docs/hooks', 'ee0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/https-enforcement',
                component: ComponentCreator('/solvix-docs/https-enforcement', 'ab7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/installation',
                component: ComponentCreator('/solvix-docs/installation', '5c4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/large-scale-api-orchestration',
                component: ComponentCreator('/solvix-docs/large-scale-api-orchestration', '456'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/logging-events-solvixbus',
                component: ComponentCreator('/solvix-docs/logging-events-solvixbus', 'ce6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/memory-stability-test',
                component: ComponentCreator('/solvix-docs/memory-stability-test', '640'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/middleware-system',
                component: ComponentCreator('/solvix-docs/middleware-system', '603'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/migrating-from-axios',
                component: ComponentCreator('/solvix-docs/migrating-from-axios', '5b1'),
                exact: true
              },
              {
                path: '/solvix-docs/migrating-from-fetch',
                component: ComponentCreator('/solvix-docs/migrating-from-fetch', '61f'),
                exact: true
              },
              {
                path: '/solvix-docs/migrating-from-ky',
                component: ComponentCreator('/solvix-docs/migrating-from-ky', '966'),
                exact: true
              },
              {
                path: '/solvix-docs/offline-queue',
                component: ComponentCreator('/solvix-docs/offline-queue', '1ca'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/performance-metadata',
                component: ComponentCreator('/solvix-docs/performance-metadata', 'a8a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/profiling-mode',
                component: ComponentCreator('/solvix-docs/profiling-mode', '813'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/quick-start',
                component: ComponentCreator('/solvix-docs/quick-start', '123'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/rate-limiting',
                component: ComponentCreator('/solvix-docs/rate-limiting', 'c44'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/request-deduplication',
                component: ComponentCreator('/solvix-docs/request-deduplication', 'c96'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/request-dependencies',
                component: ComponentCreator('/solvix-docs/request-dependencies', '455'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/request-grouping',
                component: ComponentCreator('/solvix-docs/request-grouping', '882'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/request-options-reference',
                component: ComponentCreator('/solvix-docs/request-options-reference', '98c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/request-priority-queue',
                component: ComponentCreator('/solvix-docs/request-priority-queue', 'ec8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/response-object-structure',
                component: ComponentCreator('/solvix-docs/response-object-structure', 'd4f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/response-size-guard',
                component: ComponentCreator('/solvix-docs/response-size-guard', '29a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/response-structure',
                component: ComponentCreator('/solvix-docs/response-structure', 'ce5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/retry-engine',
                component: ComponentCreator('/solvix-docs/retry-engine', '045'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/retry-storm-test',
                component: ComponentCreator('/solvix-docs/retry-storm-test', '70c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/secure-configuration-examples',
                component: ComponentCreator('/solvix-docs/secure-configuration-examples', '8d3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/shadow-mode-execution',
                component: ComponentCreator('/solvix-docs/shadow-mode-execution', '752'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/snapshot-debugging',
                component: ComponentCreator('/solvix-docs/snapshot-debugging', '3a0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/snapshot-redaction',
                component: ComponentCreator('/solvix-docs/snapshot-redaction', '54d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/streaming-support-sse-json-lines',
                component: ComponentCreator('/solvix-docs/streaming-support-sse-json-lines', 'c87'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/timeline-tracking',
                component: ComponentCreator('/solvix-docs/timeline-tracking', 'af8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/timeout-handling',
                component: ComponentCreator('/solvix-docs/timeout-handling', '857'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/token-refresh-orchestrator',
                component: ComponentCreator('/solvix-docs/token-refresh-orchestrator', '025'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/token-refresh-stampede-test',
                component: ComponentCreator('/solvix-docs/token-refresh-stampede-test', '988'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/transform-request',
                component: ComponentCreator('/solvix-docs/transform-request', '858'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/transform-response',
                component: ComponentCreator('/solvix-docs/transform-response', 'e40'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/using-solvix-with-microservices',
                component: ComponentCreator('/solvix-docs/using-solvix-with-microservices', '08d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/using-solvix-with-nextjs',
                component: ComponentCreator('/solvix-docs/using-solvix-with-nextjs', '5d4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/using-solvix-with-react',
                component: ComponentCreator('/solvix-docs/using-solvix-with-react', '75e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/using-solvix-with-serveless',
                component: ComponentCreator('/solvix-docs/using-solvix-with-serveless', '28a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/why-solvix',
                component: ComponentCreator('/solvix-docs/why-solvix', 'f9f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/solvix-docs/',
                component: ComponentCreator('/solvix-docs/', '0b0'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
