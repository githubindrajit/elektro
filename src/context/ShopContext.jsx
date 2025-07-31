
import React from 'react';
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist(prev =>
      prev.find(item => item.id === product.id)
        ? prev.filter(item => item.id !== product.id)
        : [...prev, product]
    );
  };

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      return exists
        ? prev.map(item => item.id === product.id ? { ...item, qty: item.qty + quantity } : item)
        : [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <ShopContext.Provider value={{ cart, wishlist, addToCart, toggleWishlist }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
