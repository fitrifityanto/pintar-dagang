// app/(main)/layout.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Kita pindahkan class pb-24 md:pb-0 ke sini agar beranda tidak ikut kena padding
    <div className="pb-24 md:pb-0">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
