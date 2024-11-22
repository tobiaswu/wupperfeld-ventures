import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '500'] });

export const metadata: Metadata = {
  title: 'Wupperfeld Ventures',
  description:
    'We at Wupperfeld Ventures are building and investing in technology-driven ventures. Turning innovative ideas into impactful solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
