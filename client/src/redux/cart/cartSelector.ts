import { RootState } from "../rootReducer";

export const getCartItems = (state: RootState) => state.cart.cartItems;
export const getPrice = (state: RootState) => state.cart.totalPrice;
export const getQuantity = (state: RootState) => state.cart.totalCount;
