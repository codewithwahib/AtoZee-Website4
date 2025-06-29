'use client';

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

export default function CeoMissionSection() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[450px]">
      {/* Left side (CEO Message) */}
      <div className="md:w-1/2 relative flex flex-col justify-center items-start p-8 md:p-12 min-h-[350px] md:min-h-[450px]">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about1.png"
            alt="CEO background"
            fill
            quality={100}
            priority={true}
            className="object-cover"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-[600px] mt-8">
          <h3 className={`text-3xl pl-4 pr-4 pt-2 pb-2 font-bold text-black mb-6 uppercase tracking-wider bg-white inline-block ${dmsans.className}`}>
            CEO's Message
          </h3>
          <p className={`text-white text-lg tracking-wider leading-relaxed mb-8 italic ${dmsans.className}`}>
            At Jubilee Corporation, we take pride in providing highest quality products with individualized customer service, and building lasting relationships with our customers.
          </p>
          <Link href="/ceo-message" passHref>
            <button className={`text-black font-semibold px-4 py-3 bg-white hover:bg-gray-100 transition uppercase tracking-wider rounded-sm flex items-center gap-2 group border border-black hover:border-gray-400 ${dmsans.className}`}>
              READ MORE
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </button>
          </Link>
        </div>
      </div>

      {/* Right side (Mission) */}
      <div className="md:w-1/2 flex flex-col justify-center items-start p-8 md:p-12 bg-white text-black min-h-[350px] md:min-h-[450px] border border-gray-200">
        <h3 className={`text-3xl px-4 pt-2 pb-10 font-bold text-black mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-200 ${dmsans.className}`}>
          OUR STORY
        </h3>
        <p className={`text-lg leading-relaxed mb-8 tracking-wider pb-6 italic text-gray-600 ${dmsans.className}`}>
          "To be the market leaders in electrical, electronics and automation technology products by focusing on top quality products and services and to work for the satisfaction and progress of our customers and the community at large."
        </p>
        <Link href="/about" passHref>
          <button className={`text-black font-semibold px-4 py-3 bg-white hover:bg-gray-100 transition uppercase tracking-wider rounded-sm border border-gray-900 flex items-center gap-2 group ${dmsans.className}`}>
            READ MORE
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
          </button>
        </Link>
      </div>
    </section>
  );
}