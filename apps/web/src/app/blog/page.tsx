import { CategoryFilter } from '@/components/CategoryFilter';
import { PostGrid } from '@/components/PostGrid';
import { getCategories, getPosts } from '@/lib/strapi';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog',
};

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const categorySlug = params.category;

  let posts = [];
  let categories = [];
  let error: string | null = null;

  try {
    [posts, categories] = await Promise.all([
      getPosts({ categorySlug }),
      getCategories(),
    ]);
  } catch {
    error = 'Could not reach Strapi. Make sure the CMS is running on port 1337.';
  }

  const activeCategory = categories.find((c) => c.slug === categorySlug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="mb-8 max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Blog
        </p>
        <h1 className="mt-3 font-sans text-4xl font-semibold tracking-tight text-charcoal">
          {activeCategory ? activeCategory.name : 'All posts'}
        </h1>
        <p className="mt-3 font-serif text-lg text-charcoal/70">
          Filter by yoga, sewing, natural fabric coloring, or vegan lifestyle.
        </p>
      </header>

      {categories.length > 0 ? (
        <div className="mb-8">
          <CategoryFilter categories={categories} activeSlug={categorySlug} />
        </div>
      ) : null}

      {error ? (
        <p className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 px-4 py-8 text-center text-charcoal/70">
          {error}
        </p>
      ) : (
        <PostGrid posts={posts} />
      )}
    </div>
  );
}
