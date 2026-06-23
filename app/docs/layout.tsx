import Sidebar from '@/components/docs/Sidebar';
import MobileNav from '@/components/docs/MobileNav';
import TableOfContents from '@/components/docs/TableOfContents';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto flex">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <div className="md:hidden px-4 pt-4 pb-2"><MobileNav /></div>
        <article className="px-4 md:px-8 py-6 prose max-w-none">{children}</article>
      </div>
      <TableOfContents />
    </div>
  );
}
