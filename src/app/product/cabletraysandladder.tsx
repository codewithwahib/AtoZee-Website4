'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700', // or use ['700'] if you need multiple weights
});

const productsQuery = `
  *[_type == "cable1"]{
    name,
    slug,
    type,
    images[] {
      asset-> {
        url
      }
    },
    cardLogo {
      asset-> {
        url
      }
    }
  }
`

interface Product {
  name: string
  slug: { current: string }
  type?: string
  images: { asset: { url: string } }[]
  cardLogo?: { asset: { url: string } }
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    client.fetch(productsQuery).then((data: Product[]) => {
      setProducts(data)
    })
  }, [])

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-100">
      <h2 className={`text-4xl font-bold mb-14 text-center text-gray-800 ${dmsans.className}`}>
        Cable Trays And Ladders
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <div 
            key={idx}
            className="relative bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex flex-col"
          >
            {/* Top Left Logo */}
            {product.cardLogo?.asset?.url && (
              <div className="absolute top-4 left-4 z-10 bg-white p-1 rounded shadow-sm">
                <Image
                  src={product.cardLogo.asset.url}
                  alt={`${product.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            )}

            {/* Main Product Image - Updated to use Next.js Image component */}
            {product.images[0]?.asset.url && (
              <div className="h-64 flex items-center justify-center p-4 relative">
                <Image
                  src={product.images[0].asset.url}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}

            <div className="px-6 pt-4 pb-2 flex-grow">
              <h3 className={`text-2xl font-bold text-black tracking-tight mb-2 border-b border-gray-300 inline-block pb-1 ${dmsans.className}`}>
                {product.name}
              </h3>
              {product.type && (
                <p className={`text-sm text-gray-600 mb-4 ${dmsans.className}`}>{product.type}</p>
              )}
            </div>

            <div className="px-6 pb-6">
              <Link 
                href={`/products/${product.slug.current}`}
                className={`w-full inline-block bg-white text-black border-2 border-black font-medium py-3 px-3 rounded transition-all duration-200 text-center hover:bg-blue-50 ${dmsans.className}`}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}