'use client';
import { FaPhone, FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="w-full bg-white text-black py-2 px-4 font-mono border-b border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Tracking Number */}
        <div className="text-lg md:text-xl tracking-tight mb-2 md:mb-0"></div>
        
        {/* Contact and Social Media */}
        <div className="flex items-center space-x-4">
          {/* Phone Number with right divider */}
          <div className="flex items-center pr-4 border-r border-gray-300">
            <FaPhone className="mr-2 text-gray-600" />
            <span className="text-sm md:text-base">0321 8287151</span>
          </div>
          
          {/* Social Media Icons with dividers */}
         <div className="flex items-center space-x-4">
  <a href="#" className="px-3 border-r border-black/10 text-blue-600 first:pl-0">
    <FaFacebook size={18} />
  </a>
  <a href="#" className="px-3 border-r border-black/10 text-pink-600">
    <FaInstagram size={18} />
  </a>
  <a href="#" className="px-3 border-r border-black/10 text-red-600">
    <FaYoutube size={18} />
  </a>
  <a href="#" className="pl-3 text-blue-500">
    <FaLinkedin size={18} />
  </a>
</div>
        </div>
      </div>
    </div>
  );
}