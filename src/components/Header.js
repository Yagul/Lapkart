import React from "react";
import Cart from "./Cart";
import "./Header.css";
import {useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
const Header = () => {
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    dispatch(authActions.logOut());
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "40px" }}
            >
              Lapkart
            </h2>
          </li>
          <li>
            <Cart />
            <button onClick={clickHandler} className = "logout-btn">LogOut</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
