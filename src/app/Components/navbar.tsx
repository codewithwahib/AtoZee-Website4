"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Products" },
  { href: "/about", label: "About Us" },
  { 
    href: "/careers", 
    label: "Careers",
    subItems: [
      { href: "/careers/introduction", label: "Introduction" },
      { href: "/careers/training-program", label: "Training Program" },
      { href: "/careers/current-openings", label: "Current Openings" },
      { href: "/careers/apply-now", label: "Apply Now" },
    ]
  },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [careersHover, setCareersHover] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCareersMenu = () => {
    if (isMobile) {
      setCareersHover(!careersHover);
    }
  };

  return (
    <nav className="relative font-sans bg-white text-gray-900 border-t border-b border-gray-300">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/quality.png"
            alt="Logo"
            width={500}
            height={550}
            priority
            className="w-52 md:w-72 lg:w-80"
          />
        </Link>

        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            item.href === "/careers" ? (
              <div 
                key={item.href}
                className="relative group"
                onMouseEnter={() => setCareersHover(true)}
                onMouseLeave={() => setCareersHover(false)}
              >
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`px-6 py-4 rounded-sm transition-all duration-200 text-base sm:text-lg ${
                      pathname === item.href || item.subItems?.some(subItem => pathname === subItem.href)
                        ? "bg-[#EEDFCC] text-[#6B4F3B] font-semibold font-serif"
                        : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <svg
                    className={`w-6 h-6 ml-1 transition-transform duration-200 ${
                      careersHover ? "rotate-180" : ""
                    } ${pathname === item.href || item.subItems?.some(subItem => pathname === subItem.href) 
                      ? "text-[#6B4F3B]" 
                      : "text-[#8B5E3C]"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {careersHover && (
                  <div className="absolute left-0 mt-0 w-72 bg-white shadow-lg rounded-sm z-50 border border-gray-200 overflow-hidden">
                    {item.subItems?.map((subItem, index) => (
                      <div key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className={`block px-6 py-4 text-base ${
                            pathname === subItem.href
                              ? "bg-[#EEDFCC] text-[#6B4F3B] font-semibold font-serif"
                              : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B] font-serif font-semibold"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                        {index < item.subItems.length - 1 && (
                          <hr className="border-t border-gray-200 mx-4" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-3 rounded-sm transition-all duration-200 text-base sm:text-lg ${
                  pathname === item.href
                    ? "bg-[#EEDFCC] text-[#6B4F3B] font-semibold font-serif"
                    : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
          {/* Quote Button */}
          <Link
            href="/quote"
            className="ml-4 px-7 py-6 rounded-sm bg-[#6B4F3B] text-white font-semibold text-base sm:text-lg hover:bg-[#8B5E3C] transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#8B5E3C] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && isMobile && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              item.href === "/careers" ? (
                <div key={item.href}>
                  <button
                    onClick={toggleCareersMenu}
                    className={`w-full flex justify-between items-center px-3 py-2 rounded-sm text-base font-medium ${
                      pathname === item.href || item.subItems?.some(subItem => pathname === subItem.href)
                        ? "bg-[#EEDFCC] text-[#6B4F3C] font-semibold"
                        : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        careersHover ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {careersHover && (
                    <div className="pl-4 mt-1 space-y-0 rounded-sm overflow-hidden border-l border-gray-200">
                      {item.subItems?.map((subItem, index) => (
                        <div key={subItem.href}>
                          <Link
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 text-base font-medium ${
                              pathname === subItem.href
                                ? "bg-[#EEDFCC] text-[#6B4F3C] font-semibold"
                                : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                          {index < item.subItems.length - 1 && (
                            <hr className="border-t border-gray-200 mx-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-sm text-base font-medium ${
                    pathname === item.href
                      ? "bg-[#EEDFCC] text-[#6B4F3C] font-semibold"
                      : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            {/* Quote Button in Mobile */}
            <Link
              href="/quote"
              onClick={() => setIsOpen(false)}
              className="block mt-2 px-3 py-2 rounded-sm bg-[#6B4F3B] text-white font-semibold text-base text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}