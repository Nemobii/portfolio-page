import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <img
                src="/portfolio-page/images/logo.png"
                alt="Logo"
                width={150}
                height={50}
                className='object-cover'
            />
        </Link>
    );
};

export default Logo;
