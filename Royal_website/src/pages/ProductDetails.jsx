// ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  getProductById,
  getRelatedProducts,
  products 
} from "../data/productData";

// Import all images for related products
import bathsoap from '../assets/bathsoap.jpeg';
import greenGrapes from '../assets/greenGrapes.jpeg';
import hospitalAprons from '../assets/hospitalaprons.jpg';
import luxuryTowels from '../assets/LuxuryTowels.jpg';
import tasbih from '../assets/Tasbih.jpeg';
import ihrambelts from '../assets/ihrambelts.jpeg';
import redgrapes from '../assets/redgrapes.jpeg';
import mixgrapes from '../assets/mixgrapes.jpeg';
import onionpowder from '../assets/OnionPowder.jpeg';
import onion from '../assets/onions.jpeg';
import suniform from '../assets/uniform.jpg';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedRange, setSelectedRange] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Quantity range options
  const quantityRanges = [
    "0-50",
    "50-100",
    "100-150",
    "150-200",
    "200-250",
    "250-300",
    "300-350",
    "350-400",
    "400-450",
    "450-500",
    "More than 500"
  ];

  useEffect(() => {
    setLoading(true);
    setImageLoaded(false);
    
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
      let inquiryUrl = `/contact?product=${encodeURIComponent(product.name)}`;
      if (selectedRange) {
        inquiryUrl += `&quantity=${encodeURIComponent(selectedRange)}`;
      }
      navigate(inquiryUrl);
    }
  };

  const handleWhatsAppInquiry = () => {
    if (product) {
      const phoneNumber = "919623358693"; // Your WhatsApp number
      const message = `Hello, I'm interested in ${product.name}${selectedRange ? ` (Quantity: ${selectedRange} units)` : ''}. Please provide more information.`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleRangeChange = (e) => {
    setSelectedRange(e.target.value);
  };

  const handleRelatedProductClick = (productId) => {
    navigate(`/product/details/${productId}`);
  };

  // Get related products
  const relatedProducts = product ? getRelatedProducts(product.id) : [];

  // Function to get the correct image source
  const getImageSrc = (product) => {
    if (!product) return '';
    
    // If it's a string (URL), return as is
    if (typeof product.image === 'string') {
      return product.image;
    }
    
    // If it's an imported image (object), return the src
    return product.image;
  };

  if (loading) {
    return (
      <div className="product-details-loading">
        <div className="loader"></div>
        <div className="loading-text">Loading Product Details...</div>
        <style>{`
          .product-details-loading {
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #fff, #fdf8f0);
            position: relative;
            overflow: hidden;
          }
          
          .product-details-loading::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .loader {
            width: 80px;
            height: 80px;
            border: 4px solid rgba(212, 175, 55, 0.1);
            border-radius: 50%;
            border-top-color: var(--royal-gold);
            border-right-color: var(--royal-burgundy);
            animation: spin 1s ease-in-out infinite;
            margin-bottom: 20px;
            position: relative;
            z-index: 2;
            box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          .loading-text {
            font-size: 18px;
            color: var(--royal-deep-purple);
            font-weight: 500;
            position: relative;
            z-index: 2;
            background: rgba(255,255,255,0.8);
            padding: 10px 30px;
            border-radius: 50px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          }
        `}</style>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="not-found-content">
          <div className="not-found-icon">🔍</div>
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist or has been removed.</p>
          <button onClick={() => navigate('/products')} className="back-btn">
            Browse All Products
          </button>
        </div>
        <style>{`
          .product-not-found {
            min-height: 70vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #fff, #fdf8f0);
            padding: 40px;
          }
          
          .not-found-content {
            text-align: center;
            background: white;
            padding: 60px 40px;
            border-radius: 30px;
            box-shadow: 0 30px 60px rgba(0,0,0,0.1);
            max-width: 500px;
            border: 1px solid rgba(212, 175, 55, 0.2);
            position: relative;
            overflow: hidden;
          }
          
          .not-found-content::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
            animation: rotate 30s linear infinite;
          }
          
          .not-found-icon {
            font-size: 80px;
            margin-bottom: 20px;
            animation: bounce 2s ease infinite;
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          
          .product-not-found h2 {
            font-size: 32px;
            color: var(--royal-deep-purple);
            margin-bottom: 15px;
            font-family: var(--font-heading);
            position: relative;
          }
          
          .product-not-found p {
            color: #666;
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 1.8;
            position: relative;
          }
          
          .back-btn {
            background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 15px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          
          .back-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
            z-index: -1;
          }
          
          .back-btn:hover::before {
            left: 100%;
          }
          
          .back-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(212, 175, 55, 0.4);
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .product-details-page {
          padding: 40px 0 80px;
          background: linear-gradient(135deg, #f8f9fa, #fff);
          position: relative;
          overflow: hidden;
          font-family: var(--font-body);
          min-height: 100vh;
        }

        .product-details-page::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%);
          animation: rotate 60s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1300px;
          position: relative;
          z-index: 2;
        }

        /* Breadcrumb with Glass Effect */
        .breadcrumb {
          margin: 20px 0 40px;
          font-size: 14px;
          padding: 15px 25px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          display: inline-block;
          opacity: 0;
          animation: slideInLeft 0.8s ease forwards;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .breadcrumb a {
          color: var(--royal-gold);
          text-decoration: none;
          transition: all 0.3s;
          position: relative;
          font-weight: 500;
        }

        .breadcrumb a:hover {
          color: var(--royal-burgundy);
        }

        .breadcrumb span {
          color: #666;
          margin: 0 10px;
        }

        .breadcrumb .current {
          color: var(--royal-deep-purple);
          font-weight: 600;
        }

        /* Product Main Section - Modern Card Design */
        .product-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          margin-bottom: 60px;
          background: white;
          border-radius: 40px;
          padding: 50px;
          position: relative;
          opacity: 0;
          animation: fadeInUp 1s ease forwards 0.2s;
          box-shadow: 
            0 30px 60px rgba(0,0,0,0.1),
            0 0 0 1px rgba(212, 175, 55, 0.1);
          transition: all 0.5s;
        }

        .product-main:hover {
          box-shadow: 
            0 40px 80px rgba(212, 175, 55, 0.15),
            0 0 0 2px rgba(212, 175, 55, 0.2);
        }

        /* Product Images Gallery - Simplified */
        .product-images {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .main-image-container {
          width: 100%;
          height: 500px;
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          background: #f8f9fa;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-image:hover {
          transform: scale(1.05);
        }

        .main-image.loaded {
          animation: imageReveal 0.8s ease forwards;
        }

        @keyframes imageReveal {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .thumbnail-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .thumbnail {
          height: 100px;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.3s;
          position: relative;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .thumbnail.active {
          border-color: var(--royal-gold);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .thumbnail:hover img {
          transform: scale(1.1);
        }

        /* Product Info Styling */
        .product-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .product-category {
          font-size: 14px;
          color: var(--royal-gold);
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: rgba(212, 175, 55, 0.1);
          padding: 8px 20px;
          border-radius: 50px;
          display: inline-block;
          align-self: flex-start;
          backdrop-filter: blur(5px);
        }

        .product-info h1 {
          font-size: 48px;
          color: var(--royal-deep-purple);
          font-weight: 800;
          font-family: var(--font-heading);
          line-height: 1.2;
          margin: 0;
          background: linear-gradient(135deg, var(--royal-deep-purple), var(--royal-burgundy));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .featured-badge {
          background: linear-gradient(135deg, var(--royal-gold), #f39c12);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
          display: inline-block;
          width: fit-content;
        }

        .product-description {
          font-size: 18px;
          color: #4a4a4a;
          line-height: 1.8;
          background: #f8f9fa;
          padding: 25px;
          border-radius: 20px;
          border-left: 4px solid var(--royal-gold);
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.02);
        }

        /* Quantity Selector - Modern Design */
        .quantity-section {
          background: linear-gradient(135deg, #f8f9fa, #fff);
          padding: 25px;
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .section-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--royal-deep-purple);
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-title span {
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .quantity-selector {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .quantity-label {
          font-weight: 600;
          color: var(--royal-deep-purple);
          font-size: 16px;
          min-width: 140px;
        }

        .dropdown-wrapper {
          flex: 1;
          position: relative;
        }

        .quantity-dropdown {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid rgba(212, 175, 55, 0.2);
          border-radius: 15px;
          font-size: 16px;
          color: var(--royal-deep-purple);
          background: white;
          cursor: pointer;
          transition: all 0.3s;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 20px center;
          background-size: 20px;
          font-weight: 500;
        }

        .quantity-dropdown:hover {
          border-color: var(--royal-gold);
          box-shadow: 0 5px 20px rgba(212, 175, 55, 0.15);
          transform: translateY(-2px);
        }

        .quantity-dropdown:focus {
          outline: none;
          border-color: var(--royal-gold);
          box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.15);
        }

        /* Action Buttons - Simplified */
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
          padding: 14px 25px; /* Smaller padding */
          border-radius: 12px; /* Smaller radius */
          font-size: 16px; /* Smaller font */
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
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
          transform: translateY(-3px); /* Smaller lift */
          box-shadow: 0 15px 30px rgba(212, 175, 55, 0.4);
        }

        .whatsapp-btn {
          flex: 0.8;
          background: #25D366;
          color: white;
          border: none;
          padding: 14px 20px; /* Smaller padding */
          border-radius: 12px; /* Smaller radius */
          font-size: 16px; /* Smaller font */
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }

        .whatsapp-btn:hover {
          background: #20b859;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
        }

        /* Tabs Section */
        .product-tabs {
          background: white;
          border-radius: 30px;
          padding: 40px;
          margin-bottom: 60px;
          opacity: 0;
          animation: fadeInUp 1s ease forwards 0.4s;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .tab-headers {
          display: flex;
          gap: 30px;
          border-bottom: 2px solid rgba(212, 175, 55, 0.1);
          padding-bottom: 20px;
          margin-bottom: 30px;
        }

        .tab-header {
          font-size: 18px;
          font-weight: 600;
          color: #999;
          cursor: pointer;
          padding: 10px 0;
          position: relative;
          transition: all 0.3s;
          letter-spacing: 0.5px;
        }

        .tab-header::after {
          content: '';
          position: absolute;
          bottom: -22px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          transition: width 0.3s;
          border-radius: 3px;
        }

        .tab-header:hover {
          color: var(--royal-deep-purple);
        }

        .tab-header.active {
          color: var(--royal-deep-purple);
        }

        .tab-header.active::after {
          width: 100%;
        }

        .tab-content {
          line-height: 1.8;
          color: #4a4a4a;
          font-size: 16px;
          min-height: 200px;
        }

        .tab-content p {
          margin-bottom: 20px;
        }

        /* Description Tab Styling */
        .description-content {
          white-space: pre-line;
          columns: 2;
          column-gap: 40px;
        }

        .description-content p {
          break-inside: avoid;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .description-content {
            columns: 1;
          }
        }

        /* Features Tab Styling */
        .features-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .features-list li {
          padding: 15px 20px;
          background: #f8f9fa;
          border-radius: 12px;
          position: relative;
          padding-left: 45px;
          transition: all 0.3s;
        }

        .features-list li:hover {
          transform: translateX(5px);
          background: white;
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.1);
        }

        .features-list li::before {
          content: '✓';
          position: absolute;
          left: 15px;
          color: white;
          font-weight: bold;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        /* Specifications Tab Styling */
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          background: #f8f9fa;
          padding: 20px;
          border-radius: 15px;
          transition: all 0.3s;
        }

        .spec-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.1);
        }

        .spec-label {
          font-size: 14px;
          color: #999;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .spec-value {
          font-size: 18px;
          font-weight: 600;
          color: var(--royal-deep-purple);
        }

        /* Related Products - Modern Card Design */
        .related-products {
          margin-top: 60px;
          opacity: 0;
          animation: fadeInUp 1s ease forwards 0.6s;
        }

        .related-title {
          text-align: center;
          margin-bottom: 50px;
        }

        .related-title h2 {
          font-size: 36px;
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
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          border-radius: 2px;
        }

        .related-title p {
          color: #666;
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .related-card {
          background: white;
          border-radius: 25px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          position: relative;
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
        }

        .related-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 25px;
          padding: 2px;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .related-card:hover::before {
          opacity: 1;
        }

        .related-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 30px 60px rgba(212, 175, 55, 0.15);
        }

        .related-image {
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .related-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s;
        }

        .related-card:hover .related-image img {
          transform: scale(1.15);
        }

        .related-info {
          padding: 25px;
          position: relative;
          background: white;
        }

        .related-category {
          font-size: 12px;
          color: var(--royal-gold);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          display: block;
        }

        .related-info h3 {
          font-size: 18px;
          color: var(--royal-deep-purple);
          margin-bottom: 10px;
          font-weight: 700;
          line-height: 1.4;
        }

        .related-info p {
          font-size: 13px;
          color: #666;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .view-details-link {
          color: var(--royal-gold);
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: gap 0.3s;
        }

        .related-card:hover .view-details-link {
          gap: 10px;
        }

        /* Animations */
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .product-info h1 {
            font-size: 42px;
          }
        }

        @media (max-width: 968px) {
          .product-main {
            grid-template-columns: 1fr;
            padding: 30px;
          }
          
          .related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .description-content {
            columns: 1;
          }
        }

        @media (max-width: 768px) {
          .product-main {
            padding: 20px;
          }
          
          .product-info h1 {
            font-size: 32px;
          }
          
          .thumbnail-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .thumbnail {
            height: 70px;
          }
          
          .features-list {
            grid-template-columns: 1fr;
          }
          
          .specs-grid {
            grid-template-columns: 1fr;
          }
          
          .action-buttons {
            flex-direction: column;
          }
        }

        @media (max-width: 576px) {
          .related-grid {
            grid-template-columns: 1fr;
          }
          
          .tab-headers {
            gap: 15px;
            flex-wrap: wrap;
          }
          
          .tab-header {
            font-size: 14px;
          }
          
          .quantity-selector {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .quantity-label {
            min-width: auto;
          }
          
          .dropdown-wrapper {
            width: 100%;
          }
        }
      `}</style>

      <div className="product-details-page">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>›</span>
            <Link to="/products">Products</Link> <span>›</span>
            <Link to={`/products?category=${product.categorySlug}`}>{product.category}</Link> <span>›</span>
            <span className="current">{product.name}</span>
          </div>

          {/* Product Main Section */}
          <div className="product-main">
            {/* Product Images Gallery */}
            <div className="product-images">
              <div className="main-image-container">
                <img 
                  src={product.images && product.images[selectedImage] ? product.images[selectedImage] : product.image} 
                  alt={product.name}
                  className={`main-image ${imageLoaded ? 'loaded' : ''}`}
                  onLoad={() => setImageLoaded(true)}
                />
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
              
              {product.featured && <span className="featured-badge">⭐ Featured</span>}

              <div className="product-description">
                {product.description}
              </div>

              {/* Quantity Selector Section */}
              <div className="quantity-section">
                <div className="section-title">
                  <span>📦</span> Order Quantity
                </div>
                <div className="quantity-selector">
                  <span className="quantity-label">Select Quantity Range:</span>
                  <div className="dropdown-wrapper">
                    <select 
                      className="quantity-dropdown" 
                      value={selectedRange} 
                      onChange={handleRangeChange}
                    >
                      <option value="">Choose  range</option>
                      {quantityRanges.map((range) => (
                        <option key={range} value={range}>
                          {range} units
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Simplified */}
              <div className="action-buttons">
                <button className="inquire-now-btn" onClick={handleInquireNow}>
                  <span>📞</span> Inquire Now
                </button>
                
                <button className="whatsapp-btn" onClick={handleWhatsAppInquiry}>
                  <span>📱</span> WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section - Using longDescription */}
          {product.longDescription && (
            <div className="product-tabs">
              <div className="tab-headers">
                <div 
                  className={`tab-header ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  📋 Full Description
                </div>
                <div 
                  className={`tab-header ${activeTab === 'features' ? 'active' : ''}`}
                  onClick={() => setActiveTab('features')}
                >
                  ✨ Key Features
                </div>
                <div 
                  className={`tab-header ${activeTab === 'specifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specifications')}
                >
                  📊 Specifications
                </div>
              </div>

              <div className="tab-content">
                {activeTab === 'description' && (
                  <div className="description-content">
                    {product.longDescription.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
                
                {activeTab === 'features' && (
                  <ul className="features-list">
                    <li>Premium export quality certified</li>
                    <li>Eco-friendly and sustainable packaging</li>
                    <li>Bulk order discounts available</li>
                    <li>All Over India shipping</li>
                    <li>24/7 customer support</li>
                    <li>Quality guarantee on all products</li>
                  </ul>
                )}
                
                {activeTab === 'specifications' && (
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">Category</span>
                      <span className="spec-value">{product.category}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Availability</span>
                      <span className="spec-value">In Stock</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Shipping</span>
                      <span className="spec-value">All Over India</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Minimum Order</span>
                      <span className="spec-value">50 units</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <div className="related-title">
                <h2>You May Also Like</h2>
                <p>Discover more products from our premium collection</p>
              </div>
              <div className="related-grid">
                {relatedProducts.map(relatedProduct => (
                  <div 
                    key={relatedProduct.id} 
                    className="related-card"
                    onClick={() => handleRelatedProductClick(relatedProduct.id)}
                  >
                    <div className="related-image">
                      <img src={getImageSrc(relatedProduct)} alt={relatedProduct.name} />
                    </div>
                    <div className="related-info">
                      <span className="related-category">{relatedProduct.category}</span>
                      <h3>{relatedProduct.name}</h3>
                      <p>{relatedProduct.description.substring(0, 60)}...</p>
                      <span className="view-details-link">
                        View Details →
                      </span>
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