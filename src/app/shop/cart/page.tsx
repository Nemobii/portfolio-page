'use client';

import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Cart from '../components/Cart';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  return (
    <Layout>
      <div className="p-6">
        <Cart cart={cart} setCart={setCart} />
      </div>
    </Layout>
  );
};

export default CartPage;
