"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { creatorCategories, creators, type CreatorType } from "@/lib/content";

type FilterId = "all" | CreatorType;

const typeLabel: Record<CreatorType, string> = {
  talent: "Talent",
  creator: "Creator",
  clipper: "Clipper",
};

export default function CreatorsGrid() {
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = useMemo(() => (filter === "all" ? creators : creators.filter((c) => c.type === filter)), [filter]);

  return (
    <>
      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {creatorCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              filter === cat.id
                ? "bg-zinc-50 text-zinc-950"
                : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((person) => (
          <li key={person.slug}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 transition-colors duration-300 hover:border-zinc-700">
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-violet-500/30 bg-zinc-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-400 backdrop-blur-sm">
                  {typeLabel[person.type]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-bold text-zinc-50">{person.name}</h2>
                <p className="mt-1 text-sm font-medium text-zinc-400">{person.role}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{person.bio}</p>
                <p className="mt-4 text-sm font-semibold text-zinc-300">{person.reach}</p>

                <div className="mt-4 flex gap-2">
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram ${person.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-lg text-zinc-400 transition-colors hover:border-zinc-700 hover:text-violet-400"
                  >
                    <IoLogoInstagram aria-hidden="true" />
                  </a>
                  <a
                    href={person.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`TikTok ${person.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-lg text-zinc-400 transition-colors hover:border-zinc-700 hover:text-violet-400"
                  >
                    <IoLogoTiktok aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-base text-zinc-500">Tidak ada creator di kategori ini.</p>
      )}
    </>
  );
}
