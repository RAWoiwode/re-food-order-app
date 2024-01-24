import React from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <h1 id="title">
        <img src={logo} alt="Logo" />
        REACTFOOD
      </h1>
      <nav>
        <button className="text-button">Cart</button>
      </nav>
    </header>
  );
};

export default Header;
