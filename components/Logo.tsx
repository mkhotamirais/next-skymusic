import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative z-50 font-heading text-xl font-black tracking-wider text-zinc-50 group">
      SKY<span className="text-violet-400 transition-colors group-hover:text-cyan-400">MUSIC</span>
    </Link>
  );
}
