import React from "react";
import { FaArrowRight, FaCheckCircle, FaBolt, FaTag } from "react-icons/fa";

function ReadyToOrder() {
  return (
    <>
      <style>{`
        .ready-section {
          padding: 80px 0;
          background: white;
          color: #000;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
        }

        .ready-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          align-items: center;
        }

        .left-content {
          padding-right: 40px;
        }

        .left-content h2 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
          color: #000;
        }

        .left-content p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 30px;
          color: #666;  /* Gray color for p tag */
        }

        .button-group {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }

        .quote-btn {
          background: #d4a531;
          color: white;
          border: none;
          padding: 15px 35px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s;
          box-shadow: 0 5px 20px rgba(212, 165, 49, 0.2);
        }

        .quote-btn:hover {
          background: #b88c2a;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 165, 49, 0.3);
        }

        .quote-btn svg {
          transition: transform 0.3s;
        }

        .quote-btn:hover svg {
          transform: translateX(5px);
        }

        .catalog-btn {
          background: transparent;
          color: #333;
          border: 2px solid #e0e0e0;
          padding: 13px 35px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
        }

        .catalog-btn:hover {
          border-color: #d4a531;
          color: #d4a531;
          background: #fff9e6;
        }

        .right-content {
          background: #f8f9fa;
          padding: 40px;
          border-radius: 20px;
          border: 1px solid #eaeaea;
          box-shadow: 0 5px 20px rgba(0,0,0,0.03);
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
          font-size: 16px;
          line-height: 1.4;
          color: #444;
        }

        .feature-list li:last-child {
          margin-bottom: 0;
        }

        .check-icon {
          color: #d4a531;
          font-size: 22px;
          min-width: 28px;
        }

        .feature-text {
          font-weight: 500;
        }

        .highlight {
          color: #000000;
          font-weight: 700;
          margin-right: 5px;
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
            padding: 30px 20px;
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
                <button className="quote-btn">
                  Request a Quote <FaArrowRight />
                </button>
                <button className="catalog-btn">
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
                    <span className="highlight">Fast Response Time</span>
                  </span>
                </li>
                <li>
                  <span className="check-icon">
                    <FaTag />
                  </span>
                  <span className="feature-text">
                    <span className="highlight">Competitive Wholesale Pricing</span>
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