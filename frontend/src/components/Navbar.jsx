import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className="relative text-gray-700 hover:text-ieee-blue transition-colors duration-300 font-medium">
      {children}
      {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute -bottom-2 left-0 w-full h-0.5 bg-ieee-yellow"
        />
      )}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
             <img className="h-12 w-auto" src="/images/ieee-logo.png" alt="IEEE Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/opening-day">Opening Day</NavItem>
            <NavItem to="/officers">Our Team</NavItem>
            <NavItem to="/about-ieee">About IEEE</NavItem>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? 'x' : 'menu'}
                  initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link to="/" className="block py-2 text-gray-700 font-medium">Home</Link>
              <Link to="/opening-day" className="block py-2 text-gray-700 font-medium">Opening Day</Link>
              <Link to="/officers" className="block py-2 text-gray-700 font-medium">Our Team</Link>
              <Link to="/about-ieee" className="block py-2 text-gray-700 font-medium">About IEEE</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;