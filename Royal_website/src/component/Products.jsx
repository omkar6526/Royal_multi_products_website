// Products.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories, products } from "../data/productData";

function Products() {
  const navigate = useNavigate();
  
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
    const categoryObj = categories.find(c => c.name === category);
    
    const categoryParam = categoryObj?.slug || 
      category.toLowerCase()
        .replace(/ & /g, '-')
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
    
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
          padding: 100px 0;
          background-color: #e2e7f1; 
          position: relative;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1250px;
        }

        .section-header {
          text-align: left; 
          margin-bottom: 60px;
          border-left: 5px solid var(--royal-gold);
          padding-left: 25px;
        }

        .section-header h2 {
          font-size: clamp(32px, 5vw, 48px);
          color: #1a1a1a;
          font-weight: 300; 
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0;
        }

        .section-header p {
          font-size: 18px;
          color: #110d0d;
          max-width: 600px;
          margin-top: 10px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
        }


        .product-card {
          background: #ffffff;
          border-radius: 0px; 
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid #c5c5c5;
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px);
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
          object-fit: contain; /* Shows the whole product clearly */
          padding: 10px;
          transition: transform 0.8s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-tag {
          position: absolute;
          top: 0;
          left: 0;
          background: #eca64a;
          color: #fff;
          padding: 8px 15px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .product-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .product-category-label {
          font-size: 12px;
          color: var(--royal-gold);
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .product-content h3 {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .product-content p {
          font-size: 15px;
          color: #070707;
          line-height: 1.8;
          margin-bottom: 30px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-buttons {
          margin-top: auto;
          display: flex;
          align-items: center;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }

        .view-link {
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
          gap: 8px;
          padding: 0;
        }

        .view-link:hover {
          color: var(--royal-gold);
        }

        .explore-btn {
          margin-left: auto;
          background: #1a1a1a;
          color: white;
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 12px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
        }

        .explore-btn:hover {
          background: var(--royal-gold);
        }

        .arrow {
          font-size: 16px;
          transition: transform 0.3s;
        }

        .view-link:hover .arrow {
          transform: translateX(5px);
        }

        .product-card:nth-child(1) { transition-delay: 0.1s; }
        .product-card:nth-child(2) { transition-delay: 0.2s; }
        .product-card:nth-child(3) { transition-delay: 0.3s; }
        .product-card:nth-child(4) { transition-delay: 0.4s; }
        .product-card:nth-child(5) { transition-delay: 0.5s; }

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
            height: 280px;
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
                  <div className="product-tag">Category</div>
                </div>

                <div className="product-content">
                  <div className="product-category-label">EXPLORE</div>
                  <h3>{category.category}</h3>
                  <p>{category.items}</p>
                  
                  <div className="card-buttons">
                    <button className="view-link">
                      View Products <span className="arrow">→</span>
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