"use client";
import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product } from "@/types";
import ModeSelector from "@/components/ModeSelector";
import ProfitLossMode from "@/components/ProfitLossMode";
import PricingMode from "@/components/PricingMode";
import ProductList from "@/components/ProductList";
import Link from "next/link";
import Image from "next/image";

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

  const deleteProduct = (id: string) => {
    if (confirm("Hapus data ini?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-[#F1F1F1] text-black">
      {/* 1. STICKY PROPER HEADER */}
      <nav className="sticky top-0 z-[100] bg-white border-b-4 border-outer-space px-4 md:px-12 py-4 shadow-[0_4px_0_0_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-3 md:gap-4">
            {/* Logo Image Pengganti Komponen LogoPD */}
            <div className="relative flex-shrink-0 transform -rotate-3 transition-all duration-300 group-hover:rotate-2 group-hover:scale-110">
              <img
                src="/logo.png"
                alt="Logo Pintar Dagang"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-black text-xl md:text-2xl uppercase tracking-tighter text-outer-space">
                Pintar Dagang
              </span>
              <span className="font-bold text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-liver/60 mt-1 md:mt-0">
                Hitung Tepat, Bisnis Sehat
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block font-mono text-[10px] font-black bg-outer-space text-white px-2 py-1 uppercase tracking-widest">
              v1.0
            </span>
            <div className="h-8 w-1 bg-outer-space/10 hidden md:block" />
            <Link
              href="/"
              className="text-xs font-black uppercase underline underline-offset-4 hover:text-liver transition-colors"
            >
              Keluar
            </Link>
          </div>
        </div>
      </nav>

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
          <section className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tight inline-block relative italic">
              1. Input Data
              <div className="absolute bottom-0 left-0 w-full h-4 bg-saffron/40 -z-10" />
            </h2>
            <div className="animate-in fade-in slide-in-from-left-4 duration-500">
              {activeMode === "profit-loss" ? (
                <ProfitLossMode onSave={addProduct} />
              ) : (
                <PricingMode onSave={addProduct} />
              )}
            </div>
          </section>

          {/* 4. LIST SECTION */}
          <section className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tight inline-block relative italic">
              2. Daftar Produk
              <div className="absolute bottom-0 left-0 w-full h-4 bg-weldon/40 -z-10" />
            </h2>
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <ProductList products={products} onDelete={deleteProduct} />
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER TICKER STYLE */}
      <footer className="mt-20 border-t-4 border-outer-space">
        {/* Top Bar Slogan */}
        <div className="bg-outer-space py-4 overflow-hidden">
          <div className="whitespace-nowrap flex gap-12 animate-pulse">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="text-white font-black text-xs uppercase tracking-[0.5em]"
              >
                Pintar Dagang • Hitung Tepat, Bisnis Sehat •
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar Info */}
        <div className="bg-pale-silver/30 py-8 text-center border-t-4 border-outer-space">
          <span className="font-bold text-[10px] uppercase tracking-tighter text-outer-space">
            ©{" "}
            {new Date().getFullYear() > 2026
              ? `2026 - ${new Date().getFullYear()}`
              : "2026"}
            <span className="mx-3 text-outer-space/20">|</span>
            Made with passion by{" "}
            <span className="bg-saffron text-outer-space px-2 py-0.5 border-2 border-outer-space">
              fitnr
            </span>
          </span>
        </div>
      </footer>
    </main>
  );
}
