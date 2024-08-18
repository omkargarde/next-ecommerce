"use client";
import useCartStore from "@/store/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartCount = () => {
  const { totalCartQuantity } = useCartStore();

  return (
    <Link
      className="flex items-center justify-center px-2 align-middle text-3xl font-semibold md:text-2xl"
      href="/cart"
    >
      <ShoppingCart size={30} /> <p className="pl-1">({totalCartQuantity})</p>
    </Link>
  );
};

export default CartCount;
