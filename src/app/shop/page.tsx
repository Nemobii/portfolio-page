'use client';

import Layout from '../components/Layout'; 
import { products } from './utils/products';
import ProductCard from './components/ProductCard'; 
import Link from 'next/link'; 

const Shop = () => {
  return (
    <Layout>
      <div className="bg-grey-light p-6 flex justify-center items-center">
        <div className="w-full max-w-7xl bg-white p-6 rounded-lg shadow-lg">

          <div className="flex justify-center items-center mb-8">
            <h1 className="text-3xl font-bold">Shop</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/shop/cart"
              className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Zum Warenkorb
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
