import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F1F1F1] text-black pb-24 md:pb-0">
        <Navigation />
        {children}

        <Footer />
      </body>
    </html>
  );
}
