"use client";

import { useState, useEffect, useRef } from "react";
import { ShoppingBag, Search, Menu, Heart, X } from "lucide-react";
import Link from "next/link";
import useFavoritesStore from "@/store/useFavoritesStore";
import Image from "next/image";
import useCartStore from "@/store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { favorites } = useFavoritesStore();
  const { cart } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar principal */}
      <motion.nav
        className={`fixed top-5 z-50 left-8 right-8 ${
          isMenuOpen ? "rounded-t-3xl" : "rounded-3xl"
        } md:rounded-full bg-white backdrop-blur-xl border border-black/10 px-6 md:px-8 py-3 transition-all max-w-[1376px] mx-auto shadow-lg`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logos/logo_horizontal.png"
              alt="Vanitix Logo"
              width={100}
              height={33}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Menú de navegación */}
          <div className="hidden md:flex items-center gap-8 text-[14px]">
            {["Aretes", "Cadenas", "Pulseras"].map((item) => (
              <a
                key={item}
                href="#"
                className="py-3 text-black whitespace-nowrap cursor-pointer hover:scale-105 hover:transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Iconos de acción */}
          <div className="flex items-center md:gap-4">
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
            <button
              className="p-2 rounded-full md:hidden hover:bg-black/10 transition-all duration-200"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fondo semitransparente cuando el menú está abierto */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[78px] left-8 right-8 bg-white shadow-lg border border-black/10 rounded-b-3xl p-6 flex flex-col items-center gap-4 z-50 md:hidden"
          >
            {["Aretes", "Cadenas", "Pulseras"].map((item) => (
              <a
                key={item}
                href="#"
                className="py-3 text-black whitespace-nowrap cursor-pointer hover:scale-105 hover:transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
