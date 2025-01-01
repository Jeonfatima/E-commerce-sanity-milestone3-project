"use client"
import React, { useContext, useState } from 'react'
import { BsCart } from "react-icons/bs";
import Link from 'next/link';
import Cart from './Cart';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const { totalQuantity, showCart, setShowCart }: any = useContext(CartContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setShowCart(!showCart)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <div className='w-full h-[80px] bg-white mx-auto'>
                <div className='container w-full h-full items-center flex  cursor-pointer  hover:text-gray-600 justify-between'>
                    <Link href='/'>
                        <h1 className='font-urbanist text-2xl font-bold text-black'>Shop</h1>
                    </Link>

                    {/* Desktop Links */}
                    <div className='hidden text-lg lg:flex space-x-6'>
                        <Link href="/">Home</Link>
                        <Link href="/Contact">Contact</Link>
                        <Link href="/About">About</Link>
                        <Link href="/Signup">Sign Up</Link>
                    </div>

                    {/* Cart Button */}
                    <div className='relative text-[25px]'>
                        <button onClick={handleClick}>
                            <BsCart />
                        </button>
                        <span className='cart-item-qty'>
                            {totalQuantity}
                        </span>
                    </div>

                    {/* Burger Menu Icon (for smaller screens) */}
                    <button className='lg:hidden' onClick={toggleMenu}>
                        <span className='text-2xl'>☰</span> {/* You can also use an icon here */}
                    </button>
                </div>
            </div>

            {/* Cart Component */}
            {showCart && <Cart />}

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='lg:hidden bg-white shadow-md py-4'>
                    <div className='flex flex-col space-y-4 items-center'>
                        <Link href="/">Home</Link>
                        <Link href="/Contact">Contact</Link>
                        <Link href="/About">About</Link>
                        <Link href="/SignUp">Sign Up</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;
