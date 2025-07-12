import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Memoized social link component
const SocialLink = memo(({ href, icon: Icon, label }) => (
  <motion.a 
    whileHover={{ y: -2, scale: 1.1 }} 
    href={href}
    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ieee-blue rounded-md p-1"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={20} />
  </motion.a>
));

SocialLink.displayName = 'SocialLink';

// Memoized navigation link component
const NavLink = memo(({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-300 hover:text-ieee-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-ieee-blue rounded-md"
    >
      {children}
    </Link>
  </li>
));

NavLink.displayName = 'NavLink';

// Optimized logo component with picture element
const FooterLogo = memo(() => (
  <picture>
    <source srcSet="/images/ieee-logo2.webp" type="image/webp" />
    <img 
      src="/images/ieee-logo2.png" 
      alt="IEEE Logo" 
      className="h-12 w-auto"
      width="48"
      height="48"
      loading="lazy"
    />
  </picture>
));

FooterLogo.displayName = 'FooterLogo';

const Footer = () => {
  // Static data - could be moved to a config file
  const socialLinks = [
    { href: 'https://instagram.com/ieee_ju', icon: Instagram, label: 'Follow us on Instagram' },
    { href: 'https://linkedin.com/company/ieee-ju', icon: Linkedin, label: 'Connect with us on LinkedIn' },
    { href: 'https://facebook.com/ieee.ju', icon: Facebook, label: 'Like us on Facebook' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Team', href: '/officers' },
    { name: 'Opening Day', href: '/opening-day' },
    { name: 'About IEEE', href: '/about-ieee' },
    { name: 'Join JSYP', href: '/join-jsyp' }
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Jadara University, Irbid, Jordan' },
    { icon: Mail, text: 'ieee@jadara.edu.jo' },
    { icon: Phone, text: '+962 2 721 0000' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="contact" 
      className="bg-gray-900 text-white" 
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <FooterLogo />
              <div>
                <h3 className="text-xl font-bold text-white">IEEE Jadara University</h3>
                <p className="text-gray-400 text-sm">Student Branch</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Fostering technological innovation and professional growth for the benefit of humanity 
              through IEEE's global network of engineers and technologists.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-400 text-sm">
                  <contact.icon size={16} className="flex-shrink-0" />
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Navigate
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <NavLink key={link.name} to={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <SocialLink 
                  key={index}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
            
            {/* Newsletter signup could go here */}
            <div className="mt-6">
              <h5 className="text-sm font-medium text-gray-300 mb-2">Stay Updated</h5>
              <p className="text-xs text-gray-400">
                Follow us on social media for the latest news and events.
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} IEEE Jadara University Student Branch. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);