"use client"

import { useState, useRef } from "react"

type Image = {
  asset: {
    url: string
  }
}

interface ProductImageGalleryProps {
  images: Image[]
  productName: string
}

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images?.[0]?.asset.url || '')
  const [isZoomVisible, setIsZoomVisible] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setZoomPosition({ x, y })
  }

  return (
    <div className="relative bg-[#fdfbf8] border border-gray-200 rounded-2xl shadow-lg p-4 space-y-6">
      {/* Main Image Container */}
      <div
        ref={imageRef}
        className="relative w-full max-h-[400px] h-[300px] bg-white rounded-xl overflow-hidden"
        onMouseEnter={() => setIsZoomVisible(true)}
        onMouseLeave={() => setIsZoomVisible(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={mainImage}
          alt={`${productName} main image`}
          className="w-full h-full object-contain"
        />

        {/* Zoom Box */}
        {isZoomVisible && imageRef.current && (
          <div
            className="absolute w-64 h-64 border-2 border-[#6B4F3B] shadow-lg z-50"
            style={{
              top: Math.max(0, zoomPosition.y - 128),
              left:
                zoomPosition.x + 280 > imageRef.current.offsetWidth
                  ? zoomPosition.x - 280
                  : zoomPosition.x + 20,
              backgroundImage: `url(${mainImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '500% auto',
              backgroundPosition: `${(zoomPosition.x / imageRef.current.offsetWidth) * 100}% ${(zoomPosition.y / imageRef.current.offsetHeight) * 100}%`,
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div>
          <h3 className="text-lg font-semibold text-[#6B4F3B] mb-2"></h3>
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img.asset.url)}
                className="focus:outline-none"
              >
                <img
                  src={img.asset.url}
                  alt={`${productName} image ${index + 1}`}
                  className={`w-full h-32 object-cover rounded-lg border-2 transition-all duration-200 ${
                    img.asset.url === mainImage
                      ? 'border-[#6B4F3B] ring-2 ring-[#6B4F3B]'
                      : 'border-gray-300'
                  } shadow-sm`}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
