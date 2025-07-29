import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

import Twitter  from "../assets/icons/Twitter.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Tiktok from "../assets/icons/Tiktok.svg";
import Instagram  from "../assets/icons/Instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column brand">
        <h2><Link to="/">shopwise</Link></h2>
        <p>
          Shopwise is your trusted e-commerce destination for quality products.
        </p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={Tiktok} alt="Tiktok" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="footer-column mid">
        <h4>Customer Service</h4>
        <ul>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/track-order">Track Order</Link></li>
          <li><Link to="/returns">Returns & Refunds</Link></li>
          <li><Link to="/shipping">Shipping Info</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Information</h4>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/payment-methods">Payment Methods</Link></li>
          <li><Link to="/careers">Careers</Link></li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
