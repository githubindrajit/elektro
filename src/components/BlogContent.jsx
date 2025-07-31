import React from "react";
import { Link } from "react-router-dom";

import bl1 from '../assets/images/bl1.jpg';
import bl2 from '../assets/images/bl2.jpg';
import bl3 from '../assets/images/bl3.jpg';

const BlogContent = () => {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-container">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">›</span>
            <span className="current">Blog</span>
          </nav>
        </div>
      </div>

      {/* Blog Section 1 */}
      <section className="about-section blog-sec">
        <div className="container">
          <div className="ab-pic">
            <img src={bl1} alt="ElektroFashion Store" />
          </div>
          <div className="ab-content">
            <h2 className="h2">The Evolution of Portable Power: How the MacBook Changed Work</h2>
            <p>
              <b>Feb 14, 2022&nbsp;Halo Themes&nbsp;0 Comments</b><br />
              Discover how Apple’s MacBook revolutionized productivity, mobility, and performance in one sleek device.
            </p>
            <a href="#" className="btn-explore">Read More</a>
          </div>
        </div>
      </section>

      {/* Blog Section 2 */}
      <section className="about-section blog-sec evn">
        <div className="container flex-md-row-reverse">
          <div className="ab-pic">
            <img src={bl2} alt="ElektroFashion Store" />
          </div>
          <div className="ab-content">
            <h2>Real Style for Real Bodies: Embracing Every Curve with ElektroFashion</h2>
            <p>
              <b>Feb 21, 2023&nbsp;Halo Themes&nbsp;0 Comments</b><br />
              Promote body positivity by highlighting your size-inclusive options and offering tips on flattering fits.
            </p>
            <a href="#" className="btn-explore">Read More</a>
          </div>
        </div>
      </section>

      {/* Blog Section 3 */}
      <section className="about-section blog-sec mb-60">
        <div className="container">
          <div className="ab-pic">
            <img src={bl3} alt="ElektroFashion Store" />
          </div>
          <div className="ab-content">
            <h2>Styled by You: ElektroFashion Looks from Our Community</h2>
            <p>
              <b>Feb 14, 2022&nbsp;Halo Themes&nbsp;0 Comments</b><br />
              Share the origin of your brand, your design philosophy, and what makes ElektroFashion unique.
            </p>
            <a href="#" className="btn-explore">Read More</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContent;
