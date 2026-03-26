// components/PricingMode.tsx
"use client";
import { useState } from "react";
import { calculatePricing, formatIDR } from "@/lib/calculations";
import { Product } from "@/types";

type Props = {
  onSave: (p: Product) => void;
};

export default function PricingMode({ onSave }: Props) {
  const [form, setForm] = useState({
    name: "",
    raw: 0,
    pkg: 0,
    fixed: 0,
    target: 0,
    margin: 0,
  });
  const [result, setResult] = useState<{
    hpp: number;
    recommendedPrice: number;
  } | null>(null);

  const handleCalculate = () => {
    const res = calculatePricing({
      rawMaterial: form.raw,
      packaging: form.pkg,
      monthlyFixedCost: form.fixed,
      targetProduction: form.target,
      targetMargin: form.margin,
    });
    setResult(res);
  };

  const handleSave = () => {
    if (!result || !form.name) return;
    onSave({
      id: Date.now().toString(),
      name: form.name,
      mode: "pricing",
      createdAt: Date.now(),
      // Kirim detail data mentah agar bisa ditampilkan di list
      rawMaterial: form.raw,
      packaging: form.pkg,
      monthlyFixedCost: form.fixed,
      targetProduction: form.target,
      targetMargin: form.margin, // Ini untuk "Min. Margin"
      hpp: result.hpp,
      recommendedPrice: result.recommendedPrice,
    });
    // Reset Form
    setForm({ name: "", raw: 0, pkg: 0, fixed: 0, target: 0, margin: 0 });
    setResult(null);
  };

  const inputStyle = `
  w-full p-4 bg-pale-silver border-4 border-outer-space 
  font-black text-outer-space placeholder:text-outer-space/40 
  focus:bg-white focus:outline-none focus:ring-0 
  transition-all text-lg mb-2
`;

  return (
    <div className="bg-weldon border-4 border-outer-space p-6 shadow-[10px_10px_0px_0px_var(--color-outer-space)] text-outer-space">
      <div className="flex flex-col gap-5">
        {/* Nama Produk */}
        <div className="space-y-1">
          <label className="font-black uppercase text-xs tracking-widest text-white">
            Nama Produk
          </label>
          <input
            placeholder="CONTOH: KRIPIK PEDAS"
            className={inputStyle}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        {/* Grid 1: Variable Costs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="font-black uppercase text-xs tracking-widest text-white">
              Bahan Baku / Unit
            </label>
            <input
              type="number"
              className={inputStyle}
              value={form.raw || ""}
              onChange={(e) =>
                setForm({ ...form, raw: Number(e.target.value) })
              }
            />
          </div>
          <div className="space-y-1">
            <label className="font-black uppercase text-xs tracking-widest text-white">
              Kemasan / Unit
            </label>
            <input
              type="number"
              className={inputStyle}
              value={form.pkg || ""}
              onChange={(e) =>
                setForm({ ...form, pkg: Number(e.target.value) })
              }
            />
          </div>
        </div>

        {/* Grid 2: Fixed Costs & Target */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="font-black uppercase text-xs tracking-widest text-white">
              Biaya Tetap / Bulan
            </label>
            <input
              type="number"
              className={inputStyle}
              value={form.fixed || ""}
              onChange={(e) =>
                setForm({ ...form, fixed: Number(e.target.value) })
              }
            />
          </div>
          <div className="space-y-1">
            <label className="font-black uppercase text-xs tracking-widest text-white">
              Target Produksi
            </label>
            <input
              type="number"
              className={inputStyle}
              value={form.target || ""}
              onChange={(e) =>
                setForm({ ...form, target: Number(e.target.value) })
              }
            />
          </div>
        </div>

        {/* Target Margin */}
        <div className="space-y-1">
          <label className="font-black uppercase text-xs tracking-widest text-white">
            Target Margin Keuntungan (%)
          </label>
          <input
            type="number"
            className={inputStyle}
            value={form.margin || ""}
            onChange={(e) =>
              setForm({ ...form, margin: Number(e.target.value) })
            }
          />
        </div>

        <button
          onClick={handleCalculate}
          className="bg-saffron text-outer-space font-black py-5 border-4 border-outer-space 
                     hover:bg-buff transition-all uppercase tracking-[0.2em] text-xl mt-2
                     shadow-[6px_6px_0px_0px_var(--color-liver)] active:translate-y-1 active:shadow-none"
        >
          🎯 HITUNG HARGA IDEAL
        </button>
      </div>

      {result && (
        <div className="mt-10 bg-pale-silver border-4 border-outer-space shadow-[8px_8px_0px_0px_var(--color-outer-space)] overflow-hidden">
          {/* Header */}
          <div className="bg-liver text-white p-3 text-center font-black uppercase tracking-widest text-sm">
            STRATEGI PENETAPAN HARGA
          </div>

          <div className="p-6 space-y-8">
            {/* Breakdown HPP */}
            <div className="bg-white/50 border-2 border-outer-space border-dashed p-4 relative">
              <span className="absolute -top-3 left-4 bg-liver text-white px-2 py-0.5 text-[10px] font-black uppercase">
                Detail HPP
              </span>
              <div className="font-bold text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Modal Bahan & Kemasan:</span>
                  <span>{formatIDR(form.raw + form.pkg)}</span>
                </div>
                <div className="flex justify-between border-b border-outer-space/20 pb-2">
                  <span>Beban Tetap per Produk:</span>
                  <span>{formatIDR(form.fixed / form.target)}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-black uppercase">
                    Total HPP per Unit:
                  </span>
                  <span className="font-black text-xl text-liver">
                    {formatIDR(result.hpp)}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommended Price Box */}
            <div className="space-y-3">
              <h4 className="font-black text-xs uppercase tracking-tighter text-liver flex items-center gap-2">
                💰 REKOMENDASI HARGA JUAL (MIn. Margin {form.margin}%):
              </h4>
              <div className="bg-saffron border-4 border-outer-space p-6 shadow-[6px_6px_0px_0px_var(--color-liver)] text-center">
                <p className="font-black text-4xl tracking-tighter">
                  {formatIDR(result.recommendedPrice)}
                </p>
                <div className="mt-2 inline-block bg-outer-space text-white px-3 py-1 text-[10px] font-black uppercase italic">
                  Break-Even Point (BEP): {formatIDR(result.hpp)}
                </div>
              </div>
            </div>

            {/* Button Simpan */}
            <button
              onClick={handleSave}
              className="w-full bg-buff border-4 border-outer-space font-black py-4 shadow-[4px_4px_0px_0px_var(--color-outer-space)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-widest text-sm"
            >
              💾 SIMPAN REKOMENDASI INI
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
