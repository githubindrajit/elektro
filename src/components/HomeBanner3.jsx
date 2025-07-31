import React from 'react';
import { Link } from 'react-router-dom';

import headphoneBanner from '../assets/images/banner1a.jpg';

const HomeBanner3 = () => {
  return (
    <section className="membership text-center p-0">
      <img className="w-100" src={headphoneBanner} alt="ElektroFashion Store" />

        {/* <Link to="/membership" className="btn1 mw300">LEARN MORE</Link> */}

    </section>
  );
};

export default HomeBanner3;
