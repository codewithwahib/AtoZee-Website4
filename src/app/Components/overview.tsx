'use client';
import { Montserrat } from 'next/font/google'
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FaArrowRight } from 'react-icons/fa';
import { Dosis } from 'next/font/google'
import { DM_Sans } from 'next/font/google'



const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700', // or use ['700'] if you need multiple weights
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: '700', // or use ['700'] if you need multiple weights
});

const dosis = Dosis({
  subsets: ['latin'],
})


const Overview = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </Head>

            <section 
                className="w-full py-12 md:py-24 px-4 md:pl-10 relative"
                style={{
                    backgroundImage: "url('/background-image.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}
            >
                {/* Semi-transparent overlay for better text readability */}
                <div className="absolute inset-0 bg-white bg-opacity-90"></div>
                
                <div className="flex flex-col lg:flex-row w-full relative z-10">
                    {/* Video Section */}
                    <div className="lg:w-1/2 w-full lg:pr-10 mb-8 lg:mb-0 order-1 lg:order-2">
                        <div className="relative h-64 md:h-[26rem] lg:h-[29rem] w-full overflow-hidden">
                            <iframe 
                                src="https://www.youtube.com/embed/vroQG-xw1QI?si=D8iYi-fq11jvLSeE" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                className="w-full rounded-lg h-full object-cover"
                            ></iframe>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-1/2 lg:pl-8 pr-0 md:pr-8 order-2 lg:order-1">
                        <div className="text-left mb-8">
                            {/* <p className={"text-4xl md:text-5xl font-semibold font-serif tracking-wide text-black mb-6 md:mb-8 leading-tight"}>
                                Overview
                            </p> */}

<h1 className={`heading ${dmsans.className} text-4xl md:text-5xl font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>Overview</h1>

                            <p className='tracking-widest text-gray-400 pb-10'>
                                -------------------------------------------------------------------------------------------------------------------------------------------------
                            </p>

                            <p className={`text-gray-600 font-light text-base md:text-lg leading-relaxed tracking-wider mb-8 md:mb-10 ${dmsans.className}`}>
  <span className={`font-bold text-2xl pr-1 text-brownPrimary tracking-wider ${dmsans.className}`}>
    A to Zee Switchgear Engineering
  </span> 
       is a leading Pakistani manufacturer of high-quality electrical switchgear, control panels, and power distribution solutions. Based in Karachi, the company serves industrial, commercial, and utility sectors with reliable, standards-compliant (IEC, IEEE) products. Known for innovation and precision engineering, A to Zee provides customized electrical solutions backed by strong technical expertise and after-sales support, contributing to Pakistan's power infrastructure development.
</p>
                            
                            <p className='tracking-widest text-gray-400 pb-10'>
                                -------------------------------------------------------------------------------------------------------------------------------------------------
                            </p>

                            <div className="pt-2">
                                <Link href="/about" passHref>
                                    <button className="text-black font-semibold px-4 py-3  bg-white hover:bg-gray-100 transition uppercase tracking-wider border border-gray-900 flex items-center gap-2 group">
                                                    READ MORE
                                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                                                  </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Overview;