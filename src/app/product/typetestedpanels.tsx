'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'

const productsQuery = `
  *[_type == "emptyenclosure"]{
    name,
    slug,
    type, // short description like "Solid Insulated (SF6 Free)"
    images[] {
      asset-> {
        url
      }
    }
  }
`

interface Product {
  name: string
  slug: { current: string }
  type?: string // optional description
  images: { asset: { url: string } }[]
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    client.fetch(productsQuery).then((data: Product[]) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      {/* Product Cards */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-100">
        <h2 className="text-4xl font-serif font-bold mb-14 text-center text-gray-800">
          Type Tested Panels
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {products.map((product, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex flex-col"
            >
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
                <h3 className="text-2xl font-serif font-bold text-black tracking-tight mb-2 border-b border-gray-300 inline-block pb-1">
                  {product.name}
                </h3>
                {product.type && (
                  <p className="text-sm text-gray-600 mb-4">{product.type}</p>
                )}
              </div>
              <div className="px-6 pb-6">
                <Link 
                  href={`/products/${product.slug.current}`}
                  className="w-full inline-block bg-white text-black border-2 border-black font-medium py-3 px-3 rounded transition-all duration-200 text-center hover:bg-blue-50 "
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}