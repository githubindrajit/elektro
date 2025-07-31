import React from "react";
import { useCartWishlist } from "../context/CartWishlistContext";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useCartWishlist();

  const getSubtotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const getTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.offer_price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="breadcrumb-container mb-5">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">›</span>
            <span className="current">Cart Page</span>
          </nav>
        </div>
      </div>

      <section className="cart-page pt-0">
        <div className="container my-5">
          <h2 className="mb-4">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="row">
              <div className="col-lg-7">
                <div className="row thd py-2 border-bottom text-uppercase fw-semibold small text-center">
                  <div className="col-12 col-md-5">Product</div>
                  <div className="col-6 col-md-2">Price</div>
                  <div className="col-6 col-md-2">Quantity</div>
                  <div className="col-6 col-md-2">Subtotal</div>
                  <div className="col-6 col-md-1"></div>
                </div>

                <div id="cart-items">
                  {cartItems.map((product) => (
                    <div
                      key={product.id}
                      className="row align-items-center py-3 border-bottom text-center text-md-center card-box"
                    >
                      <div className="col-12 col-md-5 d-flex align-items-center text-start">
                        <img
                          src={product.image}
                          width="80"
                          className="me-3"
                          alt={product.product_name}
                        />
                        <div>
                          <h6 className="mb-1">{product.product_name}</h6>
                          <small className="text-muted">
                            Qty: {product.quantity || 1}
                          </small>
                        </div>
                      </div>

                      <div className="col-6 col-md-2 mt-3 mt-md-0">
                        <div className="fw-bold">${product.offer_price.toFixed(2)}</div>
                      </div>

                      <div className="col-6 col-md-2 mt-3 mt-md-0">
                        <div
                          className="input-group input-group-sm justify-content-center"
                          style={{ maxWidth: "100px" }}
                        >
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() =>
                              updateCartQuantity(
                                product.id,
                                Math.max(1, (product.quantity || 1) - 1)
                              )
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={product.quantity || 1}
                            readOnly
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() =>
                              updateCartQuantity(
                                product.id,
                                (product.quantity || 1) + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="col-6 col-md-2 mt-3 mt-md-0">
                        <div className="fw-bold">
                          ${getSubtotal(product.offer_price, product.quantity || 1)}
                        </div>
                      </div>

                      <div className="col-6 col-md-1 mt-3 mt-md-0 text-center">
                        <button
                          className="btn btn-link text-danger p-0 del-cart-item"
                          title="Remove item"
                          onClick={() => removeFromCart(product.id)}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-1"></div>

              <div className="col-lg-4">
                <div className="order-summary">
                  <h5>ORDER SUMMARY</h5>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>Subtotal</span>
                    <strong>${getTotal()}</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Shipping</span>
                    <strong>$0</strong>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>Total</span>
                    <strong>${getTotal()}</strong>
                  </div>
                </div>

                <Link to="/checkout" className="chk-btn btn1 mt-3">
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CartContent;
