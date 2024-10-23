'use client'

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
        <header className={`z-20 w-full flex min-h-32 max-h-32 p-6 pr-20 justify-between bg-violet-100 transition-all duration-300 ${isHome ? 'fixed' : ''} ${isFixed && !isHome ? 'fixed top-0 w-full' : ''}`}>
            <div>
                <Logo />
            </div>
            <nav>
                <ul className='flex h-full'>
                    <li className='p-4 self-center group'>
                        <Link href="/" className="relative hover:text-violet-700 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-violet-700 after:transition-all after:duration-300 group-hover:after:w-full">Home</Link>
                    </li>
                    <li className='p-4 self-center group'>
                        <Link href="/about" className="relative hover:text-violet-700 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-violet-700 after:transition-all after:duration-300 group-hover:after:w-full">About</Link>
                    </li>
                    <li className='p-4 self-center group'>
                        <Link href="/contact" className="relative hover:text-violet-700 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-violet-700 after:transition-all after:duration-300 group-hover:after:w-full">Contact</Link>
                    </li>
                    <li className='relative p-4 self-center group'>
                        <Link href="/portfolio" className="relative hover:text-violet-700 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-violet-700 after:transition-all after:duration-300 group-hover:after:w-full">Portfolio</Link>
                        {/* Dropdown Menü */}
                        <ul className="absolute left-0 mt-2 hidden bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 group-hover:block transition-all duration-300">
                            <li className='p-2 hover:bg-violet-100 transition-colors duration-200 rounded-md'><Link href="/portfolio/animals">Animals</Link></li>
                            <li className='p-2 hover:bg-violet-100 transition-colors duration-200 rounded-md'><Link href="/portfolio/travel">Travel</Link></li>
                            <li className='p-2 hover:bg-violet-100 transition-colors duration-200 rounded-md'><Link href="/portfolio/portrait">Portrait</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
