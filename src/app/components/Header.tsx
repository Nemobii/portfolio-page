"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`z-[9999] w-full flex items-center justify-center px-4 py-2 bg-white transition-all duration-300 h-[80px] ${
        isFixed ? "fixed top-0 w-full" : ""
      }`}
    >
      <nav className="hidden lg:flex items-center w-full max-w-screen-xl mx-auto">
        <ul className="flex gap-4 mr-auto text-sm">
          <li className="nav-item">
            <Link href="/blog">The Blog</Link>
          </li>
          <li className="nav-item">
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div className="flex-shrink-0 mx-4">
          <Logo />
        </div>
        <ul className="flex gap-4 ml-auto text-sm">
          <li className="nav-item">
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
          <li className="nav-item">
            <Link href="/shop">Shop</Link>
          </li>
        </ul>
      </nav>

      <div className="lg:hidden w-full flex items-center justify-between">
        <Logo />
        <button
          className="p-1"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>


      {isMenuOpen && (
        <>

          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsMenuOpen(false)}
          ></div>


          <nav className="lg:hidden fixed top-[80px] right-0 w-full bg-white shadow-md z-20">
            <ul className="flex flex-col items-center gap-2 py-2">
              <li className="nav-item">
                <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                  The Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </Link>
                <div className="dropdown">
                  <Link
                    href="/portfolio/animals"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Animals
                  </Link>
                  <Link
                    href="/portfolio/travel"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Travel
                  </Link>
                  <Link
                    href="/portfolio/portrait"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portrait
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
