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

      .right-menu{
        display:flex;
        align-items:center;
        gap:20px;
      }

      .menu{
        list-style:none;
        display:flex;
        gap:20px;
      }

      .menu li button{
        background:transparent;
        border:none;
        font-weight:500;
        cursor:pointer;
        font-size:16px;
        padding:8px 12px;
        transition:0.3s;
      }

      .menu li button:hover{
        color:#d4a531;
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
                        <h2>Royal</h2>
                        <p>EXPORT QUALITY</p>
                    </div>

                    <div className="right-menu">
                        <ul className="menu">
                            <li>
                                <button>Home</button>
                            </li>
                            <li>
                                <button>Products</button>
                            </li>
                            <li>
                                <button>About Us</button>
                            </li>
                        </ul>

                        <button className="inquiry-btn">Get Inquiry</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
