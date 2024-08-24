// @ts-nocheck
import { CartProductType, MockProductType } from "@/types/ProductType";
import { totalmem } from "os";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
  // state
  cartItems: CartProductType[];
  totalCartQuantity: number;
  totalCartPrice: number;
  // actions
  addItemToCart: (item: MockProductType) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeItemFromCart: (productId: number) => void;
  clearCart: () => void;
  getCartTotal: () => void;
};
const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      totalCartQuantity: 0,
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
        set((state) => ({ totalCartQuantity: state.totalCartQuantity + 1 }));
      },

      increaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId,
        );

        if (itemExists) {
          itemExists.quantity++;
          set({ cartItems: [...get().cartItems] });
          set((state) => ({
            totalCartQuantity: state.totalCartQuantity + 1,
          }));
        }
      },

      decreaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId,
        );
        if (itemExists) {
          if (itemExists.quantity === 1) {
            const updatedCart = get().cartItems.filter(
              (cartItem) => cartItem.id !== productId,
            );
            set({ cartItems: updatedCart });
          } else {
            itemExists.quantity--;
            set({ cartItems: [...get().cartItems] });
          }

          set((state) => ({
            totalCartQuantity: state.totalCartQuantity - 1,
          }));
        }
      },

      removeItemFromCart: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId,
        );
        if (itemExists) {
          const updatedCartItems = get().cartItems.filter(
            (item) => item.id !== productId,
          );
          set((state) => ({
            totalCartQuantity: state.totalCartQuantity - itemExists.quantity,
          }));
          set({ cartItems: updatedCartItems });
        }
      },

      clearCart: () => {
        set({ cartItems: [] });
        set({ totalCartQuantity: 0 });
      },
      getCartTotal: () => {
        
      },
    }),
    { name: "CartStore" },
  ),
);
export default useCartStore;
