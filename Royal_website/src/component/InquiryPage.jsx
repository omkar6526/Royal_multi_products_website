import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";

function InquiryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // New State for loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    productName: "",
    quantity: "",
    message: ""
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const product = params.get('product');
    if (product) {
      setFormData(prev => ({ ...prev, productName: product }));
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.form-section, .sidebar-card, .feature-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // UPDATED HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Inquiry submitted successfully! We'll get back to you within 24 hours.");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          productName: "",
          quantity: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to send inquiry: ${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please make sure your server is running on port 5000.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        /* Keep your existing CSS styles here */
        .submit-btn:disabled {
            background: #ffffff;
            cursor: not-allowed;
            transform: none !important;
            box-shadow: none !important;
        }
        
        .inquiry-page {
          padding: 0px 0 0px;
          background: linear-gradient(135deg, #fff, var(--royal-cream));
          font-family: var(--font-body);
          min-height: 70vh;
          position: relative;
          overflow: hidden;
        }

        .inquiry-page::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
          animation: rotate 50s linear infinite;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
          position: relative;
          z-index: 1;
        }

         /* Breadcrumb */
        .breadcrumb {
          margin: 18px 0 20px;
          color: #000000;
          font-size: 14px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .breadcrumb a {
          color: var(--royal-deep-purple);
          text-decoration: none;
          transition: color 0.3s;
          position: relative;
          font-weight: 500; 
        }

        .breadcrumb a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          transition: width 0.3s;
        }

        .breadcrumb a:hover::after {
          width: 100%;
        }

        .breadcrumb span {
          color: #999;
          margin: 0 8px;
        }

        /* Page Header */
        .page-header {
          text-align: center;
          margin: 20px 0 50px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.2s;
        }

        .page-header h1 {
          font-size: 48px;
          color: var(--royal-deep-purple);
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 800;
        }

        .page-header h1::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          border-radius: 2px;
        }

        .page-header p {
          color: #120a0a;
          font-size: 18px;
          max-width: 700px;
          margin: 10px auto 0;
          line-height: 1.8;
          font-family: var(--font-body);
        }

        /* Main Grid Layout */
        .inquiry-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 20px;
          margin-bottom: 60px;
        }

        /* Form Section */
        .form-section {
          background: white;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          box-shadow: 0 20px 40px rgba(42, 26, 74, 0.08);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .form-section.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .form-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy), var(--royal-deep-purple));
        }

        .form-section h2 {
          font-size: 28px;
          color: var(--royal-deep-purple);
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 2px solid rgba(212, 175, 55, 0.3);
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: var(--royal-deep-purple);
          font-weight: 600;
          font-size: 14px;
          font-family: var(--font-body);
        }

        .required {
          color: #dc3545;
          margin-left: 3px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid #eaeaea;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.3s;
          background: white;
          font-family: var(--font-body);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--royal-gold);
          box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
        }

        .form-group input:hover,
        .form-group textarea:hover {
          border-color: var(--royal-burgundy);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border: none;
          padding: 16px 30px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
          margin-top: 20px;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }

        /* Sidebar Cards */
        .sidebar-card {
          background: white;
          border-radius: 24px;
          padding: 30px;
          margin-bottom: 30px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          box-shadow: 0 15px 30px rgba(42, 26, 74, 0.08);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .sidebar-card.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .sidebar-card:nth-child(1) { animation-delay: 0.3s; }
        .sidebar-card:nth-child(2) { animation-delay: 0.5s; }

        .benefits-card {
          background: linear-gradient(135deg, var(--royal-deep-purple), #1A0F2E);
          color: white;
        }

        .benefits-card h3 {
          color: white;
          border-bottom-color: rgba(212, 175, 55, 0.3);
        }

        .sidebar-card h3 {
          font-size: 20px;
          color: white;
          margin-bottom: 25px;
          padding-bottom: 12px;
          border-bottom: 2px solid rgba(212, 175, 55, 0.3);
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .benefits-list li {
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 15px;
          line-height: 1.6;
          transition: transform 0.3s;
        }

        .benefits-list li:hover {
          transform: translateX(5px);
        }

        .benefits-list i {
          font-style: normal;
          color: var(--royal-gold);
          font-weight: bold;
          background: rgb(255, 255, 255);
          width: 26px;
          height: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 16px;
        }

        .info-item {
          display: flex;
          gap: 18px;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          transition: transform 0.3s;
        }

        .info-item:hover {
          transform: translateX(5px);
        }

        .info-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        .info-icon {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
        }

        .info-content {
          flex: 1;
        }

        .info-content h4 {
          font-size: 15px;
          color: #666;
          margin-bottom: 5px;
          font-weight: 500;
        }

        .info-content p {
          color: var(--royal-deep-purple);
          font-weight: 600;
          font-size: 15px;
          line-height: 1.6;
        }

        .business-hours {
          margin-top: 10px;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-size: 14px;
          color: #666;
        }

        .hours-item span:last-child {
          color: var(--royal-deep-purple);
          font-weight: 600;
        }

        /* Quick Contact Buttons */
        .quick-contact {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }

        .quick-contact-btn {
          flex: 1;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border: none;
          padding: 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
        }

        .quick-contact-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .quick-contact-btn:hover::before {
          left: 100%;
        }

        .quick-contact-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
        }

        /* Why Choose Us Section */
        .why-choose-section {
          margin-top: 40px;
        }

        .why-choose-section h2 {
          font-size: 32px;
          color: var(--royal-deep-purple);
          text-align: center;
          margin-bottom: 50px;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-heading);
          font-weight: 800;
        }

        .why-choose-section h2::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
          border-radius: 2px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .feature-card {
          text-align: center;
          padding: 30px 20px;
          background: white;
          border-radius: 20px;
          transition: all 0.4s;
          border: 1px solid rgba(212, 175, 55, 0.2);
          box-shadow: 0 10px 25px rgba(42, 26, 74, 0.05);
          opacity: 0;
          transform: translateY(30px);
        }

        .feature-card.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-card:nth-child(1) { animation-delay: 0.6s; }
        .feature-card:nth-child(2) { animation-delay: 0.7s; }
        .feature-card:nth-child(3) { animation-delay: 0.8s; }
        .feature-card:nth-child(4) { animation-delay: 0.9s; }

        .feature-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(126, 42, 12, 0.15);
          border-color: var(--royal-gold);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
          margin: 0 auto 20px;
          transition: all 0.4s;
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
        }

        .feature-card:hover .feature-icon {
          transform: rotateY(360deg) scale(1.1);
          background: linear-gradient(135deg, var(--royal-burgundy), var(--royal-gold));
        }

        .feature-card h3 {
          font-size: 20px;
          color: var(--royal-deep-purple);
          margin-bottom: 12px;
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .feature-card p {
          color: #666;
          font-size: 14px;
          line-height: 1.7;
          font-family: var(--font-body);
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .inquiry-grid {
            grid-template-columns: 1fr;
          }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .page-header h1 {
            font-size: 36px;
          }
        }

        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .form-section {
            padding: 25px;
          }
          
          .page-header h1 {
            font-size: 28px;
          }

          .quick-contact {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="inquiry-page">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>&gt;</span> Contact & Inquiry
          </div>
{/* 
          <div className="page-header">
            <h1>Get in Touch</h1>
            {/* <p>
              Ready to start your order? Fill out the inquiry form and our team will get back to you 
              within 24 hours with pricing, availability, and shipping details.
            </p> 
          </div> */}

          <div className="inquiry-grid">
            <div className="form-section">
              <h2>Send Inquiry</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address <span className="required">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number <span className="required">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Product Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      placeholder="Enter product name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Quantity <span className="required">*</span></label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 100 pcs, 50 kg, 10 boxes"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                {/* Updated Submit Button with Loading State */}
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Inquiry"} <FaPaperPlane />
                </button>
              </form>
            </div>

            <div className="sidebar-column">
              <div className="sidebar-card benefits-card">
                <h3>Why Submit an Inquiry?</h3>
                <ul className="benefits-list">
                  <li><i>✓</i> Get custom pricing for bulk orders</li>
                  <li><i>✓</i> Receive product samples</li>
                  <li><i>✓</i> Discuss customization options</li>
                  <li><i>✓</i> Shipping and logistics support</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <div className="info-icon"><FaPhone /></div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <p>+91 9623358693</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><FaEnvelope /></div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>royal.shaikh231@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div className="info-content">
                    <h4>Address</h4>
                    <p>Nashik Pin 422011</p>
                  </div>
                </div>

                <div className="quick-contact">
                  <button className="quick-contact-btn" onClick={() => window.location.href = 'tel:+919623358693'}>
                    <FaPhone /> Call Now
                  </button>
                  <button className="quick-contact-btn" onClick={() => window.location.href = 'mailto:royal.shaikh231@gmail.com'}>
                    <FaEnvelope /> Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InquiryPage;