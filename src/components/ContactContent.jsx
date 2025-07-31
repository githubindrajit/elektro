import React from "react";

// import banner5 from '../assets/images/banner5.jpg';

const ContactContent = () => {
  return (
    <>
      <section className="inner-hero-banner">
        {/* <img className="d-block d-md-none banner-inner-mob" src={banner5} alt="banner inner" /> */}
        <div className="overlay">
          <div className="container">
            <h1>Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="text-center py-5 bg-white">
        <div className="container">
          <h2 className="h2">Get in Touch</h2>
          <p className="subtitle">----------</p>

<p className="description contact-cont" >
Have a question, need help with an order, or just want to get in touch? We're here to help! 
At <strong>Elektro</strong>, customer support is our top priority. Whether it’s product info, tracking updates, or service inquiries — our team is ready to assist you.
<p className="mb-3"></p>
Reach out via the contact form below or email us directly at <a href="mailto:support@elektro.com">support@elektro.com</a>. 
We aim to respond to all queries within 24 hours.
<p className="mb-3"></p>
For urgent matters, you can also call us at <strong>+91-XXXXXXXXXX</strong> during business hours (Mon–Sat, 10 AM to 6 PM).
</p>

        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 contact-form pt-0">
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" />

                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="comment">
                  Comment <span className="required">*</span>
                </label>
                <textarea id="comment" name="comment" rows="6" required></textarea>

                <button type="submit" className="btn-submit mt-5">
                  Submit Contact
                </button>
              </form>
            </div>

            <div className="col-md-2"></div>

            <div className="col-md-3 contact-info">
              <p>
                We’d love to hear from you – please use the form to send us your message or ideas.
                Or simply pop in for a cup of fresh tea and a cookie:
              </p>
              <p><strong>💬</strong> TEXT: 091-123-ELLA</p>
              <p><strong>✉️</strong> email@domain.com</p>
              <p>
                685 Market Street<br />
                San Francisco, CA 94105,<br />
                United States
              </p>
              <hr />
              <p>
                <strong>Opening Hours:</strong><br />
                MON to SAT: 9:00AM – 10:00PM<br />
                SUN: 10:00AM – 6:00PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Location Section */}
      <section className="store-location">
        <div className="location-header mb-5 text-center">
          <h2 className="h2">Find Store Location Near you</h2>
          <p className="subtitle">----------</p>
          <p>
            We have 06 stores throughout “Country” and more in works. Complete the search
            details below to find a Ella store near you.
          </p>
        </div>
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.040264151616!2d106.71615547589634!3d10.807399689347926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d76951a193%3A0x14a1dbe3a4f99860!2s758%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20Ph%C6%B0%E1%BB%9Dng%2025%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1717043108822!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location Map"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactContent;

