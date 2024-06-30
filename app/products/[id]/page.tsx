import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import axios from 'axios';
import type { Product } from '@/app/ui/products/types';

async function getData(id: number) {
  const res = await axios.get<Product>(`http://localhost:3000/api/products/${id}`)
  if (!res) {
    throw new Error('Failed to fetch data')
  }
  return res.data
}

export default async function Page({ params }: { params: { id: number } }) {
  const product: Product = await getData(params.id)
  return (
    <main className="flex min-h-screen flex-col p-6 gap-1">
      <div className="flex justify-between items-end h-20 shrink-0 rounded-lg bg-teal-500 p-4 md:h-40">
        <AcmeLogo />
        <Link
          href="/login"
          className="flex gap-5 self-end rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
      <div className="bg-gray-50 flex items-center justify-center rounded-lg">
        <div className="container mx-auto p-4">
          
            <div className="bg-white rounded-lg border p-4" key={params.id}>
              <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                  {product.description}
                </p>
                <br/>
                <p className="text-gray-700 text-base">
                  <strong>Precio: </strong>{product.price}
                </p>
                <p className="text-gray-700 text-base">
                  <strong>Fecha de creación: </strong> {new Date(product.createdAt).toLocaleString()}
                </p>
                <p className="text-gray-700 text-base">
                  <strong>Fecha de modificación: </strong>{new Date(product.updatedAt).toLocaleString()}
                </p>
              </div>
              <div className="px-1 py-4">
                <Link href='/' className="text-blue-500 hover:underline">Retornar</Link>
              </div>
            </div>
          
        </div>
      </div>
    </main>
  );
}