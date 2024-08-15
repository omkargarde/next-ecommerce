"use client";
import useCartStore from "@/store/cart";
import Link from "next/link";

const CartCount = () => {
  const { cartItems } = useCartStore();

  return (
    <Link className="px-2 font-semibold" href="/cart">
      cart ({cartItems.length})
    </Link>
  );
};

export default CartCount;
