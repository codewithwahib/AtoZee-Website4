'use client';
import React from 'react';
import Image from 'next/image';

const products = [
  {
    title: 'Low Voltage Switchgear',
    image: '/p111.png',
    link: '/products/power-distribution',
  },
  {
    title: 'BlokSeT',
    image: '/p111.png',
    link: '/products/energy-management',
    logo: '/s1.png'
  },
  {
    title: 'PrismaSeT',
    image: '/p111.png',
    link: '/products/protection-devices',
    logo: '/s1.png'
  },
  {
    title: 'Spacial SF Universal Enclosure',
    image: '/p111.png',
    link: '/products/protection-devices',
    logo: '/s1.png'
  },
  {
    title: 'Medium Voltage Switchgear',
    image: '/p111.png',
    link: '/products/control-panels',
  },
  {
    title: 'Distribution Box',
    image: '/p111.png',
    link: '/products/distribution-boards',
  },
  {
    title: 'Synchronization Panel',
    image: '/p111.png',
    link: '/products/synchronization',
  },
  {
    title: 'Active Harmonic Filter Solution',
    image: '/p111.png',
    link: '/products/harmonic-filters',
  },
  {
    title: 'KIOSK Substations',
    image: '/p111.png',
    link: '/products/substations',
  },
  {
    title: 'Low Voltage Busway System',
    image: '/p111.png',
    link: '/products/busway-systems',
  },
  {
    title: 'Dry Type Transformer',
    image: '/p111.png',
    link: '/products/transformers',
  },
  {
    title: 'VSD (Variable Speed Drives)',
    image: '/p111.png',
    link: '/products/variable-speed-drives',
  }
];

export default function Products() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 font-sans">
      {/* Banner Section */}
      <div className="relative w-screen h-80 md:h-96 lg:h-[30rem] mb-12 -ml-4 sm:-ml-6">
        <Image
          src="/product2.png"
          alt="Products Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75 object-left"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white text-center px-4 tracking-wider shadow-lg">
            “ OUR PRODUCTS ”
          </h1>
          <p className="text-center text-white text-base sm:text-lg md:text-xl font-light mt-4 max-w-xs sm:max-w-md md:max-w-2xl mx-auto tracking-wide md:tracking-widest px-4">
            Explore our trusted range of switchgear and power management solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pt-8 md:pt-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {product.logo && (
                <div className="absolute top-0 left-0 z-10 bg-white p-1 md:p-2 shadow-sm md:shadow-md border-b border-r border-gray-200 rounded-br-md md:rounded-br-lg">
                  <Image
                    src={product.logo}
                    alt="Brand logo"
                    width={80}
                    height={32}
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                </div>
              )}

              <a
                href={product.link}
                className={`h-full bg-white rounded-sm shadow-sm md:shadow-md lg:shadow-lg border border-black hover:shadow-md md:hover:shadow-lg lg:hover:shadow-xl transition duration-300 block flex flex-col ${product.logo ? 'pt-6 md:pt-8' : ''}`}
              >
                <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 p-2 md:p-3 lg:p-4 flex items-center justify-center bg-[#F9F9F9] rounded-t-sm md:rounded-t-lg relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.title} product illustration`}
                    width={300}
                    height={256}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 md:p-4 lg:p-6 text-center flex-grow">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider text-black group-hover:text-black transition-colors mb-1 md:mb-2">
                    {product.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}