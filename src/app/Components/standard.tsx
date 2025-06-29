import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700', // or use ['700'] if you need multiple weights
});

const FeatureSection = () => {
  const features = [
    {
      title: "Sales",
      description: "Quality and safety are two of the most important considerations in the power sector. DOHO switchgear is designed and manufactured keeping these two factors in mind. We use only the best parts and materials to make our products.",
      link: "/sales-work-operation",
      image: "/sale1.png"
    },
    {
      title: "Prepare Design",
      description: "DOHO is a leading innovator in switchgear products, one of the best standard and OEM switchgear manufacturers across the globe. We ensure the most advanced technologies on our products and are always looking for ways to improve our manufacturing processes.",
      link: "#",
      image: "/sd.png"
    },
    {
      title: "Purchase Action",
      description: "At DOHO, we understand that our customers need more than just quality products. They need a reliable partner they can count on for support and service. Our team is available 24/7 to provide the expert assistance you need for your project, when you need it.",
      link: "#",
      image: "/p.png"
    },
    {
      title: "Manufacturing Activity",
      description: "At DOHO, we understand that our customers need more than just quality products. They need a reliable partner they can count on for support and service. Our team is available 24/7 to provide the expert assistance you need for your project, when you need it.",
      link: "#",
      image: "/w.png"
    }
  ];

  return (
    <div className="relative py-12 md:py-20 overflow-hidden">
      {/* Beautiful Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f4ee] via-[#f0e6d8] to-[#e8d8c0] opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-10 z-0"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Heading Section */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${dmsans.className} text-black text-center px-4 tracking-wider`}>
             Work Operation 
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full min-h-[300px] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow p-6 space-y-4">
                <h2 className={`text-2xl font-semibold ${dmsans.className} tracking-wide text-gray-800`}>
                  {feature.title}
                </h2>
                <p className={`text-gray-600 font-light tracking-wider text-sm leading-relaxed flex-grow ${dmsans.className}`}>
                  {feature.description}
                </p>
                
                {/* Button */}
                <div className="mt-auto pt-4">
                  <button className={`w-full text-[#6B4F3B] font-semibold px-4 py-3 bg-white hover:bg-[#f5f0ea] transition-all duration-300 uppercase tracking-wider rounded-lg border border-[#d6c4b3] flex items-center justify-center gap-2 group hover:border-[#6B4F3B] ${dmsans.className}`}>
                    READ MORE
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;