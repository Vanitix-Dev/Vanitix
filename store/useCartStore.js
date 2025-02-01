import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (item) => set((state) => ({
    cart: state.cart.filter(cartItem => cartItem.id !== item.id)
  })),
}));

export default useCartStore;