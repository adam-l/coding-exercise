import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Tabs } from '@/components/Tabs';
import { Filter } from '@/components/Filter';
import { FilterProvider } from '@/context/FilterContext';
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
    <FilterProvider>
      <html lang="en">
        <body
          className="bg-blue-100 {`${geistSans.variable} ${geistMono.variable} antialiased`}"
        >
          <button className="fixed top-4 right-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded cursor-pointer">
            <span>Request</span>
          </button>
          <div className="pt-12 max-w-[960px] mx-auto">
            <header>
              <h1 className="text-5xl font-bold text-center text-gray-800">Library</h1>
              <p className="my-6 text-xl text-gray-800 text-center">Browse for assets needed to report and present analysis.</p>
            </header>

            <div className="my-6">
              <Filter />
            </div>

            <Tabs />
            <main>
              {children}
            </main>
          </div>
        </body>
      </html>
    </FilterProvider>
  );
}
