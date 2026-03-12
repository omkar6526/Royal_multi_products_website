// Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, var(--royal-deep-purple), var(--royal-burgundy));
          color: #fff;
          padding: 80px 0 20px;
          font-family: var(--font-body);
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
          animation: rotate 30s linear infinite;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
          position: relative;
          z-index: 1;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        /* Brand Section */
        .brand-section {
          animation: fadeInUp 0.8s ease forwards;
        }

        .brand-section h2 {
          font-size: 32px;
          margin-bottom: 15px;
          color: var(--royal-gold);
          font-family: var(--font-heading);
          font-weight: 800;
          position: relative;
          display: inline-block;
        }

        .brand-section h2::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 3px;
          background: var(--royal-gold);
          border-radius: 2px;
        }

        .brand-section p {
          color: rgba(255,255,255,0.8);
          line-height: 1.8;
          margin-bottom: 25px;
          font-size: 15px;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: rgb(249, 249, 249);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ede1e1;
          cursor: pointer;
          transition: all 0.3s;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .social-icon:hover {
          background: var(--royal-gold);
          transform: translateY(-5px) rotate(360deg);
          border-color: var(--royal-gold);
        }

        /* Links Sections */
        .footer-section {
          animation: fadeInUp 0.8s ease forwards;
        }

        .footer-section:nth-child(2) { animation-delay: 0.2s; }
        .footer-section:nth-child(3) { animation-delay: 0.4s; }
        .footer-section:nth-child(4) { animation-delay: 0.6s; }

        .footer-section h3 {
          font-size: 20px;
          margin-bottom: 20px;
          color: var(--royal-gold);
          font-family: var(--font-heading);
          position: relative;
        }

        .footer-section h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, var(--royal-gold), transparent);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
          transform: translateX(0);
          transition: transform 0.3s;
        }

        .footer-links li:hover {
          transform: translateX(5px);
        }

        .footer-links a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s;
          cursor: pointer;
          position: relative;
        }

        .footer-links a::before {
          content: '›';
          position: absolute;
          left: -15px;
          opacity: 0;
          transition: all 0.3s;
          color: var(--royal-gold);
        }

        .footer-links a:hover {
          color: var(--royal-gold);
          padding-left: 15px;
        }

        .footer-links a:hover::before {
          opacity: 1;
          left: 0;
        }

        /* Contact Section */
        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-info li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 15px;
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          line-height: 1.6;
          transition: transform 0.3s;
        }

        .contact-info li:hover {
          transform: translateX(5px);
        }

        .contact-icon {
          color: var(--royal-gold);
          min-width: 20px;
          margin-top: 3px;
          font-size: 16px;
        }

        /* Back to Top Button */
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          z-index: 99;
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
          animation: float 3s ease-in-out infinite;
        }

        .back-to-top:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
        }

        /* Copyright */
        .copyright {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
          
          .brand-section {
            text-align: center;
          }
          
          .brand-section h2::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .social-icons {
            justify-content: center;
          }
          
          .footer-section h3::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .footer-section h3 {
            text-align: center;
          }
          
          .footer-links {
            text-align: center;
          }
          
          .contact-info li {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="brand-section">
              <h2>Royal</h2>
              <p>
                Your trusted partner for wholesale and retail export-quality
                products. Serving customers worldwide with excellence since
                2010.
              </p>
              <div className="social-icons">
                <div
                  className="social-icon animate-float"
                  style={{ animationDelay: "0.1s" }}
                >
                  <a href="https://www.facebook.com" target="_blank">
                    <FaFacebookF size={16} />
                  </a>
                </div>
                <div
                  className="social-icon animate-float"
                  style={{ animationDelay: "0.2s" }}
                >
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    style={{
                      color: "#E4405F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaInstagram size={16} />
                  </a>
                </div>
                <div
                  className="social-icon animate-float"
                  style={{ animationDelay: "0.3s" }}
                >
                  <a
                    href="https://wa.me/919623358693"
                    target="_blank"
                    style={{
                      color: "#06762f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaWhatsapp size={16} />
                  </a>
                </div>
                <div
                  className="social-icon animate-float"
                  style={{ animationDelay: "0.4s" }}
                >
                  <a href="https://www.linkedin.com" target="_blank">
                    <FaLinkedinIn size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/products">All Products</a>
                </li>
                <li>
                  <a href="/inquiry">Contact & Inquiry</a>
                </li>
                <li>
                  <a>Careears</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Our Categories</h3>
              <ul className="footer-links">
                <li>
                  <a href="/product/:category">Clothing & Textiles</a>
                </li>
                <li>
                  <a href="/product/:category">Soaps</a>
                </li>
                <li>
                  <a href="/product/:category">Spices</a>
                </li>
                <li>
                  <a href="/product/:category">Grapes</a>
                </li>
                <li>
                  <a href="/product/:category">Hujj Special </a>
                </li>
                <li>
                  <a href="/product/:category">Onion and Onion Powder</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <span className="contact-icon">
                    <FaMapMarkerAlt />
                  </span>
                  <span>
                    Shop No.1 Reliable corner, Pakhal road oppo. Hussaini tower,
                    Nashik Pin 422011
                  </span>
                </li>
                <li>
                  <span className="contact-icon">
                    <FaPhoneAlt />
                  </span>
                  <span>+91 9623358693</span>
                </li>
                <li>
                  <span className="contact-icon">
                    <FaEnvelope />
                  </span>
                  <span>royal.shaikh231@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            © {new Date().getFullYear()} Royal. All rights reserved. | Crafted
            with for excellence
          </div>
        </div>

        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </footer>
    </>
  );
}

export default Footer;