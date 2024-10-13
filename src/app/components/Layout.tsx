import Header from './Header';
import React, { ReactNode } from 'react';
import Footer from './Footer';
import MobileHeader from './MobileHeader';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <MobileHeader />
            <main className='flex-1'>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
