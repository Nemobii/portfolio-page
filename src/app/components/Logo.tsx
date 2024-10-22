import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            {/* Replace with your logo image */}
            <img
                src="logo.png" // Update with your logo path
                alt="Logo"
                width={150} // Adjust as necessary
                height={50} // Adjust as necessary
            />
            {/* Alternatively, you can use text instead of an image */}
            {/* <h1>Your Company Name</h1> */}
        </Link>
    );
};

export default Logo;
