import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { socialLinks, branchInfo, quickLinks } from '../data/mockData';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00468B] to-[#FFB800] rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <img src="/images/ieee-logo.png" alt="IEEE Logo" className="w-14 h-14 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{branchInfo.name}</h3>
                <p className="text-gray-400 text-sm">Student Branch</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {branchInfo.mission}
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#00468B] transition-colors duration-300 hover:scale-110 transform"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#00468B] transition-colors duration-300 hover:scale-110 transform"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#00468B] transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#FFB800]">Quick Links</h4>
            <ul className="space-y-3">
              {/* The manually added, correct link */}
              <li>
                <Link to="/about-ieee" className="text-gray-300 hover:text-[#FFB800] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  About IEEE
                </Link>
              </li>
              {/* Filter out the broken "About IEEE" from mockData and map the rest */}
              {quickLinks
                .filter(link => link.name !== 'About IEEE') // <-- This line removes the duplicate
                .map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-gray-300 hover:text-[#FFB800] transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#FFB800]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#FFB800] mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${branchInfo.contact.email}`}
                  className="text-gray-300 hover:text-[#FFB800] transition-colors duration-300"
                >
                  {branchInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FFB800] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  {branchInfo.contact.address}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#FFB800] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  {branchInfo.contact.phone}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 IEEE Jadara University Student Branch. All rights reserved.
            </p>
            <p className="text-[#FFB800] text-sm font-semibold">
              Advancing Technology for Humanity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
