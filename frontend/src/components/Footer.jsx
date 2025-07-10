import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Assuming these are from mockData or a similar source
  const socialLinks = { instagram: '#', linkedin: '#', facebook: '#' };
  const quickLinks = [{ name: 'Home', href: '/' }, { name: 'Our Team', href: '/officers' }, { name: 'Events', href: '/opening-day' }];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/ieee-logo2.png" alt="IEEE Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold text-white">IEEE Jadara University</h3>
                <p className="text-gray-400 text-sm">Student Branch</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Fostering technological innovation and professional growth for the benefit of humanity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigate</h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-ieee-yellow transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/about-ieee" className="text-gray-300 hover:text-ieee-yellow transition-colors">
                  About IEEE
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Follow Us</h4>
            <div className="mt-4 flex space-x-5">
              <motion.a whileHover={{ y: -2, scale: 1.1 }} href={socialLinks.instagram} className="text-gray-400 hover:text-white"><Instagram /></motion.a>
              <motion.a whileHover={{ y: -2, scale: 1.1 }} href={socialLinks.linkedin} className="text-gray-400 hover:text-white"><Linkedin /></motion.a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} IEEE Jadara University Student Branch. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;