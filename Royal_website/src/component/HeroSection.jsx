import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import allProduct from '../assets/heroImge/allproduct.jpg';
import clothingImg from '../assets/heroImge/clothing.jpg';
import soapsImg from '../assets/heroImge/soap.jpg';
import spicesImg from '../assets/heroImge/spices.jpg';
import grapesImg from '../assets/heroImge/grapes.jpg';
import religiousImg from '../assets/heroImge/religious.jpg';
import schooluniformImg from '../assets/heroImge/schooluniforms.jpg';

function HeroSection() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const carouselImages = [
    allProduct,
    clothingImg,
    soapsImg,
    spicesImg,
    grapesImg,
    religiousImg,
    schooluniformImg
  ];

  // Trigger entrance animations on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-scroll carousel effect (Slightly slower for elegance)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Increased to 5s to allow the zoom animation to breathe

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <>
      <style>{`
        /* Core Layout */
        .hero {
          min-height: 100vh; /* Full screen height for maximum impact */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* Animated Carousel Background (Ken Burns Effect) */
        .hero-carousel {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-color: #000;
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1);
          transition: opacity 1.5s ease-in-out, transform 7s linear;
        }

        .carousel-image.active {
          opacity: 1;
          transform: scale(1.1); /* Slow zoom in */
        }

        /* Premium Gradient Overlay */
        .hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom, 
            rgba(0, 0, 0, 0.4) 0%, 
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: 1;
        }

        /* Content Container */
        .hero-container {
          max-width: 1000px;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Glassmorphism Badge */
        .hero-badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.4);
          color: #FFD700;
          padding: 8px 24px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          
          /* Animation */
          opacity: 0;
          transform: translateY(30px);
        }
        
        /* Gold Gradient Main Title */
        .hero-title-main {
          font-size: 100px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 15px;
          letter-spacing: 4px;
          background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0px 10px 20px rgba(0,0,0,0.6));
          
          /* Animation */
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-title {
          font-size: 42px;
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 10px;
          color: #ffffff;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
          
          /* Animation */
          opacity: 0;
          transform: translateY(30px);
        }

        /* Animated Accent Line */
        .hero-accent-line {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 30px;
          position: relative;
          padding-bottom: 20px;
          color: #ffffff;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
          
          /* Animation */
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-accent-line::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0px; /* Starts at 0 for animation */
          height: 3px;
          background: linear-gradient(90deg, transparent, #FFD700, transparent);
          border-radius: 2px;
          transition: width 1s ease-in-out 1s; /* Animates in after text */
        }

        .hero-text {
          font-size: 18px;
          color: #e2e8f0;
          line-height: 1.8;
          max-width: 750px;
          margin: 0 auto 40px auto;
          font-weight: 400;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
          
          /* Animation */
          opacity: 0;
          transform: translateY(30px);
        }

        /* Premium Button */
        .browse-btn {
          background: linear-gradient(135deg, #FFD700 0%, #FBA500 100%);
          border: none;
          padding: 18px 45px;
          color: #1a1a1a;
          font-weight: 700;
          cursor: pointer;
          font-size: 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 10px;
          
          /* Animation */
          opacity: 0;
          transform: translateY(30px);
        }

        /* Button Shine Effect */
        .browse-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          animation: shine 4s infinite;
        }

        .browse-btn:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.5);
          background: linear-gradient(135deg, #FBA500 0%, #FFD700 100%);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .browse-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Triggering Animations when loaded */
        .is-loaded .hero-badge {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
        }
        .is-loaded .hero-title-main {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s;
        }
        .is-loaded .hero-title {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.5s;
        }
        .is-loaded .hero-accent-line {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.6s;
        }
        .is-loaded .hero-accent-line::after {
          width: 120px; /* Expands line */
        }
        .is-loaded .hero-text {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.7s;
        }
        .is-loaded .browse-btn {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.9s;
        }

        /* Keyframes */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero { min-height: 90vh; }
          .hero-title-main { font-size: 65px; letter-spacing: 2px; }
          .hero-title { font-size: 32px; }
          .hero-accent-line { font-size: 20px; }
          .hero-text { font-size: 16px; padding: 0 10px; }
          .browse-btn { width: 100%; justify-content: center; max-width: 300px; }
        }

        @media (max-width: 480px) {
          .hero-title-main { font-size: 50px; }
          .hero-title { font-size: 26px; }
          .hero-accent-line { font-size: 16px; }
          .hero-badge { font-size: 11px; padding: 6px 16px; }
        }
      `}</style>

      <section className={`hero ${isLoaded ? 'is-loaded' : ''}`} ref={heroRef}>
        {/* Animated Carousel Background */}
        <div className="hero-carousel">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Premium Product ${index + 1}`}
              className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-container">
          <div className="hero-badge">
            Export Quality Worldwide
          </div>

          <div className="hero-title-main">
            ROYAL
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

          <button className="browse-btn" onClick={() => navigate('/products')}>
            Browse Products <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default HeroSection;