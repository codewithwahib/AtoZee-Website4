import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { DM_Sans } from 'next/font/google';
import Navbar from '../Components/navbar';
import Footer from '@/app/Components/footer';

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const SalesWorkOperation = () => {
  const operations = [
    {
      title: "Sales Consultation",
      description: "Our expert sales team provides comprehensive consultations to understand your specific power distribution needs. We analyze your requirements and recommend the most suitable switchgear solutions from our extensive product range.",
      link: "#",
      image: "/sales-consultation.jpg"
    },
    {
      title: "Technical Proposal",
      description: "After initial consultation, our engineering team prepares detailed technical proposals including specifications, drawings, and performance guarantees. We ensure all solutions meet international standards and your project requirements.",
      link: "#",
      image: "/technical-design.jpg"
    },
    {
      title: "Order Processing",
      description: "Our streamlined order processing system ensures quick turnaround times. We handle all documentation, payment processing, and logistics coordination to guarantee smooth transaction and timely delivery.",
      link: "#",
      image: "/order-processing.jpg"
    },
    {
      title: "After-Sales Support",
      description: "A to Zee provides comprehensive after-sales support including installation guidance, maintenance services, and spare parts availability. Our dedicated support team is available 24/7 to address any operational concerns.",
      link: "#",
      image: "/after-sales.jpg"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="relative py-12 md:py-20 overflow-hidden bg-white">
        {/* Beautiful Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4f8] via-[#e0e8f0] to-[#d0dce8] opacity-95 z-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Top Heading Section */}
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${dmsans.className} text-[#003366] text-center px-4 tracking-wider`}>
              SALES WORK OPERATION
            </h1>
            <p className={`text-xl text-[#003366]/80 max-w-3xl mx-auto mt-6 ${dmsans.className}`}>
              Our streamlined sales process ensures you get the right switchgear solutions with expert support at every step
            </p>
          </div>

          {/* Operations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {operations.map((operation, index) => (
              <div 
                key={index} 
                className="group flex flex-col h-full bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full min-h-[250px] overflow-hidden">
                  <Image
                    src={operation.image}
                    alt={operation.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 to-transparent"></div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow p-6 space-y-4">
                  <h2 className={`text-xl font-bold ${dmsans.className} tracking-wide text-[#003366]`}>
                    {operation.title}
                  </h2>
                  <p className={`text-gray-600 font-normal tracking-wider text-sm leading-relaxed flex-grow ${dmsans.className}`}>
                    {operation.description}
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto pt-4">
                    <button className={`w-full text-white font-semibold px-4 py-3 bg-[#003366] hover:bg-[#004080] transition-all duration-300 uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 group ${dmsans.className}`}>
                      Learn More
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information Section */}
          <div className={`mt-20 bg-[#003366] rounded-xl p-8 md:p-12 text-white ${dmsans.className}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose A to Zee for Your Switchgear Needs?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold border-b pb-2 border-white/30">Experience</h3>
                <p className="font-light">30+ years of expertise in switchgear manufacturing and power distribution solutions</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold border-b pb-2 border-white/30">Quality</h3>
                <p className="font-light">ISO-certified production with rigorous quality control at every stage</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold border-b pb-2 border-white/30">Support</h3>
                <p className="font-light">Dedicated technical support team available 24/7 for all your operational needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SalesWorkOperation;