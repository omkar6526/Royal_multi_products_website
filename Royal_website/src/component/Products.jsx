import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories, products } from "../data/productData";
import onionpowder from '../assets/OnionPowder.jpeg';
import mixgrapes from '../assets/mixgrapes.jpeg';
import hajjitems from '../assets/hujitems.png';

function Products() {
  const navigate = useNavigate();
  
   const productCategories = [
  {
    category: "Fresh Produce",
    items: "Farm-fresh, crisp onions including Red, Yellow, and White varieties, perfect for culinary use. Sourced directly from local growers to ensure maximum shelf life and peak flavor for global distribution.",
    imageUrl: onionpowder,
    slug: "onionitems"
  },
  {
    category: "Clothing & Textiles",
    items: "School Uniforms, Hospital Aprons, Towels, Hajj Ihram, Hijab. We utilize high-grade, breathable fabrics designed for comfort and durability, meeting the rigorous standards of institutional and personal wear.",
    imageUrl: products.find(p => p.category === "Clothing & Textiles")?.image || "https://image.made-in-china.com/203f0j00KAlouVCwLacp/blog.jpg",
    slug: "clothing-textiles"
  },
  {
    category: "Soaps",
    items: "Natural handmade soaps, organic bath soaps, premium soap products. Infused with essential oils and botanical extracts, our soaps provide a luxurious lather that cleanses deeply while keeping skin hydrated and refreshed.",
    imageUrl: products.find(p => p.category === "Soaps")?.image || "https://media.istockphoto.com/id/517495506/photo/bars-of-homemade-soaps-honey-or-oil-and-healing-herbs.jpg?s=612x612&w=0&k=20&c=bQPtsclGfpY5yIjyRDSSSRn4wAy94O1DFsQr2aoz0K4=",
    slug: "soaps"
  },
  {
    category: "Spices",
    items: "Premium food spices including onion powder and spice collections. Our spices are meticulously processed to preserve their natural aroma and potency, delivering an authentic taste to kitchens worldwide.",
    imageUrl: products.find(p => p.category === "Spices")?.image || "https://deliciousfoods.in/cdn/shop/articles/spices.jpg?v=1742457010",
    slug: "spices"
  },
  {
    category: "Grapes",
    items: "Fresh export-quality green and red grapes. Hand-picked at the perfect stage of ripeness, our grapes are packed using advanced cooling technology to maintain their crunch and sweetness during transit.",
    imageUrl: mixgrapes,
    slug: "grapes"
  },
  {
    category: "Hajj Specials",
    items: "Prayer beads (Tasbih), Ihram belts, and religious accessories. Thoughtfully designed to support your spiritual journey, these high-quality essentials combine traditional craftsmanship with practical durability.",
    imageUrl:hajjitems,
    slug: "religious-items"
  },
  ];
  const handleCardClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const rows = document.querySelectorAll('.category-row');
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        :root {
          --brand-green: #004d26;
          --text-gray: #4a4a4a;
        }

        .products-section {
          padding: 0px 0;
          margin-bottom: 0px;
          background-color: #ffffff;
          overflow-x: hidden;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
        }

        /* Row Styling */
        .category-row {
          display: flex;
          align-items: center;
          justify-content:沟通;
          margin-bottom: 100px;
          gap: 60px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .category-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Alternating Layout logic */
        .category-row:nth-child(even) {
          flex-direction: row-reverse;
        }

        /* Image Side */
        .image-container {
          flex: 1;
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        .image-container img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          display: block;
          transition: transform 1.2s ease;
        }

        .category-row:hover .image-container img {
          transform: scale(1.05);
        }

        /* Text Side */
        .text-container {
          flex: 1;
          padding: 20px;
        }

        .text-container h3 {
          font-family: 'Playfair Display', serif; /* Or similar elegant font */
          font-size: 32px;
          color: #333;
          margin-bottom: 20px;
          position: relative;
        }

        .text-container p {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-gray);
          margin-bottom: 30px;
          max-width: 500px;
        }

        /* Button Styling */
        .shop-now-btn {
          background-color: var(--brand-green);
          color: white;
          padding: 12px 35px;
          border: none;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .shop-now-btn:hover {
          background-color: #00331a;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }

        /* Mobile Responsiveness */
        @media (max-width: 850px) {
          .category-row, .category-row:nth-child(even) {
            flex-direction: column;
            gap: 30px;
            text-align: center;
          }
          
          .image-container img {
            height: 300px;
          }
          
          .text-container p {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

      <section className="products-section">
        <div className="container">
          {productCategories.map((cat, index) => (
            <div className="category-row" key={index}>
              <div className="image-container">
                <img src={cat.imageUrl} alt={cat.category} />
              </div>
              
              <div className="text-container">
                <h3>{cat.category}</h3>
                <p>{cat.items}</p>
                <button 
                  className="shop-now-btn"
                  onClick={() => handleCardClick(cat.slug)}
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;