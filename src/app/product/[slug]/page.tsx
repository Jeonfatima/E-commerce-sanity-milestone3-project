"use client";

import ProductDetails from '@/app/components/ProductDetails';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  images: { [key: string]: string }[];
  slug: { current: string };
}

const Page = () => {
    const { slug } = useParams<{ slug: string }>(); // Typing slug
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const products = await client.fetch(groq`*[_type=="product"]`);
            const foundProduct = products.find((product: Product) => product.slug.current === slug);
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                console.error("Product not found");
            }
        };

        fetchProduct();
    }, [slug]);

    if (!product) {
        return <div>Loading...</div>; // Show loading state
    }

    return <ProductDetails product={product} />;
};

export default Page;
