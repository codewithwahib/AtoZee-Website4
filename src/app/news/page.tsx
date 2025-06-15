'use client';

import Image from 'next/image';

export default function NewsPage() {
  const newsItems = [
    {
      title: 'Smart Switchgear Launch',
      desc: 'We’re excited to announce our new smart switchgear solution with real-time monitoring, intelligent diagnostics, and remote access capabilities.',
      img: '/news1.png',
      reverse: false,
    },
    {
      title: 'Awarded Best Manufacturer',
      desc: 'A to Zee Power Systems has been recognized nationally as the Best Switchgear Manufacturer of 2025, a testament to our quality and innovation.',
      img: '/news2.png',
      reverse: true,
    },
    {
      title: 'New Factory Inauguration',
      desc: 'We have expanded our operations with a new state-of-the-art manufacturing facility that will double our production capacity.',
      img: '/news3.png',
      reverse: false,
    },
    {
      title: 'International Expo Showcase',
      desc: 'Our team represented A to Zee at the International Power Expo 2025 in Dubai, showcasing our latest low-voltage and medium-voltage panels.',
      img: '/news4.png',
      reverse: true,
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Top Banner */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/news.png"
          alt="News Page Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl animate-fade-in-up">
            News Page
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Section Title with Lines */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-grow border-t border-[#6B4F3B]" />
          <h2 className="px-6 text-4xl md:text-5xl font-bold text-[#6B4F3B] text-center whitespace-nowrap">
            Welcome To the News Page
          </h2>
          <div className="flex-grow border-t border-[#6B4F3B]" />
        </div>

        {/* News Blocks */}
        {newsItems.map((news, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              news.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center gap-10 mb-20 group`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-105">
              <Image
                src={news.img}
                alt={news.title}
                width={600}
                height={400}
                className="object-cover w-full h-auto rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
              <h3 className="text-3xl font-bold text-[#6B4F3B] leading-tight">
                {news.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {news.desc}
              </p>
              <button className="mt-4 inline-block bg-[#6B4F3B] text-white px-6 py-2 rounded-full hover:bg-[#543d2b] transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
