import { create } from "zustand";
import { BasketItemType } from "../../Types"; // Adjust the path as necessary

interface BasketState {
  basket: BasketItemType[];
  totalPrice: number;
  addToBasket: (item: BasketItemType) => void;
  increaseQuantity: (variantId: string) => void;
  decreaseQuantity: (variantId: string) => void;
  calculateTotalPrice: () => void;
}

export const useBasketStore = create<BasketState>((set) => ({
  basket: JSON.parse(localStorage.getItem("basket") || "[]"),
  totalPrice: 0,
  addToBasket: (item: BasketItemType) => {
    set((state) => {
      const existingItemIndex = state.basket.findIndex(
        (basketItem) => basketItem.variant.id === item.variant.id
      );
      const updatedBasket = [...state.basket];
      if (existingItemIndex !== -1) {
        updatedBasket[existingItemIndex].quantity += item.quantity;
      } else {
        updatedBasket.push(item);
      }
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return { basket: updatedBasket };
    });
  },
  increaseQuantity: (variantId: string) => {
    set((state) => {
      const updatedBasket = state.basket.map((item) => {
        if (item.variant.id === variantId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return { basket: updatedBasket };
    });
  },
  decreaseQuantity: (variantId: string) => {
    set((state) => {
      const updatedBasket = state.basket
        .map((item) => {
          if (item.variant.id === variantId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return { basket: updatedBasket };
    });
  },
  calculateTotalPrice: () => {
    set((state) => {
      const total = state.basket.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { totalPrice: total };
    });
  },
}));
