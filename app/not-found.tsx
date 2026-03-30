"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-pale-silver p-6 md:p-10 flex flex-col items-center justify-center font-sans overflow-hidden">
      {/* Container Utama: Lebih Compact & Minimalis */}
      <div className="bg-buff border-8 border-outer-space p-8 md:p-10 w-full max-w-2xl shadow-[12px_12px_0px_0px_var(--color-outer-space)] flex flex-col items-center text-center">
        {/* Header 404: Jauh lebih kecil */}
        <div className="bg-liver text-white border-4 border-outer-space px-5 py-2 mb-6 flex items-center shadow-[6px_6px_0px_0px_var(--color-outer-space)]">
          <h1 className="font-black text-6xl md:text-7xl tracking-tighter uppercase italic">
            404
          </h1>
        </div>

        {/* Pesan Utama: Padat & Jelas */}
        <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight text-outer-space mb-2 leading-none">
          Waduh! Halamannya
          <br />
          <span className="text-liver bg-saffron px-2">Gak Ketemu</span> Bos.
        </h2>

        {/* Deskripsi Singkat: Hanya satu baris */}
        <p className="text-sm md:text-base font-bold text-outer-space/80 mb-8 max-w-sm">
          Mungkin Anda salah ketik alamat, atau halaman ini sudah ditarik dari
          peredaran.
        </p>

        {/* Satu Tombol Aksi Utama: Mengarah ke Landing Page */}
        <Link
          href="/"
          className="group flex items-center justify-center gap-3 bg-weldon text-white border-4 border-outer-space px-8 py-4 font-black uppercase tracking-widest text-base shadow-[6px_6px_0px_0px_var(--color-outer-space)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-liver active:text-white"
        >
          <ArrowLeft size={18} />
          Kembali ke Depan
        </Link>
      </div>
    </main>
  );
}
