import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emailAndPassword, info, IUserState } from "../../types/types";
const initState: IUserState = {
  currentUser: null,
  error: null,
};

const userSlice = createSlice({
  initialState: initState,
  name: "user",
  reducers: {
    setCurrentUser(state, action: PayloadAction<unknown>) {
      state.currentUser = action.payload;
    },
    GoogleSignIn(state) {
      return state;
    },
    EmailSignIn(state, _action: PayloadAction<emailAndPassword>) {
      _action;
      return state;
    },
    SignInSuccess(state, action: PayloadAction<unknown>) {
      state.error = null;
      state.currentUser = action.payload;
    },
    SignInFailure(state, action: PayloadAction<unknown>) {
      state.error = action.payload;
      console.log(action.payload);
    },
    checkUserSession(state) {
      return state;
    },
    signOut(state) {
      return state;
    },
    signOutSuccess(state) {
      state.currentUser = null;
      state.error = null;
    },
    signOutFailure(state, action: PayloadAction<unknown>) {
      state.error = action.payload;
    },
    signUp(state, _payload: PayloadAction<info>) {
      _payload;
      return state;
    },
    signUpSuccess(state) {
      return state;
    },
    signUpFailure(state, action: PayloadAction<unknown>) {
      state.error = action.payload;
    },
  },
});

export const {
  setCurrentUser,
  GoogleSignIn,
  EmailSignIn,
  SignInFailure,
  SignInSuccess,
  checkUserSession,
  signOut,
  signOutSuccess,
  signOutFailure,
  signUp,
  signUpFailure,
  signUpSuccess,
} = userSlice.actions;

export default userSlice.reducer;
