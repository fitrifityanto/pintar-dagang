import { Product } from "@/types";
import ProductList from "./ProductList";

interface ProductListSectionProps {
  products: Product[];
  onDelete: (id: string) => void;
}

export default function ProductListSection({
  products,
  onDelete,
}: ProductListSectionProps) {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-black uppercase tracking-tight inline-block relative italic">
        2. Daftar Produk
        <div className="absolute bottom-0 left-0 w-full h-4 bg-weldon/40 -z-10" />
      </h2>
      <div className="animate-in fade-in slide-in-from-right-4 duration-500">
        <ProductList products={products} onDelete={onDelete} />
      </div>
    </section>
  );
}
