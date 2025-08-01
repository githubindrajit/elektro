import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Thank from './pages/Thank';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartWishlistProvider } from './context/CartWishlistContext'; // ✅ Import context

const App = () => {
  return (
    <CartWishlistProvider> {/* ✅ Wrap app with context */}
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product-details" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank" element={<Thank />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={2000} />
        </main>
        <Footer />
      </BrowserRouter>


    </CartWishlistProvider>
  );
};

export default App;
