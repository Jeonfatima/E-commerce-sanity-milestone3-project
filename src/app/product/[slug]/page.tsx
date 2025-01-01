/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client"

import { useParams } from 'next/navigation'
import { Navbar, ProductDetails } from '../../components'
import React from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const Page = async () => {
    const { slug }:any = useParams();
    const products = await client.fetch(groq `*[_type=="product"]`);
    const product = products.find((product:any)=>product.slug.current == slug);

    // console.log(product);

    

  return (
    <>
        <Navbar />
        <ProductDetails product={product} />
    </>

  )
}

export default Page