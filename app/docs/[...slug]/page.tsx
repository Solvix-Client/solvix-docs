import { notFound } from 'next/navigation';
import { getDocBySlug, getDocSlugs } from '@/lib/docs';
import DocContent from '@/components/docs/DocContent';

interface PageProps { params: Promise<{ slug: string[] }>; }

export async function generateStaticParams() {
  return getDocSlugs().map(slug => ({ slug: slug.split('/') }));
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const slugPath = slug?.join('/') || '';
  const doc = getDocBySlug(slugPath);
  if (!doc) return notFound();

  return (
    <>
      <h1>{doc.frontmatter.title}</h1>
      <DocContent html={doc.html} />
    </>
  );
}
