import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';




const BestSellingHome = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, addToWishlist } = useCartWishlist();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('../data/product.json');
        const data = await res.json();
        const bestSelling = data.filter(product => product.bestseller);
        setProducts(bestSelling.slice(0, 8));
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="product-list text-center">
      <div className="container">
        <h2 className="category-title">Best Selling</h2>
        <p className="subtitle mb-7">
          <Link to="/products">View All</Link>
        </p>
        {/* <ToastContainer position="top-right" autoClose={3000} /> */}
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
              <div className="product-card text-start">
                <div className="position-relative prd-pic">
                  <Link to={`/product-details?id=${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.product_name}
                      className="img-fluid w-100"
                    />
                  </Link>
                  <div className="wishlist-icon">
                    <i
                    className="bi bi-heart heart-icon"
                    onClick={(e) => {
                    e.stopPropagation();
                    addToWishlist(product);
                    }}
                    ></i>
                  </div>

<div className="bag-icon btn quick-add">
                      <i
                        className="bi bi-bag"
                        onClick={() => addToCart(product, 1)}
                      ></i>
                    </div>

                    


                </div>

                <div className="product-info mt-2">
                  <div className="product-footer">
                    <Link
                      to={`/product-details?id=${product.id}`}
                      className="product-brand"
                    >
                      {product.product_name}
                    </Link>
                    
                  </div>
                  <p className="description">{product.product_description}</p>
                  <p className="price">
                    ${product.offer_price ? product.offer_price.toFixed(2) : '0.00'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingHome;
