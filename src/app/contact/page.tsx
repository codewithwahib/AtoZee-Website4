'use client';

import { useState } from 'react';
import Navbar from '../Components/navbar';
import TopBar from '../Components/topbar';
import Footer from '../Components/footer';
import Image from 'next/image';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();

        // Optional: Hide message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      <TopBar />
      <Navbar />

      {/* Top Banner Image */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/contact.png"
          alt="About Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg font-serif"
            data-aos="fade-zoom-in"
          >
            Contact Us
          </h1>
          <p
            className="mt-3 pt-5 text-xl md:text-2xl text-gray-200 font-light"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Home / Contact Us
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto z-10">
        {/* Optional Pattern Background */}
        <div
          className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-5 pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="relative grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6B4F3B]">Get in Touch</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We&apos;d love to hear from you! Whether you have a question about our products,
              services, pricing, or anything else — our team is ready to help.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-[#6B4F3B] font-semibold">📧 Email</h3>
                <p className="text-gray-600">info@atozee.net</p>
              </div>
              <div>
                <h3 className="text-[#6B4F3B] font-semibold">📞 Phone</h3>
                <p className="text-gray-600">0321 8287151</p>
              </div>
              <div>
                <h3 className="text-[#6B4F3B] font-semibold">📍 Address</h3>
                <p className="text-gray-600">
                  AK 305, Sector 6-C, Mehran Town, Korangi, Industrial Area, Karachi
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/ajax/hassan.se2007@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-2xl space-y-6"
          >
            {submitted && (
              <div className="p-4 text-green-800 bg-green-100 border border-green-300 rounded-lg">
                ✅ Your message has been sent successfully!
              </div>
            )}

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D3B683] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="abc@example.com"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D3B683] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Your message..."
                  className="w-full border border-gray-300 px-4 py-3 h-36 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#D3B683] transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#D3B683] hover:bg-[#c2a96d] text-white font-semibold py-3 rounded-full transition-all shadow hover:shadow-lg"
              >
                ✉️ Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}