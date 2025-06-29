'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'

const newsQuery = `
  *[_type == "news"] {
  _id,
  _createdAt,
  _updatedAt,
  name,
  "slug": slug.current,
  description,
  publishDate,
  "mainImage": images[0].asset->url,
  images[] {
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    }
  }
} | order(publishDate desc)
`

const newsImageQuery = `
  *[_type == "newsimage"].images[].asset->url
`

interface NewsItem {
  _id: string
  name: string
  slug: string
  description?: string
  publishDate: string
  images: {
    asset: {
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
  }[]
}

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [newsImages, setNewsImages] = useState<string[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const [newsData, imageUrls] = await Promise.all([
        client.fetch<NewsItem[]>(newsQuery),
        client.fetch<string[]>(newsImageQuery)
      ])
      setNewsItems(newsData)
      setNewsImages(imageUrls)
    }

    fetchData()
  }, [])

  const nextSlide = useCallback(() => {
    if (!isHovered) {
      setCurrentSlide(prev => (prev === newsImages.length - 1 ? 0 : prev + 1))
    }
  }, [newsImages.length, isHovered])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? newsImages.length - 1 : prev - 1))
  }, [newsImages.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  if (newsItems.length === 0) return null

  return (
    <section className="py-20 px-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-black text-center px-4 tracking-wider pb-24">
        News & Awards
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* News Cards on the Left */}
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
  {newsItems.map((product, idx) => (
    <div key={idx} className="flex flex-col group">
      {product.images[0]?.asset.url && (
        <div className="h-64 relative mb-4 overflow-hidden">
          <Image
            src={product.images[0].asset.url}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex-grow">
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <h3 className="text-xl pb-3 font-sans font-light tracking-wider text-black leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <Link href={`/news/${product.slug}`} passHref>
              <button className="text-black font-semibold px-3 py-2 hover:bg-gray-100 transition uppercase tracking-wider rounded-md border border-gray-900 flex items-center gap-1 group-hover:translate-x-1 h-[34px]">
                <span className="hidden sm:inline">Read More</span>
                <FaArrowRight size={12} />
              </button>
            </Link>
            <p className="text-md pt-2 text-gray-600 whitespace-nowrap pl-4 self-center">
              {new Date(product.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        {/* Image Carousel on the Right */}
        <div 
          className="lg:w-1/2 h-[600px] relative bg-gray-100 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {newsImages.map((imageUrl, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={imageUrl}
                alt={`Featured News ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === currentSlide}
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition z-10"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition z-10"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button> */}

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {newsImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}