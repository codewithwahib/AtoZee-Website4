'use client';

import { FiPhone, FiMail } from 'react-icons/fi';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="bg-white text-xs shadow-sm">
      {/* Mobile Layout (stacked) */}
      <div className="md:hidden flex flex-col">
        {/* Welcome Text - Top Line */}
        <div className="w-full text-center py-2 px-4">
          <span className="text-black text-sm font-serif">Welcome to A to Zee Power Systems</span>
        </div>
        
        {/* Thin Line Divider */}
        <div className="w-full border-t border-gray-200"></div>
        
        {/* Contact Info - Bottom Line */}
        <div className="w-full flex items-center justify-center space-x-4 text-black py-2 px-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-red-600 hover:text-red-700 text-base" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-blue-600 hover:text-blue-700 text-base" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-pink-500 hover:text-pink-600 text-base" />
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-1">
            <FiPhone className="text-black text-sm" />
            <a href="tel:+923218287151" className="hover:underline text-xs">
              0321 8287151
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-1">
            <FiMail className="text-black text-sm" />
            <a href="mailto:info@atozeepower.com" className="hover:underline text-xs">
              info@atozee.net
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout (full width single line) */}
      <div className="hidden md:flex items-center justify-between w-full py-1 px-8">
        {/* Welcome Text */}
        <div className="text-black text-sm font-serif ml-4">
          <span>Welcome to A to Zee Power Systems</span>
        </div>

        {/* Contact Info and Socials */}
        <div className="flex items-center space-x-6 text-black mr-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-red-600 hover:text-red-700 text-base" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-blue-600 hover:text-blue-700 text-base" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-pink-500 hover:text-pink-600 text-base" />
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <FiPhone className="text-black text-sm" />
            <a href="tel:+923218287151" className="hover:underline text-sm">
              0321 8287151
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <FiMail className="text-black text-sm" />
            <a href="mailto:info@atozeepower.com" className="hover:underline text-sm">
              info@atozee.net
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}