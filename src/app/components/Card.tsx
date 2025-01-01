import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {urlFor} from '@/sanity/lib/image'

const Card = ({ product }: { product: any }) => {
  return (
    <div className="bg-white drop-shadow-md rounded-lg overflow-hidden w-[250px] h-[350px] flex flex-col justify-between">
      <Link href={`/product/${product.slug.current}`}>
        <div>
          <Image
            src={urlFor(product.images && product.images[0]).url()}
            alt={product.slug}
            width={220}
            height={220}
            className="object-contain w-[220px] h-[220px] mx-auto"
          />
        </div>
        <div className="text-center py-5 flex-grow">
          <h1 className="text-2xl font-bold truncate max-w-[90%] mx-auto">
            {product.name}
          </h1>
          <h1 className="text-xl text-gray-600 font-bold">${product.price}</h1>
        </div>
      </Link>
    </div>
  )
}

export default Card
