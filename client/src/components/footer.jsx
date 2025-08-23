import React from "react";
import "../styles/Footer.css";
import Twitter  from "../assets/icons/Twitter.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Tiktok from "../assets/icons/Tiktok.svg";
import Instagram  from "../assets/icons/Instagram.svg";
import Logo2 from "../assets/images/Logo2.svg";
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column brand">
        <h2><NavLink to="/"><img src={Logo2}></img></NavLink></h2>
        <p>
          Cyber is your trusted e-commerce destination for quality products.
        </p>
        {/* <div className="social-icons">
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
        </div> */}
      </div>

      <div className="footer-column mid">
        <h4>Customer Service</h4>
        <ul>
          <li className="fcm-li"><a to="/contact">Contact Us</a></li>
          <li className="fcm-li"><a to="/track-order">Track Order</a></li>
          <li className="fcm-li"><a to="/returns">Returns & Refunds</a></li>
          <li className="fcm-li"><a to="/shipping">Shipping Info</a></li>
          <li className="fcm-li"><a to="/faq">FAQs</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Information</h4>
        <ul>
          <li className="fcm-li"><a to="/about">About Us</a></li>
          <li className="fcm-li"><a to="/privacy-policy">Privacy Policy</a></li>
          <li className="fcm-li"><a to="/terms">Terms & Conditions</a></li>
          <li className="fcm-li"><a to="/payment-methods">Payment Methods</a></li>
          <li className="fcm-li"><a to="/careers">Careers</a></li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
