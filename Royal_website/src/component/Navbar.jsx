import React from "react";

function Navbar() {
  return (
    <>
      <style>{`

      .navbar{
        background:#f5f5f5;
        padding:15px 0;
      }

      .container{
        width:90%;
        margin:auto;
      }

      .nav-content{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .logo h2{
        color:#0d5c3d;
        font-weight:700;
      }

      .logo p{
        font-size:12px;
        color:#d4a531;
      }

      .menu{
        list-style:none;
        display:flex;
        gap:30px;
        font-weight:500;
      }

      .menu li{
        cursor:pointer;
      }

      .inquiry-btn{
        background:#d4a531;
        border:none;
        padding:10px 18px;
        border-radius:8px;
        color:white;
        font-weight:600;
        cursor:pointer;
      }

      `}</style>

      <nav className="navbar">
        <div className="container nav-content">

          <div className="logo">
            <h2>GlobalTrade</h2>
            <p>EXPORT QUALITY</p>
          </div>

          <ul className="menu">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>

          <button className="inquiry-btn">
            Get Inquiry
          </button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;