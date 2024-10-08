import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>SHOPBUDDY</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram_icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="instagram_icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="instagram_icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2023 All rights reseved.</p>
      </div>
    </div>
  );
};

export default Footer;
