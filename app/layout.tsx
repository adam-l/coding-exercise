import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Tabs } from '../components/Tabs';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'App',
  description: 'Coding exercise',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-blue-100 {`${geistSans.variable} ${geistMono.variable} antialiased`}"
      >
        <button className="fixed top-4 right-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded cursor-pointer">
          <span>Request</span>
        </button>
        <div className="pt-12 max-w-[960px] mx-auto">
          <Tabs />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
