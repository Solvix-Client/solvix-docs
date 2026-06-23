import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] bg-clip-text text-transparent">404</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">Page not found</p>
      <Link href="/" className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] hover:from-[#1FD1B2] hover:to-[#0FA38A]/90 transition-all">Go Home</Link>
    </div>
  );
}
