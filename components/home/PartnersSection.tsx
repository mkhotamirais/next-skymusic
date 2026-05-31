import { partners } from "@/lib/content";

export default function PartnersSection() {
  return (
    <section className="border-y border-zinc-900/80 bg-zinc-950 py-16 md:py-20" aria-labelledby="partners-heading">
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            Dipercaya Industri
          </span>

          <h2 id="partners-heading" className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
            Partner Banyak{" "}
            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Brand, Artis & Label
            </span>{" "}
            Musik
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Telah menjadi partner banyak brand, artis, dan label musik dalam berbagai kolaborasi distribusi konten dan
            campaign digital.
          </p>
        </div>

        {/* Daftar partner */}
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {partners.map((name) => (
            <li
              key={name}
              className="text-sm font-semibold tracking-wide text-zinc-500 transition-colors duration-300 hover:text-zinc-200 md:text-base"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
