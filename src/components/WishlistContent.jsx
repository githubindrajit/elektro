import React from "react";
import { useCartWishlist } from "../context/CartWishlistContext";
import { Link } from "react-router-dom";

const WishlistContent = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCartWishlist();

  return (
    <>
      <div className="breadcrumb-container mb-30">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">›</span>
            <span className="current">Wishlist</span>
          </nav>
        </div>
      </div>

      <section className="product-list text-center mh500">
        <div className="container">
          <h2 className="category-title">Wishlist</h2>
          <p className="subtitle mb-7">
            <span>-------</span>
          </p>
          <div className="row g-4">
            {wishlistItems.length === 0 ? (
              <p className="text-muted">Your wishlist is empty.</p>
            ) : (
              wishlistItems.map((product) => (
                <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                  <div className="product-card text-start">
                    <div className="position-relative">
                      <Link to={`/product-details/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.product_name}
                          className="img-fluid w-100"
                        />
                      </Link>
                      <div
                        className="remove-item"
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => removeFromWishlist(product.id)}
                      >
                        <i className="bi bi-x-lg text-danger"></i>
                      </div>
                    </div>
                    <div className="product-info mt-2">
                      <div className="product-footer d-flex justify-content-between align-items-center">
                        <Link
                          to={`/product-details/${product.id}`}
                          className="product-brand"
                        >
                          {product.product_name}
                        </Link>
                        <div
                          className="bag-icon btn quick-add"
                          onClick={() => addToCart(product)}
                        >
                          <i className="bi bi-bag"></i>
                        </div>
                      </div>
                      <p className="description">{product.product_description}</p>
                      <p className="price">
                        ${product.offer_price?.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistContent;
