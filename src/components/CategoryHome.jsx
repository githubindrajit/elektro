import React from 'react';
import { Link } from 'react-router-dom';

import laptopImg from '../assets/images/laptop-icon.jpg';
import headphoneImg from '../assets/images/headphone-icon.jpg';
import cameraImg from '../assets/images/camera-icon.jpg';
import speakerImg from '../assets/images/speaker-icon.jpg';
import mobileImg from '../assets/images/mobile-icon.jpg';
import applianceImg from '../assets/images/appliance-icon.jpg';

const categories = [
  { label: 'laptop', img: laptopImg, alt: 'laptop', slug: 'laptop' },
  { label: 'accessories', img: headphoneImg, alt: 'accessories', slug: 'accessories' },
  { label: 'camera', img: cameraImg, alt: 'camera', slug: 'camera' },
  { label: 'speaker', img: speakerImg, alt: 'speaker', slug: 'speaker' },
  { label: 'MOBILE', img: mobileImg, alt: 'mobile', slug: 'mobile' },
  { label: 'APPLIANCE', img: applianceImg, alt: 'appliance', slug: 'appliance' },
];

const CategoryHome = () => {
  return (
    <section className="category-section text-center">
      <h1 className="category-title bb mb-5">I'm Looking For..</h1>
      <div className="container">
        <div className="row justify-content-center g-4">
          {categories.map((category, index) => (
            <div className="col-6 col-sm-4 col-md-2" key={index}>
              <Link to={`/products?category=${category.slug}`} className="category-item">
                <img src={category.img} alt={category.alt} />
                <p className="category-label">{category.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHome;
