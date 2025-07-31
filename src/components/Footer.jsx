import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="bg-white py-5 border-top">
      <div className="container">
        <div className="row text-start text-md-left gy-4">
          {/* Products */}
          <div className="col-6 col-md-3">
            <h6 className="fhd">Products</h6>
            <ul className="list-unstyled">
              <li><Link to="/products?category=laptop">Laptop</Link></li>
              <li><Link to="/products?category=camera">Camera</Link></li>
              <li><Link to="/products?category=appliance">Appliance</Link></li>
              <li><Link to="/products?category=accessories">Accessories</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-6 col-md-3">
            <h6 className="fhd">Information</h6>
            <ul className="list-unstyled">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Legal Area</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-6 col-md-3">
            <h6 className="fhd">Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Return and Refunds</a></li>
            </ul>
          </div>

          {/* Social & Payment */}
          <div className="col-12 col-md-3">
            <h6 className="fhd">Keep in Touch</h6>
            <div className="d-flex gap-3 mb-4">

                  <a href="https://www.facebook.com" target="_blank" className="me-3 text-dark fs-4">
                  <i className="bi bi-facebook"></i>
                  </a>

                  <a href="https://www.instagram.com" target="_blank" className="me-3 text-dark fs-4">
                  <i className="bi bi-instagram"></i>
                  </a>

                  <a href="https://www.pinterest.com" target="_blank" className="text-dark fs-4">
                  <i className="bi bi-pinterest"></i>
                  </a>

            </div>

            <h6 className="fhd mt-5">Payment Accepted</h6>
            <div className="d-flex gap-2">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" width="40" />
              <img src="https://img.icons8.com/color/48/discover.png" alt="Discover" width="40" />
              <img src="https://img.icons8.com/color/48/amex.png" alt="AmEx" width="40" />
              <img src="https://img.icons8.com/color/48/mastercard.png" alt="MasterCard" width="40" />
            </div>
          </div>
        </div>

        <div className="text-center pt-5 mt-5 border-top">
          © 2025, Elektro. All rights reserved.
        </div>
      </div>
    </footer>
  );



  
};

export default Footer;
