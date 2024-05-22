import { Button } from '@/components/ui/button';
import { SheetClose, SheetContent } from '@/components/ui/sheet';
import Link from 'next/link';
import React from 'react';

const menu = [
  { label: 'Projects', link: '/projects' },
  { label: 'Blog', link: '/blog' },
  { label: 'Services', link: '/services' },
  { label: 'Consulting', link: '/contact' },
  { label: 'Feedback', link: '/#feedback' },
  { label: 'About us', link: '/about' },
];

export default function SideMenu() {
  return (
    <SheetContent className="pt-12 flex flex-col justify-between">
      <ul>
        {menu.map((menuItem, index) => {
          return (
            <li key={index}>
              <SheetClose asChild>
                <Link
                  href={menuItem.link}
                  className="font-heading block p-2 hover:px-6 text-gray-700 duration-300 cursor-pointer hover:bg-indigo-500 hover:text-indigo-50 rounded-lg text-2xl font-semibold"
                >
                  {menuItem.label}
                </Link>
              </SheetClose>
            </li>
          );
        })}
      </ul>
      <Link href="/contact" className="w-full">
        <SheetClose asChild>
          <Button className="w-full rounded-lg bg-indigo-500 hover:bg-indigo-400 font-semibold">
            Contact us
          </Button>
        </SheetClose>
      </Link>
    </SheetContent>
  );
}
