import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AyurVeda Centre - Authentic Panchakarma & Yoga',
  description: 'Experience authentic Ayurvedic healing with Panchakarma therapies and Yoga. Over 25 years of trusted holistic care.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
