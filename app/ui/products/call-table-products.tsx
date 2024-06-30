'use client';

import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import RemoveBtn from '@/app/ui/components/remove-btn';

import type { Products, Product } from '@/app/ui/products/types';

async function fetchProducts() {
  const res = await axios.get<Products>('http://localhost:3000/api/products')
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return res.data;
}

export default function CallTableProducts() {
  const [products, setProducts] = useState<Products>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const handleProductRemove = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className='flex flex-col m-5'>
      <div className="flex justify-end w-full m-5">
        <Link href='products/create/' id="add-product" className='inline-flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'>
          Añadir
        </Link>
      </div>
      <div className="w-full rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Description</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Price</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Created At</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Updated At</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {products.map((product: Product) => (
              <tr className="hover:bg-gray-50" key={product.id}>
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">{product.name}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{new Date(product.createdAt).toLocaleString()}</td>
                <td className="px-6 py-4">{new Date(product.updatedAt).toLocaleString()}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <RemoveBtn id={product.id} onRemove={handleProductRemove}/>
                    <Link href={`products/edit/${product.id}`} className="edit">
                      Editar
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
