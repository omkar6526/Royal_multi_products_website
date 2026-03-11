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
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
          animation: rotate 30s linear infinite;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 60%);
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
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(5px);
          color: white;
          padding: 10px 25px;
          border-radius: 50px;
          font-size: 14px;
          margin-bottom: 25px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          opacity: 0;
          animation: fadeInDown 0.8s ease forwards;
        }
        .hero-title-main{
          font-size: 80px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 10px;
          font-family: var(--font-heading);
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.2s;
        }

        .hero-title {
          font-size: 46px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 10px;
          font-family: var(--font-heading);
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.2s;
        }

        /* Accent line now sits BELOW the title with a bg-matched color */
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
        }

        .hero-accent-line::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          /* Line color blends with the dark background — subtle white-teal */
          background: linear-gradient(90deg, rgba(255,255,255,0.3), rgba(157, 221, 143, 0.6), rgba(255,255,255,0.3));
          border-radius: 2px;
        }

        .hero-text {
          margin-top: 10px;
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
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          background: white;
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          color: var(--royal-deep-purple);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 16px;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        }

        .browse-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          transition: left 0.5s;
        }

        .browse-btn:hover::before {
          left: 100%;
        }

        .browse-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.9);
        }

        .quote-btn {
          background: transparent;
          border: 2px solid white;
          padding: 13px 35px;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s, color 0.3s, border-color 0.3s, transform 0.3s;
          font-size: 16px;
          position: relative;
          overflow: hidden;
          z-index: 1;
          box-shadow: none !important;
        }

        .quote-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: white;
          transition: left 0.3s;
          z-index: -1;
        }

        .quote-btn:hover::before {
          left: 0;
        }

        .quote-btn:hover {
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: none !important;
          color: var(--royal-deep-purple);
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
            font-size: 40px;
          }
          
          .hero-accent-line {
            font-size: 20px;
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
          .hero-title-main {
            font-size: 42px;
          }
          .hero-title {
            font-size: 32px;
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