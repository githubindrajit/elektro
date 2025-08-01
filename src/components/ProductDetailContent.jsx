import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';
import { useNavigate } from 'react-router-dom';

  

const ProductDetailContent = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');
  const { addToCart, addToWishlist, cartItems,  updateCartQuantity } = useCartWishlist();
const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('../data/product.json');
      const data = await res.json();
      const selected = data.find(p => p.id.toString() === productId);
      setProduct(selected);
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div className="container py-5">Loading...</div>;

  const subtotal = (product.offer_price || 0) * quantity;

  return (
    <>
      <div className="breadcrumb-container mb-5">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span className="separator">›</span>
            <span className="current">{product.product_name}</span>
          </nav>
        </div>
      </div>

      <div className="container product-container">
        <div className="row">
          {/* Image Slider */}
          <div className="col-md-6">
            <img
              src={product.gallery?.[currentImage] || product.image}
              alt={product.product_name}
              className="img-fluid w-100 mb-3"
            />
            {product.gallery && product.gallery.length > 1 && (
              <div className="d-flex gap-2">
                {product.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setCurrentImage(index)}
                    className={`img-thumbnail ${currentImage === index ? 'border border-dark' : ''}`}
                    style={{ width: 60, height: 60, objectFit: 'cover', cursor: 'pointer' }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="col-md-6 product-info">
            <h4 className="font2 fs30 fw-bold mb-4">{product.product_name}</h4>
            <p className="mb-4">{product.product_description}</p>
            <p className="mb-4">
              <strong>Availability:</strong> <span className="text-success fw-bold">In Stock</span>
            </p>

            {/* Removed size select here */}

            <div className="price mb-3">
              <span className="text-decoration-line-through me-2">${product.actual_price?.toFixed(2)}</span>
              <span className="fw-bold">${product.offer_price?.toFixed(2)}</span>
            </div>

            <div className="d-block mb-4 fs20">
              <label className="me-3 mb-3 fw-medium d-block">Quantity:</label>
              <div className="input-group quantity-input" style={{ width: '120px' }}>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <input type="text" className="form-control text-center" value={quantity} readOnly />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <p className="mb-4 fs20">
              <strong>Subtotal:</strong>
              <span className="c-gold fw-bold"> ${subtotal.toFixed(2)}</span>
            </p>

            <div className="d-flex align-items-center gap-3 mb-4">
              <button
                className="btn1 m-0"
                onClick={() => addToCart({ ...product, quantity })}
              >
                ADD TO CART
              </button>
              <button
                className="btn btn-outline-dark rounded-circle"
                onClick={() => addToWishlist(product)}
              >
                <i className="bi bi-heart heart-icon"></i>
              </button>
            </div>

            {/* <button id='BuyNowBtn' className="btn1 m-0">Buy Now</button> */}

<button
id="BuyNowBtn"
className="btn1 m-0"
onClick={() => {
addToCart({ ...product, quantity });
navigate('/checkout');
}}
>
Buy Now
</button>


            <div className="free-shipping">
              <i className="bi bi-truck"></i>
              <span>Free Shipping on all orders over $40!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailContent;
