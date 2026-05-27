"use client";

import React from "react";

export default function Cta() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-150 h-75 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <span className="text-xs font-bold tracking-widest text-fuchsia-400 uppercase font-mono">
          `// Join The Movement
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-zinc-50 tracking-tight mt-3 mb-6">
          Jangan Lewatkan <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
            Sesi Larut Malam Berikutnya.
          </span>
        </h2>
        <p className="font-sans text-zinc-400 max-w-lg mx-auto mb-10 text-sm sm:text-base leading-relaxed">
          Berlangganan buletin kami untuk mendapatkan notifikasi rilis *playlist* eksklusif, info *event underground*,
          dan rilisan track terbaru.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Masukkan alamat emailmu..."
            className="w-full px-5 py-3.5 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all font-sans"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3.5 bg-zinc-50 text-zinc-950 font-medium rounded-full text-sm hover:bg-zinc-200 transition-all shrink-0 hover:scale-105 duration-200"
          >
            Berlangganan
          </button>
        </form>
      </div>
    </section>
  );
}
