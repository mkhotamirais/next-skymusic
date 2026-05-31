"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { IoLogoTiktok, IoLogoInstagram, IoMusicalNote } from "react-icons/io5";

const talentsData = [
  {
    name: "Arka Narendra",
    category: "Producer / DJ",
    genre: "Electronic / Indo Pop",
    reach: "1.2M+ Followers",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Nabila Putri",
    category: "Content Creator",
    genre: "Acoustic / Covers",
    reach: "850K+ Followers",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "The Midnight Pulse Crew",
    category: "Buzzer Team / Dance",
    genre: "UGC / Viral Trends",
    reach: "3.4M+ Monthly Views",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
  },
];

export default function TalentsShowcase() {
  return (
    // Memakai background zinc-900/40 untuk transisi seksi antar-section tanpa border
    <section className="bg-zinc-900/40 text-zinc-50 py-32 overflow-hidden">
      <div className="container">
        {/* Header Grid: Seimbang kiri-kanan di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-16">
          <div className="md:col-span-8 space-y-3 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/10 inline-block">
              Our Talents & Creators
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Wajah Kreatif di Balik Kampanye Viral
            </h2>
            <p className="text-zinc-400 font-light text-base max-w-xl">
              Kami bekerja sama dengan kreator konten dan musisi berbakat yang siap membawa warna musik Anda langsung ke
              hadapan jutaan audiens target.
            </p>
          </div>
          <div className="md:col-span-4 text-center md:text-right hidden md:block">
            <Link href="/creators" className="btn-secondary text-sm py-3 px-6 inline-block">
              Lihat Semua Talent
            </Link>
          </div>
        </div>

        {/* Grid Box / Mobile Swipe Slider */}
        {/* Di Mobile: overflow-x-auto membuat grid bisa di-swipe ke kanan tanpa memakan space layar bawah */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
          {talentsData.map((talent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="min-w-[80vw] sm:min-w-[45vw] md:min-w-0 snap-center bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-900 group flex flex-col justify-between"
            >
              {/* Image Container dengan rasiometrik emas */}
              <div className="relative aspect-3/4 w-full bg-zinc-900">
                <Image
                  src={talent.image}
                  alt={talent.name}
                  fill
                  sizes="(max-w-768px) 80vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

                {/* Badge Kategori & Statistik di atas Gambar */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/20">
                      {talent.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 tracking-tight">{talent.name}</h3>
                  </div>
                </div>
              </div>

              {/* Data Detail Card */}
              <div className="p-5 space-y-3 bg-zinc-950 border-t border-zinc-900/50">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 font-light">
                    <IoMusicalNote className="text-zinc-500" /> {talent.genre}
                  </span>
                  <span className="font-semibold text-zinc-300">{talent.reach}</span>
                </div>

                {/* Micro Action Icons */}
                <div className="flex gap-2 pt-2 border-t border-zinc-900">
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer text-xs">
                    <IoLogoTiktok />
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer text-xs">
                    <IoLogoInstagram />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol khusus tampilan Mobile di posisi paling bawah */}
        <div className="text-center w-full block md:hidden pt-8">
          <Link href="/creators" className="btn-secondary inline-block w-full text-sm">
            Lihat Semua Talent
          </Link>
        </div>
      </div>
    </section>
  );
}
