import type { Metadata } from "next";
import CtaSection from "@/components/home/CtaSection";
import BlogGrid from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blog | Skymusic",
  description: "Berita, insight, dan tips seputar pemasaran musik digital dari Skymusic.",
};

export default function BlogPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="border-b border-zinc-900 bg-zinc-950 pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
              Berita & Insight
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
              Update Terbaru dari{" "}
              <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Industri Musik
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              Artikel, tips campaign, dan insight seputar pemasaran musik digital untuk brand, artis, dan label.
            </p>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="bg-zinc-950 py-16 md:py-24">
        <div className="container">
          <BlogGrid />
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
