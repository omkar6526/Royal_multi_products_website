// ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  getProductById,
  getRelatedProducts,
  products 
} from "../data/productData";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const foundProduct = getProductById(id);
      setProduct(foundProduct || null);
      setLoading(false);
    }, 500);

    window.scrollTo(0, 0);
  }, [id]);

  const handleInquireNow = () => {
    if (product) {
      navigate(`/contact?product=${encodeURIComponent(product.name)}`);
    }
  };

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => prev > 1 ? prev - 1 : 1);
    }
  };

  const handleRelatedProductClick = (productId) => {
    navigate(`/product/details/${productId}`);
  };

  // Get related products
  const relatedProducts = product ? getRelatedProducts(product.id) : [];

  if (loading) {
    return (
      <div className="product-details-loading">
        <div className="loader"></div>
        <style>{`
          .product-details-loading {
            min-height: 60vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #fff, #fdf8f0);
          }
          .loader {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(212, 175, 55, 0.3);
            border-radius: 50%;
            border-top-color: var(--royal-gold);
            animation: spin 1s ease-in-out infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/products')} className="back-btn">
          Back to Products
        </button>
        <style>{`
          .product-not-found {
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px;
          }
          .product-not-found h2 {
            font-size: 32px;
            color: var(--royal-deep-purple);
            margin-bottom: 15px;
          }
          .product-not-found p {
            color: #666;
            margin-bottom: 30px;
          }
          .back-btn {
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
          .back-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .product-details-page {
          padding: 60px 0;
          background: linear-gradient(135deg, #fff, var(--royal-cream));
          position: relative;
          overflow: hidden;
          font-family: var(--font-body);
        }

        .product-details-page::before {
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

        /* Product Main Section */
        .product-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          margin-bottom: 60px;
          background: #fff;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 30px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.2s;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .product-main::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 30px;
          padding: 2px;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.3;
        }

        /* Product Images */
        .product-images {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .main-image {
          width: 100%;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .main-image:hover img {
          transform: scale(1.05);
        }

        .thumbnail-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .thumbnail {
          height: 80px;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.3s;
        }

        .thumbnail.active {
          border-color: var(--royal-gold);
          transform: scale(1.05);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnail:hover {
          transform: scale(1.05);
        }

        /* Product Info */
        .product-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .product-category {
          font-size: 14px;
          color: var(--royal-gold);
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .product-info h1 {
          font-size: 36px;
          color: var(--royal-deep-purple);
          font-weight: 800;
          font-family: var(--font-heading);
          line-height: 1.2;
        }

        .product-price {
          font-size: 28px;
          font-weight: 700;
          color: var(--royal-burgundy);
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .product-rating {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #666;
        }

        .stars {
          color: #ffc107;
          font-size: 20px;
        }

        .product-description {
          font-size: 18px;
          color: #242424;
          line-height: 1.8;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          padding: 20px 0;
        }

        /* Quantity Selector */
        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .quantity-label {
          font-weight: 600;
          color: var(--royal-deep-purple);
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 10px;
          overflow: hidden;
        }

        .quantity-btn {
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          font-size: 18px;
          font-weight: 600;
          color: var(--royal-deep-purple);
          cursor: pointer;
          transition: all 0.3s;
        }

        .quantity-btn:hover {
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
        }

        .quantity-input {
          width: 60px;
          height: 40px;
          border: none;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          border-left: 1px solid rgba(212, 175, 55, 0.3);
          border-right: 1px solid rgba(212, 175, 55, 0.3);
        }

        .quantity-input:focus {
          outline: none;
        }

        /* Action Buttons */
        .action-buttons {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .inquire-now-btn {
          flex: 2;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .inquire-now-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .inquire-now-btn:hover::before {
          left: 100%;
        }

        .inquire-now-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(212, 175, 55, 0.4);
        }

        .add-to-quote-btn {
          flex: 1;
          background: transparent;
          color: var(--royal-deep-purple);
          border: 2px solid rgba(212, 175, 55, 0.3);
          padding: 13px 30px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .add-to-quote-btn::before {
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

        .add-to-quote-btn:hover::before {
          left: 0;
        }

        .add-to-quote-btn:hover {
          color: white;
          border-color: transparent;
          transform: translateY(-3px);
        }

        /* Product Meta */
        .product-meta {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #f8f9fa;
          padding: 20px;
          border-radius: 15px;
          margin-top: 10px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #666;
        }

        .meta-icon {
          color: var(--royal-gold);
          font-size: 18px;
        }

        /* Tabs Section */
        .product-tabs {
          background: #fff;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 30px;
          padding: 30px;
          margin-bottom: 40px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.4s;
        }

        .tab-headers {
          display: flex;
          gap: 30px;
          border-bottom: 2px solid rgba(212, 175, 55, 0.2);
          padding-bottom: 15px;
          margin-bottom: 30px;
        }

        .tab-header {
          font-size: 18px;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          padding: 5px 0;
          position: relative;
          transition: all 0.3s;
        }

        .tab-header::after {
          content: '';
          position: absolute;
          bottom: -17px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          transition: width 0.3s;
        }

        .tab-header.active {
          color: var(--royal-deep-purple);
        }

        .tab-header.active::after {
          width: 100%;
        }

        .tab-content {
          line-height: 1.8;
          color: #666;
        }

        .features-list {
          list-style: none;
          padding: 0;
        }

        .features-list li {
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }

        .features-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--royal-gold);
          font-weight: bold;
        }

        .specs-table {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .spec-item {
          display: flex;
          border-bottom: 1px dashed rgba(212, 175, 55, 0.2);
          padding: 10px 0;
        }

        .spec-label {
          flex: 1;
          font-weight: 600;
          color: var(--royal-deep-purple);
        }

        .spec-value {
          flex: 1;
          color: #666;
        }

        /* Related Products */
        .related-products {
          margin-top: 60px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.6s;
        }

        .related-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .related-title h2 {
          font-size: 32px;
          color: var(--royal-deep-purple);
          font-weight: 800;
          font-family: var(--font-heading);
          position: relative;
          display: inline-block;
          margin-bottom: 15px;
        }

        .related-title h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .related-card {
          background: #fff;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s;
          cursor: pointer;
        }

        .related-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(42, 26, 74, 0.15);
        }

        .related-image {
          height: 200px;
          overflow: hidden;
        }

        .related-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .related-card:hover .related-image img {
          transform: scale(1.1);
        }

        .related-info {
          padding: 20px;
        }

        .related-info h3 {
          font-size: 18px;
          color: var(--royal-deep-purple);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .related-info p {
          font-size: 13px;
          color: #666;
          margin-bottom: 10px;
        }

        .related-price {
          font-size: 16px;
          font-weight: 700;
          color: var(--royal-gold);
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

        /* Responsive */
        @media (max-width: 968px) {
          .product-main {
            grid-template-columns: 1fr;
          }
          
          .related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .product-main {
            padding: 20px;
          }
          
          .product-info h1 {
            font-size: 28px;
          }
          
          .thumbnail-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .thumbnail {
            height: 60px;
          }
          
          .related-grid {
            grid-template-columns: 1fr;
          }
          
          .tab-headers {
            gap: 15px;
          }
          
          .tab-header {
            font-size: 14px;
          }
          
          .action-buttons {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="product-details-page">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>&gt;</span>
            <Link to="/products">Products</Link> <span>&gt;</span>
            <span>{product.name}</span>
          </div>

          {/* Product Main Section */}
          <div className="product-main">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <img src={product.images && product.images[selectedImage] ? product.images[selectedImage] : product.image} alt={product.name} />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="thumbnail-grid">
                  {product.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={img} alt={`${product.name} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h1>{product.name}</h1>
              
              {product.price && (
                <div className="product-price">{product.price}</div>
              )}
              
              {product.rating && (
                <div className="product-rating">
                  <span className="stars">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </span>
                  <span>({product.reviewCount || 0} reviews)</span>
                </div>
              )}

              <p className="product-description">{product.description}</p>

              {/* Quantity Selector */}
              <div className="quantity-selector">
                <span className="quantity-label">Quantity:</span>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => handleQuantityChange('decrement')}>−</button>
                  <input type="text" className="quantity-input" value={quantity} readOnly />
                  <button className="quantity-btn" onClick={() => handleQuantityChange('increment')}>+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="inquire-now-btn" onClick={handleInquireNow}>
                  Inquire Now
                </button>
                <button className="add-to-quote-btn">
                  Add to Quote
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section - Only show if data exists */}
          {(product.longDescription || (product.features && product.features.length > 0) || (product.specifications && Object.keys(product.specifications).length > 0)) && (
            <div className="product-tabs">
              <div className="tab-headers">
                {product.longDescription && (
                  <div 
                    className={`tab-header ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => setActiveTab('description')}
                  >
                    Description
                  </div>
                )}
                {product.features && product.features.length > 0 && (
                  <div 
                    className={`tab-header ${activeTab === 'features' ? 'active' : ''}`}
                    onClick={() => setActiveTab('features')}
                  >
                    Features
                  </div>
                )}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div 
                    className={`tab-header ${activeTab === 'specifications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('specifications')}
                  >
                    Specifications
                  </div>
                )}
              </div>

              <div className="tab-content">
                {activeTab === 'description' && product.longDescription && (
                  <div>{product.longDescription}</div>
                )}
                {activeTab === 'features' && product.features && (
                  <ul className="features-list">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'specifications' && product.specifications && (
                  <div className="specs-table">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={index} className="spec-item">
                        <span className="spec-label">{key}:</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <div className="related-title">
                <h2>Related Products</h2>
              </div>
              <div className="related-grid">
                {relatedProducts.map(relatedProduct => (
                  <div 
                    key={relatedProduct.id} 
                    className="related-card"
                    onClick={() => handleRelatedProductClick(relatedProduct.id)}
                  >
                    <div className="related-image">
                      <img src={relatedProduct.image} alt={relatedProduct.name} />
                    </div>
                    <div className="related-info">
                      <h3>{relatedProduct.name}</h3>
                      <p>{relatedProduct.description.substring(0, 60)}...</p>
                      {relatedProduct.price && (
                        <div className="related-price">{relatedProduct.price}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;