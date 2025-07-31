import React from "react";
import { useLocation, Link } from "react-router-dom";

import tick from '../assets/images/tick.png';

const ThankContent = () => {
  const location = useLocation();
  const { formData, cartItems, total } = location.state || {};

  const currentDate = new Date().toLocaleDateString();

  if (!formData || !cartItems) {
    return (
      <div className="container text-center my-5">
        <h3>No order data found</h3>
        <Link to="/" className="btn btn-primary mt-3">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="container thankyou-container">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="order-confirmed">
            <div className="d-flex align-items-center mb-5">
              <div className="checkmark me-4">
                <img src={tick} alt="tick" />
              </div>
              <div>
                <h4 className="font2 fs20 fw-bold">
                  Thank You {formData.name} for Your Order!
                </h4>
                <p className="mb-1">Order Number: #{Math.floor(Math.random() * 100000000)}</p>
                <p className="mb-0">Order Date: {currentDate}</p>
              </div>
            </div>

            <div className="p-3 mb-5 border bg-light p-5">
              <strong className="font2 fs20 fw-bold mb-3">Your order is confirmed</strong>
              <p className="mb-0">You will receive a confirmation email at <strong>{formData.email}</strong> shortly.</p>
            </div>

            <div className="p-5 border bg-light mb-5">
              <h6 className="font2 fs20 fw-bold mb-3">Shipping Information</h6>
              <p className="mb-0">
                {formData.name}<br />
                {formData.address}{formData.apartment && `, ${formData.apartment}`}<br />
                {formData.city}, {formData.state} {formData.zip}<br />
                Phone: {formData.phone}<br />
                Payment Method: {formData.payment === "cod" ? "Cash on Delivery" : formData.payment}
              </p>
            </div>

            <div className="p-5 border bg-light mb-5">
              <h6 className="font2 fs20 fw-bold mb-3">Order Summary</h6>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>{item.product_name} (x{item.quantity || 1})</span>
                  <strong>${(item.offer_price * (item.quantity || 1)).toFixed(2)}</strong>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total</strong>
                <strong>${total}</strong>
              </div>
            </div>

            <Link className="btn1 mt-5" to="/">CONTINUE SHOPPING</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankContent;
