"use client";
import useCartStore from "@/store/cart";
import { MockProductType } from "@/types/ProductType";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import Button from "./Button";
import CardPrice from "./CardPrice";

const Card = (props: { product: MockProductType }) => {
  const product = props.product;

  const { addItemToCart, increaseQuantity, decreaseQuantity, cartItems } =
    useCartStore();
  const pathname = usePathname();

  function handleAddToCart(): void {
    addItemToCart(product);
    toast.success("Added to cart");
  }
  function HandleIncreaseQuantity() {
    increaseQuantity(product.id);
    toast.success("Increased the product's quantity");
  }
  function HandleDecreaseQuantity() {
    decreaseQuantity(product.id);
    toast.success("Decreased the product's quantity");
  }

  return (
    <div className="m-4 max-w-sm overflow-hidden rounded shadow-lg">
      <Image
        className="w-full"
        src={product.image}
        height={100}
        width={100}
        alt={product.description}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{product.name}</div>
        <p className="text-base text-gray-700">{product.name}</p>
        <CardPrice price={product.price} discount={product.discountPrice} />
      </div>
      {pathname !== "/cart" && (
        <div className="flex justify-end pb-4 pr-2">
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      )}
      {pathname === "/cart" && (
        <div className="flex items-center justify-center gap-4 px-2 pb-4">
          <Button onClick={HandleDecreaseQuantity}>
            <Minus />
          </Button>
          <div>
            {cartItems.find((item) => item.id === product.id)?.quantity}
          </div>
          <Button onClick={HandleIncreaseQuantity}>
            <Plus />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Card;
