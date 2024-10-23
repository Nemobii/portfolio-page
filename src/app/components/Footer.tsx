interface FooterProps {
    isHome: boolean;
  }


const Footer: React.FC<FooterProps> = ({ isHome }) => {
    return (
        <footer className={`w-full bottom-0 bg-blue-200 flex justify-center text-black p-6 min-h-20 max-h-20 ${ isHome ? 'fixed' : '' }`}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
