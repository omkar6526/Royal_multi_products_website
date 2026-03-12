// WhyChooseUs.jsx
import React, { useEffect } from "react";
import { FaMedal, FaGlobe, FaTruck, FaHandshake } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaMedal size={40} />,
      title: "Premium Quality",
      description: "All products meet international quality standards with proper certifications."
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Global Reach",
      description: "Export to 50+ countries with reliable international shipping networks."
    },
    {
      icon: <FaTruck size={40} />,
      title: "Timely Delivery",
      description: "Efficient logistics ensuring on-time delivery of your orders."
    },
    {
      icon: <FaHandshake size={40} />,
      title: "Trusted Partner",
      description: "15+ years of excellence with 500+ satisfied business clients."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .why-choose-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a3d2e, #0d5c42, #0a4a35);
          position: relative;
          overflow: hidden;
        }

        .why-choose-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(157, 221, 143, 0.08) 0%, transparent 60%);
          animation: rotate 40s linear infinite;
        }

        .why-choose-section::after {
          content: '';
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(194, 244, 225, 0.05) 0%, transparent 60%);
          animation: rotate 50s linear infinite reverse;
        }

        .wcu-container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
          position: relative;
          z-index: 1;
        }

        .wcu-section-header {
          text-align: center;
          margin-bottom: 60px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .wcu-section-header h2 {
          font-size: 42px;
          color: white;
          margin-bottom: 15px;
          font-weight: 800;
          font-family: var(--font-heading);
          position: relative;
          display: inline-block;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
        }

        .wcu-section-header h2::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #9ddd8f, #c2f4e1);
          border-radius: 2px;
        }

        .wcu-section-header p {
          font-size: 18px;
          color: rgb(255, 255, 255);
          max-width: 600px;
          margin: 25px auto 0;
          line-height: 1.6;
          font-family: var(--font-body);
        }

        .wcu-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          padding: 40px 25px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(157, 221, 143, 0.3);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: scale(0.9);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .feature-card.animate-scale-in {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(157, 221, 143, 0.12), rgba(10, 58, 71, 0.08));
          opacity: 0;
          transition: opacity 0.4s;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #9ddd8f;
          box-shadow: 0 25px 50px rgba(0,0,0,0.45), 0 0 20px rgba(157, 221, 143, 0.2);
        }

        .wcu-icon-wrapper {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, rgba(157, 221, 143, 0.2), rgba(10, 80, 60, 0.15));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          color: #0a5c42;
          transition: all 0.5s ease;
          position: relative;
          z-index: 1;
          border: 2px solid rgba(157, 221, 143, 0.4);
        }

        .wcu-icon-wrapper::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #9ddd8f, #0a3d2e);
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .feature-card:hover .wcu-icon-wrapper::before {
          opacity: 1;
        }

        .feature-card:hover .wcu-icon-wrapper {
          color: white;
          transform: rotateY(360deg) scale(1.1);
          background: transparent;
          border-color: transparent;
        }

        .feature-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: #0a3d2e;
          margin-bottom: 15px;
          font-family: var(--font-heading);
          position: relative;
          z-index: 1;
        }

        .feature-card p {
          font-size: 15px;
          color: #000000;
          line-height: 1.7;
          margin: 0;
          position: relative;
          z-index: 1;
          font-family: var(--font-body);
        }

        /* Staggered Animation Delays */
        .feature-card:nth-child(1) { transition-delay: 0.1s; }
        .feature-card:nth-child(2) { transition-delay: 0.2s; }
        .feature-card:nth-child(3) { transition-delay: 0.3s; }
        .feature-card:nth-child(4) { transition-delay: 0.4s; }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 992px) {
          .wcu-features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 576px) {
          .wcu-features-grid {
            grid-template-columns: 1fr;
          }
          
          .wcu-section-header h2 {
            font-size: 32px;
          }
          
          .feature-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      <section className="why-choose-section">
        <div className="wcu-container">
          <div className="wcu-section-header">
            <h2>Why Choose Royal?</h2>
            <p>
              We provide more than just products – we deliver value, reliability, and trust 
              to businesses worldwide
            </p>
          </div>

          <div className="wcu-features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="wcu-icon-wrapper">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;