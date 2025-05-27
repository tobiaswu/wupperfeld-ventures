import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Link from 'next/link';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-gunmetal-400">
      <body className={jetbrainsMono.className}>
        <Link
          href="/privacy"
          className="fixed bottom-4 left-4 z-50 text-xs text-steel-blue-400 hover:text-buff-400 bg-gunmetal-400/70 px-3 py-1 rounded-full shadow-sm transition-colors duration-200 opacity-70 hover:opacity-100"
        >
          Privacy
        </Link>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://www.wupperfeld.org'),
    title: 'Tobias Wupperfeld - AI Developer & Software Engineer',
    description:
      'Ambitious software engineer from Germany, founder of MadeByAgents. Specializing in AI-powered solutions, strategic consulting, and enterprise software development.',
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Tobias Wupperfeld - AI Developer & Software Engineer',
      description:
        'Ambitious software engineer from Germany, founder of MadeByAgents. Specializing in AI-powered solutions, strategic consulting, and enterprise software development.',
      type: 'website',
      images: [
        {
          url: '/wv_logo.webp',
          width: 1730,
          height: 744,
          alt: 'Tobias Wupperfeld Logo',
        },
      ],
      url: 'https://www.wupperfeld.org',
      siteName: 'Tobias Wupperfeld',
    },
  };
}
