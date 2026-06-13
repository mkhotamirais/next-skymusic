import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "sonner";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skymusic",
  description: "Musik kita semua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${syne.variable} h-full antialiased scroll-smooth`}
      data-theme="dark"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        <Toaster position="top-center" richColors swipeDirections={["left", "right", "top"]} />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
