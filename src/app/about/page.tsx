'use client';

import Image from 'next/image';
// import TopBar from '../Components/topbar';
import Clients from '../Components/ourclient';
import MenuItem from '../Components/nc'
import Navbar from '../Components/navbar';
// import AboutCompany from '../Components/aboutcompany';
import Advantages from '../Components/adv';
import Footer from '../Components/footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaTools,
  FaHandsHelping,
  FaShieldAlt,
  FaLeaf,
  FaLightbulb,
  FaGlobe,
  FaAward,
  FaNetworkWired,
} from 'react-icons/fa';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans text-white">
      {/* <TopBar /> */}
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/about.png"
          alt="About Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg font-serif" data-aos="fade-zoom-in">
            About Us
          </h1>
          <p className="mt-3 pt-5 text-xl md:text-2xl text-gray-200 font-light" data-aos="fade-up" data-aos-delay="200">
            Home / About Us
          </p>
        </div>
      </div>

      {/* Who We Are */}
      {/* <section className="relative py-20 px-4 lg:px-12 bg-[#FAF6F0] text-gray-800 overflow-hidden">
        
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#F6EBD9] rounded-full opacity-30 blur-3xl z-0"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-[#F6EBD9] rounded-full opacity-20 blur-3xl z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 pl-0 lg:pl-10" data-aos="fade-up-right">
              <div className="flex items-center">
                <div className="w-1 h-12 bg-[#6B4F3B] mr-4 rounded-sm"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#6B4F3B] font-serif">
                  Who We Are...
                </h2>
              </div>
              
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-[#6B4F3B]">A to Zee Systems</span> provides comprehensive electro-technical solutions under one roof - supplying, controlling and protecting industrial plants across the country. As experts in safe power distribution, we serve as a reliable partner to industry, plant construction and power suppliers.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#6B4F3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#6B4F3B]">Our Expertise</h3>
                    <p className="mt-1 text-gray-700">
                      From state-of-the-art low voltage electric panels to process automation, control systems and integrated electro-technical solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#6B4F3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#6B4F3B]">25 Years of Innovation</h3>
                    <p className="mt-1 text-gray-700">
                      We&apos;ve been offering customers innovative technologies under one roof for 25 years, combining local tradition with global strategy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#6B4F3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#6B4F3B]">Global Network</h3>
                    <p className="mt-1 text-gray-700">
                      Customers access our full spectrum of products and services through an extensive sales & service network, including patented in-house inventions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white" data-aos="zoom-in-left">
              <Image 
                src="/ab1.jpg" 
                alt="A to Zee Systems Facility" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F3B]/20 to-transparent"></div>
              
              Badge overlay
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold text-[#6B4F3B]">25+</div>
                  <div className="text-sm font-medium text-gray-700">
                    Years of<br/>Technical Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* AboutCompany */}
      <section className="relative bg-gradient-to-tr from-[#f9f5ef] to-[#f1e8da] py-20 px-4 lg:px-12">
        <div className="absolute top-0 left-0 w-full h-full -z-10 transform -skew-y-2 bg-[#EFE2CF] opacity-20"></div>
        <div className="relative z-10" data-aos="fade-up-left">
          {/* <AboutCompany /> */}
        </div>
      </section>
             <MenuItem/>

      {/* Mission & Vision Banner */}
      <div className="relative w-full h-[40vh]">
        <Image
          src="/mis.jpg"
          alt="Mission Vision Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg font-serif" data-aos="zoom-in-up">
            Our Mission & Vision
          </h2>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="relative bg-gradient-to-br from-[#FFF9F2] to-[#F9EFE5] text-gray-800 py-24 px-4 lg:px-12 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-96 h-96 bg-[#F6EBD9] rounded-full opacity-30 blur-3xl z-0"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 mt-8">
          <div className="bg-white p-8 rounded-2xl shadow-2xl space-y-6" data-aos="flip-left">
            <h3 className="text-3xl font-semibold text-[#8B5E3C] mb-4 font-serif">Mission</h3>
            <div className="space-y-5 text-gray-700 text-lg md:text-xl">
              <div className="flex items-center space-x-4">
                <FaTools className="text-[#8B5E3C] text-2xl" />
                <span>Deliver premium switchgear and panel solutions.</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaHandsHelping className="text-[#8B5E3C] text-2xl" />
                <span>Provide personalized engineering support.</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaShieldAlt className="text-[#8B5E3C] text-2xl" />
                <span>Ensure safety, reliability, and sustainability.</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaLeaf className="text-[#8B5E3C] text-2xl" />
                <span>Support renewable and smart energy infrastructure.</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl space-y-6" data-aos="flip-right" data-aos-delay="200">
            <h3 className="text-3xl font-semibold text-[#8B5E3C] mb-4 font-serif">Vision</h3>
            <div className="space-y-5 text-gray-700 text-lg md:text-xl">
              <div className="flex items-center space-x-4">
                <FaLightbulb className="text-[#8B5E3C] text-2xl" />
                <span>Lead the industry in smart power distribution innovation.</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaGlobe className="text-[#8B5E3C] text-2xl" />
                <span>Empower sustainable infrastructure globally.</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaAward className="text-[#8B5E3C] text-2xl" />
                <span>Be recognized for engineering excellence and ethics.</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaNetworkWired className="text-[#8B5E3C] text-2xl" />
                <span>Expand with future-ready, scalable technologies.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="relative py-20 px-4 lg:px-12 bg-white text-gray-800">
        <svg
          className="absolute top-0 left-0 w-full h-24 text-[#F6EBD9]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M0,0 V30 Q600,90 1200,30 V0z" fill="currentColor" />
        </svg>
        <div className="relative z-10" data-aos="fade-down">
          <Advantages/>
        </div>
        <div className="text-center mb-6 pt-12 md:mb-10 max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-4xl font-serif font-bold text-black tracking-normal">
      Our Clients
    </h2>
  </div>
        <Clients/>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}