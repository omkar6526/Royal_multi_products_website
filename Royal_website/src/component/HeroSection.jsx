import React from "react";

function HeroSection() {
  return (
    <>
      <style>{`

      .hero{
        background:#7E2A0C;
        min-height:500px;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        color:white;
        padding:60px 20px;
      }

      .hero-container{
        max-width:900px;
      }

      .hero-badge{
        display:inline-block;
        background:#d4a531;
        color:white;
        padding:8px 18px;
        border-radius:20px;
        font-size:14px;
        margin-bottom:20px;
      }

      .hero-title{
        font-size:48px;
        font-weight:700;
        line-height:1.2;
      }

      .hero-title span{
        color:#d4a531;
      }

      .hero-text{
        margin-top:20px;
        font-size:18px;
        color:#dcdcdc;
      }

      .hero-buttons{
        margin-top:30px;
        display:flex;
        justify-content:center;
        gap:20px;
      }

      .browse-btn{
        background:#d4a531;
        border:none;
        padding:12px 24px;
        border-radius:8px;
        color:white;
        font-weight:600;
        cursor:pointer;
      }

      .quote-btn{
        background:white;
        border:none;
        padding:12px 24px;
        border-radius:8px;
        color:#0b5d3b;
        font-weight:600;
        cursor:pointer;
      }

      `}</style>

      <section className="hero">

        <div className="hero-container">

          <div className="hero-badge">
            Export Quality Products Worldwide
          </div>

          <h1 className="hero-title">
            Your Trusted Partner in <br/>
            <span>Wholesale & Retail Excellence</span>
          </h1>

          <p className="hero-text">
            Premium quality products across clothing, soaps, spices, grapes, and religious items.
            Serving businesses worldwide with integrity and excellence.
          </p>

          <div className="hero-buttons">
            <button className="browse-btn">
              Browse Products →
            </button>

            <button className="quote-btn">
              Get Quote
            </button>
          </div>

        </div>

      </section>
    </>
  );
}

export default HeroSection;