"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { blogCategories, blogPosts } from "@/lib/content";

type FilterId = (typeof blogCategories)[number]["id"];

export default function BlogGrid() {
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = useMemo(
    () => (filter === "all" ? blogPosts : blogPosts.filter((post) => post.category === filter)),
    [filter],
  );

  return (
    <>
      {/* Filter */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {blogCategories.map((cat) => (
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
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 transition-colors duration-300 hover:border-zinc-700"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <span className="font-medium text-violet-400">{post.category}</span>
                  <span>·</span>
                  <time dateTime={post.dateISO}>{post.date}</time>
                </div>

                <h2 className="mt-2 text-lg font-bold leading-snug text-zinc-100 transition-colors group-hover:text-violet-300">
                  {post.title}
                </h2>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400 md:text-base">{post.excerpt}</p>

                <span className="mt-4 text-sm font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
                  Baca selengkapnya →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-base text-zinc-500">Belum ada artikel di kategori ini.</p>
      )}
    </>
  );
}
