// app/calculator/page.tsx
"use client";
import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product } from "@/types";
import ModeSelector from "@/components/ModeSelector";
import InputSection from "@/components/InputSection";
import Link from "next/link";
import { formatIDR } from "@/lib/calculations";

export default function CalculatorPage() {
  const [activeMode, setActiveMode] = useState<"profit-loss" | "pricing">(
    "profit-loss",
  );
  const [products, setProducts] = useLocalStorage<Product[]>(
    "umkm-products",
    [],
  );

  const addProduct = (product: Product) => {
    setProducts([product, ...products]);
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#F1F1F1] text-black">
      <div className="max-w-6xl mx-auto p-4 md:p-12">
        {/* MODE SELECTOR */}
        <div className="mb-16">
          <div className="mb-4">
            <h3 className="font-black text-xs uppercase tracking-[0.3em] text-liver/50">
              Pilih Mode Analisis
            </h3>
          </div>
          <ModeSelector active={activeMode} onChange={setActiveMode} />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* KIRI: INPUT & HASIL (Lebar 7 kolom) */}
          <div className="lg:col-span-7">
            <InputSection activeMode={activeMode} onSave={addProduct} />
          </div>

          {/* KANAN: RINGKASAN & RIWAYAT (Lebar 5 kolom) */}
          {/* STICKY TOP-20 SESUAI PENYESUAIANMU */}
          <div className="lg:col-span-5 sticky top-20 flex flex-col gap-6 mt-8 lg:mt-0">
            {/* Box Navigasi ke Daftar Produk (WARNA DINAMIS) */}
            <div
              className={`border-4 border-outer-space p-6 shadow-[6px_6px_0_0_var(--color-outer-space)] transition-colors duration-300
                ${
                  activeMode === "profit-loss"
                    ? "bg-weldon text-white"
                    : "bg-buff text-outer-space"
                }
              `}
            >
              <div className="mb-4">
                <p className="font-black uppercase text-lg tracking-widest">
                  Daftar Tersimpan
                </p>
                <p
                  className={`text-xs font-bold mt-1 transition-colors duration-300 ${
                    activeMode === "profit-loss"
                      ? "text-white/80"
                      : "text-outer-space/70"
                  }`}
                >
                  Total tersimpan: {isMounted ? products.length : 0} produk
                </p>
              </div>
              <Link
                href="/products"
                className={`block w-full text-center font-black uppercase px-6 py-4 border-4 border-outer-space shadow-[4px_4px_0_0_var(--color-outer-space)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300
                  ${
                    activeMode === "profit-loss"
                      ? "bg-saffron text-outer-space"
                      : "bg-weldon text-white"
                  }
                `}
              >
                BUKA DAFTAR PRODUK →
              </Link>
            </div>

            {/* Box Riwayat Terakhir (Hanya tampil jika ada data) */}
            {isMounted && products.length > 0 && (
              <div className="bg-white border-4 border-outer-space p-6 shadow-[6px_6px_0_0_var(--color-outer-space)]">
                <h4 className="font-black uppercase text-xs tracking-[0.2em] text-liver mb-4 border-b-4 border-outer-space/10 pb-2">
                  Terakhir Disimpan
                </h4>
                <div className="flex flex-col gap-4">
                  {/* Ambil maksimal 3 data terbaru */}
                  {products.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="border-2 border-dashed border-outer-space/40 p-3 flex justify-between items-center bg-pale-silver/30 hover:bg-pale-silver/60 transition-colors"
                    >
                      <div className="truncate pr-4">
                        <p className="font-black text-sm uppercase truncate">
                          {item.name}
                        </p>
                        <p className="text-[10px] font-bold text-outer-space/60 uppercase">
                          {item.mode === "profit-loss"
                            ? "Cek Laba/Rugi"
                            : "Set Harga"}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        {item.mode === "profit-loss" ? (
                          <span
                            className={`font-black text-sm ${
                              (item.profit ?? 0) >= 0
                                ? "text-saffron bg-outer-space px-2 py-1"
                                : "text-white bg-liver px-2 py-1"
                            }`}
                          >
                            {(item.profit ?? 0) >= 0 ? "+" : "-"}
                            {formatIDR(Math.abs(item.profit ?? 0))}
                          </span>
                        ) : (
                          <span className="font-black text-sm text-saffron bg-outer-space px-2 py-1">
                            {formatIDR(item.recommendedPrice ?? 0)}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
