import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import imgJungleries from '../assets/images/sp1.jpg';
import imgElegant from '../assets/images/sp2.jpg';

const CollectionHome = () => {
  return (
    <section className="collection-section">
      <div className="container">
        {/* First Row */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={imgJungleries} alt="Jungleries Collection" className="w-100" />
          </div>
          <div className="col-md-6 sbx">
            <p className="subtitle">NEW COLLECTION</p>
            <h2 className="collection-title mb-5">Jungleries</h2>
            <p className="description mb-5">
              Inspired by natural textures and earth tones, explore our <br />
              latest release that blends comfort with exotic charm.
            </p>
            <Link to="/products?category=dress" className="btn1 shop-btn mt-2">
              Shop the collection
            </Link>
          </div>
        </div>

        {/* Second Row */}
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <img src={imgElegant} alt="Elegant & Sexy Collection" className="w-100" />
          </div>
          <div className="col-md-6 sbx">
            <p className="subtitle">NEW COLLECTION</p>
            <h2 className="collection-title mb-5">Elegant &amp; Sexy</h2>
            <p className="description mb-5">
              Make a style statement with sleek lines and soft fabrics that <br />
              elevate your evening look.
            </p>
            <Link to="/products?category=dress" className="btn1 shop-btn mt-2">
              Shop the collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionHome;
