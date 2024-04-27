import React from 'react';
import Logo from '../Logo';
import Hamburger from './Hamburger';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import SideMenu from './SideMenu';

export default function Header() {
  return (
    <Sheet>
      <div className="w-full py-4 px-4 sm:px-12 flex justify-between sticky top-0 border-b items-center bg-gray-50 backdrop-blur-sm bg-opacity-90 z-10">
        <Logo />
        <SheetTrigger className="w-5 h-5">
          <Hamburger />
        </SheetTrigger>
      </div>
      <SideMenu />
    </Sheet>
  );
}
