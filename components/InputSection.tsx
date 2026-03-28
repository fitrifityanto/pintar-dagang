import ProfitLossMode from "./ProfitLossMode";
import PricingMode from "./PricingMode";
import { Product } from "@/types";

interface InputSectionProps {
  activeMode: "profit-loss" | "pricing";
  onSave: (product: Product) => void;
}

export default function InputSection({
  activeMode,
  onSave,
}: InputSectionProps) {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-black uppercase tracking-tight inline-block relative italic">
        1. Input Data
        <div className="absolute bottom-0 left-0 w-full h-4 bg-saffron/40 -z-10" />
      </h2>
      <div className="animate-in fade-in slide-in-from-left-4 duration-500">
        {activeMode === "profit-loss" ? (
          <ProfitLossMode onSave={onSave} />
        ) : (
          <PricingMode onSave={onSave} />
        )}
      </div>
    </section>
  );
}
