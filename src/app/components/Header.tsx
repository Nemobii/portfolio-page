'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useEffect, useState } from 'react';

interface HeaderProps {
  isHome: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome }) => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${isHome ? '' : 'min-h-[100px]'}`}>
      <header
        className={`z-20 w-full flex items-center justify-center px-6 py-4 bg-white transition-all duration-300 h-[100px] ${
          isHome ? 'fixed' : ''
        } ${isFixed && !isHome ? 'fixed top-0 w-full' : ''}`}
      >
        <nav className="flex items-center font-raleway">
          <ul className="flex gap-4">
            <li className="nav-item">
              <Link href="/blog">The Blog</Link>
            </li>
            <li className="nav-item">
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div className="mx-6">
            <Logo />
          </div>
          <ul className="flex gap-4">
            <li className="nav-item relative">
              <Link href="/portfolio">Portfolio</Link>
              <div className="dropdown">
                <Link href="/portfolio/animals">Animals</Link>
                <Link href="/portfolio/travel">Travel</Link>
                <Link href="/portfolio/portrait">Portrait</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* Shop Link ganz am Ende */}
          <ul className="flex gap-4 ml-auto">
            <li className="nav-item">
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
