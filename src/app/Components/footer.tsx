'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@atozee.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          _subject: 'New Newsletter Subscription',
          _template: 'table'
        })
      });

      const result = await response.json();
      if (result.success) {
        setMessage({ text: 'Thank you for subscribing!', type: 'success' });
        setEmail('');
      } else {
        setMessage({ text: 'Subscription failed. Please try again.', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'An error occurred. Please try again later.', type: 'error' });
    } finally {
      setSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    }
  };

  return (
    <footer className={`relative border-t border-[#e6dbcc] text-[#6B4F3B] pt-20 pb-8 mt-24 overflow-hidden ${dmsans.className}`}>
      
      {/* Background Design Layer */}
      <div
        className="absolute inset-0 bg-[url('/footer-bg-texture.png')] bg-cover bg-center opacity-10 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f8f3ed] to-transparent opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 text-lg pb-16 z-10">
        
        {/* About Section */}
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-[#6B4F3B]">About Us</h4>
          <p className="text-[#6B4F3B]/80 leading-relaxed text-lg font-sans">
            We provide reliable and future-ready electrical solutions, serving industries with excellence and innovation.
          </p>
          <div className="flex space-x-6 mt-6">
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-[#8B5E3C]">Quick Links</h4>
          <ul className="space-y-4 text-[#6B4F3B]/80 text-lg font-sans">
            <li><Link href="/" className="hover:text-[#a67654] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#a67654] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#a67654] transition">Services</Link></li>
            <li><Link href="/projects" className="hover:text-[#a67654] transition">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-[#a67654] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-[#8B5E3C]">Contact</h4>
          <ul className="space-y-4 text-[#6B4F3B]/80 text-lg font-sans">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-xl" /> info@atozee.net
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-xl" /> +92 321 8287151
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl" /> Karachi, Pakistan
            </li>
          </ul>
        </div>

        {/* Newsletter Signup with FormSubmit */}
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold text-[#8B5E3C]">Stay Updated</h4>
          <p className="text-[#6B4F3B]/80 text-lg font-sans">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="w-full px-6 py-3 rounded-full border-2 border-[#d6c4b3] focus:outline-none focus:ring-2 focus:ring-[#D3B683] text-lg font-sans"
            />
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3 bg-[#D3B683] text-[#6B4F3B] font-semibold rounded-full hover:bg-[#c2a36e] transition text-lg disabled:opacity-70"
            >
              {submitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
            {message.text && (
              <p className={`text-center ${message.type === 'success' ? 'text-green-600' : 'text-red-600'} font-sans`}>
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative border-t border-[#e6dbcc] py-8 text-center text-lg text-[#6B4F3B]/70 z-10 mt-12 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          &copy; {new Date().getFullYear()} A to Zee Switchgear Engineering. All rights reserved. | 
          <Link href="/privacy" className="hover:text-[#a67654] transition ml-2">Privacy Policy</Link> | 
          <Link href="/terms" className="hover:text-[#a67654] transition ml-2">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}