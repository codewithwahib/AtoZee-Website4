'use client';
import React from 'react';
import Image from 'next/image';

const products = [
  {
    title: 'Low Voltage Switchgear',
    description: 'Complete solutions for efficient power distribution systems.',
    image: '/images/distribution.png',
    link: '/products/power-distribution',
  },
  {
    title: 'Schneider Electric BlokSeT',
    description: 'Smart systems for optimal energy utilization and monitoring.',
    image: '/images/energy-management.png',
    link: '/products/energy-management',
    logo: '/s1.png'
  },
  {
    title: 'Schneider Electric PrismaSeT',
    description: 'Advanced protection for electrical circuits and equipment.',
    image: '/images/protection-devices.png',
    link: '/products/protection-devices',
    logo: '/s1.png'
  },
  {
    title: 'SF Universal Panel',
    description: 'Premium high-voltage solutions for industrial power management.',
    image: '/images/hv-switchgear.png',
    link: '/products/hv-switchgear',
    logo: '/s1.png'
  },
  {
    title: 'Medium Voltage Switchgear',
    description: 'Smart control panels for streamlined operations and automation.',
    image: '/images/control-panels.png',
    link: '/products/control-panels',
  },
  {
    title: 'Distribution Box',
    description: 'Organized and efficient power distribution for any scale.',
    image: '/images/distribution-boards.png',
    link: '/products/distribution-boards',
  },
  {
    title: 'Synchronization Panel',
    description: 'Precision synchronization for multiple power sources.',
    image: '/images/sync-panel.png',
    link: '/products/synchronization',
  },
  {
    title: 'Active Harmonic Filter',
    description: 'Reduce harmonic distortion and improve power quality.',
    image: '/images/harmonic-filter.png',
    link: '/products/harmonic-filters',
  },
  {
    title: 'Low Voltage Busway System',
    description: 'Custom busbar systems for robust power distribution.',
    image: '/images/busway-system.png',
    link: '/products/busway-systems',
  },
  {
    title: 'VSD (Variable Speed Drives)',
    description: 'Energy efficient motor speed control solutions.',
    image: '/images/vsd.png',
    link: '/products/variable-speed-drives',
  },
  {
    title: 'Dry Type Transformer',
    description: 'Safe, efficient and environmentally friendly transformers.',
    image: '/images/transformer.png',
    link: '/products/transformers',
  },
  {
    title: 'Kiosk Substations',
    description: 'Compact and reliable outdoor power distribution solutions.',
    image: '/images/substation.png',
    link: '/products/substations',
  }
];

export default function Products() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4">
          Our <span className="text-[#D3B683]">Products</span> & Solutions
        </h2>
        <p className="text-center text-gray-600 text-lg md:text-xl font-light mb-14 max-w-2xl mx-auto">
          Explore our trusted range of switchgear and power management solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {product.logo && (
                <div className="absolute top-0 left-0 z-10 bg-white p-2 shadow-md border-b border-r border-gray-200 rounded-br-lg">
                  <Image
                    src={product.logo}
                    alt="Brand logo"
                    width={80}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              )}
              
              <a
                href={product.link}
                className={`h-full bg-white rounded-sm shadow-lg border border-gray-200 hover:border-[#D3B683] hover:shadow-xl transition duration-300 block flex flex-col ${product.logo ? 'pt-8' : ''}`}
              >
                <div className="w-full h-64 p-4 flex items-center justify-center bg-[#F9F9F9] rounded-t-2xl relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.title} product illustration`}
                    width={300}
                    height={256}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#D3B683] transition-colors mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}