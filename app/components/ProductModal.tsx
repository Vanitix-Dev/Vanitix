"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  addToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white shadow-2xl w-full max-w-5xl relative flex max-h-[70vh] overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-gray-200 rounded-full p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-300 transition"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">{product.name}</h3>
              <p className="text-xl font-medium text-gray-900 mt-2">${product.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg shadow-lg transition"
            >
              <ShoppingCart className="h-5 w-5 mr-2" /> Añadir al carrito
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;