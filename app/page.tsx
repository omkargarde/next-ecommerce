import Card from "@/components/Card";
import { mock_products } from "@/mock/products";

export default function Home() {
  const products = mock_products;
  return (
    <main className="flex items-center justify-center">
      <div className="my-4 grid md:w-4/5 md:grid-cols-3">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
