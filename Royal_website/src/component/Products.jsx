import React from "react";
import { useNavigate } from "react-router-dom";

function Products() {
    const navigate = useNavigate();
  const products = [
    {
      category: "Clothing & Textiles",
      items: "School Uniforms, Hospital Aprons, Towels, Hajj Ihram, Hijab",
      imageUrl: "https://image.made-in-china.com/203f0j00KAlouVCwLacp/blog.jpg",
    },
    {
      category: "Soaps",
      items:
        "Natural handmade soaps, organic bath soaps, premium soap products",
      imageUrl:
        "https://media.istockphoto.com/id/517495506/photo/bars-of-homemade-soaps-honey-or-oil-and-healing-herbs.jpg?s=612x612&w=0&k=20&c=bQPtsclGfpY5yIjyRDSSSRn4wAy94O1DFsQr2aoz0K4=",
    },
    {
      category: "Spices",
      items: "Premium food spices including onion powder and spice collections",
      imageUrl:
        "https://deliciousfoods.in/cdn/shop/articles/spices.jpg?v=1742457010",
    },
     {
      category: "Grapes",
      items:
        "Fresh export-quality green and red grapes",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOnf2qtnyvAsUE4dwzAnI5-EKeElSfCOX7w&s",
    },
    {
      category: "Religious Items",
      items: "Prayer beads (Tasbih), Ihram belts, and religious accessories",
      imageUrl:
        "https://media.istockphoto.com/id/1360990467/photo/souvenir-stall-with-variety-of-colorful-souvenirs-wooden-beads-bracelets-and-amulets-street.jpg?s=612x612&w=is&k=20&c=fg4Q8JA1cUKXLTFej8BZKCRd7vViggYK1DaPYuM6YTU=",
    },
  ];

   const handleCardClick = (category) => {
        const encodedCategory = encodeURIComponent(category);
        navigate(`/product/${encodedCategory}`);
    };

  return (
    <>
      <style>{`
        .products-section {
          padding: 50px 0;
          background: #f9f9f9;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 32px;
          color: #000;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .section-header p {
          font-size: 16px;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .product-card {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .product-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transform: translateY(-5px);
          border-color: #d4a531;
        }

        .product-image {
          width: 100%;
          height: 220px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          border-bottom: 1px solid #e0e0e0;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-content {
          padding: 25px;
        }

        .product-card h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #000;
        }

        .product-card p {
          color: #555;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .view-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #000;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          transition: color 0.3s;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
        }

        .view-link:hover {
          color: #d4a531;
        }

        .arrow {
          font-size: 18px;
          transition: transform 0.3s;
        }

        .view-link:hover .arrow {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .product-image {
            height: 180px;
            font-size: 60px;
          }
        }
      `}</style>

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Product Categories</h2>
            <p>
              Explore our diverse range of export-quality products carefully
              curated for wholesale and retail businesses
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <div className="product-card" key={index} onClick={() => handleCardClick(product.category)}>
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.category} />
                </div>

                <div className="product-content">
                  <h3>{product.category}</h3>
                  <p>{product.items}</p>
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
