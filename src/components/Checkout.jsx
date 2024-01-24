import React, { useContext } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import { useHttp } from "../hooks/useHttp";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);
  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  const handleFinish = () => {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  };

  let actions = (
    <>
      <Button textOnly type="button" onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Ok</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total amount: {currencyFormatter.format(totalPrice)}</p>

        <Input label={"Full Name"} id={"name"} type="text" />
        <Input label={"Email Address"} id={"email"} type="email" />
        <Input label={"Street Address"} id={"street"} type="text" />
        <div className="control-row">
          <Input label={"Postal Code"} id={"postal-code"} type="text" />
          <Input label={"City"} id={"city"} type="text" />
        </div>
        {error && (
          <Error title={"Failed to submit order"} message={error.message} />
        )}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
