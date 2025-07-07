import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Officers', path: '#officers' },
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
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#00468B] to-[#FFB800] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IEEE</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#00468B]">IEEE Jadara</h1>
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
                    className="text-gray-700 hover:text-[#00468B] transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-700 hover:text-[#00468B] transition-colors duration-200 font-medium ${
                      location.pathname === item.path ? 'text-[#00468B] border-b-2 border-[#FFB800]' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button className="bg-[#FFB800] hover:bg-[#e6a600] text-black font-semibold">
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#00468B] transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.path.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#00468B] hover:bg-gray-50 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 text-gray-700 hover:text-[#00468B] hover:bg-gray-50 rounded-md transition-colors duration-200"
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