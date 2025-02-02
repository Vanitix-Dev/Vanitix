"use client";

import useFavoritesStore from "@/store/useFavoritesStore";
import Button from "@/app/components/ui/ButtonPrimary";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const addToFavorites = useFavoritesStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoritesStore((state) => state.removeFromFavorites);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    const item = favorites.find((item: { id: number; }) => item.id === id);
    if (item) {
      removeFromFavorites(item);
      addToFavorites({ ...item, quantity });
    }
  }, [favorites, addToFavorites, removeFromFavorites]);

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Tus favoritos están vacíos</h1>
        <p className="text-gray-600 mb-8">¿Por qué no agregas algunos productos a tus favoritos?</p>
        <Link href="/">
          <Button>Continuar explorando</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-3xl font-display font-bold mb-8">Tus Favoritos</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {favorites.map((item: { id: number; image: string; name: string; price: number; quantity: number; }) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium text-lg">{item.name}</h3>
                <p className="text-primary font-semibold">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:text-red-600"
                onClick={() => removeFromFavorites(item)}
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;