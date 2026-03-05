// pages/InquiryPage.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function InquiryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    productName: "",
    quantity: "",
    message: ""
  });

  // Pre-fill product name from URL if coming from "Inquire Now"
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const product = params.get('product');
    if (product) {
      setFormData(prev => ({ ...prev, productName: product }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Inquiry submitted successfully! We'll get back to you within 24 hours.");
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      productName: "",
      quantity: "",
      message: ""
    });
  };

  return (
    <>
      <style>{`
        .inquiry-page {
          padding: 20px 0 50px;
          background: #fff;
          font-family: Arial, sans-serif;
          min-height: 70vh;
        }

        .container {
          width: 90%;
          margin: auto;
          max-width: 1200px;
        }

        /* Breadcrumb */
        .breadcrumb {
          margin: 20px 0;
          color: #666;
          font-size: 14px;
        }

        .breadcrumb a {
          color: #7E2A0C;  /* Matching your header color */
          text-decoration: none;
          transition: color 0.3s;
        }

        .breadcrumb a:hover {
          color: #d4a531;
        }

        .breadcrumb span {
          color: #999;
          margin: 0 5px;
        }

        /* Page Header */
        .page-header {
          text-align: center;
          margin: 30px 0 40px;
        }

        .page-header h1 {
          font-size: 36px;
          color: #7E2A0C;  /* Matching your header color */
          margin-bottom: 15px;
          position: relative;
          display: inline-block;
        }

        .page-header h1::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: #d4a531;
        }

        .page-header p {
          color: #666;
          font-size: 16px;
          max-width: 700px;
          margin: 25px auto 0;
          line-height: 1.6;
        }

        /* Main Grid Layout */
        .inquiry-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 30px;
          margin-bottom: 50px;
        }

        /* Form Section */
        .form-section {
          background: #f8f9fa;
          padding: 35px;
          border-radius: 12px;
          border: 1px solid #eaeaea;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .form-section h2 {
          font-size: 24px;
          color: #7E2A0C;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 2px solid #d4a531;
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
          color: #333;
          font-weight: 600;
          font-size: 14px;
        }

        .required {
          color: #dc3545;
          margin-left: 3px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          transition: all 0.3s;
          background: white;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #7E2A0C;
          box-shadow: 0 0 0 3px rgba(126, 42, 12, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: #7E2A0C;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
          margin-top: 10px;
          letter-spacing: 0.5px;
        }

        .submit-btn:hover {
          background: #d4a531;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(212, 165, 49, 0.3);
        }

        /* Sidebar Cards */
        .sidebar-card {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 25px;
          border: 1px solid #eaeaea;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .benefits-card {
          background: #7E2A0C;  /* Matching your header color */
          color: white;
        }

        .benefits-card h3 {
          color: white;
          border-bottom-color: #d4a531;
        }

        .sidebar-card h3 {
          font-size: 18px;
          color: #7E2A0C;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #d4a531;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .benefits-list li {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          line-height: 1.5;
        }

        .benefits-list i {
          font-style: normal;
          color: #d4a531;
          font-weight: bold;
          background: rgba(255,255,255,0.15);
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 16px;
        }

        .info-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eaeaea;
        }

        .info-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          background: #7E2A0C;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .info-content {
          flex: 1;
        }

        .info-content h4 {
          font-size: 14px;
          color: #666;
          margin-bottom: 5px;
          font-weight: 500;
        }

        .info-content p {
          color: #333;
          font-weight: 600;
          font-size: 14px;
          line-height: 1.5;
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
          color: #333;
          font-weight: 600;
        }

        /* Quick Contact Buttons */
        .quick-contact {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .quick-contact-btn {
          flex: 1;
          background: #7E2A0C;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .quick-contact-btn:hover {
          background: #d4a531;
        }

        /* Why Choose Us Section */
        .why-choose-section {
          margin-top: 30px;
        }

        .why-choose-section h2 {
          font-size: 28px;
          color: #7E2A0C;
          text-align: center;
          margin-bottom: 40px;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }

        .why-choose-section h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: #d4a531;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .feature-card {
          text-align: center;
          padding: 25px 20px;
          background: #f8f9fa;
          border-radius: 12px;
          transition: all 0.3s;
          border: 1px solid #eaeaea;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(126, 42, 12, 0.1);
          border-color: #d4a531;
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          background: #7E2A0C;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          margin: 0 auto 20px;
          transition: all 0.3s;
        }

        .feature-card:hover .feature-icon {
          background: #d4a531;
          transform: scale(1.1);
        }

        .feature-card h3 {
          font-size: 18px;
          color: #7E2A0C;
          margin-bottom: 10px;
        }

        .feature-card p {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .inquiry-grid {
            grid-template-columns: 1fr;
          }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
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
        }
      `}</style>

      <div className="inquiry-page">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>&gt;</span> Contact & Inquiry
          </div>

          {/* Page Header */}
          <div className="page-header">
            <h1>Get in Touch</h1>
            <p>
              Ready to start your order? Fill out the inquiry form and our team will get back to you 
              within 24 hours with pricing, availability, and shipping details.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="inquiry-grid">
            {/* Left Column - Form */}
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
                    placeholder="Tell us more about your requirements, specifications, or any questions..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              {/* Benefits Card */}
              <div className="sidebar-card benefits-card">
                <h3>Why Submit an Inquiry?</h3>
                <ul className="benefits-list">
                  <li><i>✓</i> Get custom pricing for bulk orders</li>
                  <li><i>✓</i> Receive product samples before ordering</li>
                  <li><i>✓</i> Discuss customization options</li>
                  <li><i>✓</i> Get shipping and logistics support</li>
                </ul>
              </div>

              {/* Contact Information Card */}
              <div className="sidebar-card">
                <h3>Contact Information</h3>
                
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <p>+91 9623358693</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>royal.shaikh231@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Address</h4>
                    <p>Shop No.1 Reliable corner, Pakhal road, opp. Hussaini Tower, Nashik Pin 422011</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div className="info-content">
                    <h4>Business Hours</h4>
                    <div className="business-hours">
                      <div className="hours-item">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="hours-item">
                        <span>Saturday:</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="hours-item">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="quick-contact">
                  <button className="quick-contact-btn" onClick={() => window.location.href = 'tel:+919623358693'}>
                    📞 Call Now
                  </button>
                  <button className="quick-contact-btn" onClick={() => window.location.href = 'mailto:royal.shaikh231@gmail.com'}>
                    ✉️ Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="why-choose-section">
            <h2>Why Choose Royal?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Export Quality</h3>
                <p>Premium products meeting international quality standards</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3>Worldwide Shipping</h3>
                <p>Reliable logistics to customers across the globe</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💎</div>
                <h3>Bulk Orders</h3>
                <p>Special pricing for wholesale and bulk purchases</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3>24/7 Support</h3>
                <p>Dedicated team to assist you with your inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InquiryPage;