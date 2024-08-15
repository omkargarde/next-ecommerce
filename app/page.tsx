import Card from "@/components/Card";
import { mock_products } from "@/mock/products";
import Image from "next/image";

export default function Home() {
  const products = mock_products;
  return (
    <main className="flex items-center justify-center">
      <div className="my-4 grid md:w-3/5 md:grid-cols-3">
        {products.map((product) => {
          return (
            <ul key={product.id}>
              <Card product={product} />
            </ul>
          );
        })}
      </div>
    </main>
  );
}
