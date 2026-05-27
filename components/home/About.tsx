import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* AMBIENT GLOW (Lampu panggung tipis di sisi kiri) */}
      <div className="absolute top-1/3 left-[-10%] w-125 h-125 bg-fuchsia-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* KOLOM KIRI: VISUAL ARTWORK */}
          <div className="lg:col-span-5 relative group">
            {/* Bingkai dekoratif di belakang gambar */}
            <div className="absolute -inset-2 rounded-2xl bg-linear-to-br from-violet-600/20 to-cyan-600/20 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500" />

            {/* Wadah Gambar / Visualizer Mockup */}
            <div className="relative aspect-4/5 w-full bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex flex-col justify-between p-6">
              {/* Tekstur Vinyl / Pemutar Musik Estetik */}
              <div className="w-full flex justify-between items-center text-zinc-600 text-xs tracking-widest font-mono">
                <span>01 // THE ESSENCE</span>
                <span>MIDNIGHT_PULSE</span>
              </div>

              {/* Pusat Visual: Lingkaran Vinyl/Waveform fiktif */}
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-800 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-36 h-36 rounded-full border border-zinc-700 bg-zinc-950 flex items-center justify-center shadow-2xl">
                  <span className="text-3xl animate-pulse">🌙</span>
                </div>
              </div>

              {/* Teks Gelombang Musik */}
              <div className="space-y-2">
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-linear-to-r from-violet-500 to-fuchsia-500 rounded-full animate-[pulse_2s_infinite]" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>FREQUENCY: 432Hz</span>
                  <span>BITRATE: 320KBPS</span>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: THE STORY (TEKS) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-fuchsia-400 uppercase font-mono">
                `//Kebebasan Bersuara
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-50 tracking-tight leading-none">
                Saat Mata Terpejam, <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-100 via-zinc-300 to-zinc-500">
                  Dunia Musik Dimulai.
                </span>
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-zinc-400 leading-relaxed">
              Kami percaya bahwa musik terdengar berbeda saat malam hari tiba. Keheningan kota berpadu sempurna dengan
              frekuensi rendah, menciptakan ruang magis bagi para pembuat kode, pekerja kreatif, dan pencari ketenangan
              larut malam.
            </p>

            {/* Sub-fitur pendek dengan ikon sederhana */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                <h4 className="font-heading font-bold text-zinc-200 mb-1">HQ Audio Stream</h4>
                <p className="text-xs text-zinc-400">
                  Kualitas audio lossless tanpa kompresi untuk detail suara yang intim.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                <h4 className="font-heading font-bold text-zinc-200 mb-1">No Disruptions</h4>
                <p className="text-xs text-zinc-400">
                  Tanpa jeda, tanpa iklan yang mengganggu alur produktivitas malammu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
