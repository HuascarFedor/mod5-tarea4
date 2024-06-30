import axios from 'axios';
import type { Products, Product } from '@/app/ui/products/types';
import Link from 'next/link';

async function getData() {
  const res = await axios.get<Products>('http://localhost:3000/api/products') 
  if (!res) {
    throw new Error('Failed to fetch data')
  }
  return res.data
}

export default async function CallProducts() {
  const products:Products = await getData();
  return (
    products.map((product:Product) => (
      <div className="bg-white rounded-lg border p-4" key={product.id}>
        <div className="px-1 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">
            {product.description}
          </p>
        </div>
        <div className="px-1 py-4">
          <Link href={`/products/${product.id}`} className="detalles text-blue-500 hover:underline">Ver Detalles</Link>
        </div>
      </div>
    ))
  );
}
