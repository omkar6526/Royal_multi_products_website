import React from "react";

function FeaturedProducts() {
  const featuredItems = [
    {
      category: "CLOTHING & TEXTILES",
      title: "Premium School Uniforms",
      description: "High-quality, durable school uniforms in various sizes",
      imageUrl: "https://image.made-in-china.com/203f0j00KAlouVCwLacp/blog.jpg",
      bgColor: "#f5e6d3"
    },
    {
      category: "CLOTHING & TEXTILES", 
      title: "Medical Hospital Aprons",
      description: "Sterile, comfortable aprons for medical professionals",
      imageUrl: "https://thumbs.dreamstime.com/b/closeup-green-surgical-smock-stethoscope-white-hanger-against-neutral-grey-background-medical-uniform-nurse-doctor-384820455.jpg",
      bgColor: "#e0f0fa"
    },
    {
      category: "CLOTHING & TEXTILES",
      title: "Luxury Cotton Towels",
      description: "Soft, absorbent premium towels for hotels and homes",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5GB3-grc9de-jeCVFpDOCkvoLStXg7A2lg&s",
      bgColor: "#e8f0e8"
    }, {
      category: "CLOTHING & TEXTILES",
      title: "Hajj Ihram Set",
      description: "Authentic white ihram clothing for pilgrimage",
      imageUrl: "https://www.hadiyahgifting.com/cdn/shop/files/Hajj-e-Mabroor_Luxe_Couple_Set-Photoroom.webp?v=1746469481",
      bgColor: "#f5e6d3"
    },
    {
      category: "CLOTHING & TEXTILES", 
      title: "Premium Hijab Collection",
      description: "Elegant hijabs in various styles and fabrics",
      imageUrl: "https://img.nihaojewelry.com/fit-in/800x800/filters:format(webp)/product/2025/7/29/1950012980083167232/121-Colors-Pure-Color-Pearl-Chiffon-Long-Scarf-Premium-Straight-Edge-Ruffle-Chiffon-Shawl-Single-Color-Indonesian-Headscarf.jpg",
      bgColor: "#e0f0fa"
    },
    {
      category: "Soaps",
      title: "Natural Handmade Soap Bars",
      description: "Organic handcrafted soap with natural ingredients",
      imageUrl: "https://media.istockphoto.com/id/517495506/photo/bars-of-homemade-soaps-honey-or-oil-and-healing-herbs.jpg?s=612x612&w=0&k=20&c=bQPtsclGfpY5yIjyRDSSSRn4wAy94O1DFsQr2aoz0K4=",
      bgColor: "#e8f0e8"
    }
  ];

  return (
    <>
      <style>{`
        .featured-section {
          padding: 60px 0;
          background: #fff;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 40px;
        }

         .section-title p {
          font-size: 16px;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .section-title h2 {
          font-size: 36px;
          color: #000;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .featured-card {
          background: #fff;
          border: 1px solid #eaeaea;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .featured-card:hover {
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          transform: translateY(-8px);
        }

        .card-image {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .featured-card:hover .card-image img {
          transform: scale(1.08);
        }

        .featured-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #d4a531;
          color: white;
          padding: 6px 18px;
          border-radius: 25px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          z-index: 2;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .card-content {
          padding: 25px;
        }

        .product-category {
          font-size: 14px;
          color: #d4a531;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .product-title {
          font-size: 22px;
          font-weight: 700;
          color: #000;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .product-description {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          min-height: 70px;
        }

        .card-buttons {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .details-btn {
          background: #d4a531;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          flex: 1;
          letter-spacing: 0.5px;
        }

        .details-btn:hover {
          background: #b88c2a;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 165, 49, 0.3);
        }

        .inquire-btn {
          background: transparent;
          color: #333;
          border: 2px solid #e0e0e0;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          flex: 1;
          letter-spacing: 0.5px;
        }

        .inquire-btn:hover {
          border-color: #d4a531;
          color: #d4a531;
          background: #fff9e6;
          transform: translateY(-2px);
        }


         .view-all-container {
          text-align: center;
          margin-top: 30px;
        }

        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #000000;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          background: none;
          border: none;
          padding: 10px 25px;
          border: 2px solid #c5c5c5;
          border-radius: 50px;
          transition: all 0.3s;
        }

        .view-all-link:hover {
          background: #d4a531;
          color: white;
          gap: 15px;
        }

        .arrow {
          font-size: 18px;
          transition: transform 0.3s;
        }

        .view-all-link:hover .arrow {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .card-image {
            height: 200px;
          }
        }
      `}</style>

      <section className="featured-section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
             <p>
              Discover our most popular export-quality products
            </p>
          </div>

          <div className="featured-grid">
            {featuredItems.map((item, index) => (
              <div className="featured-card" key={index}>
                <div className="card-image">
                  <img src={item.imageUrl} alt={item.title} />
                  <div className="featured-tag">Featured</div>
                </div>

                <div className="card-content">
                  <div className="product-category">{item.category}</div>
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-description">{item.description}</p>
                  
                  <div className="card-buttons">
                    <button className="details-btn">View Details</button>
                    <button className="inquire-btn">Inquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
           <div className="view-all-container">
            <button className="view-all-link">
              View All Products <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;