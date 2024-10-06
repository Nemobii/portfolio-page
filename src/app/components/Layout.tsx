import Header from './Header';
import Footer from './Footer';
import MobileHeader from './MobileHeader';

const Layout = ({ children }) => {
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
