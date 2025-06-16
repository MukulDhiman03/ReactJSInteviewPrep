import React, { useState } from "react";
import { Link } from "react-router-dom";
// anchor tag reload the whole page but not React Link tag(SPA)
/*

2 types of routing in web app

client side routing
 browser has all the pages on the client side only 

server side routing
 make a network call and the page is coming from server

*/

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"
          alt="Food Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => setIsLogin((isLogin) => !isLogin)}
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
