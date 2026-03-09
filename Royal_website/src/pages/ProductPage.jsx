// AllProducts.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  getCategoriesWithCounts,
  getProductsByCategory 
} from "../data/productData";

function AllProducts() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const sectionRef = useRef(null);

  // Get categories with updated counts from data file
  const categories = getCategoriesWithCounts();

  // Get filtered products based on selected category
  const filteredProducts = getProductsByCategory(selectedCategory);

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

    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [selectedCategory]);

  const handleViewDetails = (productId) => {
    navigate(`/product/details/${productId}`);
  };

  const handleInquireNow = (productName) => {
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  return (
    <>
      <style>{`
        .products-page {
          padding: 15px 0;
          background: linear-gradient(135deg, #fff, var(--royal-cream));
          position: relative;
          overflow: hidden;
          font-family: var(--font-body);
        }

        .products-page::before {
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

        /* Breadcrumb */
        .breadcrumb {
          margin: 20px 0 40px;
          font-size: 14px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .breadcrumb a {
          color: var(--royal-gold);
          text-decoration: none;
          transition: color 0.3s;
          position: relative;
        }

        .breadcrumb a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          transition: width 0.3s;
        }

        .breadcrumb a:hover::after {
          width: 100%;
        }

        .breadcrumb span {
          color: #999;
          margin: 0 8px;
        }

        /* Page Title */
        .page-title {
          text-align: center;
          margin-bottom: 50px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .page-title h1 {
          font-size: 42px;
          color: var(--royal-deep-purple);
          font-weight: 800;
          letter-spacing: 1px;
          font-family: var(--font-heading);
          position: relative;
          display: inline-block;
          margin-bottom: 15px;
        }

        .page-title h1::after {
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

        .page-title p {
          font-size: 18px;
          color: #666;
          max-width: 700px;
          margin: 20px auto 0;
          line-height: 1.6;
        }

        /* Main Content Layout */
        .content-wrapper {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 30px;
        }

        /* Sidebar - Categories */
        .sidebar {
          background: #fff;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 20px;
          padding: 25px;
          height: fit-content;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.2s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .sidebar::before {
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
          opacity: 0.3;
        }

        .sidebar h3 {
          font-size: 20px;
          color: var(--royal-deep-purple);
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid rgba(212, 175, 55, 0.3);
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-item {
          margin-bottom: 10px;
        }

        .category-button {
          width: 100%;
          text-align: left;
          padding: 12px 15px;
          background: none;
          border: 1px solid transparent;
          border-radius: 12px;
          color: #555;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .category-button::before {
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

        .category-button:hover::before {
          left: 0;
        }

        .category-button:hover {
          color: white;
          border-color: transparent;
          transform: translateX(5px);
        }

        .category-button.active {
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border: none;
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }

        .category-button.active .count {
          color: white;
        }

        .count {
          color: #999;
          font-size: 13px;
          font-weight: 500;
        }

        /* Products Section */
        .products-area {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.4s;
        }

        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding: 20px 25px;
          background: #fff;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .products-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, var(--royal-gold), var(--royal-burgundy));
        }

        .products-header h2 {
          font-size: 24px;
          color: var(--royal-deep-purple);
          font-weight: 700;
          font-family: var(--font-heading);
        }

        .showing-info {
          color: #666;
          font-size: 14px;
          text-align: right;
        }

        .showing-info small {
          display: block;
          margin-top: 5px;
          color: #999;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .product-card {
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

        .product-card.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .product-card::before {
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

        .product-card:hover::before {
          opacity: 1;
        }

        .product-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(42, 26, 74, 0.15);
        }

        .product-image {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .product-card:hover .product-image img {
          transform: scale(1.1);
        }

        .category-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          padding: 5px 15px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }

        .product-info {
          padding: 20px;
          background: white;
        }

        .product-info h4 {
          font-size: 18px;
          font-weight: 700;
          color: var(--royal-deep-purple);
          margin-bottom: 10px;
          line-height: 1.4;
          font-family: var(--font-heading);
        }

        .product-info p {
          font-size: 18px;
          color: #242424;
          margin-bottom: 20px;
          line-height: 1.6;
          min-height: 60px;
        }

        .product-buttons {
          display: flex;
          gap: 12px;
          margin-top: 15px;
        }

        .view-details-btn {
          flex: 1;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        }

        .view-details-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .view-details-btn:hover::before {
          left: 100%;
        }

        .view-details-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
        }

        .inquire-btn {
          flex: 1;
          background: transparent;
          color: var(--royal-deep-purple);
          border: 2px solid rgba(212, 175, 55, 0.3);
          padding: 8px 15px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
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

        /* Pagination */
        .pagination {
          margin-top: 50px;
          display: flex;
          justify-content: center;
          gap: 10px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.6s;
        }

        .page-btn {
          width: 40px;
          height: 40px;
          border: 2px solid rgba(212, 175, 55, 0.3);
          background: white;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 600;
          color: var(--royal-deep-purple);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .page-btn::before {
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

        .page-btn:hover::before,
        .page-btn.active::before {
          left: 0;
        }

        .page-btn:hover,
        .page-btn.active {
          color: white;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }

        /* Staggered Animation Delays */
        .product-card:nth-child(1) { animation-delay: 0.1s; }
        .product-card:nth-child(2) { animation-delay: 0.2s; }
        .product-card:nth-child(3) { animation-delay: 0.3s; }
        .product-card:nth-child(4) { animation-delay: 0.4s; }
        .product-card:nth-child(5) { animation-delay: 0.5s; }
        .product-card:nth-child(6) { animation-delay: 0.6s; }

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

        /* Responsive */
        @media (max-width: 968px) {
          .content-wrapper {
            grid-template-columns: 1fr;
          }
          
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .page-title h1 {
            font-size: 36px;
          }
        }

        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .products-header {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
          
          .showing-info {
            text-align: center;
          }
          
          .page-title h1 {
            font-size: 28px;
          }
          
          .page-title p {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="products-page" ref={sectionRef}>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>&gt;</span> All Products
          </div>

          <div className="page-title">
            <h1>Our Products</h1>
            <p>
              Explore our comprehensive range of export-quality products, 
              carefully curated to meet international standards
            </p>
          </div>

          <div className="content-wrapper">
            <div className="sidebar">
              <h3>Filter by Category</h3>
              <ul className="category-list">
                {categories.map((category) => (
                  <li key={category.id} className="category-item">
                    <button
                      className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      {category.name}
                      <span className="count">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="products-area">
              <div className="products-header">
                <h2>{selectedCategory}</h2>
                <div className="showing-info">
                  <span>Showing {filteredProducts.length} products</span>
                  <small>
                    Page 1 of {Math.ceil(filteredProducts.length / 9)}
                  </small>
                </div>
              </div>

              <div className="products-grid">
                {filteredProducts.slice(0, 9).map((product) => (
                  <div className="product-card" key={product.id}>
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      <div className="category-badge">{product.category}</div>
                    </div>
                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <div className="product-buttons">
                        <button 
                          className="view-details-btn"
                          onClick={() => handleViewDetails(product.id)}
                        >
                          View Details
                        </button>
                        <button 
                          className="inquire-btn"
                          onClick={() => handleInquireNow(product.name)}
                        >
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length > 9 && (
                <div className="pagination">
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <button className="page-btn">→</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;