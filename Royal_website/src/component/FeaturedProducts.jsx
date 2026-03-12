// FeaturedProducts.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getFeaturedProducts } from "../data/productData";

function FeaturedProducts() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  
  const featuredItems = getFeaturedProducts();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.featured-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Helper function to create slug from title
  const createSlug = (title) => {
    return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
  };

  return (
    <>
      <style>{`
        /* FeaturedProducts.css style block */
        .featured-section {
          padding: 100px 0;
          background-color: #fcfcfc; /* Clean, off-white background */
          position: relative;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1250px;
        }

        /* --- Section Header --- */
        .section-title {
          text-align: left; /* Alignment change for a more editorial feel */
          margin-bottom: 60px;
          border-left: 5px solid var(--royal-gold);
          padding-left: 25px;
        }

        .section-title h2 {
          font-size: clamp(32px, 5vw, 48px);
          color: #1a1a1a;
          font-weight: 300; /* Lighter weight is more luxurious */
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0;
        }

        .section-title p {
          font-size: 18px;
          color: #060606;
          max-width: 600px;
          margin-top: 10px;
        }

        /* --- The Grid --- */
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
        }

        /* --- The Card --- */
        .featured-card {
          background: #ffffff;
          border-radius: 0px; /* Sharp edges feel more architectural/premium */
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid black;
        }

        .featured-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        /* --- Image Section (The Main Focus) --- */
        .card-image {
          height: 320px;
          overflow: hidden;
          position: relative;
          background: #f9f9f9;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Shows the whole product clearly */
          padding: 20px;
          transition: transform 0.8s ease;
        }

        .featured-card:hover .card-image img {
          transform: scale(1.05);
        }

        .featured-tag {
          position: absolute;
          top: 0;
          left: 0;
          background: #eca64a;
          color: #fff;
          padding: 12px 25px;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* --- Content Section --- */
        .card-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .product-category {
          font-size: 12px;
          color: var(--royal-gold);
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .product-title {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .product-description {
          font-size: 15px;
          color: #000000;
          line-height: 1.8;
          margin-bottom: 30px;
          /* Clamp text to 3 lines to keep cards uniform */
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* --- Buttons --- */
        .card-buttons {
          margin-top: auto;
          display: flex;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }

        .details-btn {
          background: none;
          color: #1a1a1a;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 17px;
          letter-spacing: 1px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .details-btn:hover {
          color: var(--royal-gold);
        }

        .inquire-btn {
          margin-left: auto;
          background: #1a1a1a;
          color: white;
          padding: 20px 30px;
          border-radius: 4px;
          font-size: 18px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
        }

        .inquire-btn:hover {
          background: var(--royal-gold);
        }

        /* --- View All Section --- */
        .view-all-container {
          margin-top: 80px;
          text-align: center;
        }

        .view-all-link {
          background: transparent;
          border: 1px solid #1a1a1a;
          padding: 15px 40px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-all-link:hover {
          background: #1a1a1a;
          color: #fff;
        }
      `}</style>

      <section className="featured-section" ref={sectionRef}>
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>
              Discover our most popular export-quality products, carefully selected for you
            </p>
          </div>

          <div className="featured-grid">
            {featuredItems.map((item) => (
              <div className="featured-card" key={item.id}>
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="featured-tag">Featured</div>
                </div>

                <div className="card-content">
                  <div className="product-category">{item.category}</div>
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-description">{item.description}</p>
                  
                  <div className="card-buttons">
                    <button 
                      className="details-btn"
                      onClick={() => navigate(`/product/details/${item.id}`)}
                    >
                      View Details
                    </button>
                    <button 
                      className="inquire-btn"
                      onClick={() => navigate(`/contact?product=${encodeURIComponent(item.title)}`)}
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="view-all-container">
            <button className="view-all-link" onClick={() => navigate('/products')}>
              View All Products <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;