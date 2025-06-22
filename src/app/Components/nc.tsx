"use client";
import Image from "next/image";
import React from "react";

const services = [
  {
    name: "Power Distribution",
    image: "/nc1.png",
  },
  {
    name: "Switchgear",
    image: "/nc2.png",
  },
  {
    name: "EMS",
    image: "/nc3.png",
  },
  {
    name: "Automation",
    image: "/nc4.png",
  },
  {
    name: "Instrumentation & Control",
    image: "/nc5.png",
  },
  {
    name: "Pneumatics",
    image: "/nc6.png",
  },
];

export default function ServicesGrid() {
  return (
    <div className="bg-white pt-28 pl-4 pr-4 py-2 px-0">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-none shadow-none transition-all duration-300 m-0"
            >
              <div className="aspect-w-4 aspect-h-2.5 bg-blue-950 relative min-h-[300px]">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  priority={index < 3} // Prioritize loading first few images
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold font-serif transition-colors duration-300">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}