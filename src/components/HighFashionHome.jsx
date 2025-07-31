import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import img1 from '../assets/images/d1.jpg';
import img2 from '../assets/images/d2.jpg';
import img3 from '../assets/images/d3.jpg';
import img4 from '../assets/images/d4.jpg';

const fashionItems = [
  {
    img: img1,
    alt: 'Fashion 1',
    category: 'shirt',
    label: 'SHOP SHIRT',
  },
  {
    img: img2,
    alt: 'Fashion 2',
    category: 'dress',
    label: 'SHOP CASUALWEAR',
  },
  {
    img: img3,
    alt: 'Fashion 3',
    category: 'shoe',
    label: 'SHOP SHOES',
  },
  {
    img: img4,
    alt: 'Fashion 4',
    category: 'accessory',
    label: 'SHOP ACCESSORIES',
  },
];

const HighFashionHome = () => {
  return (
    <section className="high-fashion-section">
      <div className="container">
        <div className="row">
          {fashionItems.map((item, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="fashion-box position-relative">
                <img src={item.img} className="img-fluid w-100" alt={item.alt} />
                {/* <Link className="fashion-btn" to={`/products?category=${item.category}`}>
                  {item.label}
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighFashionHome;
