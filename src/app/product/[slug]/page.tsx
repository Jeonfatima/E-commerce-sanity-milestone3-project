"use client"

import { useParams } from 'next/navigation'
import { Navbar, ProductDetails } from '../../components'
import React, { useEffect, useState } from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const Page = () => {
    const { slug }: any = useParams();
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const products = await client.fetch(groq`*[_type=="product"]`);
            const foundProduct = products.find((product: any) => product.slug.current == slug);
            setProduct(foundProduct);
        };

        fetchProduct();
    }, [slug]);

    if (!product) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <ProductDetails product={product} />
        </>
    )
}

export default Page;

