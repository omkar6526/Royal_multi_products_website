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
          background: rgba(2, 27, 61, 0.86);
          color: white;
          font-size: 20px;
          // font-weight: bold; 
          padding-top: 5px;
          padding-bottom: 5px;
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          box-shadow: 0 0.5px 5px rgba(2, 84, 198, 0.96);
          transform: translateY(${isVisible ? '0' : '-100%'});
          transition: transform 0.3s ease;
          
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
          padding: 4px 0px;
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
            font-size: 16px;
          }
        }
      `}</style>

      <div className="topbar">
        <div className="container topbar-content">
          <div className="left">
            <span className="animate-fade-in-left delay-1">
              <FaPhoneAlt size={20} />
              +91 9623358693
            </span>

            <span className="animate-fade-in-left delay-2">
              <BiLogoGmail size={20} />
              royal.shaikh231@gmail.com
            </span>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;
