"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, LayoutList, Home, LogOut } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "Hitung", href: "/calculator", icon: <Calculator size={20} /> },
    { name: "Daftar", href: "/products", icon: <LayoutList size={20} /> },
  ];

  return (
    <>
      {/* --- DESKTOP TOP NAVBAR --- */}
      <nav className="hidden md:block sticky top-0 z-[100] bg-white border-b-4 border-outer-space px-12 py-4 shadow-[0_4px_0_0_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative flex-shrink-0 transform -rotate-3 transition-all duration-300 group-hover:rotate-2 group-hover:scale-110">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-2xl uppercase tracking-tighter text-outer-space">
                Pintar Dagang
              </span>
              <span className="font-bold text-[9px] uppercase tracking-[0.2em] text-liver/60">
                Hitung Tepat, Bisnis Sehat
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-black uppercase transition-colors ${
                  pathname === item.href
                    ? "text-saffron underline underline-offset-8 decoration-4"
                    : "hover:text-liver"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-8 w-1 bg-outer-space/10" />
            <Link
              href="/"
              className="text-xs font-black uppercase underline underline-offset-4 hover:text-liver"
            >
              Keluar
            </Link>
          </div>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM NAVBAR --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-4 border-outer-space px-6 py-3 shadow-[0_-4px_10px_0_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 ${
                pathname === item.href ? "text-saffron" : "text-outer-space/60"
              }`}
            >
              {item.icon}
              <span className="text-[10px] font-black uppercase tracking-tighter">
                {item.name}
              </span>
            </Link>
          ))}
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-outer-space/60"
          >
            <LogOut size={20} />
            <span className="text-[10px] font-black uppercase tracking-tighter">
              Keluar
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
