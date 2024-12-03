'use client';

import { useState } from 'react';
import Image from 'next/image';

const ProductCard = ({ product }: any) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, { ...product, quantity }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} wurde dem Warenkorb hinzugefügt!`);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col items-center">
      <Image
        src={product.image} 
        alt={product.name} 
        width={300}
        height={300} 
        className="object-cover mb-4"
      />
      <h2 className="text-xl font-semibold text-center">{product.name}</h2>
      <p className="text-lg font-bold">CHF {product.price.toFixed(2)}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="mt-2 p-2 border rounded w-20"
      />
      <button
        onClick={addToCart}
        className="bg-gray-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-gray-600 transition-colors"
      >
        Hinzufügen
      </button>
    </div>
  );
};

export default ProductCard;
