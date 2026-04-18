import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Solvix Documentation',
  tagline: 'Production-grade HTTP client for real-world systems',
  favicon: 'img/solvix-png.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://solvix-client.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/solvix-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Solvix-Client', // Usually your GitHub org/user name.
  projectName: 'solvix-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl:
            'https://github.com/Solvix-Client/solvix/edit/main/docs',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // SEO and social metadata
    image: 'img/solvix-png.png',
    metadata: [
      {
        name: 'description',
        content:
          'Solvix Documentation - Production-grade HTTP client reference, guides, and API best practices for modern applications.',
      },
      {
        name: 'keywords',
        content:
          'Solvix, HTTP client, API client, documentation, JavaScript HTTP, TypeScript HTTP, retry, timeout, observability',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Solvix Documentation',
      },
      {
        property: 'og:description',
        content:
          'Official documentation for Solvix, the production-ready universal HTTP client for modern web and server applications.',
      },
      {
        property: 'og:image',
        content: 'https://solvix-client.github.io/solvix-docs/img/solvix-png.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Solvix Documentation',
      },
      {
        name: 'twitter:description',
        content:
          'Official Solvix docs for production-grade HTTP client usage, configuration, and best practices.',
      },
      {
        name: 'twitter:image',
        content: 'https://solvix-client.github.io/solvix-docs/img/solvix-png.png',
      },
    ],
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
