import Image from "next/image";
import Link from "next/link";
import { blogPreview } from "@/lib/content";

export default function BlogSection() {
  return (
    <section className="bg-zinc-900/30 py-16 md:py-24" aria-labelledby="blog-heading">
      <div className="container">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:items-end md:text-left">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
              Berita & Insight
            </span>

            <h2 id="blog-heading" className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              Update Terbaru dari{" "}
              <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Industri Musik
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Artikel, tips campaign, dan insight seputar pemasaran musik digital.
            </p>
          </div>

          <Link href="/blog" className="btn btn-secondary shrink-0">
            Baca Semua
          </Link>
        </div>

        {/* Grid artikel */}
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {blogPreview.map((post) => (
            <li key={post.slug}>
              <Link
                href="/blog"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 transition-colors duration-300 hover:border-zinc-700"
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
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="font-medium text-violet-400">{post.category}</span>
                    <span>·</span>
                    <time dateTime="2026-05-12">{post.date}</time>
                  </div>

                  <h3 className="mt-2 text-base font-bold leading-snug text-zinc-100 transition-colors group-hover:text-violet-300">
                    {post.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>

                  <span className="mt-4 text-sm font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
                    Baca selengkapnya →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="btn btn-secondary">
            Baca Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
}
