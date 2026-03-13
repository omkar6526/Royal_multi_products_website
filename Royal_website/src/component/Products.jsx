// Products.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  categories,
  products,
  getProductsByCategory,
  getCategoriesWithCounts,
} from "../data/productData";

function Products() {
  const navigate = useNavigate();

  const categoriesWithCounts = getCategoriesWithCounts();

  const displayCategories = categoriesWithCounts.filter(
    (cat) => cat.name !== "All Products",
  );

  const productCategories = displayCategories.map((cat) => {
    const categoryProducts = getProductsByCategory(cat.name);

    const representativeProduct = categoryProducts[0] || {};

    const itemsList = categoryProducts
      .map((p) => p.name)
      .slice(0, 4)
      .join(", ");

    let description = "";
    switch (cat.name) {
      case "Clothing & Textiles":
        description =
          "Premium quality textiles for everyday use. From school uniforms to hospital aprons, our fabrics are durable, comfortable, and stylish.";
        break;
      case "Soaps":
        description =
          "Experience the luxury of natural ingredients with our handmade soaps. Organic, chemical-free, and gentle on skin.";
        break;
      case "Spices":
        description =
          "Authentic Indian spices that bring flavor to your kitchen. From aromatic spice blends to exotic seasonings.";
        break;
      case "Grapes":
        description =
          "Sweet, juicy, and export-quality grapes. Carefully packed to maintain freshness during shipping.";
        break;
      case "Hajj Specials":
        description =
          "Essential items for your spiritual journey. Premium quality prayer beads and Ihram accessories.";
        break;
      case "Onions":
        description =
          "Farm-fresh, crisp onions including Red, Yellow, and White varieties, perfect for culinary use.";
        break;
      default:
        description = `High-quality ${cat.name.toLowerCase()} for wholesale and retail.`;
    }

    return {
      category: cat.name,
      items: itemsList || "Premium quality products",
      imageUrl:
        representativeProduct.image ||
        "https://via.placeholder.com/400x300?text=Product",
      slug: cat.slug,
      description: description,
      count: cat.count,
    };
  });

  const handleCardClick = (category) => {
    const categoryObj = categories.find((c) => c.name === category);

    const categoryParam =
      categoryObj?.slug ||
      category
        .toLowerCase()
        .replace(/ & /g, "-")
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

    navigate(`/product/${categoryParam}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const items = document.querySelectorAll(".product-row");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .products-section {
          padding: 60px 0;
          background-color: #e2e7f1;
        }

        .container {
          width: 90%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: clamp(36px, 5vw, 48px);
          color: #1a1a1a;
          font-weight: 600;
          margin-bottom: 15px;
          position: relative;
          display: inline-block;
        }

        .section-header h2:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: #bcad2c;
        }

        .section-header p {
          font-size: 18px;
          color: #555;
          max-width: 700px;
          margin: 10px auto -30px;
        }

        /* Category Stats */
        .category-stats {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .stat-item {
          background: white;
          padding: 15px 30px;
          border-radius: 50px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .stat-number {
          font-size: 24px;
          font-weight: 700;
          color: #bcad2c;
        }

        .stat-label {
          font-size: 14px;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Product Row - contains two separate divs */
        .product-row {
          display: flex;
          align-items: center;
          gap: 50px;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .product-row.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .product-row.reverse {
          flex-direction: row-reverse;
        }

        /* Left Section - Image Div (Separate) */
        .image-section {
          flex: 1;
          height: 450px;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          position: relative;
        }

        .image-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .product-row:hover .image-section img {
          transform: scale(1.05);
        }

        .image-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #bcad2c;
          color: white;
          padding: 8px 25px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          z-index: 2;
          box-shadow: 0 5px 15px rgba(188, 173, 44, 0.3);
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .product-count {
          background: rgba(255,255,255,0.2);
          padding: 2px 8px;
          border-radius: 20px;
          font-size: 12px;
          margin-left: 5px;
        }

        /* Right Section - Content Div (Separate) */
        .content-section {
          flex: 1;
          padding: 45px;
        }

        .content-label {
          font-size: 14px;
          color: #bcad2c;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 15px;
          font-weight: 600;
          display: inline-block;
          background: rgba(188, 173, 44, 0.1);
          padding: 5px 15px;
          border-radius: 20px;
        }

        .content-section h3 {
          font-size: 34px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .items-badge-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }

        .item-badge {
          padding: 3px 8px;
          border-radius: 25px;
          color: #333;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .item-badge:hover {
          background: #bcad2c;
          color: white;
        }

        .description-text {
          font-size: 16px;
          color: #555;
          line-height: 1.9;
          margin-bottom: 20px;
          border-left: 3px solid #bcad2c;
          padding-left: 20px;
        }

        .feature-container {
          display: flex;
          gap: 25px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #444;
          padding: 1px 10px;
          border-radius: 30px;
        }

        .feature-item:before {
          content: '✓';
          color: #bcad2c;
          font-weight: bold;
          font-size: 16px;
        }

        .button-group {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .learn-button {
          background: transparent;
          color: #1a1a1a;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          cursor: pointer;
          padding: 13px 40px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .learn-button:hover {
          border-color: #bcad2c;
          color: #bcad2c;
          transform: translateY(-2px);
        }

        .arrow-icon {
          font-size: 18px;
          transition: transform 0.3s;
        }

        .learn-button:hover .arrow-icon {
          transform: translateX(5px);
        }

        /* Animation delays */
        .product-row:nth-child(1) { transition-delay: 0.1s; }
        .product-row:nth-child(2) { transition-delay: 0.2s; }
        .product-row:nth-child(3) { transition-delay: 0.3s; }
        .product-row:nth-child(4) { transition-delay: 0.4s; }
        .product-row:nth-child(5) { transition-delay: 0.5s; }
        .product-row:nth-child(6) { transition-delay: 0.6s; }

        /* Responsive */
        @media (max-width: 968px) {
          .product-row,
          .product-row.reverse {
            flex-direction: column;
            gap: 30px;
          }

          .image-section,
          .content-section {
            width: 100%;
          }

          .image-section {
            height: 350px;
          }

          .content-section h3 {
            font-size: 28px;
          }

          .category-stats {
            gap: 15px;
          }
          
          .stat-item {
            padding: 10px 20px;
          }
        }

        @media (max-width: 576px) {
          .content-section {
            padding: 30px;
          }

          .button-group {
            flex-direction: column;
            align-items: stretch;
          }

          .shop-button,
          .learn-button {
            width: 100%;
            justify-content: center;
          }

          .feature-container {
            gap: 15px;
          }

          .feature-item {
            width: 100%;
          }

          .category-stats {
            flex-direction: column;
            align-items: center;
          }
          
          .stat-item {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Product Categories</h2>
            <p>
              Discover our premium collection of {products.length}{" "}
              export-quality products, carefully selected to meet international
              standards
            </p>
          </div>

          <div className="category-stats">
            <div className="stat-item">
              <span className="stat-number">{categories.length}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{products.length}</span>
              <span className="stat-label">Total Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {products.filter((p) => p.featured).length}
              </span>
              <span className="stat-label">Featured</span>
            </div>
          </div>

          <div className="products-container">
            {productCategories.map((category, index) => (
              <div
                className={`product-row ${index % 2 === 1 ? "reverse" : ""}`}
                key={category.slug}
              >
                <div className="image-section">
                  <img src={category.imageUrl} alt={category.category} />
                  <div className="image-tag">
                    Premium Collection
                    <span className="product-count">
                      {category.count} Products
                    </span>
                  </div>
                </div>

                <div className="content-section">
                  <span className="content-label">FEATURED CATEGORY</span>
                  <h3>{category.category}</h3>

                  <div className="items-badge-container">
                    {category.items.split(",").map((item, i) => (
                      <span key={i} className="item-badge">
                        {item.trim()}
                      </span>
                    ))}
                    {category.count > 4 && (
                      <span className="item-badge">
                        +{category.count - 4} more
                      </span>
                    )}
                  </div>

                  <p className="description-text">{category.description}</p>

                  <div className="feature-container">
                    <span className="feature-item">Premium Quality</span>
                    <span className="feature-item">Export Ready</span>
                    <span className="feature-item">Best Price</span>
                  </div>

                  <div className="button-group">
                    <button
                      className="learn-button"
                      onClick={() => handleCardClick(category.category)}
                    >
                      View All ({category.count}){" "}
                      <span className="arrow-icon">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;