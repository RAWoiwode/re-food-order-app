import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const index = state.items.findIndex((item) => item.id === action.item.id);
      const updatedAddItems = [...state.items];

      if (index > -1) {
        const existingItem = state.items[index];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedAddItems[index] = updatedItem;
      } else {
        updatedAddItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedAddItems };
    case "REMOVE_ITEM":
      const removeIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const item = state.items[removeIndex];
      const updatedRemoveItems = [...state.items];

      if (item.quantity === 1) {
        // const updatedItems = state.items.filter((item) => item.id !== payload);
        updatedRemoveItems.splice(removeIndex, 1);
      } else {
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        updatedRemoveItems[removeIndex] = updatedItem;
      }
      return { ...state, items: updatedRemoveItems };
    default:
      break;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const cartContext = {
    items: state.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
