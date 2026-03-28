"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product } from "@/types";
import ProductListSection from "@/components/ProductListSection";

export default function ProductsPage() {
  const [products, setProducts] = useLocalStorage<Product[]>(
    "umkm-products",
    [],
  );

  const deleteProduct = (id: string) => {
    if (confirm("Hapus data ini?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-[#F1F1F1] text-black p-4 md:p-12">
      <div className="max-w-4xl mx-auto">
        <ProductListSection products={products} onDelete={deleteProduct} />
      </div>
    </main>
  );
}
