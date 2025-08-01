import React, { createContext, useContext, useEffect, useState } from "react";


import { toast } from "react-toastify";
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create context
export const CartWishlistContext = createContext();

// Hook to use the context
export const useCartWishlist = () => useContext(CartWishlistContext);

// Provider component
export const CartWishlistProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setCartItems(storedCart);
    setWishlistItems(storedWishlist);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // ✅ Add item to cart
  const addToCart = (productToAdd) => {
    const quantityToAdd = Number(productToAdd.quantity) || 1;

    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === productToAdd.id);

      if (existing) {
        toast.success("Increased quantity in cart");
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        toast.success("Added to cart");
        return [...prevItems, { ...productToAdd, quantity: quantityToAdd }];
      }
    });
  };

  // ✅ Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.info("Removed from cart");
  };

  // ✅ Update cart quantity
  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
    toast.success("Cart updated");
  };

  // ✅ Add to wishlist
  const addToWishlist = (product) => {
    setWishlistItems((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === product.id)) {
        toast.success("Added to wishlist");
        return [...prevWishlist, product];
      }
      toast.info("Already in wishlist");
      return prevWishlist;
    });
  };

  // ✅ Remove from wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
    toast.info("Removed from wishlist");
  };

 

  return (
    <CartWishlistContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,

        updateCartQuantity,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
      
      
    </CartWishlistContext.Provider>
  );
};
