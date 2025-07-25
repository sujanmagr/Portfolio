import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom px-2 md:px-12 lg:px-2">
        <div className="flex items-center justify-between h-16 relative w-full">
          {/* Logo */}
          <Link
            to="hero"
            className="text-2xl md:text-3xl font-bold text-primary cursor-pointer"
            smooth={true}
            duration={500}
          >
            SACHIN B.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 mr-8 lg:mr-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-dark hover:text-primary cursor-pointer transition-colors"
                smooth={true}
                duration={500}
                offset={-64}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu - Fullscreen Overlay */}
        {isOpen && (
          <div className="absolute right-2 top-16 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 py-2 animate-fadeIn">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="block px-4 py-3 text-dark hover:text-primary text-base font-medium transition-colors"
                smooth={true}
                duration={500}
                offset={-64}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 