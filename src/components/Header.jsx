import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <header id="main-header">
      <h1 id="title">
        <img src={logo} alt="Logo" />
        REACTFOOD
      </h1>
      <nav>
        <Button textOnly>Cart ({totalItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
