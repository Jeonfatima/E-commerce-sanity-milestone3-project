"use client"
import React, { createContext, useState, ReactNode } from 'react';

// Define the types for the context
export interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  images: { [key: string]: string }[];
  slug: { current: string };
}

export interface CartContextType {
  onRemove: (product: Product) => void;
  totalPrice: number;
  totalQuantity: number;
  cartItems: Product[];
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  addProduct: (product: Product, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
  };

  const addProduct = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalQuantity((prev) => prev + quantity);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return cartProduct;
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const onRemove = (product: Product) => {
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        onRemove,
        totalPrice,
        totalQuantity,
        showCart,
        setShowCart,
        qty,
        incQty,
        decQty,
        cartItems,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
