import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Header() {
  return (
    <>
      <style>{`
      .topbar {
        background: #7E2A0C;
        color: white;
        font-size: 14px;
        padding: 8px 0;
        position: sticky;
        top: 0;
        z-index: 1000;
        width: 100%;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
        transition: color 0.3s;
      }

      .left span:hover {
        color: #d4a531;
      }

      .right {
        font-weight: 500;
        letter-spacing: 0.5px;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .topbar {
          padding: 10px 0;
          position: sticky;
          top: 0;
        }

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

        .left span {
          margin-right: 0;
          font-size: 13px;
        }

        .right {
          font-size: 12px;
          border-top: 1px solid rgba(255,255,255,0.2);
          padding-top: 8px;
          width: 100%;
        }
      }

      @media (max-width: 480px) {
        .left {
          flex-direction: column;
          gap: 10px;
        }

        .left span {
          font-size: 12px;
        }
      }
      `}</style>

      <div className="topbar">
        <div className="container topbar-content">
          <div className="left">
            <span>
              <FaPhoneAlt size={15} />
              +91 9623358693
            </span>

            <span>
              <BiLogoGmail size={20} />
              royal.shaikh231@gmail.com
            </span>
          </div>

          <div className="right">
            Wholesale & Retail | Export Quality Products
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;