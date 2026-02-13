import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Testimonials", to: "testimonials" },
    { name: "FAQ", to: "faq" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="home" className="cursor-pointer flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <span className="font-bold text-xl tracking-tight text-secondary">
            VitalSy
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
            className="px-6 py-2.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-accent hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 gap-6 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-primary transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
