import Link from "next/link";
import { services } from "@/lib/content";

export default function ServicesSection() {
  return (
    <section className="bg-zinc-900/30 py-16 md:py-24" aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            Layanan Kami
          </span>

          <h2 id="services-heading" className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
            Solusi Pemasaran{" "}
            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Musik Digital
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Dari manajemen talenta hingga distribusi konten viral — kami siap membantu musik Anda menjangkau audiens
            yang lebih luas.
          </p>
        </div>

        {/* Grid layanan — baris bawah 2 kartu ditengah di desktop */}
        {/* <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => (
            <li key={service.id} className={`lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}>
              <article className="group flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 transition-colors duration-300 hover:border-zinc-700">
                <span className="font-mono text-xs font-bold text-violet-400">{service.id}</span>
                <h3 className="mt-3 text-base font-bold text-zinc-100 transition-colors group-hover:text-violet-300 sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{service.description}</p>
              </article>
            </li>
          ))}
        </ul> */}

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => {
            // Menentukan span dan start kolom untuk layar besar (lg)
            let lgClass = "lg:col-span-4"; // Default baris pertama (12 kolom / 3 item = span 4)

            if (index >= 3) {
              // Baris kedua berisi 4 item (masing-masing span 3 -> total 12 kolom)
              lgClass = "lg:col-span-3";
            }

            return (
              <li key={service.id} className={`${lgClass}`}>
                <article className="group flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 transition-colors duration-300 hover:border-zinc-700">
                  <span className="font-mono text-xs font-bold text-violet-400">{service.id}</span>
                  <h3 className="mt-3 text-base font-bold text-zinc-100 transition-colors group-hover:text-violet-300 sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{service.description}</p>
                </article>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link href="/services" className="btn btn-secondary">
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
    </section>
  );
}
