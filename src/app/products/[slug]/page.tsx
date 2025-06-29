import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PortableTextBlock } from '@portabletext/types'
import Navbar from '@/app/Components/navbar'
import Footer from '@/app/Components/footer'
import ProductImageGallery from '@/app/Components/productimagegallery'
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface ProductImage {
  asset: {
    url: string
    _id?: string
    metadata?: {
      dimensions?: {
        width: number
        height: number
      }
    }
  }
}

export type Product = {
  name: string
  description: PortableTextBlock[]
  images: ProductImage[]
}

const productQuery = `
  *[
    (_type == "lowvoltageswitchgearpanels" ||
    _type == "lowvoltageswitchgearpanelsdistributionboards" ||
    _type == "mediumvoltageswitchgear" ||
    _type == "stainlesssteelstrcuture" ||
    _type == "emptyenclosure" ||
    _type == "cabletraysandladder")
    && slug.current == $slug
  ][0] {
    name,
    description,
    images[] {
      asset-> {
        url,
        _id,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    }
  }
`

type PageParams = { slug: string }
type PageSearchParams = Record<string, string | string[] | undefined>

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const product: Product | null = await client.fetch(productQuery, { slug: params.slug })

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist',
    }
  }

  return {
    title: product.name,
    description: product.description
      ? 'Explore more about ' + product.name
      : 'Detailed product page',
    openGraph: product.images?.[0]?.asset?.url
      ? {
          images: [
            {
              url: product.images[0].asset.url,
              width: 1200,
              height: 630,
              alt: product.name,
            },
          ],
        }
      : undefined,
  }
}

export default async function Page({ params }: { params: PageParams }) {
  const product: Product | null = await client.fetch(productQuery, {
    slug: params.slug,
  })

  if (!product) return notFound()

  return (
    <>
      <Navbar />

      <main className={`min-h-screen bg-white px-4 md:px-6 py-16 ${dmsans.className}`}>
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <ProductImageGallery images={product.images} name={product.name} />

            <div className="bg-[#fdfbf8] border border-gray-200 rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
              <h1 className={`text-4xl font-bold text-[#6B4F3B] ${dmsans.className}`}>
                {product.name}
              </h1>
              <div className="border-t pt-4">
                <h2 className={`text-2xl font-semibold text-[#6B4F3B] mb-2 ${dmsans.className}`}>
                  Description:
                </h2>
                <div className={`prose prose-lg max-w-none text-gray-700 ${dmsans.className}`}>
                  <PortableText value={product.description} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f8f4ee] to-[#f0e6d8] border border-[#e8d8c0] rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className={`text-3xl font-bold text-[#6B4F3B] mb-8 text-center ${dmsans.className}`}>
              Product Inquiry
            </h2>
            <form
              className="space-y-6 max-w-2xl mx-auto"
              action="https://formsubmit.co/ajax/hr@atozee.net"
              method="POST"
            >
              <input type="hidden" name="_subject" value={`New Inquiry: ${product.name}`} />
              <input type="hidden" name="_template" value="box" />
              
              <div className="space-y-1">
                <label className={`block text-gray-700 font-medium ${dmsans.className}`}>
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6B4F3B] focus:border-[#6B4F3B] outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className={`block text-gray-700 font-medium ${dmsans.className}`}>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6B4F3B] focus:border-[#6B4F3B] outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className={`block text-gray-700 font-medium ${dmsans.className}`}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6B4F3B] focus:border-[#6B4F3B] outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className={`block text-gray-700 font-medium ${dmsans.className}`}>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6B4F3B] focus:border-[#6B4F3B] outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className={`block text-gray-700 font-medium ${dmsans.className}`}>
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  defaultValue={`Inquiry about ${product.name}`}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6B4F3B] focus:border-[#6B4F3B] outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className={`block text-gray-700 font-medium ${dmsans.className}`}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6B4F3B] focus:border-[#6B4F3B] outline-none transition-all"
                ></textarea>
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className={`inline-block bg-gradient-to-r from-[#6B4F3B] to-[#8B6E4F] text-white font-semibold text-lg tracking-wide px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:from-[#5a4231] hover:to-[#755b3e] active:scale-[0.98] transition-all duration-300 ease-in-out ${dmsans.className}`}
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}