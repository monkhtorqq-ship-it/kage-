"use client";
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link'; 

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-black text-white no-underline cursor-pointer tracking-tighter">
          KAGE<span className="text-red-500">.SITE</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center text-xs font-medium uppercase tracking-widest">
          <ScrollLink to="home" smooth={true} className="text-gray-300 hover:text-white cursor-pointer transition-colors">Home</ScrollLink>
          <ScrollLink to="threats" smooth={true} className="text-gray-300 hover:text-white cursor-pointer transition-colors">Threats</ScrollLink>
          <ScrollLink to="about" smooth={true} className="text-gray-300 hover:text-white cursor-pointer transition-colors">About</ScrollLink>
          <ScrollLink to="features" smooth={true} className="text-gray-300 hover:text-white cursor-pointer transition-colors">Features</ScrollLink> 
          <ScrollLink to="manual" smooth={true} className="text-gray-300 hover:text-white cursor-pointer transition-colors">Manual</ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;