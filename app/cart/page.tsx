"use client";
import Button from "@/components/Button";
import CartProductCard from "@/components/CartProductCart";
import { couponCode } from "@/mock/products";
import useCartStore from "@/store/cart";
import { CartProductType, MockProductType } from "@/types/ProductType";
import { FormatMoney } from "@/utils/FormatMoney";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartPage = () => {
  const { cartItems, totalCartQuantity, clearCart } = useCartStore();
  const [cartTotal, setCartTotal] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach((item: CartProductType) => {
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
    const data: string = formData.get("coupon");
    const coupon: string = data.toLowerCase();
    if (coupon === couponCode) {
      setCartTotal(cartTotal - cartTotal * (10 / 100));
      setDiscountAmount(cartTotal * (10 / 100));
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
    <div className="mx-auto flex w-full flex-col-reverse gap-2 lg:select-none lg:flex-row lg:items-start lg:justify-between lg:p-4">
      <div className="flex-1 gap-4">
        {cartItems?.map((item: MockProductType) => (
          <CartProductCard key={item.id} product={item} />
        ))}
      </div>

      <div className="m-4 flex-none rounded-md bg-stone-100 p-4 text-start shadow-lg md:top-4 lg:sticky lg:w-80">
        <p>number items in cart is {totalCartQuantity}</p>
        {discountAmount > 0 && (
          <p>discount applied is {FormatMoney(discountAmount)}</p>
        )}
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
              <button
                className="hover:bg-blue-70 rounded-full bg-blue-500 px-4 py-2 font-bold text-white"
                disabled={discountAmount > 0}
              >
                apply
              </button>
            </div>
          </form>
        </p>
        <p className="flex justify-between pt-2">
          <Link href="/checkout">
            <Button onClick={clearCart}>Checkout</Button>
          </Link>
          <button
            className="hover:bg-red-70 rounded-full bg-red-500 px-4 py-2 font-bold text-white"
            onClick={clearCart}
          >
            Clear cart
          </button>
        </p>
        <p className="text-stone-400">coupon code is 10off</p>
      </div>
    </div>
  );
};

export default CartPage;
