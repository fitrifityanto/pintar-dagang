// app/calculator/page.tsx
"use client";
import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product } from "@/types";
import ModeSelector from "@/components/ModeSelector";
import InputSection from "@/components/InputSection";
import Link from "next/link";

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
        {/* 2. MODE SELECTOR (Non-Sticky) */}
        <div className="mb-16">
          <div className="mb-4">
            <h3 className="font-black text-xs uppercase tracking-[0.3em] text-liver/50">
              Pilih Mode Analisis
            </h3>
          </div>
          <ModeSelector active={activeMode} onChange={setActiveMode} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* 3. INPUT SECTION */}
          <InputSection activeMode={activeMode} onSave={addProduct} />

          {/* 4. LIST SECTION */}
          <div className="pt-8 border-t-4 border-dashed border-outer-space/20">
            <div className="bg-weldon/10 border-4 border-outer-space p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="font-black uppercase text-sm">
                  Lihat Hasil Perhitungan
                </p>
                <p className="text-xs font-bold text-liver/60">
                  Terdapat {isMounted ? products.length : 0} data tersimpan
                </p>
              </div>
              <Link
                href="/products"
                className="w-full md:w-auto text-center bg-weldon text-white font-black uppercase px-6 py-3 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Buka Daftar Produk →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
