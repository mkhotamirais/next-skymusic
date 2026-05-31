import Image from "next/image";
import Link from "next/link";
import { creatorsPreview } from "@/lib/content";

export default function CreatorsSection() {
  return (
    <section className="border-y border-zinc-900/80 bg-zinc-950 py-16 md:py-24" aria-labelledby="creators-heading">
      <div className="container">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:items-end md:text-left">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
              Talent & Creators
            </span>

            <h2 id="creators-heading" className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              Wajah Kreatif di Balik{" "}
              <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Kampanye Musik
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Talent, kreator, dan clipper yang siap mengamplifikasi musik Anda ke audiens yang tepat.
            </p>
          </div>

          <Link href="/creators" className="btn btn-secondary shrink-0">
            Lihat Semua
          </Link>
        </div>

        {/* Grid kartu */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {creatorsPreview.map((person) => (
            <li key={person.name}>
              <article className="group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 transition-colors duration-300 hover:border-zinc-700">
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-violet-400">
                      {person.role}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-zinc-50">{person.name}</h3>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA mobile — tombol desktop sudah di header section */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/creators" className="btn btn-secondary">
            Lihat Semua Creators
          </Link>
        </div>
      </div>
    </section>
  );
}