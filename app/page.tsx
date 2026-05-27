import About from "@/components/home/About";
import Cta from "@/components/home/Cta";
import Events from "@/components/home/Events";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import MusicPlayer from "@/components/home/MusicPlayer";
import Playlist from "@/components/home/Playlist";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Playlist />
      <About />
      <Gallery />
      <MusicPlayer />
      <Events />
      <Cta />
    </main>
  );
}
