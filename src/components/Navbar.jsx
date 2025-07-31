import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo2.png';

import { Heart, ShoppingBag } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext'; // ✅ import context

import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
const Navbar = () => {
  const { cartItems, wishlistItems } = useCartWishlist(); // ✅ access state
  // const { totalCartQuantity } = useCartWishlist();

  return (
    <>
    <header className="eva-header border-bottom">
      <div className="container">
        <nav className="navbar d-inline-flex navbar-expand-md me-0" aria-label="Third navbar example">
          <Link to="/" className="navbar-brand logo">
            <img src={logo} alt="ElektroLogo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/products" className="nav-link">Products</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
        </nav>

        <section className="header-icon text-end">
          <Link to="/wishlist" className="wish-icon position-relative me-3">
            <Heart />
            <span id="wish-count">
              {wishlistItems.length}
            </span>
          </Link>
          <Link to="/cart" className="cart-icon position-relative">
            <ShoppingBag />
            {/* <span id="cart-count">
              {cartItems.length}
            </span> */}
            <span id="cart-count">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </Link>



       </section>
      </div>
    </header>

    <ToastContainer position="top-right" autoClose={1000} />

    </>

  );
};

export default Navbar;
