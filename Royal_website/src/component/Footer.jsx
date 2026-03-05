import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #1a1a1a;
          color: #fff;
          padding: 60px 0 20px;
          font-family: Arial, sans-serif;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        /* Brand Section */
        .brand-section h2 {
          font-size: 28px;
          margin-bottom: 15px;
          color: #fff;
        }

        .brand-section p {
          color: #b0b0b0;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          background: #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s;
        }

        .social-icon:hover {
          background: #d4a531;
          transform: translateY(-3px);
        }

        /* Links Sections */
        .footer-section h3 {
          font-size: 18px;
          margin-bottom: 20px;
          color: #fff;
          position: relative;
        }

        .footer-section h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 30px;
          height: 2px;
          background: #d4a531;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: #b0b0b0;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
          cursor: pointer;
        }

        .footer-links a:hover {
          color: #d4a531;
          padding-left: 5px;
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
          color: #b0b0b0;
          font-size: 14px;
          line-height: 1.5;
        }

        .contact-icon {
          color: #d4a531;
          min-width: 20px;
          margin-top: 3px;
        }

        /* Copyright */
        .copyright {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #333;
          color: #b0b0b0;
          font-size: 13px;
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
          
          .social-icons {
            justify-content: center;
          }
          
          .footer-section h3::after {
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
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
            {/* Brand Section */}
            <div className="brand-section">
              <h2>Royal</h2>
              <p>
                Your trusted partner for wholesale and retail export-quality products. 
                Serving customers worldwide with excellence.
              </p>
              <div className="social-icons">
                <div className="social-icon">
                  <FaFacebookF size={16} />
                </div>
                <div className="social-icon">
                  <FaInstagram size={16} />
                </div>
                <div className="social-icon">
                  <FaLinkedinIn size={16} />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>All Products</a></li>
                <li><a>Contact & Inquiry</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer-section">
              <h3>Our Categories</h3>
              <ul className="footer-links">
                <li><a>Clothing & Textiles</a></li>
                <li><a>Soaps</a></li>
                <li><a>Spices</a></li>
                <li><a>Grapes</a></li>
                <li><a>Religious Items</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <span className="contact-icon"><FaMapMarkerAlt /></span>
                  <span> Shop No.1 Reliable corner, Pakhal road oppo. Hussaini tower , Nashik Pin 422011</span>
                </li>
                <li>
                  <span className="contact-icon"><FaPhoneAlt /></span>
                  <span>+91 9623358693</span>
                </li>
                <li>
                  <span className="contact-icon"><FaEnvelope /></span>
                  <span>royal.shaikh231@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="copyright">
            © {new Date().getFullYear()} Royal. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;