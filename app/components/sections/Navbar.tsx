"use client";

import { ShoppingBag, Search, Menu, Heart } from "lucide-react";
import Link from "next/link";
import useFavoritesStore from "@/store/useFavoritesStore";
import useCartStore from "@/store/useCartStore";

const Navbar = () => {
  const { favorites } = useFavoritesStore();
  const { cart } = useCartStore();

  return (
    <nav className="fixed top-5 z-40 left-8 right-8 rounded-full bg-white/80 backdrop-blur-xl border border-black/10 px-6 md:px-8 py-3 transition-all max-w-[1376px] mx-auto shadow-lg">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display font-bold text-primary">
          Vanitix
        </Link>

        {/* Menú de navegación */}
        <div className="hidden md:flex items-center gap-8 text-[14px]">
          <a href="#" className="py-3 text-black whitespace-nowrap cursor-pointer hover:scale-105 hover:transition-all duration-200">
            Aretes
          </a>
          <a href="#" className="py-3 text-black whitespace-nowrap cursor-pointer hover:scale-105 hover:transition-all duration-200">
            Cadenas
          </a>
          <a href="#" className="py-3 text-black whitespace-nowrap cursor-pointer hover:scale-105 hover:transition-all duration-200">
            Pulseras
          </a>
        </div>

        {/* Iconos de acción */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-black/10 transition-all duration-200">
            <Search className="h-5 w-5" />
          </button>

          <Link href="/favorites">
            <button className="p-2 rounded-full hover:bg-black/10 relative transition-all duration-200">
              <Heart className="h-5 w-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
          </Link>

          <Link href="/cart">
            <button className="p-2 rounded-full hover:bg-black/10 relative transition-all duration-200">
              <ShoppingBag className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>

          {/* Menú hamburguesa en móvil */}
          <button className="p-2 rounded-full md:hidden hover:bg-black/10 transition-all duration-200">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
