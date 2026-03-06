// Products.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories, products } from "../data/productData";

function Products() {
  const navigate = useNavigate();
  
  // Transform categories data for display
  const productCategories = [
    {
      category: "Clothing & Textiles",
      items: "School Uniforms, Hospital Aprons, Towels, Hajj Ihram, Hijab",
      imageUrl: products.find(p => p.category === "Clothing & Textiles")?.image || "https://image.made-in-china.com/203f0j00KAlouVCwLacp/blog.jpg",
      slug: "clothing-textiles"
    },
    {
      category: "Soaps",
      items: "Natural handmade soaps, organic bath soaps, premium soap products",
      imageUrl: products.find(p => p.category === "Soaps")?.image || "https://media.istockphoto.com/id/517495506/photo/bars-of-homemade-soaps-honey-or-oil-and-healing-herbs.jpg?s=612x612&w=0&k=20&c=bQPtsclGfpY5yIjyRDSSSRn4wAy94O1DFsQr2aoz0K4=",
      slug: "soaps"
    },
    {
      category: "Spices",
      items: "Premium food spices including onion powder and spice collections",
      imageUrl: products.find(p => p.category === "Spices")?.image || "https://deliciousfoods.in/cdn/shop/articles/spices.jpg?v=1742457010",
      slug: "spices"
    },
    {
      category: "Grapes",
      items: "Fresh export-quality green and red grapes",
      imageUrl: products.find(p => p.category === "Grapes")?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOnf2qtnyvAsUE4dwzAnI5-EKeElSfCOX7w&s",
      slug: "grapes"
    },
    {
      category: "Religious Items",
      items: "Prayer beads (Tasbih), Ihram belts, and religious accessories",
      imageUrl: products.find(p => p.category === "Religious Items")?.image || "https://media.istockphoto.com/id/1360990467/photo/souvenir-stall-with-variety-of-colorful-souvenirs-wooden-beads-bracelets-and-amulets-street.jpg?s=612x612&w=is&k=20&c=fg4Q8JA1cUKXLTFej8BZKCRd7vViggYK1DaPYuM6YTU=",
      slug: "religious-items"
    },
  ];

  const handleCardClick = (category) => {
    // Find category slug from categories data
    const categoryObj = categories.find(c => c.name === category);
    
    // Use slug if available, otherwise create a URL-friendly version of category name
    const categoryParam = categoryObj?.slug || 
      category.toLowerCase()
        .replace(/ & /g, '-')
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
    
    // Navigate to the product category page with the parameter
    navigate(`/product/${categoryParam}`);
  };

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
  }, []);

  return (
    <>
      <style>{`
        .products-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #fff, var(--royal-cream));
          position: relative;
          overflow: hidden;
        }

        .products-section::before {
          content: '';
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
          animation: rotate 50s linear infinite reverse;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .section-header h2 {
          font-size: 42px;
          color: #000000 !important;
          margin-bottom: 15px;
          font-weight: 800;
          font-family: var(--font-heading);
          position: relative;
          display: inline-block;
          text-shadow: none;
        }

        .section-header h2::after {
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

        .section-header p {
          font-size: 18px;
          color: #333333 !important;
          max-width: 700px;
          margin: 20px auto 0;
          line-height: 1.6;
          font-family: var(--font-body);
          opacity: 0.9;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .product-card {
          background: #fff;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          box-shadow: 0 10px 30px rgba(42, 26, 74, 0.05);
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
          width: 100%;
          height: 240px;
          background: linear-gradient(135deg, #f5f5f5, #eaeaea);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
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

        .product-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .product-card:hover .product-image::after {
          left: 100%;
        }

        .product-content {
          padding: 25px;
          background: white;
          position: relative;
        }

        .product-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s;
        }

        .product-card:hover .product-content::before {
          transform: scaleX(1);
        }

        .product-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--royal-deep-purple);
          font-family: var(--font-heading);
          transition: color 0.3s;
        }

        .product-card:hover h3 {
          color: var(--royal-burgundy);
        }

        .product-card p {
          color: #666;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 20px;
          font-family: var(--font-body);
        }

        .view-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--royal-deep-purple);
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          position: relative;
        }

        .view-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          transition: width 0.3s;
        }

        .view-link:hover::after {
          width: 100%;
        }

        .view-link:hover {
          color: var(--royal-gold);
          gap: 12px;
        }

        .arrow {
          font-size: 18px;
          transition: transform 0.3s;
        }

        .view-link:hover .arrow {
          transform: translateX(5px);
        }


        /* Staggered Animation Delays */
        .product-card:nth-child(1) { animation-delay: 0.1s; }
        .product-card:nth-child(2) { animation-delay: 0.2s; }
        .product-card:nth-child(3) { animation-delay: 0.3s; }
        .product-card:nth-child(4) { animation-delay: 0.4s; }
        .product-card:nth-child(5) { animation-delay: 0.5s; }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .section-header h2 {
            font-size: 32px;
          }
          
          .product-image {
            height: 200px;
          }
        }
      `}</style>

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Product Categories</h2>
            <p>
              Explore our diverse range of export-quality products carefully
              curated for wholesale and retail businesses worldwide
            </p>
          </div>

          <div className="products-grid">
            {productCategories.map((category, index) => (
              <div 
                className="product-card" 
                key={index} 
                onClick={() => handleCardClick(category.category)}
              >
                <div className="product-image">
                  <img src={category.imageUrl} alt={category.category} />
                </div>

                <div className="product-content">
                  <h3>{category.category}</h3>
                  <p>{category.items}</p>
                  <button className="view-link">
                    View Products <span className="arrow">→</span>
                  </button>
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