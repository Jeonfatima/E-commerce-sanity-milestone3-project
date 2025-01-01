"use client";

import ProductDetails from '@/app/components/ProductDetails';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const Page = () => {
    const { slug }: any = useParams();
    const [product, setProduct] = useState<any>(null);

    // Fetch data inside useEffect
    useEffect(() => {
        const fetchProduct = async () => {
            const products = await client.fetch(groq`*[_type=="product"]`);
            const foundProduct = products.find((product: any) => product.slug.current === slug);
            console.log(foundProduct); // Logs only once
            setProduct(foundProduct);
        };

        fetchProduct();
    }, [slug]); // Dependency ensures fetch runs once when slug changes


  return (
    <div>
        <ProductDetails product={product}/>
    </div>
  )
}

export default Page