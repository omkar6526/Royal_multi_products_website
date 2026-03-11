// Header.jsx
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useState, useEffect } from "react";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <>
      <style>{`
        .topbar {
          background: linear-gradient(135deg, var(--royal-deep-purple), var(--royal-burgundy));
          color: white;
          font-size: 23px;
          // font-weight: bold; 
          padding: 8px 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transform: translateY(${isVisible ? '0' : '-100%'});
          transition: transform 0.3s ease;
          border-bottom: 2px solid var(--royal-gold);
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
        }

        .topbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .left {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .left span {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
        }

        .left span::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--royal-gold);
          transition: width 0.3s;
        }

        .left span:hover {
          color: var(--royal-gold);
          transform: translateY(-2px);
        }

        .left span:hover::after {
          width: 100%;
        }

        .right {
          font-weight: 500;
          letter-spacing: 0.5px;
          padding: 4px 12px;
          background: rgba(212, 175, 55, 0.2);
          border-radius: 30px;
          border: 1px solid var(--royal-gold);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0px); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .topbar-content {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .left {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .right {
            font-size: 12px;
            width: 100%;
          }
        }
      `}</style>

      <div className="topbar">
        <div className="container topbar-content">
          <div className="left">
            <span className="animate-fade-in-left delay-1">
              <FaPhoneAlt size={25} />
              +91 9623358693
            </span>

            <span className="animate-fade-in-left delay-2">
              <BiLogoGmail size={25} />
              royal.shaikh231@gmail.com
            </span>
          </div>

          <div className="right animate-fade-in-right delay-3">
            Wholesale & Retail | Export Quality Products
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
