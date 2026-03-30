"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, Star, BookOpen, MessageCircle, Rocket } from "lucide-react";

export default function LandingNavigation() {
  const [activeSection, setActiveSection] = useState("hero");

  // Highlight menu yang sedang aktif saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "fitur", "cara-pakai", "faq"];
      const scrollY = window.scrollY;

      // Default ke hero jika ada di paling atas
      if (scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      sections.forEach((section) => {
        const element = document.getElementById(section);
        // Menggunakan offset agar highlight berubah sedikit sebelum mencapai section
        if (element && scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Pengecekan awal saat komponen dimuat
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data navigasi untuk anchor link
  const navItems = [
    { name: "Fitur", href: "#fitur", id: "fitur", icon: <Star size={20} /> },
    {
      name: "Panduan",
      href: "#cara-pakai",
      id: "cara-pakai",
      icon: <BookOpen size={20} />,
    },
    { name: "FAQ", href: "#faq", id: "faq", icon: <MessageCircle size={20} /> },
  ];

  return (
    <>
      {/* --- DESKTOP TOP NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-4 border-outer-space px-6 md:px-12 py-4 shadow-[0_4px_0_0_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="#hero" className="group flex items-center gap-3">
            <div className="relative w-8 h-8 md:w-10 md:h-10 transform -rotate-3 transition-all duration-300 group-hover:rotate-2">
              <img src="/logo.png" alt="Logo" className="object-contain" />
            </div>
            <span className="font-black text-xl md:text-2xl uppercase tracking-tighter text-outer-space hidden md:block">
              Pintar Dagang
            </span>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-black uppercase transition-colors hover:text-liver ${
                    activeSection === item.id
                      ? "text-saffron underline underline-offset-8 decoration-4"
                      : "text-outer-space"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:block h-8 w-1 bg-outer-space/10" />

            {/* Tombol Buka App khusus Desktop */}
            <Link
              href="/calculator"
              className="hidden md:block bg-saffron text-outer-space font-black py-2 px-6 border-4 border-outer-space hover:bg-liver hover:text-white transition-all uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_var(--color-outer-space)] active:translate-y-1 active:translate-x-1 active:shadow-none"
            >
              Buka App →
            </Link>
          </div>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM NAVBAR --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-4 border-outer-space px-6 py-3 shadow-[0_-4px_10px_0_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center">
          {/* Menu Home (Khusus Mobile) */}
          <Link
            href="#hero"
            className={`flex flex-col items-center gap-1 ${
              activeSection === "hero" ? "text-saffron" : "text-outer-space/60"
            }`}
          >
            <Home size={20} />
            <span className="text-[10px] font-black uppercase tracking-tighter">
              Home
            </span>
          </Link>

          {/* Mapping Menu Anchor */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 ${
                activeSection === item.id
                  ? "text-saffron"
                  : "text-outer-space/60"
              }`}
            >
              {item.icon}
              <span className="text-[10px] font-black uppercase tracking-tighter">
                {item.name}
              </span>
            </Link>
          ))}

          {/* Tombol Buka App (Khusus Mobile) */}
          <Link
            href="/calculator"
            className="flex flex-col items-center gap-1 text-liver"
          >
            <Rocket size={20} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-tighter">
              Buka App
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
