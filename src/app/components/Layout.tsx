"use client"

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { usePathname } from 'next/navigation'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const path = usePathname();
    const isHomePage = path === '/';

    return (
        <div className="flex flex-col min-h-screen">
            <Header isHome={isHomePage} />
            <main className={`flex-1 w-full mx-auto gap-y-6 bg-grey-light`}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
