import { createReducer } from "@reduxjs/toolkit";
import { IUserState } from "../../types/types";
import setCurrentUser from "./userActions";

const initState: IUserState = {
  currentUser: null,
};

const userReducer = createReducer(initState, (builder) => {
  builder.addCase(setCurrentUser, (state, action) => {
    state.currentUser = action.payload;
  });
});

export default userReducer;
