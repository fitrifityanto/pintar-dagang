"use client";
import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product } from "@/types";
import ModeSelector from "@/components/ModeSelector";
import ProfitLossMode from "@/components/ProfitLossMode";
import PricingMode from "@/components/PricingMode"; // Mirip dengan ProfitLossMode
import ProductList from "@/components/ProductList";
import { Trash2 } from "lucide-react";
import { formatIDR } from "@/lib/calculations";

export default function Home() {
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
      {/* SECTION 1: FULL SCREEN HERO HEADER */}
      <header className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-pale-silver">
        {/* Dekorasi Background Tambahan (Opsional) */}
        <div className="absolute top-10 left-10 w-32 h-32 border-8 border-saffron/20 rounded-full -z-0" />
        <div className="absolute bottom-20 right-10 w-64 h-64 border-8 border-liver/10 rotate-12 -z-0" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-block relative">
            {/* Layer Bayangan */}
            <div className="absolute inset-0 bg-outer-space translate-x-4 translate-y-4 border-4 border-outer-space" />

            {/* Layer Utama Judul */}
            <div className="relative flex flex-col items-center bg-white border-4 border-outer-space p-8 md:p-16">
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-outer-space leading-none">
                UMKM_CALC
              </h1>
              <div className="h-3 bg-saffron mt-6 w-full shadow-[4px_4px_0px_0px_var(--color-liver)]" />
              <p className="font-black text-lg md:text-2xl mt-4 uppercase tracking-[0.3em] text-liver">
                Smart Financial Engine
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="font-bold text-xl md:text-3xl text-outer-space uppercase tracking-tight">
              Keputusan Cepat, Bisnis Tepat.
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="h-[3px] w-16 bg-liver" />
              <p className="text-xs md:text-sm font-black text-liver uppercase tracking-[0.4em]">
                Transparency • Precision • Growth
              </p>
              <span className="h-[3px] w-16 bg-liver" />
            </div>
          </div>
        </div>

        {/* Indikator Scroll Down */}
        <div className="absolute bottom-10 animate-bounce flex flex-col items-center gap-2">
          <span className="font-black text-[10px] uppercase tracking-widest text-outer-space/40">
            Scroll ke bawah
          </span>
          <div className="w-6 h-10 border-4 border-outer-space/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-outer-space/20 rounded-full" />
          </div>
        </div>
      </header>

      {/* SECTION 2: MAIN CALCULATOR AREA */}
      <div className="max-w-6xl mx-auto p-4 md:p-12 relative">
        <div className="sticky top-0 z-50 bg-[#F1F1F1]/80 backdrop-blur-md pt-4 pb-6 mb-12 border-b-4 border-outer-space/10">
          <ModeSelector active={activeMode} onChange={setActiveMode} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <section>
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tight inline-block relative">
              <span className="relative z-10 italic">1. Input Data</span>
              <div className="absolute bottom-0 left-0 w-full h-4 bg-saffron/40 -z-0" />
            </h2>
            {activeMode === "profit-loss" ? (
              <ProfitLossMode onSave={addProduct} />
            ) : (
              <PricingMode onSave={addProduct} />
            )}
          </section>

          <section>
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tight inline-block relative">
              <span className="relative z-10 italic">2. Daftar Produk</span>
              <div className="absolute bottom-0 left-0 w-full h-4 bg-weldon/40 -z-0" />
            </h2>
            <ProductList products={products} onDelete={deleteProduct} />
          </section>
        </div>
      </div>
    </main>
  );
}
