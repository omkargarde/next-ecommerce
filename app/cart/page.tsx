"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { couponCode } from "@/mock/products";
import useCartStore from "@/store/cart";
import { FormatMoney } from "@/utils/FormatMoney";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartPage = () => {
  const { cartItems, totalCartQuantity } = useCartStore();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      let price = 0;

      if (!!item.discountPrice) {
        price = item.price - item.price * (item.discountPrice / 100);
      } else {
        price = item.price;
      }
      totalPrice += price * item.quantity;
    });
    setCartTotal(totalPrice);
  }, [cartItems]);

  function handleCoupon(formData: any) {
    const data = formData.get("coupon");
    if (data === couponCode) {
      setCartTotal(cartTotal - cartTotal * (10 / 100));
    } else {
      toast.error("Coupon invalid");
    }
  }

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

      <div className="mt-6 w-80 flex-none rounded-md p-4 text-start shadow-lg md:sticky md:top-4">
        <p>number items in cart is {totalCartQuantity}</p>
        <p>your total is {FormatMoney(cartTotal)}</p>
        <p>
          <form className="w-full max-w-sm" action={handleCoupon}>
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
                type="text"
                placeholder="Enter your coupon code"
                aria-label="Full name"
                name="coupon"
              />
              <button className="hover:bg-blue-70 rounded-full bg-blue-500 px-4 py-2 font-bold text-white">
                apply
              </button>
            </div>
          </form>
        </p>
        <p className="pt-2">
          <Link href="/checkout">
            <Button>Checkout</Button>
            <p>coupon code is 10KaDum</p>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CartPage;
