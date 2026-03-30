// app/(main)/layout.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pb-24 md:pb-0">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
