'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);

  const slides = [
    {
      image: '/q2.jpg',
      heading: 'QUALITY - SAFETY INNOVATION',
      subheading: 'SWITCH GEARS',
      description: 'For decades we have been setting standards in innovation, safety and quality in our core business of switchgear systems',
      buttonText: 'Read More',
      buttonLink: '/products'
    },
    {
      image: '/q2.jpg',
      subheading: 'SERVICES',
      description: 'Our comprehensive service package leaves no wish unanswered - we do everything from assembly to maintenance and a 24/7 365 emergency services, right through to a comprehensive spare parts service.',
      buttonText: 'Read More',
      buttonLink: '/distribution'
    },
    {
      image: '/q2.jpg',
      subheading: 'AUTOMATION',
      description: 'We are constantly developing reliable automation solutions that are specifically tailored to customers needs in the field of automation and control systems.',
      buttonText: 'Read More',
      buttonLink: '/control-panels'
    },
    {
      image: '/q2.jpg',
      subheading: 'SOLUTION',
      description: 'We combine the products of selected partners with A to Zee services and a comprehensive project management to come up with professional solutions.',
      buttonText: 'Read More',
      buttonLink: '/energy-management'
    }
  ];

  const goToNext = () => {
    setExitAnimation(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      setExitAnimation(false);
    }, 500);
  };

  const goToPrev = () => {
    setExitAnimation(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setExitAnimation(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    if (index !== activeIndex) {
      setExitAnimation(true);
      setTimeout(() => {
        setActiveIndex(index);
        setExitAnimation(false);
      }, 500);
    }
  };

  return (
    <div className="relative w-full h-[90vh] min-h-[700px] overflow-hidden">
      <Image
        src={slides[activeIndex].image}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Static heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans text-white mb-6 tracking-wide">
              {slides[0].heading}
            </h1>
            
            {/* Animated content section with navigation buttons */}
            <div className="mt-16 overflow-hidden relative">
              {/* Navigation buttons */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between items-center px-4">
                <button 
                  onClick={goToPrev}
                  className="text-white bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full w-14 h-14 flex items-center justify-center transition-all z-10 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={goToNext}
                  className="text-white bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full w-14 h-14 flex items-center justify-center transition-all z-10 hover:scale-110"
                  aria-label="Next slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Subheading animation */}
              <div className={`transition-all duration-500 ease-in-out ${
                exitAnimation ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}>
                <h2 className="text-4xl md:text-5xl font-bold font-light text-white mb-8 tracking-wide">
                  {slides[activeIndex].subheading}
                </h2>
              </div>
              
              {/* Description animation */}
              <div className={`transition-all duration-500 ease-in-out delay-100 ${
                exitAnimation ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}>
                <p className="text-xl md:text-2xl text-white mb-12 mx-auto font-light tracking-wider max-w-3xl leading-relaxed">
                  {slides[activeIndex].description}
                </p>
              </div>
              
              {/* Button animation */}
              <div className={`transition-all duration-500 ease-in-out delay-200 ${
                exitAnimation ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}>
                <a
                  href={slides[activeIndex].buttonLink}
                  className="inline-block px-12 py-4 bg-white text-gray-800 rounded-lg font-medium text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {slides[activeIndex].buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === activeIndex ? 'bg-white w-10' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;