// components/ProfitLossMode.tsx
"use client";
import { useState } from "react";
import { calculateProfitLoss, formatIDR } from "@/lib/calculations";
import { Product, ProfitLossProduct } from "@/types";
import { Wand2, Rocket, TrendingUp, TrendingDown, Save } from "lucide-react";

type CalculationResult = Pick<
  ProfitLossProduct,
  "totalCost" | "totalRevenue" | "profit" | "margin"
>;

export default function ProfitLossMode({
  onSave,
}: {
  onSave: (p: Product) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    var: 0,
    oper: 0,
    price: 0,
    qty: 0,
  });
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Fungsi untuk mengisi data dummy jualan riil dan untung
  const handleFillDummy = () => {
    setForm({
      name: "ES TEH KAMPUL JUMBO",
      var: 2000, // Modal bahan per cup (teh, gula, cup, sedotan)
      oper: 25000, // Total pengeluaran ekstra (bensin, es balok)
      price: 5000, // Harga jual per cup
      qty: 120, // Laku 120 cup
    });
    setResult(null);
  };

  const handleCalculate = () => {
    const res = calculateProfitLoss({
      variableCost: form.var,
      operationalCost: form.oper,
      sellingPrice: form.price,
      quantitySold: form.qty,
    });
    setResult(res);
  };

  const handleSave = () => {
    if (!result || !form.name) return;
    onSave({
      id: Date.now().toString(),
      name: form.name,
      mode: "profit-loss",
      createdAt: Date.now(),
      variableCost: form.var,
      operationalCost: form.oper,
      sellingPrice: form.price,
      quantitySold: form.qty,
      ...result,
    });
    setForm({ name: "", var: 0, oper: 0, price: 0, qty: 0 });
    setResult(null);
  };

  const inputStyle = `
  w-full p-4 bg-pale-silver border-4 border-outer-space 
  font-black text-outer-space placeholder:text-outer-space/40
  focus:bg-white focus:outline-none focus:ring-0 
  transition-all text-lg
`;

  const helperStyle =
    "text-[10px] font-bold text-outer-space/70 leading-tight mt-1 inline-block";

  return (
    <div className="bg-buff border-4 border-outer-space p-6 shadow-[10px_10px_0px_0px_var(--color-outer-space)] relative mt-4">
      {/* Tombol Data Contoh */}
      <button
        onClick={handleFillDummy}
        className="absolute -top-4 -right-4 md:-top-5 md:-right-5 z-10 bg-white border-4 border-outer-space px-3 py-2 text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-[4px_4px_0px_0px_var(--color-liver)] hover:bg-liver hover:text-white hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
      >
        <Wand2 size={14} className="text-saffron group-hover:text-white" />
        Isi Data Contoh
      </button>

      <div className="flex flex-col gap-6 mt-4">
        {/* 1. Nama Produk */}
        <div className="space-y-1">
          <label className="font-black uppercase text-xs tracking-widest text-liver">
            Nama Produk / Catatan
          </label>
          <input
            placeholder="CONTOH: BAKMI GORENG (MINGGU 1)"
            className={inputStyle}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <span className={helperStyle}>
            *Beri nama produk atau keterangan waktu jualan (harian/mingguan).
          </span>
        </div>

        {/* 2. Grid Input Angka */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="font-black uppercase text-xs tracking-widest text-liver">
              Biaya Modal / Unit
            </label>
            <input
              type="number"
              placeholder="0"
              className={inputStyle}
              value={form.var || ""}
              onChange={(e) =>
                setForm({ ...form, var: Number(e.target.value) })
              }
            />
            <span className={helperStyle}>
              *Modal per 1 porsi (Bahan makanan, thinwall, plastik, sendok).
            </span>
          </div>
          <div className="space-y-1">
            <label className="font-black uppercase text-xs tracking-widest text-liver">
              Total Operasional Ekstra
            </label>
            <input
              type="number"
              placeholder="0"
              className={inputStyle}
              value={form.oper || ""}
              onChange={(e) =>
                setForm({ ...form, oper: Number(e.target.value) })
              }
            />
            <span className={helperStyle}>
              *Pengeluaran lumsump (Gas LPG, uang bensin, parkir, es batu
              balok).
            </span>
          </div>
          <div className="space-y-1">
            <label className="font-black uppercase text-xs tracking-widest text-liver">
              Harga Jual / Unit
            </label>
            <input
              type="number"
              placeholder="0"
              className={inputStyle}
              value={form.price || ""}
              onChange={(e) =>
                setForm({ ...form, price: Number(e.target.value) })
              }
            />
            <span className={helperStyle}>
              *Harga jual ke pelanggan untuk 1 porsi/produk.
            </span>
          </div>
          <div className="space-y-1">
            <label className="font-black uppercase text-xs tracking-widest text-liver">
              Total Laku (Terjual)
            </label>
            <input
              type="number"
              placeholder="0"
              className={inputStyle}
              value={form.qty || ""}
              onChange={(e) =>
                setForm({ ...form, qty: Number(e.target.value) })
              }
            />
            <span className={helperStyle}>
              *Berapa porsi yang laku dalam periode jualan ini.
            </span>
          </div>
        </div>

        {/* 3. Tombol Hitung */}
        <button
          onClick={handleCalculate}
          className="mt-4 w-full bg-outer-space text-saffron font-black py-5 border-4 border-outer-space flex justify-center items-center gap-3
                     hover:bg-liver hover:text-white transition-all uppercase tracking-[0.3em] text-xl
                     shadow-[4px_4px_0px_0px_var(--color-saffron)] active:translate-y-1 active:shadow-none"
        >
          <Rocket size={24} /> HITUNG SEKARANG
        </button>
      </div>

      {result && (
        <div className="mt-10 bg-pale-silver border-4 border-outer-space shadow-[8px_8px_0px_0px_var(--color-outer-space)] overflow-hidden animate-in fade-in slide-in-from-top-4">
          <div className="bg-outer-space text-saffron p-3 text-center font-black uppercase tracking-[0.2em] text-sm">
            LAPORAN KALKULASI LABA/RUGI
          </div>

          <div className="p-6 space-y-8">
            <div className="bg-white/50 border-2 border-outer-space border-dashed p-4 relative">
              <span className="absolute -top-3 left-4 bg-outer-space text-white px-2 py-0.5 text-[10px] font-black uppercase">
                Ringkasan Arus Kas
              </span>
              <div className="font-bold text-sm space-y-4">
                {/* Detail Modal */}
                <div className="space-y-1">
                  <div className="flex justify-between items-end border-b border-outer-space/10 pb-1">
                    <span className="text-outer-space/60 uppercase text-[10px] font-black">
                      Total Modal (HPP):
                    </span>
                    <span className="font-black text-lg">
                      {formatIDR(result.totalCost)}
                    </span>
                  </div>
                  <p className="text-[10px] text-liver italic font-bold">
                    Perhitungan: ({formatIDR(form.var)} × {form.qty} unit) +{" "}
                    {formatIDR(form.oper)}
                  </p>
                </div>

                {/* Detail Pendapatan */}
                <div className="space-y-1">
                  <div className="flex justify-between items-end border-b border-outer-space/10 pb-1">
                    <span className="text-outer-space/60 uppercase text-[10px] font-black">
                      Total Pendapatan:
                    </span>
                    <span className="font-black text-lg">
                      {formatIDR(result.totalRevenue)}
                    </span>
                  </div>
                  <p className="text-[10px] text-weldon italic font-bold">
                    Perhitungan: {formatIDR(form.price)} × {form.qty} unit
                  </p>
                </div>
              </div>
            </div>

            {/* Laba/Rugi Box */}
            <div className="space-y-3">
              <h4 className="font-black text-xs uppercase tracking-tighter text-liver flex items-center gap-2">
                {result.profit >= 0 ? (
                  <>
                    <TrendingUp size={16} className="text-saffron" /> KEUNTUNGAN
                    BERSIH:
                  </>
                ) : (
                  <>
                    <TrendingDown size={16} /> KERUGIAN BERSIH:
                  </>
                )}
              </h4>
              <div
                className={`border-4 border-outer-space p-6 shadow-[6px_6px_0px_0px_var(--color-outer-space)] text-center transition-colors
            ${result.profit >= 0 ? "bg-saffron" : "bg-liver text-white"}`}
              >
                <p className="font-black text-4xl tracking-tighter italic uppercase">
                  {result.profit >= 0 ? "UNTUNG " : "RUGI "}
                  {formatIDR(Math.abs(result.profit))}
                </p>
                <div
                  className={`mt-2 inline-block px-3 py-1 text-[10px] font-black uppercase italic border-2 border-current`}
                >
                  Profit Margin: {result.margin.toFixed(2)}%
                </div>
              </div>
            </div>

            {/* Tombol Simpan */}
            <button
              onClick={handleSave}
              className="w-full bg-weldon text-white border-4 border-outer-space font-black py-4 shadow-[4px_4px_0px_0px_var(--color-outer-space)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2"
            >
              <Save size={18} /> SIMPAN DATA TRANSAKSI
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
