import React from 'react';
import { Link } from 'react-router-dom';

import microBanner from '../assets/images/banner2a.jpg';

const HomeBanner2 = () => {
  return (
    <section className="membership text-center p-0">
      <img className="w-100" src={microBanner} alt="ElektroFashion Store" />

        {/* <Link to="/membership" className="btn1 mw300">LEARN MORE</Link> */}

    </section>
  );
};

export default HomeBanner2;
