"use client";
import Card from "@/components/Card";
import useCartStore from "@/store/cart";
import Link from "next/link";

const CartPage = () => {
  const { cartItems } = useCartStore();

  if (cartItems && cartItems.length < 1) {
    return (
      <div className="flex h-72 flex-col items-center justify-center">
        <h2 className="mb-5 mt-10 text-3xl font-bold">Cart is Empty</h2>
        <Link
          href="/shop"
          className="rounded-md bg-orange-500 px-6 py-2 text-white"
        >
          Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse items-center gap-10 md:select-none md:flex-row md:items-start md:justify-between">
      <div className="mb-10 flex flex-col flex-wrap gap-10 md:flex-row">
        {cartItems?.map((item) => <Card key={item.id} product={item} />)}
      </div>

      <div className="h-[300px] w-72 flex-none rounded-2xl bg-orange-500 text-white md:sticky md:top-28">
        {/* <OrderValue /> */}
        total items in cart {cartItems.length}
      </div>
    </div>
  );
};

export default CartPage;
