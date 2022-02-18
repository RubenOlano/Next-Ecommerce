import { createReducer } from "@reduxjs/toolkit";
import { ITEMS } from "../../components/Shop/shop.data";
import { addItem, toggleHidden } from "./cartActions";
import { addItemsToCart } from "./cartUtil";

export interface ICartItems {
  item: ITEMS;
  quantity?: number;
}

interface ICartState {
  hidden: boolean;
  cartItems: ICartItems[];
}

const initState: ICartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = createReducer(initState, (builder) => {
  builder
    .addCase(toggleHidden, (state) => {
      state.hidden = !state.hidden;
    })
    .addCase(addItem, (state, action) => {
      state.cartItems = addItemsToCart(state.cartItems, action.payload);
    });
});

export default cartReducer;
