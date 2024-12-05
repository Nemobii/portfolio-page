import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-grey-dark text-white p-8">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.instagram.com/_nicowalker"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400 transition-colors"
        >
          <FaInstagram className="text-2xl" />
          <span>@_nicowalker</span>
        </a>
        <a
          href="https://www.instagram.com/lens.of_tamara_nico"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400 transition-colors"
        >
          <FaInstagram className="text-2xl" />
          <span>@lens.of_tamara_nico</span>
        </a>
      </div>
      <div className="text-center text-sm">
        <p>© {new Date().getFullYear()} Nico Walker. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;
