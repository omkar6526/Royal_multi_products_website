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
        .featured-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #fff, var(--royal-cream));
          position: relative;
          overflow: hidden;
        }

        .featured-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
          animation: rotate 40s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
          position: relative;
          z-index: 1;
        }

        .section-title {
          text-align: center;
          margin-bottom: 50px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .section-title h2 {
          font-size: 42px;
          color: var(--royal-deep-purple);
          font-weight: 800;
          letter-spacing: 1px;
          font-family: var(--font-heading);
          position: relative;
          display: inline-block;
          margin-bottom: 15px;
        }

        .section-title h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          border-radius: 2px;
        }

        .section-title p {
          font-size: 18px;
          color: #666;
          max-width: 700px;
          margin: 20px auto 0;
          line-height: 1.6;
          font-family: var(--font-body);
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .featured-card {
          background: #fff;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .featured-card.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .featured-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .featured-card:hover::before {
          opacity: 1;
        }

        .featured-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(42, 26, 74, 0.15);
        }

        .card-image {
          height: 240px;
          position: relative;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .featured-card:hover .card-image img {
          transform: scale(1.1);
        }

        .featured-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          animation: float 3s ease-in-out infinite;
        }

        .card-content {
          padding: 25px;
          background: white;
        }

        .product-category {
          font-size: 13px;
          color: var(--royal-gold);
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
          text-transform: uppercase;
          font-family: var(--font-body);
        }

        .product-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--royal-deep-purple);
          margin-bottom: 12px;
          line-height: 1.4;
          font-family: var(--font-heading);
        }

        .product-description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          min-height: 70px;
          font-family: var(--font-body);
        }

        .card-buttons {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .details-btn {
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          flex: 1;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        }

        .details-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .details-btn:hover::before {
          left: 100%;
        }

        .details-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
        }

        .inquire-btn {
          background: transparent;
          color: var(--royal-deep-purple);
          border: 2px solid rgba(212, 175, 55, 0.3);
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          flex: 1;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .inquire-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          transition: left 0.3s;
          z-index: -1;
        }

        .inquire-btn:hover::before {
          left: 0;
        }

        .inquire-btn:hover {
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
        }

        .view-all-container {
          text-align: center;
          margin-top: 50px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.6s;
        }

        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--royal-deep-purple);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          background: none;
          border: none;
          padding: 12px 30px;
          border: 2px solid var(--royal-gold);
          border-radius: 50px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .view-all-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          transition: left 0.3s;
          z-index: -1;
        }

        .view-all-link:hover::before {
          left: 0;
        }

        .view-all-link:hover {
          color: white;
          border-color: transparent;
          gap: 15px;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
        }

        .arrow {
          font-size: 18px;
          transition: transform 0.3s;
        }

        .view-all-link:hover .arrow {
          transform: translateX(5px);
        }

        /* Staggered Animation Delays */
        .featured-card:nth-child(1) { animation-delay: 0.1s; }
        .featured-card:nth-child(2) { animation-delay: 0.2s; }
        .featured-card:nth-child(3) { animation-delay: 0.3s; }
        .featured-card:nth-child(4) { animation-delay: 0.4s; }
        .featured-card:nth-child(5) { animation-delay: 0.5s; }
        .featured-card:nth-child(6) { animation-delay: 0.6s; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 968px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title h2 {
            font-size: 32px;
          }
          
          .card-image {
            height: 200px;
          }
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