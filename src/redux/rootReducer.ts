import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
