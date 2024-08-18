import useCartStore from "@/store/cart";
import { MockProductType } from "@/types/ProductType";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import Button from "./Button";
import CardPrice from "./CardPrice";

const CartProductCard = (props: { product: MockProductType }) => {
  const product = props.product;

  const { increaseQuantity, decreaseQuantity, removeItemFromCart, cartItems } =
    useCartStore();

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
    <div className="m-4 flex w-full overflow-hidden rounded bg-stone-100 shadow-lg">
      <Image
        className=""
        src={product.image}
        height={100}
        width={250}
        alt={product.description}
      />
      <div className="w-2/3 px-6 py-4">
        <div className="mb-2 text-xl font-bold">{product.name}</div>
        <p className="text-base text-gray-700">{product.name}</p>
        <CardPrice price={product.price} discount={product.discountPrice} />
      </div>
      <div className="flex w-1/3 flex-col justify-center gap-4">
        <div className="flex items-center justify-center">
          <Button onClick={HandleDecreaseQuantity}>
            <Minus />
          </Button>
          <div className="px-2">
            {cartItems.find((item) => item.id === product.id)?.quantity}
          </div>
          <Button onClick={HandleIncreaseQuantity}>
            <Plus />
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="flex rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            onClick={HandleDeleteItem}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
