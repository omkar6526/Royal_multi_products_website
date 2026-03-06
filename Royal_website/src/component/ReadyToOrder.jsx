// ReadyToOrder.jsx
import React, { useEffect } from "react";
import { FaArrowRight, FaCheckCircle, FaBolt, FaTag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ReadyToOrder() {
  const navigate = useNavigate();

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

    const leftContent = document.querySelector('.left-content');
    const rightContent = document.querySelector('.right-content');
    
    if (leftContent) observer.observe(leftContent);
    if (rightContent) observer.observe(rightContent);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ready-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #fff, var(--royal-cream));
          position: relative;
          overflow: hidden;
        }

        .ready-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
          animation: rotate 50s linear infinite;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
          position: relative;
          z-index: 1;
        }

        .ready-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          align-items: center;
        }

        .left-content {
          padding-right: 40px;
          opacity: 0;
          transform: translateY(30px);
        }

        .left-content.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .left-content h2 {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
          color: var(--royal-deep-purple);
          font-family: var(--font-heading);
          position: relative;
        }

        .left-content h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          border-radius: 2px;
        }

        .left-content p {
          font-size: 18px;
          line-height: 1.8;
          margin: 30px 0;
          color: #666;
          font-family: var(--font-body);
        }

        .button-group {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }

        .quote-btn {
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border: none;
          padding: 16px 35px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s;
          box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
          position: relative;
          overflow: hidden;
        }

        .quote-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .quote-btn:hover::before {
          left: 100%;
        }

        .quote-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.5);
        }

        .quote-btn svg {
          transition: transform 0.3s;
        }

        .quote-btn:hover svg {
          transform: translateX(5px);
        }

        .catalog-btn {
          background: transparent;
          color: var(--royal-deep-purple);
          border: 2px solid rgba(212, 175, 55, 0.3);
          padding: 14px 35px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .catalog-btn::before {
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

        .catalog-btn:hover::before {
          left: 0;
        }

        .catalog-btn:hover {
          border-color: transparent;
          color: white;
          transform: translateY(-3px);
        }

        .right-content {
          background: linear-gradient(135deg, var(--royal-deep-purple), #1A0F2E);
          padding: 45px 40px;
          border-radius: 30px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          box-shadow: 0 20px 40px rgba(42, 26, 74, 0.2);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .right-content.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .right-content::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
          animation: rotate 30s linear infinite;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          font-size: 16px;
          line-height: 1.5;
          color: rgba(255,255,255,0.9);
          transition: transform 0.3s;
        }

        .feature-list li:hover {
          transform: translateX(10px);
        }

        .feature-list li:last-child {
          margin-bottom: 0;
        }

        .check-icon {
          color: var(--royal-gold);
          font-size: 24px;
          min-width: 32px;
          filter: drop-shadow(0 2px 5px rgba(212, 175, 55, 0.3));
        }

        .feature-text {
          font-weight: 500;
          font-family: var(--font-body);
        }

        .highlight {
          color: var(--royal-gold);
          font-weight: 700;
          margin-right: 5px;
          font-family: var(--font-heading);
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 968px) {
          .ready-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .left-content {
            padding-right: 0;
            text-align: center;
          }

          .left-content h2::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .left-content h2 {
            font-size: 36px;
          }

          .button-group {
            justify-content: center;
          }

          .right-content {
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (max-width: 576px) {
          .button-group {
            flex-direction: column;
          }

          .left-content h2 {
            font-size: 30px;
          }

          .left-content p {
            font-size: 16px;
          }

          .right-content {
            padding: 35px 25px;
          }
        }
      `}</style>

      <section className="ready-section">
        <div className="container">
          <div className="ready-wrapper">
            {/* Left Content */}
            <div className="left-content">
              <h2>Ready to Start Your Order?</h2>
              <p>
                Get in touch with us today for wholesale pricing, product samples, or custom orders.
                Our team is ready to assist you with all your business needs.
              </p>

              <div className="button-group">
                <button 
                  className="quote-btn"
                  onClick={() => navigate('/contact')}
                >
                  Request a Quote <FaArrowRight />
                </button>
                <button 
                  className="catalog-btn"
                  onClick={() => navigate('/products')}
                >
                  Browse Catalog
                </button>
              </div>
            </div>

            {/* Right Content - Features */}
            <div className="right-content">
              <ul className="feature-list">
                <li>
                  <span className="check-icon">
                    <FaCheckCircle />
                  </span>
                  <span className="feature-text">
                    <span className="highlight">No Minimum Order</span> for Samples
                  </span>
                </li>
                <li>
                  <span className="check-icon">
                    <FaBolt />
                  </span>
                  <span className="feature-text">
                    <span className="highlight">Fast Response Time</span> within 24 hours
                  </span>
                </li>
                <li>
                  <span className="check-icon">
                    <FaTag />
                  </span>
                  <span className="feature-text">
                    <span className="highlight">Competitive Wholesale Pricing</span> for bulk orders
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReadyToOrder;