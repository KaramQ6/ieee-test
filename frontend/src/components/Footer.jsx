import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { socialLinks, branchInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00468B] to-[#FFB800] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IEEE</span>
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
                className="p-3 bg-gray-800 rounded-full hover:bg-[#00468B] transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#00468B] transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#00468B] transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#00468B] transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#FFB800]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFB800] transition-colors duration-300">
                  About IEEE
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFB800] transition-colors duration-300">
                  Membership
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFB800] transition-colors duration-300">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFB800] transition-colors duration-300">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFB800] transition-colors duration-300">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#FFB800]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FFB800]" />
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-gray-300 hover:text-[#FFB800] transition-colors duration-300"
                >
                  {socialLinks.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#FFB800]" />
                <span className="text-gray-300">
                  Jadara University<br />
                  Irbid, Jordan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FFB800]" />
                <span className="text-gray-300">+962 2 720 1120</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 IEEE Jadara University Student Branch. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Advancing Technology for Humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;