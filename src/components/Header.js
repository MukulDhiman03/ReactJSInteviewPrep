import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
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

  // subscribing to the store
  const cartItem = useSelector((store) => store.cart.items);
  console.log("Cartitem ", cartItem);

  const data = useContext(UserContext);
  console.log("Data is ", data);
  return (
    <div className="flex justify-between m-2 shadow-sm lg:bg-slate-300 sm:bg-neutral-500 bg-pink-400">
      <div className="logo-container">
        <img
          className="w-[20%]"
          src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"
          alt="Food Logo"
        />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 justify-around">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart- ({cartItem.length})</Link>
          </li>
          <button
            className="login-btn px-4"
            onClick={() => setIsLogin((isLogin) => !isLogin)}
          >
            {isLogin ? "Logout" : "Login"}
          </button>
          <li className="px-4 bg-black rounded text-white p-2">
            {data.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
