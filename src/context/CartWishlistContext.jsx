import React, { createContext, useContext, useEffect, useState } from "react";

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

  // Save to localStorage whenever cartItems or wishlistItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Add item to cart
  // const addToCart = (product) => {
  //   setCartItems((prevCart) => {
  //     const existingItem = prevCart.find((item) => item.id === product.id);
  //     if (existingItem) {
  //       return prevCart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: (item.quantity || 1) + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

const addToCart = (productToAdd) => {
  const quantityToAdd = Number(productToAdd.quantity) || 1; // Fallback to 1 if undefined or NaN

  setCartItems(prevItems => {
    const existing = prevItems.find(item => item.id === productToAdd.id);

    if (existing) {
      return prevItems.map(item =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + quantityToAdd }
          : item
      );
    } else {
      return [...prevItems, { ...productToAdd, quantity: quantityToAdd }];
    }
  });
};



  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update quantity in cart
  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent 0 quantity
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Add to wishlist
  const addToWishlist = (product) => {
    setWishlistItems((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  // Remove from wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
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
