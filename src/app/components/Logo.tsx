import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <img
                src="/portfolio-page/images/logo.png"
                alt="Logo"
                width={200} /* Erhöhe die Breite */
                height={70} /* Erhöhe die Höhe */
                className="object-cover"
            />
        </Link>
    );
};

export default Logo;
