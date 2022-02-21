import { createReducer } from "@reduxjs/toolkit";
import { ICartState } from "../../types/types";
import { addItem, clearItems, removeItem, toggleHidden } from "./cartActions";
import {
  addItemsToCart,
  clearItemsFromCart,
  removeItemFromCart,
} from "./cartUtil";

const initState: ICartState = {
  hidden: true,
  cartItems: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartReducer = createReducer(initState, (builder) => {
  builder
    .addCase(toggleHidden, (state) => {
      state.hidden = !state.hidden;
    })
    .addCase(addItem, (state, action) => {
      state.cartItems = addItemsToCart(state.cartItems, action.payload);
      state.totalCount++;
      state.totalPrice += action.payload.item.price;
    })
    .addCase(removeItem, (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
      state.totalCount--;
      state.totalPrice -= action.payload.item.price;
    })
    .addCase(clearItems, (state, action) => {
      state.cartItems = clearItemsFromCart(state.cartItems, action.payload);
      state.totalCount -= action.payload.quantity || 1;
      state.totalPrice -=
        (action.payload.quantity || 1) * action.payload.item.price;
    });
});

export default cartReducer;
