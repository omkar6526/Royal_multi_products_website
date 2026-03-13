// ProductPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  getCategoriesWithCounts,
  getProductsByCategory,
  products 
} from "../data/productData";

function ProductPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
  const categories = getCategoriesWithCounts();
  const productsPerPage = 9;

  // Scroll to top when category changes
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  // Filter products based on category
  useEffect(() => {
    if (category) {
      const matchedCategory = categories.find(c => 
        c.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-") === category ||
        c.slug === category
      );
      
      if (matchedCategory) {
        setSelectedCategory(matchedCategory.name);
        const categoryProducts = getProductsByCategory(matchedCategory.name);
        setFilteredProducts(categoryProducts);
      } else {
        setSelectedCategory("All Products");
        setFilteredProducts(products);
      }
    } else {
      setSelectedCategory("All Products");
      setFilteredProducts(products);
    }
    setCurrentPage(1);
  }, [category, categories]);

  // Animation observer
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

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage) || 1;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleViewDetails = (productId) => {
    navigate(`/product/details/${productId}`);
  };

  const handleInquireNow = (productName) => {
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  const handleCategoryClick = (categoryName) => {
    const categoryObj = categories.find(c => c.name === categoryName);
    const categorySlug = categoryObj?.slug || 
      categoryName.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
    
    if (categoryName === "All Products") {
      navigate('/products');
    } else {
      navigate(`/product/${categorySlug}`);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          padding: 15px 0 60px;
          background: linear-gradient(135deg, #fff, var(--royal-cream));
          position: relative;
          overflow: hidden;
          font-family: var(--font-body);
          min-height: 100vh;
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
          flex: 1;
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
          scroll-margin-top: 30px;
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
          background: #1e4bb3;
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
          margin-bottom: 40px;
        }

        /* Sidebar - Categories */
        .sidebar {
          background: #fff;
          border: 0px solid rgb(103, 103, 103);
          border-radius: 20px;
          padding: 25px;
          height: fit-content;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.2s;
          box-shadow: 0 10px 30px rgba(156, 156, 156, 0.74);
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
          border-bottom: 2px solid #1e4bb3;
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
          padding: 10px 12px;
          background: none;
          border: 1px solid transparent;
          border-radius: 10px;
          color: #080808;
          font-size: 14px;
          cursor: pointer;
          transition: color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
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
          left: 0;
          width: 100%;
          height: 100%;
          background: #1e4bb3;
          transform: translateX(-100%); 
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        .category-button:not(.active):hover::before {
          transform: translateX(0);
        }

        .category-button:not(.active):hover {
          color: white;
          border-color: transparent;
          transform: translateX(4px);
        }

        .category-button:not(.active):hover .count {
          color: rgba(255, 255, 255, 0.8);
        }

        .category-button.active {
          background: #d58700;
          color: white;
          border: none;
          box-shadow: 0 5px 15px rgba(213, 135, 0, 0.3);
          cursor: default;
          transform: none;
        }

        .category-button.active .count {
          color: white;
        }

        .category-button.active::before {
          display: none;
        }

        .count {
          color: #999;
          font-size: 12px;
          font-weight: 500;
          transition: color 0.3s ease;
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
          margin-bottom: 25px;
          padding: 15px 20px;
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
          font-size: 22px;
          color: var(--royal-deep-purple);
          font-weight: 700;
          font-family: var(--font-heading);
        }

        .showing-info {
          color: #000000;
          font-size: 14px;
          text-align: right;
        }

        .showing-info small {
          display: block;
          margin-top: 5px;
          color: #060606;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }
          
        .product-card {
          background: #ffffff;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid #c5c5c5;
          opacity: 0;
          transform: translateY(30px);
          box-shadow: none;
        }

        .product-card.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .product-image {
          height: 220px;
          overflow: hidden;
          position: relative;
          background: #f9f9f9;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 10px;
          transition: transform 0.8s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .category-badge {
          position: absolute;
          top: 0;
          left: 0;
          background: #bcad2c92;
          color: #fff;
          padding: 8px 20px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-radius: 0;
          z-index: 2;
          box-shadow: none;
        }

        .product-info {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          background: white;
        }

        .product-info h4 {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 15px;
          font-family: inherit;
        }

        .product-info p {
          font-size: 15px;
          color: #000000;
          line-height: 1.8;
          margin-bottom: 30px;
          min-height: auto;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-buttons {
          margin-top: auto;
          display: flex;
          border-top: 1px solid #eee;
          padding-top: 20px;
          gap: 0;
        }

        .view-details-btn {
          background: none;
          color: #1a1a1a;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 1px;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0;
          flex: none;
          box-shadow: none !important;
          transform: none !important;
        }

        .view-details-btn:hover {
          color: #dcaa03;
        }

        .view-details-btn::before { display: none; }

        .product-buttons .inquire-btn {
          margin-left: auto;
          background: #1e4bb3;
          color: white;
          padding: 13px 18px;
          border-radius: 4px;
          font-size: 16px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
          flex: none;
          height: auto;
          line-height: 1;
        }

        .product-buttons .inquire-btn:hover {
          background: #d58700;
          color: white;
          transform: translateY(-2px);
        }

        .product-buttons .inquire-btn::before { display: none; }
      
        .pagination {
          margin-top: 10px;
          margin-bottom: 10px;
          display: flex;
          justify-content: center;
          gap: 8px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.6s;
        }

        .page-btn {
          min-width: 36px;
          height: 36px;
          padding: 0 8px;
          border: 2px solid rgba(11, 43, 168, 0.3);
          background: white;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 600;
          font-size: 13px;
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

      <div className="products-page">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>&gt;</span> 
            <Link to="/products">All Products</Link>
            {selectedCategory !== "All Products" && (
              <>
                <span>&gt;</span> 
                <span>{selectedCategory}</span>
              </>
            )}
          </div>

          <div className="content-wrapper">
            {/* Sidebar Categories */}
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

            {/* Products Area */}
            <div className="products-area">
              <div className="products-header">
                <h2>{selectedCategory}</h2>
                <div className="showing-info">
                  <span>Showing {currentProducts.length} of {filteredProducts.length} products</span>
                  {totalPages > 1 && (
                    <small>
                      Page {currentPage} of {totalPages}
                    </small>
                  )}
                </div>
              </div>

              {currentProducts.length > 0 ? (
                <>
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

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="pagination">
                      <button 
                        className="page-btn"
                        onClick={() => handlePageChange(currentPage - 1)}
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
                          >
                            {pageNum}
                          </button>
                        )
                      ))}
                      
                      <button 
                        className="page-btn"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        →
                      </button>
                    </div>
                  )}
                </>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;