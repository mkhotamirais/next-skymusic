import React from "react";

// Data tracklist mini untuk diputar
const TRACKS = [
  { id: 1, title: "Midnight Caffeine", artist: "Lo-Fi Lounge", duration: "02:45", active: true },
  { id: 2, title: "Neon Skyline", artist: "VaporPulse", duration: "03:12", active: false },
  { id: 3, title: "Lost in Shibuya", artist: "Tokyo Drift Collective", duration: "02:58", active: false },
];

export default function MusicPlayer() {
  return (
    <section id="music" className="py-24 bg-zinc-900 border-t border-zinc-850 relative overflow-hidden">
      {/* EFFECT GLOW (Lampu neon hijau toska dibelakang player) */}
      <div className="absolute bottom-[-10%] left-[20%] w-125 h-125 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* HEADER TEXT */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase font-mono">
            `// Live Preview
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-zinc-50 tracking-tight mt-1">
            Tune In{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">Instantly</span>
          </h2>
          <p className="font-sans text-zinc-400 mt-2 max-w-md mx-auto text-sm sm:text-base">
            Rasakan langsung kualitas audionya. Klik play untuk memulai petualangan malammu.
          </p>
        </div>

        {/* MAIN PLAYER BOX (GLASSMORPHISM) */}
        <div className="bg-zinc-950/60 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* KOLOM KIRI: CORE PLAYER (Sisi 5 Kolom) */}
          <div className="md:col-span-5 flex flex-col items-center text-center justify-center border-b md:border-b-0 md:border-r border-zinc-800/80 pb-6 md:pb-0 md:pr-8">
            {/* Vinyl/Cover Art Animasi */}
            <div className="w-40 h-40 bg-linear-to-br from-zinc-800 to-zinc-900 rounded-full flex items-center justify-center border-4 border-zinc-800 shadow-2xl relative group mb-6">
              <div className="absolute inset-0 rounded-full border border-zinc-700/50 animate-[spin_12s_linear_infinite]" />
              <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center border-2 border-zinc-800 z-10">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>
              {/* Efek Hover Glow */}
              <div className="absolute inset-0 bg-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
            </div>

            {/* Title & Artist */}
            <h3 className="font-heading text-xl font-bold text-zinc-100">Midnight Caffeine</h3>
            <p className="font-sans text-xs text-emerald-400 font-medium mt-1 uppercase tracking-wider">Lo-Fi Lounge</p>

            {/* PROGRESS BAR */}
            <div className="w-full mt-6">
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden cursor-pointer relative group">
                <div className="h-full w-1/3 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full relative" />
              </div>
              <div className="flex justify-between text-[10px] text-zinc-500 mt-2 font-mono">
                <span>01:05</span>
                <span>02:45</span>
              </div>
            </div>

            {/* CONTROLS BUTTONS */}
            <div className="flex items-center gap-6 mt-4">
              <button className="text-zinc-500 hover:text-zinc-200 text-lg transition-colors">⏮</button>
              <button className="w-12 h-12 rounded-full bg-zinc-50 text-zinc-950 flex items-center justify-center text-lg pl-1 hover:bg-emerald-400 hover:scale-105 transition-all shadow-lg shadow-zinc-950/50">
                ▶
              </button>
              <button className="text-zinc-500 hover:text-zinc-200 text-lg transition-colors">⏭</button>
            </div>
          </div>

          {/* KOLOM KANAN: TRACKLIST MINI (Sisi 7 Kolom) */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 mb-2 uppercase block">
              Up Next // Queue
            </span>

            {TRACKS.map((track) => (
              <div
                key={track.id}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                  track.active
                    ? "bg-zinc-900/80 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
                    : "bg-zinc-900/20 border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700/80"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-mono ${track.active ? "text-emerald-400 font-bold" : "text-zinc-600"}`}
                  >
                    {track.id < 10 ? `0${track.id}` : track.id}
                  </span>
                  <div>
                    <h4 className={`text-sm font-medium ${track.active ? "text-zinc-100" : "text-zinc-300"}`}>
                      {track.title}
                    </h4>
                    <p className="text-xs text-zinc-500">{track.artist}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {track.active && (
                    <span className="flex gap-0.5 items-end h-3">
                      <span className="w-0.5 bg-emerald-400 h-full animate-[pulse_1s_infinite]" />
                      <span className="w-0.5 bg-emerald-400 h-2/3 animate-[pulse_1.2s_infinite]" />
                      <span className="w-0.5 bg-emerald-400 h-1/2 animate-[pulse_0.8s_infinite]" />
                    </span>
                  )}
                  <span className="text-xs font-mono text-zinc-500">{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
