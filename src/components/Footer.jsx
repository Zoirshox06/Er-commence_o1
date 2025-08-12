import React from 'react';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Exclusive</h4>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="footer-section">
          <h4>Account</h4>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="footer-section">
          <h4>Quick Link</h4>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="footer-section">
          <h4>Download App</h4>
          <p>Save $3 with App New User Only</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Exclusive. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
