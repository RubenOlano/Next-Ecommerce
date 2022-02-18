import { createReducer } from "@reduxjs/toolkit";
import toggleHidden from "./cartActions";

interface ICartState {
  hidden: boolean;
}

const initState: ICartState = {
  hidden: true,
};

const cartReducer = createReducer(initState, (builder) => {
  builder.addCase(toggleHidden, (state) => {
    state.hidden = !state.hidden;
  });
});

export default cartReducer;
