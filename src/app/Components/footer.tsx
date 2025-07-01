'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { DM_Sans } from 'next/font/google';
import { SlCallIn } from "react-icons/sl";
import { LuMapPin } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/hr@atozee.net', {
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
    } catch {
      setMessage({ text: 'An error occurred. Please try again later.', type: 'error' });
    } finally {
      setSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    }
  };

  return (
    <footer className={`relative border-t-2 border-[#e6dbcc] text-[#6B4F3B] pt-24 pb-12 mt-32 overflow-hidden ${dmsans.className}`}>
      
      {/* Background Design Layer */}
      <div
        className="absolute inset-0 bg-[url('/footer-bg-texture.png')] bg-cover bg-center opacity-10 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f8f3ed] via-[#f8f3ed90] to-transparent opacity-40 pointer-events-none"></div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 left-0 w-48 h-48 bg-[#D3B683] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 right-0 w-64 h-64 bg-[#6B4F3B] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16 pb-20 z-10">
        
        {/* About Section */}
        <div className="space-y-8">
          <h4 className="text-3xl font-bold text-[#6B4F3B]">About Us</h4>
          <p className="text-[#6B4F3B]/90 leading-relaxed text-xl font-sans">
            We provide reliable and future-ready electrical solutions, serving industries with excellence and innovation since 2010.
          </p>
          <div className="flex space-x-6 mt-8">
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition text-2xl transform hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition text-2xl transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition text-2xl transform hover:scale-110">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h4 className="text-3xl font-bold text-[#8B5E3C]">Quick Links</h4>
          <ul className="space-y-5 text-[#6B4F3B]/90 text-xl font-sans">
            <li>
              <Link href="/" className="hover:text-[#a67654] transition flex items-center gap-2 group">
                <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-all" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#a67654] transition flex items-center gap-2 group">
                <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-all" />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#a67654] transition flex items-center gap-2 group">
                <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-all" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#a67654] transition flex items-center gap-2 group">
                <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-all" />
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#a67654] transition flex items-center gap-2 group">
                <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-all" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h4 className="text-3xl font-bold text-[#8B5E3C]">Contact Us</h4>
          <ul className="space-y-5 text-[#6B4F3B]/90 text-xl font-sans">
            <li className="flex items-start gap-4">
              <TfiEmail className="text-xl mt-1 flex-shrink-0" />
              <span>info@atozee.net</span>
            </li>
            <li className="flex items-start gap-4">
              <SlCallIn className="text-xl mt-1 flex-shrink-0" />
              <span>+92 321 8287151</span>
            </li>
            <li className="flex items-start gap-4">
              <LuMapPin className="text-xl mt-1 flex-shrink-0" />
              <span>Karachi, Pakistan</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-8">
          <h4 className="text-3xl font-bold text-[#8B5E3C]">Stay Updated</h4>
          <p className="text-[#6B4F3B]/90 text-xl font-sans">
            Subscribe to our newsletter for the latest updates and exclusive offers.
          </p>
          <form 
            action="https://formsubmit.co/ajax/hr@atozee.net" 
            method="POST"
            onSubmit={handleSubmit} 
            className="flex flex-col space-y-5"
          >
            <input type="hidden" name="_subject" value="New Newsletter Subscription" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              required
              className="w-full px-6 py-4 rounded-full border-2 border-[#d6c4b3] focus:outline-none focus:ring-2 focus:ring-[#D3B683] text-xl font-sans placeholder-[#6B4F3B]/60"
            />
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-4 bg-[#D3B683] hover:bg-[#c2a36e] text-[#6B4F3B] font-bold rounded-full transition-all text-xl disabled:opacity-70 transform hover:scale-105 active:scale-95"
            >
              {submitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
            {message.text && (
              <p className={`text-center ${message.type === 'success' ? 'text-green-600' : 'text-red-600'} font-sans text-lg`}>
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative border-t-2 border-[#e6dbcc] py-8 text-center text-xl text-[#6B4F3B]/80 z-10 mt-16 font-sans">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <span>&copy; {new Date().getFullYear()} A to Zee Switchgear Engineering. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-[#a67654] transition underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#a67654] transition underline underline-offset-4">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}