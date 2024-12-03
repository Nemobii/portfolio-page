'use client';

import { useState } from 'react';
import Link from 'next/link';


interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string; 
}


const Cart = ({ cart, setCart }: { cart: Product[], setCart: React.Dispatch<React.SetStateAction<Product[]>> }) => {
  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) return; 

    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart); 
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart); 
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-grey-light p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Warenkorb</h1>
        {cart.length === 0 ? (
          <p className="text-center text-lg">Dein Warenkorb ist leer.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={item.id} className="border-b py-4 mb-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{item.name}</h2>

                  {item.quantity > 1 ? (
                    <div className="flex items-center">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                        className="w-16 p-2 border border-gray-300 rounded mr-2"
                        min="1"
                      />
                      <button
                        onClick={() => removeFromCart(index)}
                        className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition-colors"
                      >
                        Entfernen
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition-colors"
                    >
                      Entfernen
                    </button>
                  )}
                </div>
                <p className="mt-2">Menge: {item.quantity}</p>
                <p className="mt-2">Preis: CHF {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">
                Gesamtsumme: CHF {calculateTotal().toFixed(2)}
              </p>
            </div>

            <div className="flex justify-between mt-4">
              <Link
                href="/shop"
                className="bg-gray-500 text-white py-1 px-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Zurück zum Shop
              </Link>
              <Link
                href="/shop/checkout"
                className="bg-gray-400 text-white py-1 px-4 rounded-lg hover:bg-gray-500 transition-colors"
              >
                Zur Kasse
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
