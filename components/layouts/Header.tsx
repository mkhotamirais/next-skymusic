"use client";

import React, { useState, useEffect } from "react";
import { menu } from "@/lib/content";
// import { div, nav } from "motion/react-m";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* LOGO BRANDING */}
          <a href="#" className="font-heading text-xl font-black tracking-wider text-zinc-50 group z-50">
            MIDNIGHT<span className="text-violet-400 group-hover:text-cyan-400 transition-colors">PULSE</span>
          </a>

          {/* MENU NAVIGASI (DESKTOP) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 font-sans">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-zinc-50 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-violet-400 hover:after:w-full after:transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* TOMBOL MENU MOBILE (BURGER ICON) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-zinc-50 z-50 focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              // Icon Close (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icon Burger
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* OVERLAY MENU MOBILE */}
      <div
        className={`fixed inset-0 bg-zinc-950/95 backdrop-blur-lg z-40 md:hidden flex flex-col items-center justify-center transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-xl font-semibold text-zinc-300 font-heading">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-violet-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
