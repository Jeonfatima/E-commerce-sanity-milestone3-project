import React from 'react'
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import Card from '../components/Card';
import Image from 'next/image';
import Last from '../components/Last';
const Products = async () => {

    const products = await client.fetch(groq`*[_type=="product"]`)


    return (
        <div className='bg-[#f8f8f8]'>

            <div className='bg-[#f8f8f8] w-full py-12 mt-[125px] '>

                <div className='container'>

                    <div className='flex flex-row gap-10'>
                        <div className="about-section py-20 bg-gray-100">
                            <div className="container mx-auto px-4 text-left">
                                <h2 className="text-4xl font-bold mb-4 text-blue-600">About Us</h2>
                                <p className="text-xl mb-6 text-gray-800">
                                    Welcome to Shop, your number one source for all things shopping. We are dedicated to providing you with the best products, with a focus on quality, customer service, and uniqueness.
                                </p>
                                <p className="text-lg mb-6 text-gray-700">
                                    Our mission is to bring you an exceptional shopping experience, offering a wide range of products at affordable prices. Whether you are looking for the latest gadgets, trendy clothing, or home essentials, we have got you covered.
                                </p>
                                <h3 className="text-2xl font-semibold mb-4 text-blue-500">Our Values</h3>
                                <ul className="list-disc list-inside text-xl text-gray-700 hover:text-blue-950 cursor-pointer">
                                    <li>Customer Satisfaction</li>
                                    <li>Affordable Pricing</li>
                                    <li>Quality Assurance</li>
                                    <li>Fast Shipping</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="w-full md:w-[500px] h-[600px] justify-end relative">
                                <Image
                                    src="/images/pink.jpg"
                                    alt="Our Story"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md shadow-md"
                                />
                            </div>
                        </div>
                    </div>




                    <div className='py-4'>
                        <h1 className='text-3xl font-bold '>Buy Now</h1>
                        <h1>Latest Products</h1>
                    </div>

                    {/* products List */}
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-6 '>
                        {products.map((product: any, index: number) => (
                            // card
                            <Card key={index} product={product} />
                        ))

                        }
                    </div>

                </div>
            </div>
            <Last />
        </div>
    )
}

export default Products
