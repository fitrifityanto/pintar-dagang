// components/ModeSelector.tsx
type Props = {
  active: "profit-loss" | "pricing";
  onChange: (mode: "profit-loss" | "pricing") => void;
};

export default function ModeSelector({ active, onChange }: Props) {
  const btnClass = (mode: string) => `
    flex-1 py-3 px-4 font-black text-lg uppercase tracking-tight
    border-4 border-outer-space transition-all duration-100
    ${
      active === mode
        ? "bg-saffron translate-x-1 translate-y-1 shadow-none"
        : "bg-pale-silver hover:bg-buff shadow-[6px_6px_0px_0px_var(--color-outer-space)] active:translate-x-0.5 active:translate-y-0.5"
    }
  `;

  return (
    <div className="flex gap-4 mb-10">
      <button
        onClick={() => onChange("profit-loss")}
        className={btnClass("profit-loss")}
      >
        <span className="flex items-center justify-center gap-2">
          📈 <span className="hidden sm:inline">Laba / Rugi</span>
          <span className="sm:hidden">L/R</span>
        </span>
      </button>
      <button
        onClick={() => onChange("pricing")}
        className={btnClass("pricing")}
      >
        <span className="flex items-center justify-center gap-2">
          💰 <span className="hidden sm:inline">Penentu Harga</span>
          <span className="sm:hidden">Harga</span>
        </span>
      </button>
    </div>
  );
}
