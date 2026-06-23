import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Solvix — HTTP Orchestration Engine',
    template: '%s — Solvix Docs',
  },
  description: 'Enterprise-Grade HTTP Orchestration Engine for Modern JavaScript',
  icons: {
    icon: '/solvix-docs/img/logo.svg',
    shortcut: '/solvix-docs/img/logo.svg',
    apple: '/solvix-docs/img/solvix-png.png',
  },
  openGraph: {
    title: 'Solvix — HTTP Orchestration Engine',
    description: 'Enterprise-grade HTTP client with 50+ built-in features',
    images: [{ url: '/solvix-docs/img/solvix-png.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
