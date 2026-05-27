import React from "react";

const EVENTS = [
  {
    id: 1,
    date: "12",
    month: "JUN",
    title: "Neon Horizon Rave",
    location: "Underground Club, Bandung",
    time: "21:00 - Drop",
    status: "Available",
  },
  {
    id: 2,
    date: "28",
    month: "JUN",
    title: "Late Night Lo-Fi Session",
    location: "Kopi Selasar, Bandung",
    time: "19:30 - 23:00",
    status: "Available",
  },
  {
    id: 3,
    date: "05",
    month: "JUL",
    title: "Cyber Beat Festival 2026",
    location: "Dago Tea House, Bandung",
    time: "17:00 - Late",
    status: "Selling Fast",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-zinc-900 border-t border-zinc-850 relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* HEADER */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-violet-400 uppercase font-mono">
            `// Mark Your Calendar
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-zinc-50 tracking-tight mt-2">
            Upcoming{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400">Events</span>
          </h2>
        </div>

        {/* EVENTS LIST */}
        <div className="space-y-4">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="group bg-zinc-950/50 border border-zinc-800/80 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-950"
            >
              {/* TANGGAL */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="w-16 h-16 bg-zinc-900 rounded-xl border border-zinc-800 flex flex-col items-center justify-center font-mono group-hover:border-violet-500/50 transition-colors">
                  <span className="text-2xl font-bold text-zinc-100">{event.date}</span>
                  <span className="text-[10px] text-violet-400 font-bold tracking-wider">{event.month}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-zinc-200 group-hover:text-zinc-50 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-sans">{event.location}</p>
                </div>
              </div>

              {/* WAKTU & STATUS */}
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 border-t md:border-t-0 border-zinc-900 pt-4 md:pt-0">
                <span className="text-xs font-mono text-zinc-500">{event.time}</span>
                <span
                  className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${
                    event.status === "Selling Fast"
                      ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                      : "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                  }`}
                >
                  {event.status}
                </span>
              </div>

              {/* BUTTON CTA EVENT */}
              <div className="shrink-0">
                <button className="w-full md:w-auto px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-sm font-medium text-zinc-200 hover:text-zinc-50 rounded-full transition-all group-hover:bg-zinc-50 group-hover:text-zinc-950 group-hover:border-zinc-50">
                  Amankan Tiket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
