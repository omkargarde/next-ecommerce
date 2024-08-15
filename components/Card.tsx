"use client";
import { MockProductType } from "@/types/ProductType";
import Image from "next/image";
import Button from "./Button";
import CardPrice from "./CardPrice";

const Card = (props: { product: MockProductType }) => {
  const product = props.product;
  function handleAddToCart(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <li className="m-4 max-w-sm overflow-hidden rounded shadow-lg">
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
      <div className="flex justify-end pb-4 pr-2">
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </li>
  );
};

export default Card;
