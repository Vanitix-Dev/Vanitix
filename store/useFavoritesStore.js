import { create } from 'zustand';

const useFavoritesStore = create((set) => ({
  favorites: [],
  addToFavorites: (item) => set((state) => ({ favorites: [...state.favorites, item] })),
  removeFromFavorites: (item) => set((state) => ({
    favorites: state.favorites.filter(favorite => favorite.id !== item.id)
  })),
}));

export default useFavoritesStore;