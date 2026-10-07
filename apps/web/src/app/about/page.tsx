import { getPrimaryAuthor } from '@/lib/strapi';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'About',
};

const fallbackBio = `Laura shares a gentle life built around yoga, handmade sewing, natural dyes, and plant-based living. She believes small daily rituals—breath, thread, color, and food—can make a home feel more alive.`;

export default async function AboutPage() {
  let author = null;
  try {
    author = await getPrimaryAuthor();
  } catch {
    author = null;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        About
      </p>
      <h1 className="mt-3 font-sans text-4xl font-semibold tracking-tight text-charcoal">
        {author?.name || 'Laura'}
      </h1>
      <p className="mt-2 font-sans text-base text-charcoal/60">
        {author?.role || 'Writer & Maker'}
      </p>
      <div className="mt-8 space-y-4 font-serif text-lg leading-relaxed text-charcoal/80">
        <p>{author?.bio || fallbackBio}</p>
        <p>
          This site is a quiet corner for practical notes: short yoga flows, sewing repairs,
          plant-based dye pots, and simple vegan meals. Content is managed in Strapi so new posts
          can be written without touching the Next.js code.
        </p>
      </div>
    </div>
  );
}
