"use client";

import axios from 'axios';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from '@/app/ui/button';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function AddProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const token = sessionStorage.getItem('token');
            if (!token) {
                throw new Error("Unauthorized");
            }
            
            const res = await axios.post('http://localhost:3000/api/products', {
                name: name,
                description: description,
                price: parseFloat(price),
            }, {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (res.status === 201) {
                router.refresh();
                router.push("/dashboard/products");
            }
            else{
                throw new Error("Failed to create Product");
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <div className="flex justify-between items-center">
            <h1 className="font-bold py-10 text-2xl">Add New Product</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="Product Name"
                data-testid="name"
            />

            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="Product Description"
                data-testid="description"
            />

            <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
                placeholder="Product Price"
                data-testid="price"
            />

            <Button className="mt-4 w-full max-w-xs" type="submit" data-testid="add">
                Add <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
        </form>
        </>
    );
}