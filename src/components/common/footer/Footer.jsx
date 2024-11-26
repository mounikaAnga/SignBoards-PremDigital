import React from 'react';
import './footer.css';  // Assuming your CSS file is named Footer.css
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // For email, phone, and location icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo">
            <img src="../images/logo5.jpg" alt="Company Logo" className="logo-image" />
          </div>
          <div className="address">
            <p><FaMapMarkerAlt />  Hyderabad, India</p>
          
            <p><FaEnvelope />admin@aspiresfs.com </p>
            <p><FaPhoneAlt /> +91 9030415566</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        

        {/* Follow Us */}
        <div className="follow-us">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
          </ul>
        </div>
        
      </div>
      <div className="social-handle">
    <p>@aspireprotectionservices</p>
  </div>
    </footer>
  );
}

export default Footer;
