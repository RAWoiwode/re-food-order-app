import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalItems = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header id="main-header">
      <h1 id="title">
        <img src={logo} alt="Logo" />
        REACTFOOD
      </h1>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
