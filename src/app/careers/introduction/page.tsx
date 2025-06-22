"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/Components/navbar";
import Footer from "@/app/Components/footer";

export default function IntroductionPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            A to Zee Switchgear Engineering
          </h1>
          <p className="text-lg text-gray-700">
            A to Zee Switchgear Engineering is a premier manufacturer of electrical 
            switchgear solutions, providing reliable power distribution systems 
            for industrial and commercial applications since 1995. Our innovative 
            products and expert engineering team deliver cutting-edge solutions 
            tailored to meet the most demanding electrical infrastructure needs.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}