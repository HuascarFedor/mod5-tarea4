import EditProductForm from "@/app/ui/components/edit-product-form";
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
  return <EditProductForm product={product} />;
};