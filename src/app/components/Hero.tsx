'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaApple } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='mx-auto container'>
             <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-gray-100 p-6">
          <ul className="space-y-4">
            <li className="cursor-pointer hover:underline">Womans Fashion</li>
            <li className="cursor-pointer hover:underline">Mens Fashion</li>
            <li className="cursor-pointer hover:underline">Electronics</li>
            <li className="cursor-pointer hover:underline">Home & Lifestyle</li>
            <li className="cursor-pointer hover:underline">Medicine</li>
            <li className="cursor-pointer hover:underline">Sports & Outdoor</li>
            <li className="cursor-pointer hover:underline">Babys & Toys</li>
            <li className="cursor-pointer hover:underline">Groceries & Pets</li>
            <li className="cursor-pointer hover:underline">Health & Beauty</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 w-full p-6">
          {/* Slider */}
          <div className="bg-black text-white rounded-lg overflow-hidden flex flex-col lg:flex-row items-center p-6 lg:p-12">
            {/* Text Content */}
            <div className="lg:pr-12">
              <div className="flex items-center space-x-3">
                <FaApple className="text-4xl" />
                <h3 className="text-lg">iPhone 14 Series</h3>
              </div>
              <h2 className="text-4xl font-bold mt-4">
                Up to 10% <br />
                Off Voucher
              </h2>
              <Link
                href="/shop-now"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
              >
                Shop Now →
              </Link>
            </div>
            {/* Image */}
            <Image
              src="/images/iphone.jpg"
              alt="iPhone 14 Series"
              width={500}
              height={300}
              className="rounded-lg mt-6 lg:mt-0"
            />
          </div>
        </main>
      </div>
    </div>
        </div>
    )
}

export default Hero;
