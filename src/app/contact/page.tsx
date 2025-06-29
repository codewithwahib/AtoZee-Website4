'use client';
import { Libre_Baskerville } from 'next/font/google';
import { useState, useRef } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [address, setAddress] = useState('');
  const [mapHeading, setMapHeading] = useState(0);
  const [mapTilt, setMapTilt] = useState(0);
  const mapRef = useRef<HTMLIFrameElement>(null);

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
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  return (
    <div className={`${dmSans.variable} font-sans text-gray-800 bg-white`}>
      <Navbar />

      {/* HEAD OFFICE Section */}
      <section className="relative py-20 px-4 md:px-6 max-w-7xl mx-auto z-10 border border-gray-200 bg-gray-50 rounded-2xl my-12">
        <div className="relative grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info - Left side */}
          <div className="space-y-8 pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6B4F3B]">UNIT 01:</h2>      
            <div className="space-y-6 pt-5">
              <div className="flex items-start gap-4">
                <div className="bg-[#D3B683] p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address:</h3>
                  <p className="text-gray-600">AK 305, Sector 6-C, Mehran Town, Korangi, Industrial Area, Karachi.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D3B683] p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Tel:</h3>
                  <p className="text-gray-600">0321 8287151</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D3B683] p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email:</h3>
                  <p className="text-gray-600">info@atozee.net</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-4 pt-9">
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map - Right side */}
          <div className="h-full min-h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-lg relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.629277549313!2d67.11406952810145!3d24.853101247580412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33be62cff3021%3A0x3413bdf92cbfb51f!2sA%20to%20Zee%20Engineering%20Services!5e0!3m2!1sen!2s!4v1750238224448!5m2!1sen!2s" 
              width="600" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-md">
              <a 
                href="https://www.google.com/maps/place/V437%2B3W+Korangi,+Karachi,+Pakistan/@24.844817,67.03019,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33dbbdc187e6f:0x7a7f6c1f3a3e3e3d!8m2!3d24.844817!4d67.03019!16s%2Fg%2F11b8z8z8z8?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FACTORY Section */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto z-10 bg-gray-50 border border-gray-200 rounded-2xl my-12">
        <div className="relative grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info - Left side */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold pl-8 text-[#6B4F3B]">
              UNIT 02:
            </h2>      
            <div className="space-y-6 pl-8 pt-5">
              <div className="flex items-start  gap-4">
                <div className="bg-[#D3B683] p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address:</h3>
                  <p className="text-gray-600">Plot E-34, North Western Industrial Zone, Port Qasim Authority, Karachi, Pakistan.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D3B683] p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Tel:</h3>
                  <p className="text-gray-600">0321 8287151</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D3B683] p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email:</h3>
                  <p className="text-gray-600">info@atozee.net</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-4 pt-9">
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map - Right side */}
          <div className="h-full min-h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-lg relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115856.48221911675!2d67.1267791390625!3d24.84625209030622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb333e1675c1d65%3A0x3b195e43eab6d055!2sA%20to%20Zee%20Switchgear%20Engineering%20(SMC-PVT)%20Ltd.!5e0!3m2!1sen!2s!4v1750240723736!5m2!1sen!2s" 
              width="600" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-md">
              <a 
                href="https://www.google.com/maps/place/A-to-Zee+Switchgear+Engineering/@24.8462521,67.1267791,12z/data=!4m6!3m5!1s0x3eb333e1675c1d65:0x3b195e43eab6d055!8m2!3d24.8462521!4d67.1267791!16s%2Fg%2F11h0v3x5_q?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
       
      <section className="relative py-12 px-4 md:px-28 bg-white my-12 w-full">
        <div className="text-center mb-6 md:mb-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-black tracking-normal">
            Get In Touch With Us
          </h2>
        </div>

        <form 
          action="https://formsubmit.co/ajax/info@atozee.net"
          method="POST"
          className="space-y-4 md:space-y-6 w-full pt-4 md:pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name*"
                className="w-full px-4 md:px-8 py-4 md:py-6 text-base md:text-lg border border-white rounded-none focus:ring-1 focus:ring-[#D3B683] focus:border-[#D3B683] outline-none transition bg-gray-50 placeholder-gray-500"
              />
            </div>

            {/* Contact No Field */}
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Contact No*"
                className="w-full px-4 md:px-8 py-4 md:py-6 text-base md:text-lg border border-white rounded-none focus:ring-1 focus:ring-[#D3B683] focus:border-[#D3B683] outline-none transition bg-gray-50 placeholder-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {/* Company/Reference Field */}
            <div>
              <input
                type="text"
                id="company"
                name="company"
                required
                placeholder="Company/Reference*"
                className="w-full px-4 md:px-8 py-4 md:py-6 text-base md:text-lg border border-white rounded-none focus:ring-1 focus:ring-[#D3B683] focus:border-[#D3B683] outline-none transition bg-gray-50 placeholder-gray-500"
              />
            </div>

            {/* City Field */}
            <div>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="City*"
                className="w-full px-4 md:px-8 py-4 md:py-6 text-base md:text-lg border border-white rounded-none focus:ring-1 focus:ring-[#D3B683] focus:border-[#D3B683] outline-none transition bg-gray-50 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email*"
              className="w-full px-4 md:px-8 py-4 md:py-6 text-base md:text-lg border border-white rounded-none focus:ring-1 focus:ring-[#D3B683] focus:border-[#D3B683] outline-none transition bg-gray-50 placeholder-gray-500"
            />
          </div>

          {/* Comments/Questions Field */}
          <div className="w-full">
            <textarea
              id="comments"
              name="comments"
              rows={4}
              placeholder="Comments/Questions*"
              className="w-full px-4 md:px-8 py-4 md:py-6 text-base md:text-lg border border-white rounded-none focus:ring-1 focus:ring-[#D3B683] focus:border-[#D3B683] outline-none transition bg-gray-50 min-h-[100px] md:min-h-[120px] placeholder-gray-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2 md:pt-4 w-96 mx-auto">
  <button
    type="submit"
    className="w-full px-4 py-4 items-center rounded-lg  text-base md:text-lg bg-black text-white font-medium  hover:bg-gray-950 transition duration-300 focus:outline-none focus:ring-1 focus:ring-[#6B4F3B]"
  >
    SUBMIT
  </button>
</div>
          {submitted && (
            <div className="mt-3 md:mt-4 p-3 md:p-4 bg-green-100 text-green-700 text-base md:text-lg w-full">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </form>
      </section>
      <Footer />
    </div>
  );
}