import Link from 'next/link';
import { PostGrid } from '@/components/PostGrid';
import { getPosts } from '@/lib/strapi';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let posts = [];
  let error: string | null = null;

  try {
    posts = await getPosts({ limit: 6 });
  } catch {
    error =
      'Could not reach Strapi. Start the CMS on http://localhost:1337 and refresh this page.';
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <section className="mb-12 max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Welcome
        </p>
        <h1 className="mt-3 font-sans text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
          Soft rituals for everyday living
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-charcoal/75">
          Notes on yoga, sewing, natural fabric coloring, and a vegan lifestyle—written slowly,
          meant to be useful at home.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Browse the blog
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-charcoal/15 px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:border-accent/40 hover:text-accent"
          >
            About Laura
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-sans text-2xl font-semibold text-charcoal">Recent posts</h2>
          <Link href="/blog" className="text-sm font-medium text-accent hover:underline">
            View all
          </Link>
        </div>
        {error ? (
          <p className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 px-4 py-8 text-center text-charcoal/70">
            {error}
          </p>
        ) : (
          <PostGrid posts={posts} />
        )}
      </section>
    </div>
  );
}
