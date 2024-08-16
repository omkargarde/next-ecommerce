"use client";
import useCartStore from "@/store/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartCount = () => {
  const { totalCartQuantity } = useCartStore();

  return (
    <Link
      className="flex items-center justify-center px-2 align-middle font-semibold"
      href="/cart"
    >
      <ShoppingCart /> <p className="pl-1">({totalCartQuantity})</p>
    </Link>
  );
};

export default CartCount;
