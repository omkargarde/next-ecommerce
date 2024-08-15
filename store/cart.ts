import { CartProductType, MockProductType } from "@/types/ProductType";
import { create } from "zustand";

type CartState = {
  // state
  cartItems: CartProductType[];
  // actions
  addItemToCart: (item: MockProductType) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

const useCartStore = create<CartState>()((set, get) => ({
  cartItems: [],

  addItemToCart: (item) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === item.id,
    );
    if (itemExists) {
      itemExists.quantity++;
      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },

  increaseQuantity: (productId) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === productId,
    );

    if (itemExists) {
      itemExists.quantity++;
      set({ cartItems: [...get().cartItems] });
    }
  },

  decreaseQuantity: (productId) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === productId,
    );
    if (itemExists) {
      if (itemExists.quantity === 1) {
        const updatedCart = get().cartItems.filter(
          (cartItem) => cartItem.id === productId,
        );
        set({ cartItems: updatedCart });
      } else {
        itemExists.quantity--;
        set({ cartItems: [...get().cartItems] });
      }
    }
  },
}));

export default useCartStore;
