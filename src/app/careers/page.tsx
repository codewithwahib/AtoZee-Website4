// src/app/careers/page.tsx
import { client } from '@/sanity/lib/client'
import type { Metadata } from 'next'
import Image from 'next/image'
import { PortableTextBlock } from '@portabletext/types'

// import TopBar from '@/app/Components/topbar'
import Navbar from '@/app/Components/navbar'
import Footer from '@/app/Components/footer'
import CareerClient from './careerclinent'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Explore job openings and career opportunities with us.',
}

type Job = {
  _id: string
  title: string
  location: string
  type: string
  description: PortableTextBlock[]
  requirements: PortableTextBlock[]
  postedDate: string
}

const query = `
  *[_type == "career" && isActive == true] | order(postedDate desc) {
    _id,
    title,
    location,
    type,
    description,
    requirements,
    postedDate
  }
`

export default async function CareerPage() {
  const jobs: Job[] = await client.fetch(query)

  return (
    <>
      {/* <TopBar /> */}
      <Navbar />

      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <Image
          src="/careers.png"
          alt="Careers Banner"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Careers</h1>
            <p className="mt-2 text-sm md:text-base text-gray-200">
              <span className="opacity-80">Home</span> / Careers
            </p>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="min-h-screen bg-white px-4 md:px-6 py-16">
        <CareerClient jobs={jobs} />
      </main>

      <Footer />
    </>
  )
}