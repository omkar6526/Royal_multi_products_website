import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AllProducts() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const categories = [
    { name: "All Products", count: 13 },
    { name: "Clothing & Textiles", count: 5 },
    { name: "Soaps", count: 2 },
    { name: "Spices", count: 2 },
    { name: "Grapes", count: 2 },
    { name: "Religious Items", count: 2 },
  ];

  const products = [
    {
      id: 1,
      name: "Premium School Uniforms",
      category: "Clothing & Textiles",
      image: "https://image.made-in-china.com/203f0j00KAlouVCwLacp/blog.jpg",
      description: "High-quality, durable school uniforms in various sizes"
    },
    {
      id: 2,
      name: "Medical Hospital Aprons",
      category: "Clothing & Textiles",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=300&fit=crop",
      description: "Sterile, comfortable aprons for medical professionals"
    },
    {
      id: 3,
      name: "Luxury Cotton Towels",
      category: "Clothing & Textiles",
      image: "https://images.unsplash.com/photo-1583848923571-8e4e59e9b1e6?w=400&h=300&fit=crop",
      description: "Soft, absorbent premium towels for hotels and homes"
    },
    {
      id: 4,
      name: "Natural Handmade Soap",
      category: "Soaps",
      image: "https://media.istockphoto.com/id/517495506/photo/bars-of-homemade-soaps-honey-or-oil-and-healing-herbs.jpg?s=612x612&w=0&k=20&c=bQPtsclGfpY5yIjyRDSSSRn4wAy94O1DFsQr2aoz0K4=",
      description: "Organic handcrafted soap bars with natural ingredients"
    },
    {
      id: 5,
      name: "Organic Bath Soaps",
      category: "Soaps",
      image: "https://images.unsplash.com/photo-1600857063875-5a80c3a84f71?w=400&h=300&fit=crop",
      description: "Premium organic bath soaps for daily use"
    },
    {
      id: 6,
      name: "Premium Spice Collection",
      category: "Spices",
      image: "https://deliciousfoods.in/cdn/shop/articles/spices.jpg?v=1742457010",
      description: "Authentic Indian spice blends for cooking"
    },
    {
      id: 7,
      name: "Organic Spices",
      category: "Spices",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
      description: "Pure organic spices from trusted farms"
    },
    {
      id: 8,
      name: "Green Grapes",
      category: "Grapes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOnf2qtnyvAsUE4dwzAnI5-EKeElSfCOX7w&s",
      description: "Fresh export-quality green grapes"
    },
    {
      id: 9,
      name: "Red Grapes",
      category: "Grapes",
      image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=300&fit=crop",
      description: "Sweet and juicy red grapes"
    },
    {
      id: 10,
      name: "Prayer Beads (Tasbih)",
      category: "Religious Items",
      image: "https://media.istockphoto.com/id/1360990467/photo/souvenir-stall-with-variety-of-colorful-souvenirs-wooden-beads-bracelets-and-amulets-street.jpg?s=612x612&w=is&k=20&c=fg4Q8JA1cUKXLTFej8BZKCRd7vViggYK1DaPYuM6YTU=",
      description: "High-quality prayer beads for spiritual practice"
    },
    {
      id: 11,
      name: "Ihram Belts",
      category: "Religious Items",
      image: "https://images.unsplash.com/photo-1614192377611-1d5a0e1514fc?w=400&h=300&fit=crop",
      description: "Comfortable belts for Ihram during pilgrimage"
    }
  ];

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleInquireNow = (productName) => {
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  return (
    <>
      <style>{`
        .products-page {
          padding: 15px 0;
          background: #fff;
          font-family: Arial, sans-serif;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
        }


        .breadcrumb {
          margin: 20px 0;
          color: #666;
          font-size: 14px;
        }

        .breadcrumb a {
          color: #d4a531;
          text-decoration: none;
        }

        .breadcrumb span {
          color: #999;
        }

        /* Main Content Layout */
        .content-wrapper {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 30px;
        }

        /* Sidebar - Categories */
        .sidebar {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          height: fit-content;
        }

        .sidebar h3 {
          font-size: 18px;
          color: #000;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #d4a531;
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
          padding: 8px 12px;
          background: none;
          border: none;
          border-radius: 4px;
          color: #555;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .category-button:hover {
          background: #e9ecef;
          color: #d4a531;
        }

        .category-button.active {
          background: #d4a531;
          color: white;
        }

        .category-button.active .count {
          color: white;
        }

        .count {
          color: #999;
          font-size: 12px;
        }

        /* Products Section */
        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eaeaea;
        }

        .products-header h2 {
          font-size: 24px;
          color: #000;
        }

        .showing-info {
          color: #666;
          font-size: 14px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .product-card {
          background: #fff;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s;
        }

        .product-card:hover {
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transform: translateY(-5px);
          border-color: #d4a531;
        }

        .product-image {
          height: 200px;
          overflow: hidden;
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

        .product-info {
          padding: 15px;
        }

        .product-info h4 {
          font-size: 16px;
          color: #333;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .product-info p {
          font-size: 13px;
          color: #666;
          margin-bottom: 15px;
          line-height: 1.5;
        }

        .product-buttons {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .view-details-btn {
          flex: 1;
          background: #d4a531;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-details-btn:hover {
          background: #b88c2a;
        }

        .inquire-btn {
          flex: 1;
          background: white;
          color: #333;
          border: 1px solid #d4a531;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .inquire-btn:hover {
          background: #d4a531;
          color: white;
        }

        /* Pagination */
        .pagination {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .page-btn {
          width: 35px;
          height: 35px;
          border: 1px solid #e0e0e0;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .page-btn:hover,
        .page-btn.active {
          background: #d4a531;
          color: white;
          border-color: #d4a531;
        }

        /* Category Label */
        .category-label {
          display: inline-block;
          background: #f0f0f0;
          color: #666;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 12px;
          margin-bottom: 8px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .content-wrapper {
            grid-template-columns: 1fr;
          }
          
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
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

      <div className="products-page">
        <div className="container">

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>&gt;</span> All Products
          </div>

          {/* Main Content */}
          <div className="content-wrapper">
            {/* Sidebar Categories */}
            <div className="sidebar">
              <h3>Filter by Category</h3>
              <ul className="category-list">
                {categories.map((category, index) => (
                  <li key={index} className="category-item">
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

            {/* Products Area */}
            <div className="products-area">
              <div className="products-header">
                <h2>All Products</h2>
                <div className="showing-info">
                  Showing all {filteredProducts.length} products
                  <br />
                  <small>Showing 1-{Math.min(9, filteredProducts.length)} of {filteredProducts.length} products</small>
                </div>
              </div>

              {/* Products Grid */}
              <div className="products-grid">
                {filteredProducts.slice(0, 9).map((product) => (
                  <div className="product-card" key={product.id}>
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-info">
                      <span className="category-label">{product.category}</span>
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
                          Inquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {filteredProducts.length > 9 && (
                <div className="pagination">
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
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