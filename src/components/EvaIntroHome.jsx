import React from 'react';
import { Link } from 'react-router-dom';

const EvaIntroHome = () => {
  return (
    <section className="text-center">
      <div className="container">
        <h2 className="category-title">We are Eva</h2>
        <p className="subtitle">
          <Link to="/about">About</Link>
        </p>
        <p className="description" style={{ maxWidth: '800px', margin: '0 auto' }}>
          Elektro brings you the best in style for both women and men — from casual denim to chic seasonal trends. <br />
          We believe in effortless fashion that speaks confidence, comfort, and bold personality. Explore our collections and make your fashion statement today.
        </p>
      </div>
    </section>
  );
};

export default EvaIntroHome;
