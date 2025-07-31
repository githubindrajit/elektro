import React from 'react';
import { Link } from 'react-router-dom';

// Import icons
import icon1 from '../assets/images/ic1.png';
import icon2 from '../assets/images/ic2.png';

const InfoHome = () => {
  return (
    <section className="info-section">
      <div className="row g-0 text-center">
        {/* Left Column */}
        <div className="col-md-6 p-4 bg-light-blue">
          <img src={icon1} alt="Pipe Icon" className="mb-3" />
          <h4 className="section-title">Tailor-made with passion</h4>
          <p className="section-text">
            We use only the very best materials and manufacturers. <br />
            If our product rips or frays, we’ll make it right.
          </p>
          <Link className="subtitle" to="/about">LEARN MORE</Link>
        </div>

        {/* Right Column */}
        <div className="col-md-6 p-4 bg-light-beige">
          <img src={icon2} alt="Beard Icon" className="mt-3 mb-3" />
          <h4 className="section-title">Chat with an expert</h4>
          <p className="section-text">
            Question or concern? Not sure what to get? Don’t know how to put <br />
            on a duvet cover? Our team is here to help!
          </p>
          <Link className="subtitle" to="/contact">CONTACT US</Link>
        </div>
      </div>
    </section>
  );
};

export default InfoHome;
