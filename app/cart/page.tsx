"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import useCartStore from "@/store/cart";
import Link from "next/link";
import { useEffect } from "react";

const CartPage = () => {
  const { cartItems } = useCartStore();

  useEffect(() => {
    cartItems.forEach((item) => {
      // item.
    });
  }, [cartItems]);

  if (cartItems && cartItems.length < 1) {
    return (
      <div className="flex h-72 flex-col items-center justify-center">
        <h2 className="mb-5 mt-10 text-3xl font-bold">Cart is Empty</h2>
        <Link href="/">
          <Button>Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto flex flex-col-reverse items-center gap-2 md:w-4/5 md:select-none md:flex-row md:items-start md:justify-between">
      <div className="my-4 grid md:grid-cols-3">
        {cartItems?.map((item) => <Card key={item.id} product={item} />)}
      </div>

      <div className="mt-6 w-72 flex-none rounded-md p-4 text-center shadow-lg md:sticky md:top-4">
        total items in cart {cartItems.length}
      </div>
    </div>
  );
};

export default CartPage;
