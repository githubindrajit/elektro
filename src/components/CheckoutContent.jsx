import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartWishlistContext } from "../context/CartWishlistContext";

const CheckoutContent = () => {
  const { cartItems } = useContext(CartWishlistContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.offer_price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank", {
      state: {
        formData,
        cartItems,
        total: calculateTotal(),
      },
    });
  };

  return (
    <div className="container checkout-container">
      <div className="row">
        {/* Left Column - Form */}
        <div className="col-md-6">
          <form id="checkout-form" onSubmit={handleSubmit}>
            <h5>Contact</h5>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="form-control mb-2"
              placeholder="Email Address"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              className="form-control mb-3"
              placeholder="Phone number"
              required
            />

            <h5>Shipping Address</h5>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              placeholder="Name"
              required
            />
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              placeholder="Address"
              required
            />
            <input
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              placeholder="Apartment"
            />
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              placeholder="City / Town"
              required
            />
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              placeholder="State"
              required
            />
            <input
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              type="number"
              className="form-control mb-3"
              placeholder="Zip Code"
              required
            />

            <h5>Payment</h5>
            <div className="payment-method mb-3">
              <input
                type="radio"
                id="cod"
                name="payment"
                value="cod"
                checked={formData.payment === "cod"}
                onChange={handleChange}
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>

            <button type="submit" className="btn-checkout mt-4">
              PLACE ORDER
            </button>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="col-md-5 offset-md-1">
          <div className="order-summary">
            <h5>ORDER SUMMARY</h5>
            <hr />
            <div className="summary-items">
              {cartItems.map((product) => (
                <div
                  key={product.id}
                  className="d-flex align-items-center justify-content-between mb-3"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={product.image}
                      width="60"
                      className="me-3"
                      alt={product.product_name}
                    />
                    <div>
                      <p className="mb-1">{product.product_name}</p>
                      <small>Qty: {product.quantity || 1}</small>
                    </div>
                  </div>
                  <div>
                    <strong>
                      $
                      {(
                        product.offer_price * (product.quantity || 1)
                      ).toFixed(2)}
                    </strong>
                  </div>
                </div>
              ))}
            </div>

            <hr />
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>${calculateTotal()}</strong>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <strong>$0</strong>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Total</span>
              <strong>${calculateTotal()}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
