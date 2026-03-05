import { FaPhoneAlt } from "react-icons/fa";
import { BiFontSize, BiLogoGmail } from "react-icons/bi";

function Header() {
  return (
    <>
      <style>{`
      .topbar{
        background:#7E2A0C;
        color:white;
        font-size:14px;
        padding:8px 0;
      }

      .container{
        width:90%;
        margin:auto;
      }

      .topbar-content{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .left{
        display:flex;
        align-items:center;
        gap:20px;
      }

      .left span{
        display:flex;
        align-items:center;
        gap:6px;
        margin-right:20px;
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
