import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="relative group max-w-2xl w-full flex flex-col items-center mt-8">
        {/* Logo PD - Ditumpuk sedikit di atas tag judul */}
        <div className="relative z-10 -mb-6 transform -rotate-3 transition-all duration-300 hover:rotate-2 hover:scale-105 cursor-pointer">
          <Image
            src="/logo.png" // Pastikan gambar logo disimpan di folder public dengan nama logo.png
            alt="Logo Pintar Dagang"
            width={80}
            height={80}
            // w-20 untuk mobile (80px), md:w-28 untuk desktop (112px)
            className="object-contain w-16 md:w-20"
          />
        </div>

        {/* Pintar Dagang Tag */}
        <div className="relative z-0 border-4 border-outer-space bg-saffron px-8 pt-8 pb-4 transform rotate-1 shadow-[8px_8px_0px_0px_var(--color-outer-space)] transition-transform group-hover:rotate-0">
          <h1 className="font-black text-5xl md:text-7xl uppercase tracking-tight text-outer-space text-center leading-none">
            Pintar Dagang
          </h1>
          {/* Decorative 'Punch Hole' - Diubah warnanya agar tembus pandang ke background utama */}
          <div className="absolute left-1/2 -top-3 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F1F1F1] border-4 border-outer-space" />
        </div>

        {/* Slogan with Border-Dashed */}
        <div className="mt-10 md:mt-12 w-full p-4 border-4 border-dashed border-liver bg-buff/50">
          <p className="font-black text-xl md:text-2xl uppercase tracking-[.15em] text-liver text-center">
            HITUNG TEPAT,{" "}
            <span className="inline-block px-1 bg-white border-2 border-outer-space transform -rotate-1">
              BISNIS SEHAT
            </span>
          </p>
        </div>

        {/* A small brutalist separator */}
        <div className="h-2 bg-outer-space mt-8 w-1/3 rounded-full" />

        {/* Link ke halaman Kalkulator */}
        <Link
          href="/calculator"
          className="mt-10 bg-outer-space text-saffron font-black py-4 px-10 border-4 border-outer-space hover:bg-liver hover:text-white transition-all uppercase tracking-widest text-xl shadow-[8px_8px_0px_0px_var(--color-saffron)] active:translate-y-2 active:translate-x-2 active:shadow-none"
        >
          Mulai Kalkulasi Sekarang →
        </Link>
      </div>

      <div className="absolute bottom-10 animate-bounce flex flex-col items-center gap-2">
        <span className="font-black text-xs uppercase tracking-widest text-outer-space/40">
          Gunakan Aplikasi
        </span>
        <ChevronDown size={32} className="text-outer-space/40" />
      </div>
    </main>
  );
}
