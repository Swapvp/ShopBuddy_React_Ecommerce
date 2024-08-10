import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="shopbuddy" />
        <p>SHOPBUDDY</p>
      </div>
      <ul className="nav-menu">
        <li>SHOP</li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
      </ul>
      <div className="nav-login-cart">
        <button>LOGIN</button>
        <img src={cart_icon} alt="cart" />
      </div>
    </div>
  );
};

export default Navbar;
