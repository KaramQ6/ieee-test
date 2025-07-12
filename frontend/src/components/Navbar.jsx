import React, { useState, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Optimized NavItem component with memo to prevent unnecessary re-renders
const NavItem = memo(({ to, children, activeColor = 'bg-ieee-blue' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className="relative text-gray-700 hover:text-ieee-blue transition-colors duration-300 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:ring-offset-2 rounded-md"
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="navbar-underline"
          className={`absolute -bottom-2 left-0 w-full h-0.5 ${activeColor}`}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
});

NavItem.displayName = 'NavItem';

// Mobile menu item component
const MobileNavItem = memo(({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-ieee-blue transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:ring-offset-2"
    onClick={onClick}
  >
    {children}
  </Link>
));

MobileNavItem.displayName = 'MobileNavItem';

// Optimized Logo component with picture element for WebP support
const Logo = memo(() => (
  <Link 
    to="/" 
    className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:ring-offset-2 rounded-md"
    aria-label="IEEE Jadara University - Home"
  >
    <picture>
      <source srcSet="/images/ieee-logo1.webp" type="image/webp" />
      <img 
        className="navbar-logo" 
        src="/images/ieee-logo1.png"
        alt="IEEE Logo"
        width="120"
        height="80"
        loading="eager"
        fetchPriority="high"
      />
    </picture>
  </Link>
));

Logo.displayName = 'Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Memoized toggle function to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle escape key to close mobile menu
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape' && isOpen) {
      closeMenu();
    }
  }, [isOpen, closeMenu]);

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <header role="banner">
      <nav 
        className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50" 
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10" role="menubar">
              <NavItem to="/" role="menuitem">Home</NavItem>
              <NavItem to="/opening-day" role="menuitem">Opening Day</NavItem>
              <NavItem to="/officers" role="menuitem">Our Team</NavItem>
              <NavItem to="/about-ieee" role="menuitem">About IEEE</NavItem>
              <NavItem to="/join-jsyp" activeColor="bg-purple-500" role="menuitem">
                Join JSYP
              </NavItem>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-gray-700 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:ring-offset-2 transition-colors"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle main menu"
              >
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
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
                onClick={closeMenu}
                aria-hidden="true"
              />
              
              {/* Mobile menu content */}
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-100 bg-white relative z-50"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="px-2 pt-2 pb-4 space-y-1">
                  <MobileNavItem to="/" onClick={closeMenu} role="menuitem">
                    Home
                  </MobileNavItem>
                  <MobileNavItem to="/opening-day" onClick={closeMenu} role="menuitem">
                    Opening Day
                  </MobileNavItem>
                  <MobileNavItem to="/officers" onClick={closeMenu} role="menuitem">
                    Our Team
                  </MobileNavItem>
                  <MobileNavItem to="/about-ieee" onClick={closeMenu} role="menuitem">
                    About IEEE
                  </MobileNavItem>
                  <MobileNavItem to="/join-jsyp" onClick={closeMenu} role="menuitem">
                    Join JSYP
                  </MobileNavItem>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default memo(Navbar);
