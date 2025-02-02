import Link from 'next/link';
import React from 'react';
import { Social } from './Footer';

const Header = () => {
  return (
    <header className="border-b border-zinc-200">
      <nav className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 flex items-center justify-between">
        <Link href={'.'} className="font-bold text-xl">
          Vikram Mahto
        </Link>
        <Social/>        
      </nav>
    </header>
  );
};

export default Header;
