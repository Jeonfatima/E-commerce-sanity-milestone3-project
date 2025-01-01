import React , {useContext} from 'react'
import { AiOutlineLeft, AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import { CartContext } from '../context/CartContext';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const Cart = () => {

const {onRemove,totalPrice,totalQuantity,cartItems,showCart,setShowCart}:any = useContext(CartContext)
  const handleClose = () =>{
    setShowCart(!showCart)
  }

  return (
    <div className='cart-wrapper'>
     <div className='cart-container'>
             <button className='cart-heading' onClick={handleClose}>
                <AiOutlineLeft/>
                <span className='heading'>Your Cart</span>
                <span className='cart-num-items'>{totalQuantity}</span>
             </button>
          
          <div className='product-container'>
            {cartItems.map((product:any)=>(
                    <div className='product' key={product._id}>
                  
                  <Image
                        loader={()=>urlFor(product.images[0]).url()}
                        src={urlFor(product.images[0]).url()}
                        alt={product.images[0]}
                        width={200}
                        height={200}
                        className='object-cover '
                    />
                    <div className='item-desc'>

                      <div className='flex top flex-col'>
                            <h5>{product.name}</h5>
                            <h4>${product.price}</h4>
                      </div>
                         
                    <div className='flex bottom'>
                            <span className='text-xl font-bold text-gray-600 cursor-pointer' >
                              quantity : {product.quantity}
                            </span>
                             
                             <button className='remove-item' onClick={()=>onRemove(product)} >
                                <TiDeleteOutline/>
                             </button>
                       </div>  
                         
                         
                       
                    </div>
                  
                    </div>
            ))

            }
          </div>

           {cartItems.length>0 &&
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
           }

     </div>
    </div>
  )
}

export default Cart