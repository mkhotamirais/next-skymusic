import Image from "next/image";
import type { Metadata } from "next";
import CtaSection from "@/components/home/CtaSection";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Layanan | Skymusic",
  description:
    "Talent Management, KOL Campaign, UGC, Buzzer Marketing, dan Clippers untuk memperluas jangkauan musik Anda.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="border-b border-zinc-900 bg-zinc-950 pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
              Layanan Kami
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
              Solusi Pemasaran{" "}
              <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Musik Digital
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              Dari content distribution hingga audience engagement — lima layanan terintegrasi untuk membantu musik Anda
              didengar dan dikenal lebih luas.
            </p>
          </div>
        </div>
      </section>

      {/* Daftar layanan detail */}
      <section className="bg-zinc-950 py-16 md:py-24">
        <div className="container space-y-20 md:space-y-28">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Gambar */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-transparent" />
                </div>

                {/* Konten */}
                <div className={isReversed ? "lg:order-1" : ""}>
                  <span className="font-mono text-sm font-bold text-violet-400">{service.id}</span>
                  <h2 className="mt-2 text-2xl font-bold text-zinc-50 sm:text-3xl">{service.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">{service.summary}</p>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-base text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
