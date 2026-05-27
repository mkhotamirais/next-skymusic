import React from "react";

// Data fiktif untuk dokumentasi galeri musik malam
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Late Night Session",
    category: "STUDIO",
    sizeClass: "md:col-span-2 md:row-span-2", // Ukuran besar vertikal
    emoji: "🎛️",
    gradient: "from-purple-600/20 to-transparent",
  },
  {
    id: 2,
    title: "Underground Rave",
    category: "LIVE EVENT",
    sizeClass: "md:col-span-2 md:row-span-1", // Lebar horizontal
    emoji: "⚡",
    gradient: "from-cyan-600/20 to-transparent",
  },
  {
    id: 3,
    title: "Vinyl Collector",
    category: "ANALOG",
    sizeClass: "md:col-span-1 md:row-span-1", // Kotak standar
    emoji: "📻",
    gradient: "from-amber-600/20 to-transparent",
  },
  {
    id: 4,
    title: "Neon Crowds",
    category: "FESTIVAL",
    sizeClass: "md:col-span-1 md:row-span-1", // Kotak standar
    emoji: "🌌",
    gradient: "from-fuchsia-600/20 to-transparent",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* AMBIENT GLOW (Efek lampu di tengah galeri) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-fuchsia-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* HEADER TEXT */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-mono">
            `// Visual Atmosphere
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-zinc-50 tracking-tight mt-2">
            Captured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-violet-400">Moments</span>
          </h2>
          <p className="font-sans text-zinc-400 mt-2 max-w-sm">
            Visualisasi energi malam, lantai dansa, dan ruang kreatif larut malam.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/80 transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] ${item.sizeClass}`}
            >
              {/* Overlay Gradasi Warna saat Hover */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${item.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-10`}
              />

              {/* Gelap Esensial di Bagian Bawah untuk Teks */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 z-10" />

              {/* PLACEHOLDER VISUAL (Nanti ganti div ini dengan tag <img> asli) */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl select-none group-hover:scale-110 transition-transform duration-500 ease-out opacity-40 group-hover:opacity-70">
                {item.emoji}
              </div>

              {/* KONTEN TEKS DI ATAS GAMBAR */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase block mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-zinc-200 group-hover:text-zinc-50 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Variasi Tekstur Garis Halus Pojok Kanan Atas */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-violet-500 transition-colors z-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
