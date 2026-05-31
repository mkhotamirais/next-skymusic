import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 md:py-28" aria-labelledby="cta-heading">
      {/* Glow halus */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]"
      />

      <div className="container relative z-10 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
          Mulai Sekarang
        </span>

        <h2 id="cta-heading" className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Siap Memperluas{" "}
          <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Jangkauan Musik
          </span>{" "}
          Anda?
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
          Konsultasikan kebutuhan distribusi, campaign, dan engagement dengan tim Skymusic.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-primary">
            Hubungi Kami
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Lihat Layanan
          </Link>
        </div>
      </div>
    </section>
  );
}
