"use client";

import axios from 'axios';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Product } from "../products/types";
import { Button } from "../button";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function EditProductForm({ product }: { product: Product }) {
    const [newName, setNewName] = useState(product.name);
    const [newDescription, setNewDescription] = useState(product.description);
    const [newPrice, setNewPrice] = useState(product.price.toString()); // Convertir el precio a string inicialmente
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const token = sessionStorage.getItem('token');
            if (!token) {
                throw new Error("Unauthorized");
            }

            const res = await axios.patch(`http://localhost:3000/api/products/${product.id}`, {
                name: newName,
                description: newDescription,
                price: parseFloat(newPrice),
            }, {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (res.status !== 200) {
                throw new Error("Failed to update Product");
            }

            router.refresh();
            router.push("/dashboard/products");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="font-bold py-10 text-2xl">Update Product</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    onChange={(e) => setNewName(e.target.value)}
                    value={newName}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    data-testid="name"
                />

                <input
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    data-testid="description"
                />

                <input
                    onChange={(e) => setNewPrice(e.target.value)}
                    value={newPrice}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="number"
                    data-testid="price"
                />

                <Button className="mt-4 w-full max-w-xs" type="submit" data-testid="edit">
                    Update <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                </Button>
            </form>
        </>
    );
}
