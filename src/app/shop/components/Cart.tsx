'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Importiere Link für Navigation

const Cart = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Lade den Warenkorb aus dem localStorage, falls vorhanden
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // Entfernt das Produkt aus dem Array
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Speichern in localStorage
  };

  const calculateTotal = () => {
    return cart.reduce((total, item: any) => total + item.price * item.quantity, 0);
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
              <div key={index} className="border-b py-4 mb-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition-colors"
                  >
                    Entfernen
                  </button>
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

            {/* Zur Kasse Button */}
            <div className="flex justify-center mt-4">
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
