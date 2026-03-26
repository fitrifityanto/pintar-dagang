import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="relative group max-w-2xl w-full flex flex-col items-center">
        {/* Pintar Dagang Tag */}
        <div className="relative border-4 border-outer-space bg-saffron px-8 py-3 transform rotate-1 shadow-[8px_8px_0px_0px_var(--color-outer-space)] transition-transform group-hover:rotate-0">
          <h1 className="font-black text-5xl md:text-7xl uppercase tracking-tight text-outer-space text-center leading-none">
            Pintar Dagang
          </h1>
          {/* Decorative 'Punch Hole' */}
          <div className="absolute left-1/2 -top-3 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-outer-space" />
        </div>

        {/* Slogan with Border-Dashed */}
        <div className="mt-10 md:mt-12 w-full p-4 border-4 border-dashed border-liver bg-buff/50">
          <p className="font-black text-xl md:text-2xl uppercase tracking-[.15em] text-liver text-center">
            HITUNG TEPAT,{" "}
            <span className="inline-block px-1 bg-white border-2 border-outer-space">
              BISNIS SEHAT
            </span>
          </p>
        </div>

        {/* A small brutalist separator */}
        <div className="h-1 bg-outer-space mt-6 w-1/2" />

        {/* Link ke halaman Kalkulator */}
        <Link
          href="/calculator"
          className="mt-12 bg-outer-space text-saffron font-black py-4 px-10 border-4 border-outer-space hover:bg-liver hover:text-white transition-all uppercase tracking-widest text-xl shadow-[8px_8px_0px_0px_var(--color-saffron)] active:translate-y-2 active:shadow-none"
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
