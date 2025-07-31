import React, { useState } from 'react';

const NewsletterHome = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace below line with actual submission logic (API call, etc.)
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <section className="newsletter-section py-5 mt-3" style={{ backgroundColor: '#e3d1c3' }}>
      <div className="container text-center ">
        <h4 className="category-title small" style={{color: '#db6d65'}}>Get 10% Off Your First Order</h4>
        <p className="description mb-4">
          Stay informed with the latest style drops, exclusive sales, <br />
          and fashion inspiration from Elektro.
        </p>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mb-3"
        >
          <input
            type="email"
            className="form-control w-100 w-md-auto"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn1">LEARN MORE</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterHome;
