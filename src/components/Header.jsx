import React from "react";
import logo from "../assets/logo.jpg";
import Button from "../UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <h1 id="title">
        <img src={logo} alt="Logo" />
        REACTFOOD
      </h1>
      <nav>
        <Button textOnly>Cart</Button>
      </nav>
    </header>
  );
};

export default Header;
