import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="mailto:contact@istalazaret.com" className="footer-link">contact@istalazaret.com</a>
            <a href="tel:+212123456789" className="footer-link">+212 123 456 789</a>
          </div>
          <div className="footer-socials">
            <a href="https://facebook.com" className="footer-social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="footer-social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="footer-social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ISTA Lazaret. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
