"use client";
import useCartStore from "@/store/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartCount = () => {
  const { totalCartQuantity } = useCartStore();

  return (
    <Link
      className="flex items-center justify-center px-2 align-middle text-2xl font-semibold md:text-xl"
      href="/cart"
    >
      <ShoppingCart /> <p className="pl-1">({totalCartQuantity})</p>
    </Link>
  );
};

export default CartCount;
