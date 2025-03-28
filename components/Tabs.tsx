'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Tabs = () => {
  const pathname = usePathname();
  const tabs: {
    name: string;
    href: string;
  }[] = [
    { name: 'Featured', href: '/featured' },
    { name: 'KPI', href: '/kpi' },
    { name: 'Layouts', href: '/layouts' },
    { name: 'Storyboards', href: '/storyboards' }
  ];

  return (
    <div>
      <div className="py-1 px-1 rounded-md bg-gray-100 flex mb-4">
        {tabs.map((tab) => (
          <Link key={tab.href}
                href={tab.href}
                className={`flex-1 py-2 px-2 text-gray-500 rounded-md text-center ${
                  (pathname === tab.href || tab.href === '/featured' && pathname === '/') ? 'bg-white text-gray-800 shadow-sm' : 'cursor-pointer'
                }`}>
            { tab.name }
          </Link>
        ))}
      </div>
    </div>
  );
}
