"use client";
import useCartStore from "@/store/cart";
import { MockProductType } from "@/types/ProductType";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import Button from "./Button";
import CardPrice from "./CardPrice";

const Card = (props: { product: MockProductType }) => {
  const product = props.product;

  const {
    addItemToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
    cartItems,
  } = useCartStore();

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

  function HandleDeleteItem() {
    removeItemFromCart(product.id);
    toast.success("Removed the product from cart");
  }

  return (
    <div className="m-4 overflow-hidden rounded bg-stone-100 shadow-lg">
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
      {!cartItems.find((item) => item.id === product.id)?.quantity && (
        <div className="flex justify-end pb-4 pr-2">
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      )}
      {cartItems.find((item) => item.id === product.id)?.quantity && (
        <div>
          <div className="flex items-center justify-end gap-4 px-2 pb-4 align-middle">
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
        </div>
      )}
    </div>
  );
};

export default Card;
