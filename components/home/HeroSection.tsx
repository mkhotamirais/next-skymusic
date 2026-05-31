"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-zinc-950 pt-24 pb-16 text-zinc-50">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]"
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Konten */}
          <div className="space-y-5 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
              Skymusic Agency
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.25rem]"
            >
              Bawa Musik Anda{" "}
              <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Menjangkau Lebih Banyak
              </span>{" "}
              Pendengar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0"
            >
              Dari content distribution hingga audience engagement, kami membantu menciptakan exposure yang lebih luas
              untuk musik Anda agar didengar dan dikenal lebih banyak orang.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link href="/contact" className="btn btn-primary">
                Mulai Konsultasi
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Pelajari Layanan
              </Link>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto aspect-[5/4] w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/30 lg:max-w-none"
          >
            <Image
              src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Suasana konser musik dengan cahaya panggung"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
