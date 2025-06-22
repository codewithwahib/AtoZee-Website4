import React from 'react';
import Image from 'next/image';
import Navbar from '../Components/navbar';
import Footer from '@/app/Components/footer';

const CEOMessage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full px-0 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Text Content - Left Side (flush left) */}
          <div className="lg:w-1/2 pl-0">
            <div className="px-4 sm:px-6">
              <h1 className="text-4xl font-bold font-mono text-gray-900 pb-6 border-b border-gray-200">
                CEO's Message
              </h1>

              <div className="space-y-6 mt-8 text-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Welcome to Jubilee Corporation!
                </h2>

                <div className="space-y-5">
                  <p className="text-lg leading-relaxed text-gray-600 font-sans">
                    At Jubilee Corporation, we take pride in providing highest quality products with individualized customer service, and building lasting relationships with our customers. We ensure that our projects are completed timely, and advise our customers the technical solutions with cost saving measures that can be utilized, and assist with any safety requirements.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-600 font-sans">
                    With more than 55 years of expertise, Jubilee Corporation has had a positive, long-term association with the Brands it represents, spanning across decades. We have both, the capability and stability needed to provide you with products from world-renowned Brands.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-600 font-sans">
                    We believe that providing strong, technologically advanced, quality and specialized products, along with excellent customer service is the quintessence of our role as a leading Engineering Organization in Pakistan. This spirit gives us the necessary momentum to drive our vision of providing unparalleled quality of products and technical support services.
                  </p> 
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900">Abdul Mahomed (Late)</h3>
                  <p className="text-xl font-semibold text-gray-700 mt-2">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right Side (flush right) */}
          <div className="lg:w-1/2 flex items-center justify-center pr-0">
            <div className="relative w-full h-[380px] lg:h-[480px] rounded-none overflow-hidden pr-4">
              <Image
                src="/about1.png"
                alt="Abdul Mahomed, Chief Executive Officer"
                width={1400}
                height={1050}
                className="object-cover w-full h-full"
                priority
                quality={100}
                style={{
                  objectPosition: 'top center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CEOMessage;