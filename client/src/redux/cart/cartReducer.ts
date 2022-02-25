import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItems, ICartState } from "../../types/types";
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

const cartSlice = createSlice({
  initialState: initState,
  name: "cart",
  reducers: {
    toggleHidden(state) {
      state.hidden = !state.hidden;
    },
    addItem(state, action: PayloadAction<ICartItems>) {
      state.cartItems = addItemsToCart(state.cartItems, action.payload);
      state.totalCount++;
      state.totalPrice += action.payload.item.price;
    },
    removeItem(state, action: PayloadAction<ICartItems>) {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
      state.totalCount--;
      state.totalPrice -= action.payload.item.price;
    },
    clearItems(state, action: PayloadAction<ICartItems>) {
      state.cartItems = clearItemsFromCart(state.cartItems, action.payload);
      state.totalCount -= action.payload.quantity || 1;
      state.totalPrice -=
        (action.payload.quantity || 1) * action.payload.item.price;
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { toggleHidden, addItem, removeItem, clearItems, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
