"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi'; 
import { HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className="bg-pink-300 text-black py-5 flex justify-between items-center px-10 relative z-10">
      <h1 className="text-2xl font-bold">Floral Fusion</h1>

    
      <nav className="hidden md:flex gap-10 text-black font-bold">
        <Link className=' hover:underline' href="/" onClick={closeMenu}>Home</Link>
        <Link className=' hover:underline' href="/About" onClick={closeMenu}>About</Link>
        <Link className=' hover:underline' href="/Flowers" onClick={closeMenu}>Flowers</Link>
        <Link  className =' hover:underline'href="/Contact" onClick={closeMenu}>Contact</Link>
      
      </nav>

  
      <div className="md:hidden flex items-center">
        <HiMenuAlt3
          className="text-black text-3xl cursor-pointer"
          onClick={toggleMenu} 
        />
      </div>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full h-full bg-pink-300 p-5 md:hidden z-20`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <HiX
            className="text-black text-3xl cursor-pointer"
            onClick={toggleMenu} // Close menu when clicked
          />
        </div>

        <nav className="flex flex-row items-center gap-3 text-white font-bold">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/About" onClick={closeMenu}>About</Link>
          <Link href="/Flowers" onClick={closeMenu}>Flowers</Link>
          <Link href="/Contact" onClick={closeMenu}>Contact</Link>
      
        </nav>
      </div>
    </header>
  );
};

export default Header;