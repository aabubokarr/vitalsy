import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { Menu, X } from "lucide-react";
import { navLinks, companyName } from "../data";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="home" className="cursor-pointer flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
            {companyName.charAt(0)}
          </div>
          <span className="font-bold text-xl tracking-tight text-secondary">
            {companyName}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={false}
              offset={-100}
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-primary uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={false}
            offset={-100}
            className="px-6 py-2.5 bg-primary text-white rounded-full font-medium text-sm cursor-pointer"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 gap-6 border-t border-gray-100"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={false}
              offset={-100}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-primary cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
