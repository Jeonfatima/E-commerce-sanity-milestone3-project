"use client"
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import { CartContext } from '../context/CartContext'
const ProductDetails = ({ product }: any) => {

  const [index,setIndex] = useState(0);
  // Check if product and product.images exist, default to an empty array if not
  const images = product?.images ?? [];

  const{cartItems ,addProduct ,qty , decQty , incQty}:any = useContext(CartContext)
  console.log(cartItems)

  return (
    <div className='product-details-section mb-[100px]'>
      <div className='product-details-container'>
        {/* left section */}
        <div>
          {/* top */}
          <div className='h-[450px] flex items-center mb-[25px]'>
            {images.length > 0 ? (
              <Image
                loader={() => urlFor(images[index]).url()} // Using the first image safely
                src={urlFor(images[index]).url()}
                alt={images[index]?.alt || 'Product Image'}
                width={350}
                height={350}
                className='object-cover mx-auto'
              />
            ) : (
              <p>No image available</p> // Fallback if there are no images
            )}
          </div>

          {/* bottom */}
          <div className='small-images-container'>
            {images.length > 0 ? (
              images.map((item: any, i: number) => (
                <Image
                  key={i}
                  loader={() => urlFor(images[i]).url()} // Using the first image safely
                  src={urlFor(images[i]).url()}
                  alt={images[i]?.alt || 'Product Image'}
                  width={220}
                  height={100}
                  className='object-cover h-32 mx-auto border rounded-xl hover:cursor-pointer'
                  onClick={()=>setIndex(i)}
                />
              ))
            ) : (
              <p>No additional images available</p> // Fallback if there are no additional images
            )}
          </div>
        </div>
        {/* left section end  */}



        {/* right section */}
        <div className='flex flex-col gap-8 md:pt-32 pt-0'>
        <div className='flex flex-col gap-4'>
            {/* Safely access product properties */}
            <div className='text-3xl font-bold'>{product?.name || 'Unnamed Product'}</div>
            <div className='text-xl font-medium '>${product?.price || '0.00'}</div>
            <div className='text-xl text-gray-700'>{product?.description || 'No description available'}</div>
          </div>
              

              <div className='flex gap-2 items-center'>
                   <h3>Quantity</h3>
                   <p className='quantity-desc flex items-center border-black'>
                       <span className='minus' onClick={decQty}>
                               <AiOutlineMinus/>
                       </span>
                       <span className='num'>
                              {qty}
                       </span>
                       <span className='plus' onClick={incQty}>
                               <AiOutlinePlus/>
                       </span>
                   </p>
              </div>
                
                <button className='btn add-to-cart' onClick={()=>addProduct(product,qty)}>
                  Add to cart
                </button>

        </div>
        {/* right scetion ended */}



      </div>
    </div>
  );
};

export default ProductDetails;
