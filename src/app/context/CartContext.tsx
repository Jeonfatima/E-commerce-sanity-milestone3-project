/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({children}:any)=>{
    
    const[showCart,setShowCart] = useState(false);

    const[qty,setQty] = useState(1);

    const [cartItems , setCartItems] =useState <any[]>([]);

    const [totalQuantity , setTotalQuantity]  = useState(0) ;

   
    const [totalPrice , setTotalPrice]  = useState(0) ;

    const incQty = () =>{
        setQty((prevQty)=> prevQty + 1)
    }

    const decQty = () =>{
        setQty((prevQty)=>{
            if(prevQty - 1 < 1) return 1 ;
            return prevQty - 1})
    }

   const addProduct = (product:any , quantity:number)=>{
   
       const checkProductInCart = cartItems.find((item:any)=>item._id === product._id);

       setTotalQuantity((prev)=>prev+quantity)
       
       setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price*quantity)

       if(checkProductInCart){
         const updatedCartItems = cartItems.map((cartProduct:any)=>{
            if(cartProduct._id === product._id
            ){
                return {
                    ...cartProduct,
                    quantity:cartProduct.quantity + quantity
                }
            }else{
                return cartProduct;
            }
         });
         setCartItems(updatedCartItems);       


       }else{
        product.quantity = quantity; 
        setCartItems([...cartItems,{...product}]);
       }
      
     
   }
     
  const onRemove = (product:any)=>{
   
 const newCartItems = cartItems.filter((item)=> item._id !== product._id)

   setCartItems(newCartItems)

  }

    return(
        <CartContext.Provider 
            value={{onRemove,totalPrice,totalQuantity,showCart,setShowCart,qty,incQty,decQty,cartItems,addProduct}}
        >
                   <div>
                    {children}
                   </div>
        </CartContext.Provider>
    )

} 
