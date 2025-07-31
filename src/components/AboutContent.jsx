import React from "react";

// import ab-pic from '../assets/images/about.jpg';
import abpic1 from '../assets/images/ab1.jpg';
import abpic2 from '../assets/images/ab2.jpg';
import abpic3 from '../assets/images/ab3.jpg';

// import banner5 from '../assets/images/banner5.jpg';


const AboutContent = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="inner-hero-banner">
        {/* <img className="d-block d-sm-none banner-inner-mob" src={banner5} alt="banner inner" /> */}
        <div className="overlay">
          <div className="container">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center">
        <div className="container">
          <h2 className="category-title bb mb-5">We are Elektro</h2>
                  <p style={{ maxWidth: "800px", margin: "0 auto" }}>
           Welcome to Elektro, your one-stop destination for the latest and most reliable electronics. Whether you're upgrading your mobile phone, searching for the perfect laptop, or shopping for cutting-edge smart home devices — Elektro brings you a wide range of high-quality tech products at unbeatable prices.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="about-section pt-0">
        <div className="container">
          <div className="ab-pic">
            <img src={abpic1} alt="ElektroFashion Store" />
          </div>
          <div className="ab-content">
            <h2 className="h2">Our Mission</h2>
            <p>
              To make technology more accessible, affordable, and exciting — no matter where you are. We believe great tech should be just a click away.
            </p>
            <a href="#" className="btn-explore">
              Explore
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section evn">
        <div className="container flex-md-row-reverse">
          <div className="ab-pic">
            <img src={abpic2} alt="ElektroFashion Store" />
          </div>
          <div className="ab-content">
            <h2>Our Story</h2>
            <p>
    Elektro was founded with a mission to simplify the way people shop for electronics. 
    We noticed how confusing and overwhelming online tech shopping could be — so we built Elektro as a clean, reliable, and user-friendly store 
    offering everything from smartphones and laptops to home appliances and accessories.
  </p>
            <a href="#" className="btn-explore">
              Explore
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="about-section mb-60">
        <div className="container">
          <div className="ab-pic">
            <img src={abpic3} alt="ElektroFashion Store" />
          </div>
          <div className="ab-content">
            <h2>Our Approach</h2>
            <p>
               At Elektro, we focus on delivering a seamless and secure shopping experience. 
    Our team handpicks top-rated products, ensures fast shipping, and supports you every step of the way — from purchase to after-sales service.
            </p>
            <p>
    We work closely with trusted suppliers and logistics partners to make sure every item arrives on time and in perfect condition. 
    With features like detailed product pages, easy returns, and multiple payment options, 
    Elektro makes shopping for electronics as smooth as possible.
  </p>
            <a href="#" className="btn-explore">
              Explore
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
