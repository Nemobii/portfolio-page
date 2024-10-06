import Link from 'next/link';
import Logo from './Logo';

const Header = () => {
    return (
        <header className='flex min-h-12 p-6 pr-20 justify-between'>
            <Logo/>
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
