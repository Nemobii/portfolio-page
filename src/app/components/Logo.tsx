import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href="/">
            <Image
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
