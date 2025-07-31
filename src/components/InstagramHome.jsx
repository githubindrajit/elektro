import React from 'react';

// Image imports
import img1 from '../assets/images/ip1.jpg';
import img2 from '../assets/images/ip2.jpg';
import img3 from '../assets/images/ip3.jpg';
import img4 from '../assets/images/ip4.jpg';


const InstagramHome = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="image-grid-section text-center">
      <div className="container">
        <h2 className="category-title bb mb-5">Blog & Events</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 mt-2">
          {images.map((img, index) => (
            <div className="col" key={index}>
              <img src={img} className="w-100" alt={`instagram${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramHome;
