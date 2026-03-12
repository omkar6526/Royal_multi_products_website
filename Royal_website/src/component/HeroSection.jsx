// HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Import all 6 images from assets
import allProduct from '../assets/heroimge/allproduct.jpg';
import clothingImg from '../assets/heroimge/clothing.jpg';
import soapsImg from '../assets/heroimge/soap.jpg';
import spicesImg from '../assets/heroimge/spices.jpg';
import grapesImg from '../assets/heroimge/grapes.jpg';
import religiousImg from '../assets/heroimge/religious.jpg';


function HeroSection() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 6 images for the carousel - using imported images
  const carouselImages = [
    allProduct,
    clothingImg,
    soapsImg,
    spicesImg,
    grapesImg,
    religiousImg
  ];

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <>
      <style>{`
        .hero {
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        /* Carousel Container */
        .hero-carousel {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .carousel-image.active {
          opacity: 1; /* Full opacity - image clearly visible */
        }

        /* Dark overlay - Black opacity for images */
        .hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6); /* Pure black with 60% opacity */
          z-index: 1;
        }

        .hero-container {
          max-width: 900px;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 215, 0, 0.2); /* Gold tint */
          backdrop-filter: blur(4px);
          color: white;
          padding: 10px 25px;
          border-radius: 50px;
          font-size: 14px;
          margin-bottom: 20px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 1px solid rgba(255, 215, 0, 0.3);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          opacity: 0;
          animation: fadeInDown 0.8s ease forwards;
        }
        
        .hero-title-main {
          font-size: 80px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 10px;
          font-family: var(--font-heading);
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.2s;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
          color: white;
        }

        .hero-title {
          font-size: 46px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 15px;
          font-family: var(--font-heading);
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.2s;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
          color: white;
        }

        .hero-accent-line {
          display: inline-block;
          color: white;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 30px;
          position: relative;
          padding-bottom: 16px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.3s;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
        }

        .hero-accent-line::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, transparent, gold, transparent);
          border-radius: 2px;
        }

        .hero-text {
          margin-top: 10px;
          font-size: 18px;
          color: white;
          line-height: 1.8;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.4s;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
          font-weight: 500;
        }

        .hero-buttons {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 20px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.6s;
        }

        .browse-btn {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          background: gold;
          border: none;
          padding: 15px 35px;
          color: #000;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 16px;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
          border-radius: 0px;
        }

        .browse-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
          background: white;
          color: #000;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-title-main {
            font-size: 60px;
          }

          .hero-title {
            font-size: 36px;
          }
          
          .hero-accent-line {
            font-size: 20px;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .browse-btn {
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 480px) {
          .hero-title-main {
            font-size: 48px;
          }
          
          .hero-title {
            font-size: 28px;
          }
          
          .hero-accent-line {
            font-size: 18px;
          }
          
          .hero-text {
            font-size: 16px;
          }
        }
      `}</style>

      <section className="hero" ref={heroRef}>
        {/* Carousel Images - using imported images */}
        <div className="hero-carousel">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-container">
          <div className="hero-title-main">
            ROYAL
          </div>
          <div className="hero-badge">
            EXPORT QUALITY WORLDWIDE
          </div>

          <h1 className="hero-title">
            Your Trusted Partner in
          </h1>
          
          <div className="hero-accent-line">
            Wholesale and Trading Excellence
          </div>

          <p className="hero-text">
            Premium quality products across clothing, soaps, spices, grapes, and religious items.
            Serving businesses worldwide with integrity and excellence since 2010.
          </p>

          <div className="hero-buttons">
            <button className="browse-btn" onClick={() => navigate('/products')}>
              Browse Products →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;