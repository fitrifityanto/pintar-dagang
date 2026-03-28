export default function Footer() {
  return (
    <>
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
    </>
  );
}
