const Footer = () => {
    return (
        <footer className={`w-full bottom-0 bg-grey-dark flex justify-center text-white p-6 min-h-20 max-h-20`}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
