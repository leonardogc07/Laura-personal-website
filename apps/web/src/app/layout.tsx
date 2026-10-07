import type { Metadata } from 'next';
import { Lora, Source_Sans_3 } from 'next/font/google';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import './globals.css';

const bodySerif = Lora({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const uiSans = Source_Sans_3({
  variable: '--font-ui',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Laura — Personal Blog',
    template: '%s · Laura',
  },
  description:
    'A personal blog about yoga, sewing, natural fabric coloring, and vegan lifestyle.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodySerif.variable} ${uiSans.variable} flex min-h-screen flex-col bg-cream font-sans text-charcoal antialiased`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
