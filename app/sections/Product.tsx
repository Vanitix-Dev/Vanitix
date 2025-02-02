"use client";

import { useState, useEffect, useCallback } from "react";
import ProductCard from "@/app/components/ProductCard";
import ProductModal from "@/app/components/ProductModal";
import useCartStore from "@/store/useCartStore";

const products = [
  { id: 1, image: "/images/product.jpg", name: "Producto 1", price: 29.99 },
  { id: 2, image: "/images/product.jpg", name: "Producto 2", price: 49.99 },
  { id: 3, image: "/images/product.jpg", name: "Producto 3", price: 19.99 },
  { id: 4, image: "/images/product.jpg", name: "Producto 4", price: 39.99 },
];

const ProductList = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => setSelectedProduct(product);
  const handleClose = useCallback(() => setSelectedProduct(null), []);

  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return (
    <section className="bg-white px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-semibold text-gray-900">Nuevas Llegadas</h2>
          <p className="text-gray-700">Explora las últimas incorporaciones a nuestra colección de moda.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={handleProductClick} />
          ))}
        </div>
      </div>
      <ProductModal product={selectedProduct} onClose={handleClose} addToCart={addToCart} />
    </section>
  );
};

export default ProductList;
