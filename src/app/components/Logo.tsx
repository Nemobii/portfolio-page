import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <img
                src="/portfolio-page/images/logo.png"
                alt="Logo"
                width={200}
                height={70}
                className="object-cover"
            />
        </Link>
    );
};

export default Logo;
