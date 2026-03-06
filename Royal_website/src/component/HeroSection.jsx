// HeroSection.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

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

  return (
    <>
      <style>{`
        .hero {
          background: linear-gradient(135deg, var(--royal-deep-purple), var(--royal-burgundy));
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

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 60%);
          animation: rotate 30s linear infinite;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 60%);
          animation: rotate 40s linear infinite reverse;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-container {
          max-width: 900px;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          padding: 10px 25px;
          border-radius: 50px;
          font-size: 14px;
          margin-bottom: 25px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          animation: float 3s ease-in-out infinite;
          opacity: 0;
          animation: fadeInDown 0.8s ease forwards, float 3s ease-in-out infinite 0.8s;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          font-family: var(--font-heading);
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.2s;
        }

        .hero-title span {
          color: var(--royal-gold);
          position: relative;
          display: inline-block;
        }

        .hero-title span::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 10px;
          background: rgba(212, 175, 55, 0.3);
          z-index: -1;
          border-radius: 5px;
        }

        .hero-text {
          margin-top: 20px;
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          line-height: 1.8;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.4s;
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
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 16px;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
        }

        .browse-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .browse-btn:hover::before {
          left: 100%;
        }

        .browse-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.6);
        }

        .quote-btn {
          background: transparent;
          border: 2px solid var(--royal-gold);
          padding: 13px 35px;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 16px;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .quote-btn::before {
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

        .quote-btn:hover::before {
          left: 0;
        }

        .quote-btn:hover {
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 40px;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .browse-btn, .quote-btn {
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 32px;
          }
          
          .hero-text {
            font-size: 16px;
          }
        }
      `}</style>

      <section className="hero" ref={heroRef}>
        <div className="hero-container">
          <div className="hero-badge">
            Export Quality Products Worldwide
          </div>

          <h1 className="hero-title">
            Your Trusted Partner in <br/>
            <span>Wholesale & Retail Excellence</span>
          </h1>

          <p className="hero-text">
            Premium quality products across clothing, soaps, spices, grapes, and religious items.
            Serving businesses worldwide with integrity and excellence since 2010.
          </p>

          <div className="hero-buttons">
            <button className="browse-btn" onClick={() => navigate('/product/:category')}>
              Browse Products →
            </button>

            <button className="quote-btn" onClick={() => navigate('/contact')}>
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;