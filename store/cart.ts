import { CartProductType, MockProductType } from "@/types/ProductType";
import { create } from "zustand";

type CartState = {
  // state
  cartItems: CartProductType[];
  // actions
  addItemToCart: (item: MockProductType) => void;
};

const useCartStore = create<CartState>()((set, get) => ({
  cartItems: [],
  addItemToCart: (item) => {
    const itemExist = get().cartItems.find(
      (cartItem) => cartItem.id === item.id,
    );
    if (itemExist) {
      itemExist.quantity++;
      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },
}));
