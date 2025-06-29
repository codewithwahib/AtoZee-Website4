import React from 'react';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import Navbar from '@/app/Components/navbar';
import Footer from '@/app/Components/footer';
import ContactBar from '@/app/Components/topbar';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
});

export default function CareerIntro() {
  return (
    <>
      <ContactBar />
      <Navbar />
      
      {/* Banner Image Section */}
      <div className="w-full relative h-64 md:h-96">
        <Image
          src="/clients.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
  Our Clients
</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={`w-full ${dmSans.variable}`}>
        <div className="px-4 py-12 md:py-20 pl-10">
          <div className="text-left">
            <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
 A to Zee Switchgear Engineering – Your Trusted Partner in Power Solutions</p>
            <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
          At A to Zee Switchgear Engineering, we take pride in being a leading provider of high-quality electrical switchgear solutions designed to meet the evolving demands of industries, commercial establishments, and infrastructure projects. With years of expertise in the field, we specialize in the design, manufacturing, and supply of reliable, efficient, and innovative switchgear systems that ensure optimal power distribution, safety, and operational efficiency. Our commitment to cutting-edge technology, stringent quality standards, and customer-centric service makes us a preferred choice for clients seeking dependable electrical solutions.
            </p>

            <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
              From low-voltage (LV) and medium-voltage (MV) switchgear to customized panel boards and automation solutions, our comprehensive product range is engineered to enhance performance, minimize downtime, and maximize safety. We work closely with our clients to understand their unique requirements, offering tailored solutions that align with industry standards and regulatory compliance. Whether you need robust switchgear for industrial plants, commercial complexes, or renewable energy projects, our team of skilled professionals ensures precision, durability, and cost-effectiveness in every installation.
            </p>
            
            <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
              What sets us apart is our unwavering dedication to quality, innovation, and customer satisfaction. We source premium materials, employ advanced manufacturing techniques, and conduct rigorous testing to deliver products that stand the test of time. Our after-sales support, technical expertise, and prompt service further reinforce our reputation as a trusted partner in the electrical engineering domain.
            </p>
            
            <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
              At A to Zee Switchgear Engineering, we believe in powering progress with reliability and excellence. Partner with us for seamless, efficient, and future-ready electrical solutions that drive your success. Let’s electrify possibilities together!

            </p>
            
            <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
              For inquiries, collaborations, or customized solutions, reach out to our team today. Thank you for choosing <span className='font-bold text-xl text-black'> A to Zee Switchgear Engineering</span> – where innovation meets integrity in every connection!


            </p>
            
            {/* <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
              The program culminates in a capstone project where trainees design and present solutions for actual client
            </p> */}
          </div>
        </div>
      </div>

      {/* Textile Mills----------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      
      <div className="w-full relative h-64 md:h-96">
        <Image
          src="/02.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
  Textile Mills
</h1>
        </div>
      </div>

<div className={`w-full ${dmSans.variable}`}>
  <div className="px-4 py-12 md:py-20 pl-10">
    <div className="text-left">
      <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
        Our Esteemed Clients – Textile Mills & Manufacturing Facilities
      </p>
      <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
        We are proud to power textile mills and manufacturing units with robust switchgear solutions designed for high-demand industrial environments. Our electrical systems provide reliable power distribution essential for continuous production lines, heavy machinery operation, and energy-intensive textile processes. Trusted by leading fabric manufacturers, we deliver durable, efficient, and safe electrical solutions that keep your looms spinning and production floors operating at peak performance.
      </p>
    </div>
  </div>
</div>

{/* Logo Showcase Section */}
<div className="w-full bg-white py-10 px-2 pt-0 md:px-8">
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* Logo 1 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/t1.png" 
        alt="Commercial Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 2 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/t2.png" 
        alt="Retail Chain Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 3 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/t3.png" 
        alt="Property Group Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 4 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/t4.png" 
        alt="Office REIT Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 5 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/t5.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/t6.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/t7.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/t8.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/t9.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/t10.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
  </div>
</div>

      {/* Hospitals----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
 <div className="w-full relative h-64 md:h-96">
        <Image
          src="/hospitals.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
 Hospitals
</h1>
        </div>
      </div>

      <div className={`w-full ${dmSans.variable}`}>
        <div className="px-4 py-12 md:py-20 pl-10">
          <div className="text-left">
            <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
 Our Esteemed Clients – Hospitals & Healthcare Facilities</p>
            <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
          We take pride in providing reliable and high-performance switchgear solutions to hospitals and healthcare facilities worldwide. Our advanced electrical systems ensure uninterrupted power supply, critical for patient care, life-saving equipment, and smooth hospital operations. Trusted by leading medical institutions, we deliver safety, efficiency, and innovation to keep healthcare environments running seamlessly
            </p>
          </div>
        </div>
      </div>

      {/* Logo Showcase Section */}
<div className="w-full bg-white py-10 px-2 pt-0 md:px-8">
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* Logo 1 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/h1.png" 
        alt="Commercial Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 2 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/h2.png" 
        alt="Retail Chain Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 3 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/h3.png" 
        alt="Property Group Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 4 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/h4.png" 
        alt="Office REIT Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 5 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/h5.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/h6.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/h7.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/h8.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/h9.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
  </div>
</div>

{/* Banks ----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

       <div className="w-full relative h-64 md:h-96">
        <Image
          src="/bank.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
 Banks
</h1>
        </div>
      </div>

<div className={`w-full ${dmSans.variable}`}>
  <div className="px-4 py-12 md:py-20 pl-10">
    <div className="text-left">
      <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
        Our Trusted Clients – Banks & Financial Institutions
      </p>
      <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
        We provide mission-critical electrical solutions to banks and financial institutions, ensuring uninterrupted power for secure transactions, data centers, and 24/7 banking operations. Our advanced switchgear systems protect sensitive financial infrastructure, ATMs, and server rooms with fail-safe precision. Trusted by leading national and international banks, we deliver the reliability and security needed to maintain financial operations, safeguard customer data, and prevent costly downtime in this high-stakes industry.
      </p>
    </div>
  </div>
</div>


     {/* Logo Showcase Section */}
<div className="w-full bg-white py-10 px-2 pt-0 md:px-8">
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* Logo 1 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/b1.png" 
        alt="Commercial Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 2 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/b2.png" 
        alt="Retail Chain Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 3 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/b3.png" 
        alt="Property Group Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 4 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/b4.png" 
        alt="Office REIT Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 5 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/b5.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/b6.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/b7.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/b8.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/b9.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
  </div>
</div>
 



 {/* Pharma ------------------------------------------------------------------------------------------------------------------------------*/}
       <div className="w-full relative h-64 md:h-96">
        <Image
          src="/pc2.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
 Pharmaceutical Companies
</h1>
        </div>
      </div>

<div className={`w-full ${dmSans.variable}`}>
  <div className="px-4 py-12 md:py-20 pl-10">
    <div className="text-left">
      <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
        Our Pharmaceutical Clients – Precision Power for Life Sciences
      </p>
      <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
        We deliver ultra-reliable electrical solutions to pharmaceutical manufacturers and research facilities, where power continuity is critical for drug production, lab equipment, and cold chain storage. Our specialized switchgear systems meet stringent GMP and FDA compliance requirements, safeguarding sensitive processes in cleanrooms, bioreactors, and sterile manufacturing environments. Trusted by global pharma leaders, we provide the uninterrupted power and precision control needed to protect vaccine production, clinical trial data integrity, and mission-critical life-saving therapies.
      </p>
    </div>
  </div>
</div>

     {/* Logo Showcase Section */}
<div className="w-full bg-white py-10 px-2 pt-0 md:px-8">
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* Logo 1 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p1.png" 
        alt="Commercial Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 2 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p2.png" 
        alt="Retail Chain Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 3 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p3.png" 
        alt="Property Group Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 4 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p4.png" 
        alt="Office REIT Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 5 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p5.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p6.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p7.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p8.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p9.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p10.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/p11.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
  </div>
</div>


{/* Steel ---------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

       <div className="w-full relative h-64 md:h-96">
        <Image
          src="/cs.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
 Cement & Steel Industries
</h1>
        </div>
      </div>
<div className={`w-full ${dmSans.variable}`}>
  <div className="px-4 py-12 md:py-20 pl-10">
    <div className="text-left">
      <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
        Powering Heavy Industry – Cement & Steel Manufacturing Clients
      </p>
      <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
        We engineer rugged electrical systems built to withstand the extreme demands of cement plants and steel mills. Our high-capacity switchgear delivers reliable power for kilns, blast furnaces, rolling mills, and 24/7 production lines, even in high-temperature, high-dust environments. Trusted by leading manufacturers, we provide energy-efficient solutions that reduce downtime, protect heavy machinery, and optimize power distribution for maximum productivity in these critical backbone industries.
      </p>
    </div>
  </div>
</div>


     {/* Logo Showcase Section */}
<div className="w-full bg-white py-10 px-2 pt-0 md:px-8">
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* Logo 1 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/i.png" 
        alt="Commercial Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 2 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/i2.png" 
        alt="Retail Chain Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 3 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/i3.png" 
        alt="Property Group Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 4 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/i4.png" 
        alt="Office REIT Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 5 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/i5.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/i6.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/i7.jpeg" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
  </div>
</div>

{/* Automobiles ---------------------------------------------------------------------------------------------------------------------------*/}

       <div className="w-full relative h-64 md:h-96">
        <Image
          src="/am.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
 Automobile Industries
</h1>
        </div>
      </div>
<div className={`w-full ${dmSans.variable}`}>
  <div className="px-4 py-12 md:py-20 pl-10">
    <div className="text-left">
      <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
        Electrifying Automotive Manufacturing – Precision Power Clients
      </p>
      <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
        We power the automotive revolution with robust electrical systems designed for vehicle assembly plants, EV battery factories, and precision parts manufacturing. Our intelligent switchgear ensures uninterrupted operation of robotic welding arms, paint shops, conveyor systems, and automated production lines. Trusted by leading automakers and tier-1 suppliers, we deliver energy-efficient solutions that meet zero-defect manufacturing standards while withstanding the high-cycle demands of modern automotive production.
      </p>
    </div>
  </div>
</div>


    {/* Logo Showcase Section */}
<div className="w-full bg-white py-10 px-2 pt-0 md:px-8">
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* Logo 1 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/a1.png" 
        alt="Commercial Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 2 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/a2.png" 
        alt="Retail Chain Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 3 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/a3.png" 
        alt="Property Group Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 4 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/a4.png" 
        alt="Office REIT Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 5 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/a5.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/a6.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
  </div>
</div>


{/* Food --------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

       <div className="w-full relative h-64 md:h-96">
        <Image
          src="/fi3.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
 Food Industries
</h1>
        </div>
      </div>

<div className={`w-full ${dmSans.variable}`}>
  <div className="px-4 py-12 md:py-20 pl-10">
    <div className="text-left">
      <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
        Powering Food Safety & Production – Reliable Solutions for Food Industries
      </p>
      <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
        We provide hygienic electrical systems designed for food processing plants, cold storage facilities, and automated packaging lines. Our specialized switchgear ensures uninterrupted operation of refrigeration units, conveyor systems, and sterilization equipment while meeting strict FDA and HACCP compliance standards. Trusted by leading food manufacturers, we deliver energy-efficient solutions that maintain food safety protocols, prevent production downtime, and withstand the high-moisture, washdown environments of modern food processing.
      </p>
    </div>
  </div>
</div>




 {/* Logo Showcase Section */}
<div className="w-full bg-white py-10 px-2 pt-0 md:px-8">
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* Logo 1 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f1.png" 
        alt="Commercial Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 2 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f2.png" 
        alt="Retail Chain Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 3 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f3.png" 
        alt="Property Group Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 4 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f4.png" 
        alt="Office REIT Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 5 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f5.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f6.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f7.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f8.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f9.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f10.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/f11.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
  </div>
</div>

{/* Oil--------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
       <div className="w-full relative h-64 md:h-96">
        <Image
          src="/oil3.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
 Oil Refinery Terminals
</h1>
        </div>
      </div>
<div className={`w-full ${dmSans.variable}`}>
  <div className="px-4 py-12 md:py-20 pl-10">
    <div className="text-left">
      <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
        High-Energy Solutions for Oil Refinery Terminals
      </p>
      <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
        We engineer explosion-proof electrical systems designed for the extreme demands of refinery terminals and petrochemical complexes. Our rugged switchgear solutions power critical operations including loading arms, pipeline pumps, storage tank farms, and safety shutdown systems while meeting ATEX and IECEx hazardous area certifications. Trusted by major energy companies, we deliver intrinsically safe power distribution that withstands corrosive environments, volatile atmospheres, and the 24/7 operational demands of hydrocarbon processing and storage facilities.
      </p>
    </div>
  </div>
</div>


 {/* Logo Showcase Section */}
<div className="w-full bg-white py-10 px-2 pt-0 md:px-8">
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* Logo 1 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/o1.png" 
        alt="Commercial Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 2 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="o2.png" 
        alt="Retail Chain Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 3 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/o3.png" 
        alt="Property Group Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 4 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/o44.png" 
        alt="Office REIT Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 5 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/o5.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/o6.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
  </div>
</div>

{/* Cable ---------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
       <div className="w-full relative h-64 md:h-96">
        <Image
          src="/tc.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
 Telecommunications & Cable Industries
</h1>
        </div>
      </div>

<div className={`w-full ${dmSans.variable}`}>
  <div className="px-4 py-12 md:py-20 pl-10">
    <div className="text-left">
      <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
        Uninterrupted Power for Digital Infrastructure
      </p>
      <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
        We deliver mission-critical power solutions for telecommunications networks, data centers, and cable distribution hubs. Our precision electrical systems ensure 99.999% uptime for cell towers, fiber optic nodes, and broadband equipment, with seamless transition to backup power during outages. Trusted by major carriers and ISPs, we provide scalable power distribution that meets NEBS compliance standards while supporting 5G rollout demands and the exponential bandwidth requirements of modern digital infrastructure.
      </p>
    </div>
  </div>
</div>



 {/* Logo Showcase Section */}
<div className="w-full bg-white py-10 px-2 pt-0 md:px-8">
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* Logo 1 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/c1.png" 
        alt="Commercial Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 2 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="c2.png" 
        alt="Retail Chain Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 3 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/c3.png" 
        alt="Property Group Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 4 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/c4.png" 
        alt="Office REIT Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 5 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/c5.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
  </div>
</div>


{/* Malls---------------------------------------------------------------------------------------------------------------------------------------------------------- */}
       <div className="w-full relative h-64 md:h-96">
        <Image
          src="/cb.png" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4 tracking-wider ${dmSans.className}`}>
 Commercial Buildings
</h1>
        </div>
      </div>

      <div className={`w-full ${dmSans.variable}`}>
  <div className="px-4 py-12 md:py-20 pl-10">
    <div className="text-left">
      <p className={`text-3xl md:text-4xl ${dmSans.className} font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight`}>
        Smart Power Solutions for Modern Commercial Spaces
      </p>
      <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-xl tracking-wider ${lato.variable} font-sans`}>
        We power tomorrow's workplaces with energy-efficient electrical systems designed for office towers, retail complexes, and mixed-use developments. Our intelligent power distribution solutions integrate seamlessly with building automation systems to optimize HVAC, lighting, and elevator operations while meeting LEED and WELL certification requirements. Trusted by property developers nationwide, we deliver reliable, scalable infrastructure that reduces operational costs, enhances tenant comfort, and future-proofs commercial buildings for evolving smart technologies.
      </p>
    </div>
  </div>
</div>
 {/* Logo Showcase Section */}
<div className="w-full bg-white py-10 px-2 pt-0 md:px-8">
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* Logo 1 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/m1.png" 
        alt="Commercial Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 2 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="m2.png" 
        alt="Retail Chain Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 3 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/m6.png" 
        alt="Property Group Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 4 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/m4.png" 
        alt="Office REIT Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
    
    {/* Logo 5 */}
    <div className="bg-white aspect-square w-full p-4 rounded-lg shadow-sm flex items-center justify-center transition-all hover:shadow-md">
      <img 
        src="/m5.png" 
        alt="Mixed-Use Developer Logo" 
        className="w-full h-full p-4 object-contain"
      />
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}