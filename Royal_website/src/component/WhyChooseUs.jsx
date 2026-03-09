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
          background: linear-gradient(135deg, var(--royal-deep-purple), #1A0F2E);
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
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 60%);
          animation: rotate 40s linear infinite;
        }

        .why-choose-section::after {
          content: '';
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 60%);
          animation: rotate 50s linear infinite reverse;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .section-header h2 {
          font-size: 42px;
          color: white;
          margin-bottom: 15px;
          font-weight: 800;
          font-family: var(--font-heading);
          position: relative;
          display: inline-block;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .section-header h2::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          border-radius: 2px;
        }

        .section-header p {
          font-size: 18px;
          color: rgb(255, 255, 255);
          max-width: 600px;
          margin: 25px auto 0;
          line-height: 1.6;
          font-family: var(--font-body);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 40px 25px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(212, 175, 55, 0.2);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: scale(0.9);
        }

        .feature-card.animate-scale-in {
          opacity: 1;
          transform: scale(1);
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(126, 42, 12, 0.1));
          opacity: 0;
          transition: opacity 0.4s;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--royal-gold);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .icon-wrapper {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(126, 42, 12, 0.2));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          color: var(--royal-gold);
          transition: all 0.5s ease;
          position: relative;
          z-index: 1;
          border: 2px solid transparent;
          background-origin: border-box;
          background-clip: content-box, border-box;
        }

        .icon-wrapper::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .feature-card:hover .icon-wrapper::before {
          opacity: 1;
        }

        .feature-card:hover .icon-wrapper {
          color: white;
          transform: rotateY(360deg) scale(1.1);
          background: transparent;
        }

        .feature-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          font-family: var(--font-heading);
          position: relative;
          z-index: 1;
        }

        .feature-card p {
          font-size: 15px;
          color: rgba(255,255,255,0.8);
          line-height: 1.7;
          margin: 0;
          position: relative;
          z-index: 1;
          font-family: var(--font-body);
        }

        /* Staggered Animation Delays */
        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
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
            padding: 30px 20px;
          }
        }
      `}</style>

      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Royal?</h2>
            <p>
              We provide more than just products – we deliver value, reliability, and trust 
              to businesses worldwide
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