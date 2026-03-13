// ProductPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  getCategoriesWithCounts,
  getProductsByCategory,
  products 
} from "../data/productData";

function ProductPage() {
  const { category } = useParams(); // Get category from URL
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Get all categories
  const categories = getCategoriesWithCounts();
  
  // Products per page
  const productsPerPage = 9;

  // FIX: Scroll to top when component mounts or category changes
  useEffect(() => {
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]); // This ensures scrolling to top when category changes

  // Convert URL param to category name and filter products
  useEffect(() => {
    if (category) {
      // Try to find category by matching slug
      const matchedCategory = categories.find(c => 
        c.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-") === category ||
        c.slug === category
      );
      
      if (matchedCategory) {
        setSelectedCategory(matchedCategory.name);
        const categoryProducts = getProductsByCategory(matchedCategory.name);
        setFilteredProducts(categoryProducts);
      } else {
        // If no match, show all products
        setSelectedCategory("All Products");
        setFilteredProducts(products);
      }
    } else {
      setSelectedCategory("All Products");
      setFilteredProducts(products);
    }
    setCurrentPage(1); // Reset to first page when category changes
  }, [category, categories]);

  // Pagination logic
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

  // Generate page numbers for pagination
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
    <div className="product-page-container">
      <style>{`
        .product-page-container {
          padding: 40px 0;
          background: #f8f9fa;
          min-height: 100vh;
        }

        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Breadcrumb */
        .breadcrumb {
          margin-bottom: 30px;
          font-size: 14px;
        }

        .breadcrumb a {
          color: #1e4bb3;
          text-decoration: none;
        }

        .breadcrumb a:hover {
          text-decoration: underline;
        }

        .breadcrumb span {
          color: #999;
          margin: 0 8px;
        }

        /* Page Title */
        .page-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-title h1 {
          font-size: 36px;
          color: #1a1a1a;
          font-weight: 700;
          margin-bottom: 15px;
          position: relative;
          display: inline-block;
        }

        .page-title h1:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: #bcad2c;
        }

        .page-title p {
          font-size: 16px;
          color: #666;
          max-width: 700px;
          margin: 20px auto 0;
        }

        /* Main Content Layout */
        .content-wrapper {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 30px;
        }

        /* Sidebar - Categories */
        .sidebar {
          background: white;
          border-radius: 10px;
          padding: 25px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          height: fit-content;
        }

        .sidebar h3 {
          font-size: 18px;
          color: #1a1a1a;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #bcad2c;
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
          padding: 10px 15px;
          background: none;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          color: #333;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .category-button:hover {
          background: #f0f0f0;
          border-color: #bcad2c;
        }

        .category-button.active {
          background: #bcad2c;
          color: white;
          border-color: #bcad2c;
        }

        .category-button.active .count {
          color: white;
        }

        .count {
          color: #999;
          font-size: 12px;
          font-weight: 500;
        }

        /* Products Grid */
        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 15px 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .products-header h2 {
          font-size: 20px;
          color: #1a1a1a;
          font-weight: 600;
        }

        .showing-info {
          color: #666;
          font-size: 14px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-bottom: 30px;
        }

        .product-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .product-image {
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .product-card:hover .product-image img {
          transform: scale(1.1);
        }

        .category-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(188, 173, 44, 0.9);
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .product-info {
          padding: 20px;
        }

        .product-info h4 {
          font-size: 18px;
          color: #1a1a1a;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .product-info p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-buttons {
          display: flex;
          gap: 10px;
        }

        .view-details-btn {
          flex: 1;
          padding: 10px;
          background: transparent;
          border: 1px solid #1e4bb3;
          color: #1e4bb3;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-details-btn:hover {
          background: #1e4bb3;
          color: white;
        }

        .inquire-btn {
          flex: 1;
          padding: 10px;
          background: #bcad2c;
          border: none;
          color: white;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .inquire-btn:hover {
          background: #d58700;
        }

        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 30px;
        }

        .page-btn {
          min-width: 40px;
          height: 40px;
          border: 1px solid #e0e0e0;
          background: white;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 500;
        }

        .page-btn:hover:not(:disabled) {
          background: #bcad2c;
          color: white;
          border-color: #bcad2c;
        }

        .page-btn.active {
          background: #bcad2c;
          color: white;
          border-color: #bcad2c;
        }

        .page-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .page-dots {
          display: flex;
          align-items: center;
          padding: 0 5px;
          color: #666;
        }

        /* Empty State */
        .empty-products {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 10px;
        }

        .empty-products p {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }

        .browse-all-btn {
          padding: 12px 30px;
          background: #bcad2c;
          border: none;
          color: white;
          border-radius: 5px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .browse-all-btn:hover {
          background: #d58700;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .content-wrapper {
            grid-template-columns: 1fr;
          }
          
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .products-header {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>

      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> 
          <span>&gt;</span>
          <Link to="/products">Products</Link>
          {selectedCategory !== "All Products" && (
            <>
              <span>&gt;</span>
              <span>{selectedCategory}</span>
            </>
          )}
        </div>

        {/* Page Title */}
        <div className="page-title">
          <h1>{selectedCategory}</h1>
          <p>
            {selectedCategory === "All Products" 
              ? "Explore our comprehensive range of export-quality products"
              : `Browse our collection of ${selectedCategory.toLowerCase()}`}
          </p>
        </div>

        <div className="content-wrapper">
          {/* Sidebar Categories */}
          <div className="sidebar">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((cat) => (
                <li key={cat.id} className="category-item">
                  <button
                    className={`category-button ${selectedCategory === cat.name ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(cat.name)}
                  >
                    {cat.name}
                    <span className="count">({cat.count})</span>
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
                Showing {currentProducts.length} of {filteredProducts.length} products
                {totalPages > 1 && <small> (Page {currentPage} of {totalPages})</small>}
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
                            Details
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
  );
}

export default ProductPage;