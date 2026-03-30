// components/ProductList.tsx
"use client";
import { Product } from "@/types";
import {
  Trash2,
  Tag,
  BarChart3,
  ShoppingCart,
  Target,
  PackageSearch,
  Calculator,
} from "lucide-react";
import { formatIDR } from "@/lib/calculations";
import Link from "next/link";

type Props = {
  products: Product[];
  onDelete: (id: string) => void;
};

export default function ProductList({ products, onDelete }: Props) {
  // --- DESAIN EMPTY STATE ---
  if (products.length === 0) {
    return (
      <div className="border-4 border-outer-space bg-pale-silver p-10 md:p-16 shadow-[8px_8px_0px_0px_var(--color-outer-space)] text-center flex flex-col items-center gap-6 mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="relative group">
          <div className="absolute inset-0 bg-liver transform rotate-6 border-4 border-outer-space group-hover:rotate-0 transition-transform"></div>
          <div className="relative border-4 border-outer-space p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">
            <PackageSearch
              size={64}
              className="text-outer-space"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="space-y-2 max-w-md mt-4">
          <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tighter text-outer-space transform -rotate-1 inline-block bg-white px-3 py-1 border-2 border-outer-space">
            BELUM ADA HITUNGAN!
          </h3>
          <p className="font-bold text-sm md:text-base text-outer-space/70 leading-relaxed pt-2">
            Ups, sepertinya kamu belum menyimpan data apapun. Ayo hitung modal
            produk baru atau cek laba rugi jualanmu sekarang!
          </p>
        </div>

        <Link
          href="/calculator"
          className="mt-6 bg-saffron text-outer-space font-black py-4 px-10 border-4 border-outer-space flex justify-center items-center gap-3
                     hover:bg-liver hover:text-white transition-all uppercase tracking-widest text-base
                     shadow-[6px_6px_0px_0px_var(--color-outer-space)] active:translate-y-1 active:shadow-none"
        >
          <Calculator size={20} />
          Mulai Menghitung →
        </Link>
      </div>
    );
  }

  // --- RENDERING DAFTAR PRODUK ---
  return (
    <div className="grid gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-pale-silver border-4 border-outer-space p-5 shadow-[8px_8px_0px_0px_var(--color-outer-space)] relative hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
        >
          {/* Tombol Hapus */}
          <button
            onClick={() => onDelete(product.id)}
            className="absolute -top-4 -right-4 bg-liver p-2 border-4 border-outer-space hover:bg-red-600 transition-transform hover:scale-110 shadow-[4px_4px_0px_0px_var(--color-outer-space)] z-20 cursor-pointer"
          >
            <Trash2 size={20} className="text-white" />
          </button>

          {/* Label Tipe Mode */}
          <div
            className={`absolute -top-4 -left-4 px-3 py-1 border-4 border-outer-space font-black text-xs uppercase shadow-[4px_4px_0px_0px_var(--color-outer-space)] z-10 
            ${product.mode === "profit-loss" ? "bg-saffron text-outer-space" : "bg-weldon text-white"}`}
          >
            {product.mode === "profit-loss" ? "📈 Laba Rugi" : "💰 Pricing"}
          </div>

          {/* Header Card */}
          <div className="mt-2 mb-6">
            <h3 className="font-black text-2xl uppercase italic leading-tight text-outer-space break-words pr-6">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] font-black bg-outer-space text-pale-silver px-2 py-0.5 uppercase tracking-tighter">
                Dibuat:{" "}
                {new Date(product.createdAt).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Main Info Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {product.mode === "profit-loss" ? (
              <>
                <div className="border-4 border-outer-space p-3 bg-buff shadow-[4px_4px_0px_0px_var(--color-outer-space)]">
                  <p className="text-[9px] font-black uppercase text-liver flex items-center gap-1 mb-1">
                    <Tag size={12} /> Harga Jual
                  </p>
                  <p className="text-sm font-black text-outer-space">
                    {formatIDR(product.sellingPrice)}
                  </p>
                </div>

                <div className="border-4 border-outer-space p-3 bg-white/50 shadow-[4px_4px_0px_0px_var(--color-outer-space)]">
                  <p className="text-[9px] font-black uppercase text-liver flex items-center gap-1 mb-1">
                    <BarChart3 size={12} /> Margin
                  </p>
                  <p className="text-sm font-black text-weldon">
                    {product.margin.toFixed(1)}%
                  </p>
                </div>

                {/* Section Detail Biaya Diperbarui ke Logika Lump Sum */}
                <div className="col-span-2 border-2 border-outer-space border-dashed p-3 bg-pale-silver/50 text-[10px] font-bold space-y-1">
                  <div className="flex justify-between items-center text-outer-space/70">
                    <span className="uppercase italic">Rincian Modal:</span>
                    <span>
                      ({formatIDR(product.variableCost)} ×{" "}
                      {product.quantitySold}) +{" "}
                      {formatIDR(product.operationalCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center font-black text-outer-space border-t border-outer-space/10 pt-1">
                    <span className="uppercase">Total Modal Terpakai:</span>
                    <span>{formatIDR(product.totalCost)}</span>
                  </div>
                </div>

                <div
                  className={`col-span-2 border-4 border-outer-space p-4 flex justify-between items-center shadow-[4px_4px_0px_0px_var(--color-outer-space)] transition-colors
      ${product.profit >= 0 ? "bg-saffron" : "bg-liver text-white"}`}
                >
                  <span className="font-black text-[11px] uppercase tracking-widest">
                    {product.profit >= 0 ? "TOTAL PROFIT:" : "TOTAL KERUGIAN:"}
                  </span>
                  <span className="font-black text-xl italic uppercase">
                    {formatIDR(product.profit)}
                  </span>
                </div>
              </>
            ) : (
              <div className="col-span-2 space-y-4">
                {/* Baris Atas: HPP & Harga Ideal */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-4 border-outer-space p-3 bg-white/50 shadow-[4px_4px_0px_0px_var(--color-outer-space)]">
                    <p className="text-[9px] font-black uppercase text-weldon mb-1">
                      HPP per Unit
                    </p>
                    <p className="text-sm font-black text-outer-space">
                      {formatIDR(product.hpp)}
                    </p>
                  </div>
                  <div className="border-4 border-outer-space p-3 bg-saffron shadow-[4px_4px_0px_0px_var(--color-outer-space)]">
                    <p className="text-[9px] font-black uppercase text-liver mb-1">
                      Harga Rekomendasi
                    </p>
                    <p className="text-sm font-black text-liver">
                      {formatIDR(product.recommendedPrice)}
                    </p>
                  </div>
                </div>

                {/* Section Detail HPP & Margin */}
                <div className="border-2 border-outer-space border-dashed p-3 bg-pale-silver/50 text-[10px] font-bold space-y-2">
                  <div className="flex justify-between items-center text-outer-space/70">
                    <span className="uppercase">Detail Biaya:</span>
                    <span>
                      {formatIDR(
                        (product.rawMaterial || 0) + (product.packaging || 0),
                      )}{" "}
                      (Var) +
                      {formatIDR(
                        (product.monthlyFixedCost || 0) /
                          (product.targetProduction || 1),
                      )}{" "}
                      (Fixed)
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t border-outer-space/20 pt-1">
                    <span className="uppercase text-liver">Target Margin:</span>
                    <span className="bg-liver text-white px-2 py-0.5 font-black">
                      {product.targetMargin}%
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Detail */}
          <div className="mt-6 pt-3 border-t-4 border-outer-space border-dotted flex justify-between items-center">
            <div className="text-[10px] font-black text-outer-space uppercase flex items-center gap-2">
              {product.mode === "profit-loss" ? (
                <>
                  <ShoppingCart size={14} className="text-liver" />
                  <span>
                    Volume:{" "}
                    <span className="underline">
                      {product.quantitySold} Unit
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <Target size={14} className="text-weldon" />
                  <span>
                    Target:{" "}
                    <span className="underline">
                      {product.targetProduction} Unit
                    </span>
                  </span>
                </>
              )}
            </div>
            <span className="text-[10px] font-black bg-liver text-white px-2 py-0.5 transform -rotate-2">
              #SAVED_DATA
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
