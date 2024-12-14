import React from 'react';
import '../style/Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Perfect Look</h1>
          <p>Get personalized makeup recommendations based on your skin tone, type, and style preferences.</p>
          <a href="#recommendations" className="btn-primary">Get Recommendations</a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Categories</h2>
        <div className="categories">
          <div className="category-card">
            <img src="/path/to/face-products.jpg" alt="Face Makeup" />
            <h3>Face Makeup</h3>
          </div>
          <div className="category-card">
            <img src="/path/to/eye-products.jpg" alt="Eye Makeup" />
            <h3>Eye Makeup</h3>
          </div>
          <div className="category-card">
            <img src="/path/to/lip-products.jpg" alt="Lip Makeup" />
            <h3>Lip Makeup</h3>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <h2>Top Picks for You</h2>
        <div className="featured-products">
          <div className="product-card">
            <img src="/path/to/product1.jpg" alt="Product 1" />
            <h3>Hydrating Foundation</h3>
            <p>$29.99</p>
            <a href="#buy" className="btn-secondary">Buy Now</a>
          </div>
          <div className="product-card">
            <img src="/path/to/product2.jpg" alt="Product 2" />
            <h3>Long-Wear Lipstick</h3>
            <p>$19.99</p>
            <a href="#buy" className="btn-secondary">Buy Now</a>
          </div>
          <div className="product-card">
            <img src="/path/to/product3.jpg" alt="Product 3" />
            <h3>Smokey Eyeshadow Palette</h3>
            <p>$34.99</p>
            <a href="#buy" className="btn-secondary">Buy Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
