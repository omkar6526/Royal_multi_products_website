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
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const sectionRef = useRef(null);
  const pageTitleRef = useRef(null);

  // Get categories with updated counts from data file
  const categories = getCategoriesWithCounts();

  // Get filtered products based on selected category
  const filteredProducts = getProductsByCategory(selectedCategory);
  
  // Pagination logic
  const productsPerPage = 9;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage) || 1; // Always at least 1 page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

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
  }, [selectedCategory, currentPage]);

  const handleViewDetails = (productId) => {
    navigate(`/product/details/${productId}`);
  };

  const handleInquireNow = (productName) => {
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1); // Reset to first page when changing category
    // Scroll to page title section
    if (pageTitleRef.current) {
      pageTitleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to page title section when changing pages
    if (pageTitleRef.current) {
      pageTitleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pageNumbers.push(i);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pageNumbers.push(i);
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pageNumbers.push(i);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <>
      <style>{`
        .products-page {
          padding: 15px 0 60px; /* Increased bottom padding */
          background: linear-gradient(135deg, #fff, var(--royal-cream));
          position: relative;
          overflow: hidden;
          font-family: var(--font-body);
          min-height: 100vh; /* Ensure minimum height */
          display: flex;
          flex-direction: column;
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
          flex: 1; /* Take available space */
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
          scroll-margin-top: 30px; /* Add scroll margin for better visibility */
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
          margin-bottom: 40px; /* Add margin at bottom */
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
          padding: 10px 12px; /* Reduced padding */
          background: none;
          border: 1px solid transparent;
          border-radius: 10px; /* Slightly smaller radius */
          color: #555;
          font-size: 14px; /* Slightly smaller font */
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

        /* Only show hover animation on non-active categories */
        .category-button:not(.active):hover::before {
          left: 0;
        }

        .category-button:not(.active):hover {
          color: white;
          border-color: transparent;
          transform: translateX(3px); /* Reduced transform */
        }

        /* Active category styling - no hover animation */
        .category-button.active {
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border: none;
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
          cursor: default;
        }

        .category-button.active .count {
          color: white;
        }

        .category-button.active::before {
          display: none;
        }

        .count {
          color: #999;
          font-size: 12px; /* Smaller count font */
          font-weight: 500;
        }

        .category-button.active .count {
          color: white;
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
          margin-bottom: 25px; /* Reduced margin */
          padding: 15px 20px; /* Reduced padding */
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
          font-size: 22px; /* Slightly smaller */
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
          gap: 20px; /* Reduced gap */
          margin-bottom: 20px; /* Add margin at bottom */
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
          height: 200px; /* Reduced height */
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
          top: 12px; /* Slightly adjusted */
          left: 12px;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          padding: 4px 12px; /* Reduced padding */
          border-radius: 30px;
          font-size: 10px; /* Smaller font */
          font-weight: 600;
          letter-spacing: 0.5px; /* Reduced letter spacing */
          text-transform: uppercase;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }

        .product-info {
          padding: 15px; /* Reduced padding */
          background: white;
        }

        .product-info h4 {
          font-size: 16px; /* Smaller font */
          font-weight: 700;
          color: var(--royal-deep-purple);
          margin-bottom: 8px; /* Reduced margin */
          line-height: 1.4;
          font-family: var(--font-heading);
        }

        .product-info p {
          font-size: 14px; /* Smaller font */
          color: #242424;
          margin-bottom: 15px; /* Reduced margin */
          line-height: 1.5;
          min-height: 42px; /* Reduced min-height */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-buttons {
          display: flex;
          gap: 10px; /* Reduced gap */
          margin-top: 10px; /* Reduced margin */
        }

        .view-details-btn {
          flex: 1;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border: none;
          padding: 8px 12px; /* Reduced padding */
          border-radius: 8px; /* Smaller radius */
          font-size: 12px; /* Smaller font */
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 0.3px; /* Reduced letter spacing */
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
          padding: 6px 12px; /* Reduced padding */
          border-radius: 8px; /* Smaller radius */
          font-size: 12px; /* Smaller font */
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 0.3px; /* Reduced letter spacing */
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

        /* Pagination - ALWAYS VISIBLE */
        .pagination {
          margin-top: 30px; /* Reduced margin */
          margin-bottom: 20px; /* Add bottom margin */
          display: flex;
          justify-content: center;
          gap: 8px; /* Reduced gap */
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.6s;
        }

        .page-btn {
          min-width: 36px; /* Smaller size */
          height: 36px; /* Smaller size */
          padding: 0 8px;
          border: 2px solid rgba(212, 175, 55, 0.3);
          background: white;
          border-radius: 10px; /* Smaller radius */
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 600;
          font-size: 13px; /* Smaller font */
          color: var(--royal-deep-purple);
          position: relative;
          overflow: hidden;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .page-btn:not(:disabled)::before {
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

        .page-btn:not(:disabled):hover::before,
        .page-btn.active:not(:disabled)::before {
          left: 0;
        }

        .page-btn:not(:disabled):hover,
        .page-btn.active:not(:disabled) {
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }

        .page-dots {
          display: flex;
          align-items: center;
          color: var(--royal-deep-purple);
          font-weight: 600;
          padding: 0 5px;
          font-size: 14px;
        }

        /* Empty state styling */
        .empty-products {
          text-align: center;
          padding: 60px 20px;
          background: #fff;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 20px;
          margin-bottom: 20px;
        }

        .empty-products p {
          font-size: 18px;
          color: #666;
          margin-bottom: 20px;
        }

        .empty-products .browse-all-btn {
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .empty-products .browse-all-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
        }

        /* Staggered Animation Delays */
        .product-card:nth-child(1) { animation-delay: 0.1s; }
        .product-card:nth-child(2) { animation-delay: 0.2s; }
        .product-card:nth-child(3) { animation-delay: 0.3s; }
        .product-card:nth-child(4) { animation-delay: 0.4s; }
        .product-card:nth-child(5) { animation-delay: 0.5s; }
        .product-card:nth-child(6) { animation-delay: 0.6s; }
        .product-card:nth-child(7) { animation-delay: 0.7s; }
        .product-card:nth-child(8) { animation-delay: 0.8s; }
        .product-card:nth-child(9) { animation-delay: 0.9s; }

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
          
          .pagination {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div className="products-page" ref={sectionRef}>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>&gt;</span> All Products
          </div>

          {/* <div className="page-title" ref={pageTitleRef}>
            <h1>Our Products</h1>
            <p>
              Explore our comprehensive range of export-quality products, 
              carefully curated to meet international standards
            </p>
          </div> */}

          <div className="content-wrapper">
            <div className="sidebar">
              <h3>Filter by Category</h3>
              <ul className="category-list">
                {categories.map((category) => (
                  <li key={category.id} className="category-item">
                    <button
                      className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
                      onClick={() => handleCategoryClick(category.name)}
                      onMouseEnter={() => setHoveredCategory(category.name)}
                      onMouseLeave={() => setHoveredCategory(null)}
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
                  <span>Showing {currentProducts.length} of {filteredProducts.length} products</span>
                  <small>
                    Page {currentPage} of {totalPages}
                  </small>
                </div>
              </div>

              {currentProducts.length > 0 ? (
                <div className="products-grid">
                  {currentProducts.map((product) => (
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
              ) : (
                <div className="empty-products">
                  <p>No products found in this category.</p>
                  <button 
                    className="browse-all-btn"
                    onClick={() => handleCategoryClick("All Products")}
                  >
                    Browse All Products
                  </button>
                </div>
              )}

              {/* Pagination - ALWAYS VISIBLE even with 1 page */}
              <div className="pagination">
                <button 
                  className="page-btn"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  ←
                </button>
                
                {getPageNumbers().map((pageNum, index) => (
                  pageNum === '...' ? (
                    <span key={`dots-${index}`} className="page-dots">...</span>
                  ) : (
                    <button
                      key={pageNum}
                      className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                      onClick={() => handlePageChange(pageNum)}
                      disabled={totalPages === 1} // Disable if only one page
                    >
                      {pageNum}
                    </button>
                  )
                ))}
                
                <button 
                  className="page-btn"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;