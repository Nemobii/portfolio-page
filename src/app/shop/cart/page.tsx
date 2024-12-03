'use client';

import Layout from '../../components/Layout'; // Layout-Komponente für Header und Footer
import { useState, useEffect } from 'react';
import Cart from '../components/Cart'; // Hier wird die Cart-Komponente importiert, die den Warenkorb anzeigt
import Link from 'next/link'; // Importiere Link für Navigation

const CartPage = () => {
  return (
    <Layout>
      <div className="p-6">
        <Cart /> 

        <div className="mt-6 text-center">
          <Link
            href="/shop"
            className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Zurück zum Shop
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
