'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

interface SanityImage {
  asset: {
    url: string;
  };
}

interface ProductImageGalleryProps {
  images: SanityImage[] | string[];
  name?: string;
}

const ProductImageGallery = ({ images, name }: ProductImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Normalize images to URLs
  const imageUrls = images.map(image => 
    typeof image === 'string' ? image : image.asset.url
  );

  const openImageViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-all hover:opacity-90"
            onClick={() => openImageViewer(index)}
          >
            <Image
              src={imageUrl}
              alt={`${name || 'Product'} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 25vw"
              quality={85}
            />
          </div>
        ))}
      </div>

      {/* Full Screen Image Viewer */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <button
            onClick={closeImageViewer}
            className="absolute right-4 top-4 text-white hover:text-gray-300"
            aria-label="Close gallery"
          >
            <FiX size={28} />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70 md:left-8"
            aria-label="Previous image"
          >
            <FiChevronLeft size={32} />
          </button>

          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={imageUrls[currentIndex]}
              alt={`${name || 'Product'} image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70 md:right-8"
            aria-label="Next image"
          >
            <FiChevronRight size={32} />
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            {currentIndex + 1} / {imageUrls.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;