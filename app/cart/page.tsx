"use client";

import useCartStore from "@/store/useCartStore";
import Button from "@/app/components/ui/ButtonPrimary";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    const item = cart.find((item: { id: number; }) => item.id === id);
    if (item) {
      removeFromCart(item);
      addToCart({ ...item, quantity });
    }
  }, [cart, addToCart, removeFromCart]);

  const cartTotal = cart.reduce(
    (total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Tu carrito está vacío</h1>
        <p className="text-gray-600 mb-8">¿Por qué no agregas algunos productos?</p>
        <Link href="/">
          <Button>Continuar comprando</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-3xl font-display font-bold mb-8">Tu Carrito</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item: { id: number; image: string; name: string; price: number; quantity: number }) => (
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
                onClick={() => removeFromCart(item)}
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Resumen del pedido</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full">Proceder al pago</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;