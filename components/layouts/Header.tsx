"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contacts, menu } from "@/lib/content";
import Logo from "../Logo";

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }

  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-zinc-900/50 bg-zinc-950/80 py-3 shadow-lg shadow-black/20 backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Logo />

          <nav className="h-12 hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-zinc-50 ${
                  isActive(item.href) ? "text-zinc-50" : "text-zinc-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href={contacts.waNumber.href}
            className="btn btn-primary hidden shrink-0 px-5 py-2 text-xs md:inline-flex"
          >
            Hubungi Kami
          </Link>

          <button
            type="button"
            className="p-2 text-zinc-400 transition-colors hover:text-zinc-50 md:hidden"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-controls="mobile-menu"
            {...(isMenuOpen ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <MenuIcon open={isMenuOpen} />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-zinc-950/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen ? true : undefined}
        inert={!isMenuOpen ? true : undefined}
      >
        <nav className="flex flex-col items-center gap-6" aria-label="Navigasi mobile">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-semibold transition-colors hover:text-violet-400 ${
                isActive(item.href) ? "text-violet-400" : "text-zinc-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href={contacts.waNumber.href} onClick={() => setIsMenuOpen(false)} className="btn btn-primary mt-2">
            Hubungi Kami
          </Link>
        </nav>
      </div>
    </>
  );
}
