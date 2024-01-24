import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UserProgressContext from "../store/UserProgressContext";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form>
        <h2>Checkout</h2>
        <p>Total amount: {currencyFormatter.format(totalPrice)}</p>

        <Input label={"Full Name"} id={"full-name"} type="text" />
        <Input label={"Email Address"} id={"email"} type="email" />
        <Input label={"Street Address"} id={"street"} type="text" />
        <div className="control-row">
          <Input label={"Postal Code"} id={"postal-code"} type="text" />
          <Input label={"City"} id={"city"} type="text" />
        </div>
        <p className="modal-actions">
          <Button textOnly type="button" onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
