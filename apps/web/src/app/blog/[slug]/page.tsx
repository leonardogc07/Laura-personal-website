import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { AuthorSidebar } from '@/components/AuthorSidebar';
import { formatDate } from '@/lib/format';
import { getPostBySlug, getPosts } from '@/lib/strapi';

export const dynamic = 'force-dynamic';

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post' };
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return { title: 'Post' };
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  let post = null;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link href="/blog" className="text-sm font-medium text-accent hover:underline">
        ← Back to blog
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {post.category ? (
              <Link
                href={`/blog?category=${post.category.slug}`}
                className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-accent"
              >
                {post.category.name}
              </Link>
            ) : null}
            <time className="text-sm text-charcoal/55" dateTime={post.publishedDate}>
              {formatDate(post.publishedDate)}
            </time>
          </div>
          <h1 className="font-sans text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-charcoal/70">
            {post.excerpt}
          </p>
          <div className="prose-laura mt-8 max-w-2xl">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>

        <div className="lg:pt-2">
          {post.author ? <AuthorSidebar author={post.author} /> : null}
        </div>
      </div>
    </div>
  );
}
