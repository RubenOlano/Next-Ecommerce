import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../types/types";
const initState: IUserState = {
  currentUser: null,
};

const userSlice = createSlice({
  initialState: initState,
  name: "user",
  reducers: {
    setCurrentUser(state, action: PayloadAction<any>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
