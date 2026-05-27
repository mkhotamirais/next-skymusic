import React from "react";

export default function Hero() {
  return (
    <section className="mt-16 relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden px-4">
      {/* 1. LIGHTING EFFECT (Ambient Glow Neon) */}
      {/* Lampu Ungu di kiri atas */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />
      {/* Lampu Cyan di kanan bawah */}
      <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* 2. BACKGROUND GRID PATTERN (Subtle Tech Vibe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />

      {/* 3. HERO CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge Kecil Berkedip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-6 tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          Live from the underground
        </div>

        {/* Judul Utama (Heading) */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-zinc-50 tracking-tight leading-tight mb-6">
          Escape into the <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
            Sound of the Night
          </span>
        </h1>

        {/* Deskripsi Singkat (Body Text) */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Temukan kurasi playlist lo-fi, elektronik, dan deep beats terbaik yang dirancang khusus untuk menemani ruang
          kerja, relaksasi, dan lantai dansa larut malammu.
        </p>

        {/* Tombol Aksi (CTA) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-50 text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(257,257,257,0.1)] hover:scale-105">
            Dengarkan Sekarang
          </button>

          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 text-zinc-300 font-medium rounded-full border border-zinc-800 hover:bg-zinc-800/80 hover:text-zinc-50 transition-all duration-300 backdrop-blur-sm">
            Jelajahi Playlist
          </button>
        </div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] tracking-widest text-zinc-500 uppercase">Scroll Down</span>
        <div className="w-1 h-4 bg-zinc-700 rounded-full" />
      </div>
    </section>
  );
}
