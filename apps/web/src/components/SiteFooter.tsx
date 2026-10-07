export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-charcoal/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-charcoal/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Laura. Made with care.</p>
        <p className="font-sans">Yoga · Sewing · Natural color · Vegan living</p>
      </div>
    </footer>
  );
}
