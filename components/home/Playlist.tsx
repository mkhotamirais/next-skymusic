import React from "react";

// Data fiktif untuk playlist musik malam
const PLAYLISTS = [
  {
    id: 1,
    title: "Midnight Lo-Fi Radio",
    description: "Irama santai dan ketukan berdebu untuk menemani sesi belajar atau coding larut malam.",
    tracks: "42 Tracks",
    duration: "2 jam 15 mnt",
    tag: "Relax",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    cover: "🔮", // Nanti bisa diganti tag <img> jika sudah ada aset foto
  },
  {
    id: 2,
    title: "Neon Cyber Pulse",
    description: "Energi synthwave dan electro-pop bertenaga tinggi langsung dari lantai dansa bawah tanah.",
    tracks: "35 Tracks",
    duration: "1 jam 50 mnt",
    tag: "Energy",
    tagColor: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
    cover: "⚡",
  },
  {
    id: 3,
    title: "Deep Techno Horizon",
    description: "Alunan bassline berat dan atmosfer gelap yang membawa pikiranmu hanyut lebih dalam.",
    tracks: "50 Tracks",
    duration: "3 jam 05 mnt",
    tag: "Deep",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    cover: "🎛️",
  },
];

export default function Playlist() {
  return (
    <section className="py-24 bg-zinc-900 border-y border-zinc-850 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-zinc-50 tracking-tight">
              Curated <span className="text-violet-400">Midnight</span> Playlists
            </h2>
            <p className="font-sans text-zinc-400 mt-2 max-w-md">
              Pilih frekuensi yang sesuai dengan mood malammu saat ini.
            </p>
          </div>

          {/* Tombol Lihat Semua */}
          <button className="self-start md:self-auto text-sm font-medium text-zinc-300 hover:text-violet-400 flex items-center gap-1 group transition-colors">
            Lihat Semua Playlist
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* PLAYLIST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLAYLISTS.map((playlist) => (
            <div
              key={playlist.id}
              className="group relative bg-zinc-950/40 border border-zinc-800/60 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-700/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Cover Placeholder (Nanti bisa diganti bungkus div ini dengan <img>) */}
              <div className="w-full aspect-square bg-zinc-900 rounded-xl mb-5 flex items-center justify-center text-5xl relative overflow-hidden border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                {playlist.cover}
                {/* Overlay Hitam saat Hover */}
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="w-12 h-12 rounded-full bg-zinc-50 text-zinc-950 flex items-center justify-center text-xl font-bold shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    ▶
                  </span>
                </div>
              </div>

              {/* Tag Genre */}
              <span
                className={`inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md border ${playlist.tagColor} mb-3`}
              >
                {playlist.tag}
              </span>

              {/* Info Text */}
              <h3 className="font-heading text-xl font-bold text-zinc-100 mb-2 group-hover:text-zinc-50 transition-colors">
                {playlist.title}
              </h3>
              <p className="font-sans text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-6">
                {playlist.description}
              </p>

              {/* Footer Card (Metadata) */}
              <div className="flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-900 pt-4 mt-auto">
                <span>{playlist.tracks}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span>{playlist.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
