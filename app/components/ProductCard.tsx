"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => (
  <motion.div
    className="relative cursor-pointer group overflow-hidden shadow-md transition-all duration-300 bg-white w-full h-60 md:80 lg:h-96"
    whileHover={{ scale: 1.05 }}
    onClick={() => onClick(product)}
  >
    <div className="absolute inset-0">
      <Image
        src={product.image}
        alt={product.name}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/60 to-transparent">
      <h3 className="text-sm font-bold text-white">{product.name}</h3>
      <p className="text-xs text-gray-300">${product.price.toFixed(2)}</p>
    </div>
  </motion.div>
);

export default ProductCard;