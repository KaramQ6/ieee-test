import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Officers', path: '/officers' },
    { name: 'Opening Day', path: '/opening-day' },
    { name: 'Contact', path: '#contact' }
  ];

  const handleNavClick = (path) => {
    if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
           <div className="w-10 h-10 bg-gradient-to-r from-[#00468B] to-[#FFB800] rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
  <img src="/images/ieee-logo.png" alt="IEEE Logo" className="w-6 h-6 object-contain" />
</div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[#00468B] group-hover:text-[#FFB800] transition-colors duration-300">
                IEEE Jadara
              </h1>
              <p className="text-xs text-gray-600">Student Branch</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.path.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="text-gray-700 hover:text-[#00468B] transition-colors duration-300 font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB800] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-700 hover:text-[#00468B] transition-colors duration-300 font-medium relative group ${
                      location.pathname === item.path ? 'text-[#00468B]' : ''
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFB800] transition-all duration-300 ${
                      location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )}
              </div>
            ))}
            <Button className="bg-[#FFB800] hover:bg-[#e6a600] text-black font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#00468B] transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 animate-in slide-in-from-top duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.path.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#00468B] hover:bg-gray-50 rounded-md transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 text-gray-700 hover:text-[#00468B] hover:bg-gray-50 rounded-md transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-[#FFB800] hover:bg-[#e6a600] text-black font-semibold">
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;