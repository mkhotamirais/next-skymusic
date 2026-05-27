import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-lg font-bold tracking-wider text-zinc-100">
              MIDNIGHT<span className="text-violet-400">PULSE</span>
            </h3>
            <p className="text-xs text-zinc-500 mt-1 font-sans">Menemani frekuensi malammu sejak 2026.</p>
          </div>

          <div className="flex gap-6 text-sm text-zinc-400 font-sans">
            <a href="#" className="hover:text-zinc-100 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-100 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-100 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex gap-4 text-zinc-500 text-sm font-mono">
            <a href="#" className="hover:text-fuchsia-400 transition-colors">
              IG
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              YT
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              SP
            </a>
          </div>
        </div>

        <div className="text-center text-[10px] text-zinc-600 font-mono mt-12">
          &copy; {new Date().getFullYear()} MIDNIGHT PULSE. All rights reserved. Built with Next.js & Tailwind.
        </div>
      </div>
    </footer>
  );
}
