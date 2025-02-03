"use client";

import React, { createContext, useContext, useState } from 'react';

// Define CartItem type
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Define CartContextType to include the cart array, functions, and additional properties
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalQuantity: number;
  totalPrice: number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  
  // Error handling: if context is undefined, throw an error
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};

// CartProvider component to manage the state
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex === -1) {
        return [...prevCart, { ...item, quantity: 1 }];
      } else {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += item.quantity;
        return updatedCart;
      }
    });
  };

  // Function to remove an item from the cart by id
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total quantity of items in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};