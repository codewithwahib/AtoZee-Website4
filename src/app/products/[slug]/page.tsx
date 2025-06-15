// @/app/products/[slug]/page.tsx
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PortableTextBlock } from '@portabletext/types';

import TopBar from '@/app/Components/topbar';
import Navbar from '@/app/Components/navbar';
import Footer from '@/app/Components/footer';
import ProductImageGallery from '@/app/Components/productimagegallery';

interface Product {
  name: string;
  description: PortableTextBlock[];
  images: { asset: { url: string } }[];
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
        url
      }
    }
  }
`;

interface GenerateMetadataProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ 
  params 
}: GenerateMetadataProps): Promise<Metadata> {
  const product: Product | null = await client.fetch(productQuery, { slug: params.slug });
  return {
    title: product?.name ?? 'Product',
    description: product?.description
      ? 'Explore more about ' + product.name
      : 'Detailed product page',
  };
}

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProductPage({ params }: PageProps) {
  const product: Product | null = await client.fetch(productQuery, {
    slug: params.slug,
  });

  if (!product) return notFound();

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="relative min-h-screen bg-gradient-to-br from-[#f7f4f0] via-white to-[#fdfbf8] px-4 md:px-6 py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#f5e6da] rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-24 w-80 h-80 bg-[#e7d6c9] rounded-full opacity-30 blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <ProductImageGallery 
              images={product.images} 
              name={product.name}
            />
            
            <div className="bg-[#fdfbf8] border border-gray-200 rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
              <h1 className="text-4xl font-serif font-bold text-[#6B4F3B]">{product.name}</h1>
              <div className="border-t pt-4">
                <h2 className="text-2xl font-serif font-semibold text-[#6B4F3B] mb-2">
                  Description:
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <PortableText value={product.description} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fdfbf8] border border-gray-200 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-serif font-bold text-[#6B4F3B] mb-10 text-center">
              Product Inquiry
            </h2>
            <form
              action="https://formsubmit.co/ajax/hassan.se2007@gmail.com"
              method="POST"
              className="space-y-8"
            >
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder=" "
                  className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-1 py-3 text-gray-800 placeholder-transparent focus:border-[#6B4F3B] focus:outline-none"
                />
                <label
                  htmlFor="name"
                  className="absolute left-1 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#6B4F3B]"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder=" "
                  className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-1 py-3 text-gray-800 placeholder-transparent focus:border-[#6B4F3B] focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute left-1 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#6B4F3B]"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder=" "
                  className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-1 py-3 text-gray-800 placeholder-transparent focus:border-[#6B4F3B] focus:outline-none"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-1 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#6B4F3B]"
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder=" "
                  className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-1 py-3 text-gray-800 placeholder-transparent focus:border-[#6B4F3B] focus:outline-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-1 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#6B4F3B]"
                >
                  Message
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-gradient-to-r from-[#6B4F3B] to-[#8B6E4F] text-white font-semibold text-lg tracking-wide px-10 py-3 rounded-full shadow-md hover:shadow-lg hover:from-[#5a4231] hover:to-[#755b3e] active:scale-95 transition-all duration-300 ease-in-out"
                >
                  ✉️ Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}