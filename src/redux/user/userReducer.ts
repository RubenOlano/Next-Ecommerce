import { createReducer } from "@reduxjs/toolkit";
import setCurrentUser from "./userActions";

interface IUserState {
  currentUser: any;
}

const initState: IUserState = {
  currentUser: null,
};

const userReducer = createReducer(initState, (builder) => {
  builder.addCase(setCurrentUser, (state, action) => {
    state.currentUser = action.payload;
  });
});

export default userReducer;
