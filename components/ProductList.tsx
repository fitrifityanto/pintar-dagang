// components/ProductList.tsx
import { Product } from "@/types";
import {
  calculateProfitLoss,
  calculatePricing,
  formatIDR,
} from "@/lib/calculations";
import { PackageSearch, Calculator } from "lucide-react"; // Import Icon
import Link from "next/link"; // Import Link

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  // --- DESAIN EMPTY STATE (Neo-Brutalism) ---
  if (products.length === 0) {
    return (
      <div className="border-4 border-outer-space bg-pale-silver p-10 md:p-16 shadow-[8px_8px_0px_0px_var(--color-outer-space)] text-center flex flex-col items-center gap-6 mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
        {/* Visual Keren: Kotak Melayang */}
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

        {/* Teks Utama */}
        <div className="space-y-2 max-w-md mt-4">
          <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tighter text-outer-space transform -rotate-1 inline-block bg-white px-3 py-1 border-2 border-outer-space">
            Belum ada hitungan!
          </h3>
          <p className="font-bold text-sm md:text-base text-outer-space/70 leading-relaxed pt-2">
            Ups, sepertinya kamu belum menyimpan perhitungan apapun. Ayo hitung
            modal produk baru atau cek laba rugi jualanmu sekarang!
          </p>
        </div>

        {/* Tombol Ajakan Bertindak (CTA) */}
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

  // --- RENDERING DAFTAR PRODUK (Tetap Sama) ---
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {products.map((product) => {
        if (product.mode === "pricing") {
          const params = {
            rawMaterial: product.rawMaterial,
            packaging: product.packaging,
            monthlyFixedCost: product.monthlyFixedCost,
            targetProduction: product.targetProduction,
            targetMargin: product.targetMargin,
          };
          const { hpp, recommendedPrice } = calculatePricing(params);

          return (
            <div
              key={product.id}
              className="bg-weldon border-4 border-outer-space p-6 shadow-[8px_8px_0px_0px_var(--color-outer-space)] relative"
            >
              <div className="absolute top-4 right-4 bg-saffron text-outer-space px-2 py-0.5 text-[10px] font-black uppercase">
                Pricing
              </div>
              <h3 className="font-black text-xl uppercase tracking-tight text-white mb-4 pr-16 truncate">
                {product.name}
              </h3>
              <div className="space-y-1 text-white/90 text-sm">
                <div className="flex justify-between">
                  <span>HPP:</span>
                  <span className="font-bold">{formatIDR(hpp)}</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-1">
                  <span>Harga Jual:</span>
                  <span className="font-bold text-saffron">
                    {formatIDR(recommendedPrice)}
                  </span>
                </div>
              </div>
            </div>
          );
        } else if (product.mode === "profit-loss") {
          const params = {
            variableCost: product.variableCost,
            operationalCost: product.operationalCost,
            sellingPrice: product.sellingPrice,
            quantitySold: product.quantitySold,
          };
          const { profit, margin } = calculateProfitLoss(params);

          return (
            <div
              key={product.id}
              className="bg-buff border-4 border-outer-space p-6 shadow-[8px_8px_0px_0px_var(--color-outer-space)] relative"
            >
              <div className="absolute top-4 right-4 bg-liver text-white px-2 py-0.5 text-[10px] font-black uppercase">
                P/L Harian
              </div>
              <h3 className="font-black text-xl uppercase tracking-tight text-outer-space mb-4 pr-16 truncate">
                {product.name}
              </h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Qty Laku:</span>
                  <span className="font-bold">{product.quantitySold}</span>
                </div>
                <div
                  className={`flex justify-between border-t border-outer-space/20 pt-1 font-bold ${
                    profit >= 0 ? "text-weldon" : "text-liver"
                  }`}
                >
                  <span>{profit >= 0 ? "Untung:" : "Rugi:"}</span>
                  <span>
                    {formatIDR(profit)} ({margin.toFixed(1)}%)
                  </span>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
