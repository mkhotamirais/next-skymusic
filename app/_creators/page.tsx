import type { Metadata } from "next";
import CtaSection from "@/components/home/CtaSection";
import CreatorsGrid from "./CreatorsGrid";

export const metadata: Metadata = {
  title: "Creators | Skymusic",
  description: "Jelajahi talent, kreator, dan clipper Skymusic yang siap mengamplifikasi campaign musik Anda.",
};

export default function CreatorsPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="border-b border-zinc-900 bg-zinc-950 pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
              Talent & Creators
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
              Wajah Kreatif di Balik{" "}
              <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Kampanye Musik
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              Talent, kreator, dan clipper terkurasi yang siap membantu musik Anda menjangkau audiens lebih luas di
              platform digital.
            </p>
          </div>
        </div>
      </section>

      {/* Grid + filter */}
      <section className="bg-zinc-950 py-16 md:py-24">
        <div className="container">
          <CreatorsGrid />
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
