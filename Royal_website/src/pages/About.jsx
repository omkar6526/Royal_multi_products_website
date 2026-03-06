import React from "react";
import { FaHistory, FaEye, FaRocket, FaUsers } from "react-icons/fa";

function About() {
  const values = [
    {
      icon: <FaHistory size={30} />,
      title: "Our Heritage",
      description: "Founded on the principles of excellence, we have been serving the global market with premium trade solutions for over 15 years."
    },
    {
      icon: <FaEye size={30} />,
      title: "Our Vision",
      description: "To become the world's most trusted partner in global trade, known for our commitment to quality and ethical business practices."
    },
    {
      icon: <FaRocket size={30} />,
      title: "Our Mission",
      description: "Bridging the gap between quality manufacturers and global consumers through seamless logistics and transparent communication."
    },
    {
      icon: <FaUsers size={30} />,
      title: "Our Team",
      description: "A diverse group of industry experts dedicated to ensuring every client receives the 'Royal' treatment they deserve."
    }
  ];

  return (
    <>
      <style>{`
        .about-hero {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070');
          background-size: cover;
          background-position: center;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .about-hero h1 {
          font-size: 52px;
          margin-bottom: 10px;
        }

        .gold-text {
          color: #d4a531;
        }

        .about-content {
          padding: 80px 0;
          background: #ffffff;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-top: 50px;
        }

        .value-card {
          display: flex;
          gap: 20px;
          padding: 30px;
          border-left: 4px solid #d4a531;
          background: #f9f9f9;
          transition: 0.3s;
        }

        .value-card:hover {
          background: #fff;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .value-icon {
          color: #d4a531;
        }

        .value-info h3 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #000;
        }

        .value-info p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .values-grid { grid-template-columns: 1fr; }
          .about-hero h1 { font-size: 38px; }
        }
      `}</style>

      <div className="about-hero">
        <div className="container">
          <h1>Experience the <span className="gold-text">Royal</span> Standard</h1>
          <p>GlobalTrade: Excellence in every connection.</p>
        </div>
      </div>

      <section className="about-content">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h2 style={{fontSize: '36px'}}>Who We Are</h2>
            <p style={{maxWidth: '800px', margin: '20px auto', color: '#555', fontSize: '18px'}}>
              At Royal, we believe that business is built on trust. Since our inception, we have dedicated ourselves to sourcing only the finest products and delivering them with unmatched efficiency to our partners worldwide.
            </p>
          </div>

          <div className="values-grid">
            {values.map((item, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">{item.icon}</div>
                <div className="value-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;