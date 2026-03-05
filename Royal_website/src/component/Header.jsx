
function Header() {
  return (
    <>
      <style>{`
      .topbar{
        background:#0d5c3d;
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

      .left span{
        margin-right:20px;
      }

      `}</style>

      <div className="topbar">
        <div className="container topbar-content">
          <div className="left">
            <span>+1 (234) 567-890</span>
            <span>info@company.com</span>
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