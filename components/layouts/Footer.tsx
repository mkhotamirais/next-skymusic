import Link from "next/link";
import { IoLogoInstagram, IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";
import { socialLinks } from "@/lib/content";
import Logo from "../Logo";

const socialIcons = {
  Instagram: IoLogoInstagram,
  TikTok: IoLogoTiktok,
  YouTube: IoLogoYoutube,
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950 py-14 md:py-20">
      <div className="container">
        {/* Main */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <Logo />
            <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
              Agensi pemasaran musik digital — membantu brand, artis, dan label menjangkau audiens lebih luas melalui
              strategi konten dan campaign.
            </p>
          </div>

          {/* Social + email */}
          <div className="md:text-right">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">Ikuti Kami</p>

            <div className="flex gap-3 md:justify-end">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.name as keyof typeof socialIcons];
                if (!Icon) return null;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 text-xl text-zinc-400 transition-colors hover:border-zinc-700 hover:text-violet-400"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <Link
              href="/#contact"
              className="mt-5 inline-block text-base text-zinc-400 transition-colors hover:text-zinc-200 md:text-lg"
            >
              hallo@skymusic.id
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-zinc-500">&copy; {currentYear} Skymusic. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="#" className="transition-colors hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-zinc-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
