import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Calculator, TrendingUp, HelpCircle } from "lucide-react";
import LandingNavigation from "@/components/LandingNavigation";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-[#F1F1F1] text-outer-space selection:bg-saffron selection:text-outer-space pb-18 md:pb-0">
      <LandingNavigation />

      <main className="flex flex-col items-center overflow-hidden pt-20">
        {/* --- SECTION 1: HERO --- */}
        <section
          id="hero"
          className="min-h-[90vh] w-full flex flex-col items-center justify-center p-6 relative"
        >
          <div className="relative group max-w-2xl w-full flex flex-col items-center">
            <div className="relative z-10 -mb-6 transform -rotate-3 transition-all duration-300 hover:rotate-2 hover:scale-105 cursor-pointer">
              <Image
                src="/logo.png"
                alt="Logo Pintar Dagang"
                width={80}
                height={80}
                className="object-contain w-16 md:w-20"
              />
            </div>

            <div className="relative z-0 border-4 border-outer-space bg-saffron px-8 pt-8 pb-4 transform rotate-1 shadow-[8px_8px_0px_0px_var(--color-outer-space)] transition-transform group-hover:rotate-0">
              <h1 className="font-black text-5xl md:text-7xl uppercase tracking-tight text-outer-space text-center leading-none">
                Pintar Dagang
              </h1>
            </div>

            <div className="mt-10 md:mt-12 w-full p-4 border-4 border-dashed border-liver bg-buff/50">
              <p className="font-black text-xl md:text-2xl uppercase tracking-[.15em] text-liver text-center">
                HITUNG TEPAT,{" "}
                <span className="inline-block px-1 bg-white border-2 border-outer-space transform -rotate-1">
                  BISNIS SEHAT
                </span>
              </p>
            </div>

            <div className="h-2 bg-outer-space mt-8 w-1/3 rounded-full" />

            <Link
              href="/calculator"
              className="mt-10 bg-outer-space text-saffron font-black py-4 px-10 border-4 border-outer-space hover:bg-liver hover:text-white transition-all uppercase tracking-widest text-xl shadow-[8px_8px_0px_0px_var(--color-saffron)] active:translate-y-2 active:translate-x-2 active:shadow-none"
            >
              Mulai Kalkulasi Sekarang →
            </Link>
          </div>

          <Link
            href="#fitur"
            className="absolute bottom-10 animate-bounce flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="font-black text-xs uppercase tracking-widest text-outer-space/40 hover:text-liver transition-colors">
              Pelajari Lebih Lanjut
            </span>
            <ChevronDown size={32} className="text-outer-space/40" />
          </Link>
        </section>

        {/* --- SECTION 2: FITUR --- */}
        <section
          id="fitur"
          className="w-full py-24 px-6 bg-pale-silver border-t-8 border-outer-space border-dashed"
        >
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight bg-white px-6 py-4 border-4 border-outer-space shadow-[6px_6px_0px_0px_var(--color-outer-space)] mb-16 transform -rotate-1">
              Senjata Tempur Bisnismu
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {/* Fitur 1: Harga Ideal */}
              <div className="bg-weldon border-4 border-outer-space p-8 shadow-[8px_8px_0px_0px_var(--color-outer-space)] hover:-translate-y-2 transition-transform">
                <div className="bg-white border-4 border-outer-space w-16 h-16 flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_var(--color-saffron)]">
                  <Calculator size={32} className="text-outer-space" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white mb-4 tracking-wide">
                  Setup Harga Ideal
                </h3>
                <p className="font-bold text-outer-space/80 leading-relaxed mb-4">
                  Bingung nentuin harga jual produkmu? Kalkulator ini bantu
                  hitung HPP (Harga Pokok Penjualan) dari bahan baku sampai
                  biaya tetap.
                </p>
                <ul className="text-sm font-black uppercase text-white space-y-2 opacity-90">
                  <li>✓ Hitung Modal Bahan & Kemasan</li>
                  <li>✓ Target Margin Keuntungan</li>
                  <li>✓ Rekomendasi Harga Jual</li>
                </ul>
              </div>

              {/* Fitur 2: Laba Rugi */}
              <div className="bg-buff border-4 border-outer-space p-8 shadow-[8px_8px_0px_0px_var(--color-outer-space)] hover:-translate-y-2 transition-transform">
                <div className="bg-white border-4 border-outer-space w-16 h-16 flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_var(--color-liver)]">
                  <TrendingUp size={32} className="text-outer-space" />
                </div>
                <h3 className="text-2xl font-black uppercase text-liver mb-4 tracking-wide">
                  Cek Laba / Rugi
                </h3>
                <p className="font-bold text-outer-space/80 leading-relaxed mb-4">
                  Catat transaksi jualanmu dan langsung tahu apakah hari ini
                  kamu untung besar atau malah boncos.
                </p>
                <ul className="text-sm font-black uppercase text-liver space-y-2 opacity-90">
                  <li>✓ Input Biaya Operasional</li>
                  <li>✓ Cek Total Pendapatan</li>
                  <li>✓ Laporan Keuntungan Bersih</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: CARA PAKAI --- */}
        <section
          id="cara-pakai"
          className="w-full py-24 px-6 bg-white border-t-8 border-outer-space"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16 text-outer-space">
              Cara Pakainya Gampang!
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pilih Mode Kalkulator",
                  desc: "Mau nentuin harga jual produk baru, atau mau ngecek laba rugi dari jualan hari ini? Tinggal pilih menunya.",
                },
                {
                  step: "2",
                  title: "Masukkan Angka Modalmu",
                  desc: "Isi form dengan jujur. Masukkan biaya bahan baku, kemasan, hingga biaya operasional seperti listrik atau bensin.",
                },
                {
                  step: "3",
                  title: "Dapatkan Hasil Instan",
                  desc: "Klik hitung, dan sistem akan langsung kasih rekomendasi harga atau laporan laba rugi-mu dalam hitungan detik.",
                },
                {
                  step: "4",
                  title: "Simpan & Pantau",
                  desc: "Simpan data kalkulasimu ke dalam katalog produk agar mudah dipantau ke depannya.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-6 items-start p-6 bg-[#F1F1F1] border-4 border-outer-space hover:bg-saffron transition-colors group"
                >
                  <div className="bg-outer-space text-saffron font-black text-3xl w-14 h-14 flex items-center justify-center shrink-0 border-2 border-dashed border-saffron group-hover:border-outer-space">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="font-bold text-outer-space/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 4: FAQ --- */}
        <section
          id="faq"
          className="w-full py-24 px-6 bg-saffron border-y-8 border-outer-space border-dashed"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-white px-8 py-4 border-4 border-outer-space shadow-[6px_6px_0px_0px_var(--color-liver)] flex items-center gap-3 transform rotate-2">
                <HelpCircle size={32} className="text-liver" />
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-liver">
                  F.A.Q
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Tools apa ini sebenarnya?",
                  a: "Pintar Dagang adalah kalkulator finansial sederhana yang dirancang khusus untuk membantu UMKM dan pedagang kecil menghitung modal, harga jual, dan laba rugi tanpa pusing.",
                },
                {
                  q: "Untuk siapa tools ini dibuat?",
                  a: "Untuk pedagang makanan, pemilik online shop, crafter, atau siapa saja yang punya bisnis kecil dan ingin merapikan hitung-hitungan keuangannya.",
                },
                {
                  q: "Apakah tools ini gratis?",
                  a: "100% GRATIS! Tidak ada biaya langganan, tidak ada fitur yang dikunci. Langsung pakai untuk kemajuan bisnismu.",
                },
                {
                  q: "Apakah datanya aman?",
                  a: "Data yang kamu input disimpan secara lokal di peramban (browser) kamu. Kami tidak menyimpan rahasia dapur bisnismu di server kami.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border-4 border-outer-space p-6 shadow-[4px_4px_0px_0px_var(--color-outer-space)]"
                >
                  <h4 className="font-black text-lg uppercase mb-2 flex gap-2">
                    <span className="text-liver">Q:</span> {faq.q}
                  </h4>
                  <p className="font-bold text-outer-space/80">
                    <span className="text-weldon font-black">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/calculator"
                className="inline-block bg-outer-space text-white font-black py-4 px-12 border-4 border-outer-space hover:bg-white hover:text-outer-space transition-all uppercase tracking-widest text-lg shadow-[8px_8px_0px_0px_var(--color-white)] active:translate-y-2 active:translate-x-2 active:shadow-none"
              >
                Gas, Cobain Sekarang!
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
