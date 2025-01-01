"use client"
import React, { useContext } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { CartContext } from '../context/CartContext'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  images: { [key: string]: string }[];
  slug: { current: string };
}

interface CartContextType {
  onRemove: (product: Product) => void;
  totalPrice: number;
  totalQuantity: number;
  cartItems: Product[];
  showCart: boolean;
  setShowCart: (show: boolean) => void;
}

const Cart = () => {
  const { onRemove, totalPrice, totalQuantity, cartItems, showCart, setShowCart }: CartContextType = useContext(CartContext) || {
    onRemove: () => {},
    totalPrice: 0,
    totalQuantity: 0,
    cartItems: [],
    showCart: false,
    setShowCart: () => {}
  };

  const handleClose = () => {
    setShowCart(!showCart);
  };

  return (
    <div className='cart-wrapper'>
      <div className='cart-container'>
        <button className='cart-heading' onClick={handleClose}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>{totalQuantity}</span>
        </button>

        <div className='product-container'>
          {cartItems.map((product) => (
            <div className='product' key={product._id}>
              <Image
                loader={() => urlFor(product.images[0]).url()}
                src={urlFor(product.images[0]).url()}
                alt={product.name}
                width={200}
                height={200}
                className='object-cover'
              />
              <div className='item-desc'>
                <div className='flex top flex-col'>
                  <h5>{product.name}</h5>
                  <h4>${product.price}</h4>
                </div>

                <div className='flex bottom'>
                  <span className='text-xl font-bold text-gray-600 cursor-pointer'>
                    Quantity: {product.quantity}
                  </span>

                  <button className='remove-item' onClick={() => onRemove(product)}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length > 0 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <Link href={'/CheckOut'}>
                <button className='checkout-btn'>
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
