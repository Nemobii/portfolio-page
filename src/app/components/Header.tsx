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
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`z-20 w-full flex min-h-32 max-h-32 p-6 pr-20 justify-between bg-violet-100 transition-all duration-300 ${isHome ? 'fixed' : ''} ${isFixed && !isHome ? 'fixed top-0 w-full' : ''}`}>
            <div>
                <Logo/>
            </div>
            <nav>
                <ul className='flex h-full'>
                    <li className='p-4 self-center'><Link href="/">Home</Link></li>
                    <li className='p-4 self-center'><Link href="/about">About</Link></li>
                    <li className='p-4 self-center'><Link href="/contact">Contact</Link></li>
                    <li className='p-4 self-center'><Link href="/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
