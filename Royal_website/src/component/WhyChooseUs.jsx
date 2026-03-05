import React from "react";
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

  return (
    <>
      <style>{`
        .why-choose-section {
          padding: 80px 0;
          background: #f9f9f9;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 42px;
          color: #000000;
          margin-bottom: 15px;
          font-weight: 700;
          position: relative;
          display: inline-block;
        }

        .section-header h2::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: #d4a531;
          border-radius: 2px;
        }

        .section-header p {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 20px auto 0;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .feature-card {
          background: white;
          padding: 35px 25px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(13, 92, 61, 0.1);
          border-color: #d4a531;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          background: #fef6e7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          color: #d4a531;
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-wrapper {
          background: #d4a531;
          color: white;
          transform: rotateY(180deg);
        }

        .feature-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 15px;
        }

        .feature-card p {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 992px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .section-header h2 {
            font-size: 32px;
          }
          
          .feature-card {
            padding: 25px 20px;
          }
        }
      `}</style>

      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose GlobalTrade?</h2>
            <p>
              We provide more than just products – we deliver value, reliability, and trust.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="icon-wrapper">
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