// components/ModeSelector.tsx
type Props = {
  active: "profit-loss" | "pricing";
  onChange: (mode: "profit-loss" | "pricing") => void;
};

export default function ModeSelector({ active, onChange }: Props) {
  // Base style dengan penambahan cursor-pointer dan transition properties
  const baseStyle = `
    flex-1 border-4 border-outer-space p-3
    transition-all duration-200 ease-in-out 
    font-black uppercase tracking-tight 
    cursor-pointer select-none
    flex flex-col items-center justify-center gap-2
  `;

  return (
    <div className="grid grid-cols-2 gap-3 mb-8 sm:gap-6">
      {/* Tombol Laba / Rugi */}
      <button
        onClick={() => onChange("profit-loss")}
        className={`${baseStyle} ${
          active === "profit-loss"
            ? "bg-saffron translate-x-1 translate-y-1 shadow-none"
            : "bg-pale-silver hover:bg-buff hover:-translate-y-1 hover:-translate-x-1 shadow-[6px_6px_0px_0px_var(--color-outer-space)] active:translate-x-0 active:translate-y-0"
        }`}
      >
        <span className="text-xl">📈</span>
        <span className="text-xs sm:text-lg">LABA / RUGI</span>
        <span className="text-[10px] hidden sm:block opacity-60 uppercase">
          Analisis Keuangan
        </span>
      </button>

      {/* Tombol Atur Harga */}
      <button
        onClick={() => onChange("pricing")}
        className={`${baseStyle} ${
          active === "pricing"
            ? "bg-weldon text-white translate-x-1 translate-y-1 shadow-none"
            : "bg-pale-silver hover:bg-buff hover:-translate-y-1 hover:-translate-x-1 shadow-[6px_6px_0px_0px_var(--color-outer-space)] text-outer-space active:translate-x-0 active:translate-y-0"
        }`}
      >
        <span className="text-xl">🎯</span>
        <span className="text-xs sm:text-lg">ATUR HARGA</span>
        <span className="text-[10px] hidden sm:block opacity-60 uppercase">
          Strategi Jual
        </span>
      </button>
    </div>
  );
}
