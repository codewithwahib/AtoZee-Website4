'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-[#fdfbf8] border-t border-[#e6dbcc] text-[#6B4F3B] pt-16 mt-16 font-sans overflow-hidden">
      
      {/* Background Design Layer */}
      <div
        className="absolute inset-0 bg-[url('/footer-bg-texture.png')] bg-cover bg-center opacity-10 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f3eee9] to-transparent opacity-90 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-base md:text-lg pb-12 z-10">
        
        {/* About Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#8B5E3C]">About Us</h4>
          <p className="text-[#6B4F3B]/80 leading-relaxed mb-4">
            We provide reliable and future-ready electrical solutions, serving industries with excellence and innovation.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#8B5E3C]">Quick Links</h4>
          <ul className="space-y-3 text-[#6B4F3B]/80">
            <li><Link href="/" className="hover:text-[#a67654] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#a67654] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#a67654] transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#a67654] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#8B5E3C]">Contact</h4>
          <ul className="space-y-3 text-[#6B4F3B]/80">
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@atozee.net
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> 0321 8287151
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Karachi, Pakistan
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#8B5E3C]">Stay Updated</h4>
          <p className="text-[#6B4F3B]/80 mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-full border border-[#d6c4b3] focus:outline-none focus:ring-2 focus:ring-[#D3B683]"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-[#D3B683] text-[#6B4F3B] font-semibold rounded-full hover:bg-[#c2a36e] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative border-t border-[#e6dbcc] py-6 text-center text-sm text-[#6B4F3B]/70 z-10">
        &copy; {new Date().getFullYear()} Switchgear Co. All rights reserved.
      </div>
    </footer>
  );
}
