import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="name" id="name" placeholder="Your Name" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <input
            type="password"
            name="password"
            id="passowrd"
            placeholder="Your Password"
          />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an accound <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="agree" id="agree" />
          <p>By Continuing I Agree to Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
