import React from 'react';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  return (
    <section id="heroCarousel" className="carousel slide p-0" data-bs-ride="carousel">




      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active" style={{ backgroundImage: `url(${banner1})` }}>
          <div className="carousel-caption d-flex justify-content-center justify-content-md-start align-items-end flex-column">

            <div className="promo-card">
              <div className="brd">
                <div className="subtitle">SALE UP TO 30% OFF</div>
                <div className="title">Bond Over Gadgets</div>
                <div className="description">Celebrate the joy of gifting with trendy tech</div>
                <Link to="/products" className="btn1 mx-auto">Shop Now</Link>
              </div>
            </div>

          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item" style={{ backgroundImage: `url(${banner2})` }}>
          <div className="carousel-caption d-flex justify-content-center align-items-end flex-column">
            <div className="promo-card">
              <div className="brd">
                <div className="subtitle">New Collection</div>
                <div className="title">New Best Deals Apple Watch</div>
                <div className="description">Ever Powerful sensors to monitor your fitness</div>
                <Link to="/products" className="btn1 mx-auto">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item" style={{ backgroundImage: `url(${banner3})` }}>
          <div className="carousel-caption d-flex justify-content-center align-items-end flex-column">
            <div className="promo-card">
              <div className="brd">
                <div className="subtitle">SALE UP TO 30% OFF</div>
                <div className="title">Accessories Phone Series</div>
                <div className="description">- Ever Powerful sensors to monitor your fitness</div>
                <Link to="/products" className="btn1 mx-auto">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Carousel Controls */}

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>

    </section>
  );
};

export default HeroCarousel;
