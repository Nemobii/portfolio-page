// components/MobileHeader.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='md:hidden'>
            <div>
                <Logo/>
            </div>
            <button onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
            <nav className={isOpen ? "flex" : "hidden"}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default MobileHeader;
