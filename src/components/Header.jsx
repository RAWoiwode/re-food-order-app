import React from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <h1 id="title">
        <img src={logo} alt="Logo" className="" />
        REACTFOOD
      </h1>
      <button>Cart</button>
    </header>
  );
};

export default Header;
